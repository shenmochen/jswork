const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(express.static('.'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.post('/formBuilder', function (req, res) {
    console.log(req.body)
    res.send(req.body)
  })

  let ajaxData = []
  let count = 0
  app.post('/ajax', function (req, res) {
    let sno = req.body.sno
    let name = req.body.name
    let content = req.body.content
    let comment = {
      id: count + 1,
      sno: sno,
      user: name,
      time: new Date().toLocaleDateString(),
      content: content
    }
    console.log(comment)
    ajaxData.push(comment)
    count = ajaxData.length
    res.json(ajaxData)
  })

  app.get('/ajax', function (req, res) {
    let page = req.query.page?Math.max(req.query.page,1):1
    let size = 5
    let maxpage = Math.ceil(ajaxData.length/size)
    result={data:ajaxData.slice((page-1)*size,page*size),
      maxPage:maxpage
    }
    res.json(result)
  })
  
app.listen(8080, () => console.log('node express 服务器已启动，监听端口：8080'))

const openDefaultBrowser = function (url) {
  var exec = require('child_process').exec;
  switch (process.platform) {
    case "darwin":
      exec('open ' + url);
      break;
    case "win32":
      exec('start ' + url);
      break;
    default:
      exec('xdg-open', [url]);
  }
}
openDefaultBrowser('http://localhost:8080')