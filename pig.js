const fs = require('fs')
const https = require('https')
const cheerio = require('cheerio')
const child_process = require('child_process')
const querystring = require('querystring')
const readline = require('readline')
const iconv = require('iconv-lite')
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants')
const rl = readline.createInterface({
    input:process.stdin
})
let buf=[]
rl.on('line',(line)=>{
    if(line.trim()=='') rl.close()
    buf.push(line)
})
rl.on('close',()=>{
    vcode = buf[0].trim()
    console.log('验证码是: ',vcode)
    login()
})
let {
    user,
    password
} = JSON.parse(require('fs').readFileSync('zf.json', 'utf8'))

let baseurl = 'https://jwc.gdmec.edu.cn'
let vcodeurl = 'https://jwc.gdmec.edu.cn/CheckCode.aspx'
let someurl = 'https://jwc.gdmec.edu.cn/xs_main.aspx?xh=07190527'
let __VIEWSTATE
let vcode, cookie
https.get(baseurl, (res) => {
    let chunks = []
    require,on('data', (chunk) => {
        chunks.push(chunk)
    })
})

https.get(vcodeurl, (res) => {
    cookie = res.headers['set-cookie']
    res.setEncoding('binary')
    let imgData =''
    res.on('data',(chunk)=>{
        imgData += chunk
    })
    res.on('end',()=>{
        fs.writeFile('vcode.png',imgData,'binary',(err)=>{
            if(err){
                console.log(err)
                return
            }
            if(process.platform=='win32')
                child_process.exec('vcode.png')
                else
                child_process.exec('open vcode.png')
        })
    })
})
function login(){
    let postData=querystring.encode({
        __VIEWSTATE,
        TextBox1:user,
        TextBox2:password,
        TextBox3:vcode,
        Button1:'',
        ReadioButtonList1:''
    })
    postData += '%D1%A7%C9%FA'
    console.log(postData)
    let opt = {
        host:'jwc.gdmec.edu.cn',
        port:443,
        path:'/default2.aspx',
        method:'post',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'content-type':Buffer.byteLength(postData),
            'Cookie':cookie
        }
    }
let req = https.request(opt,(res)=>{
    let chunks =[]
    res.on('data',(chunk)=>{
        chunks.push(chunk)
    })
    res.on('end',()=>{
        console.log(chunks.toString())
        geturl()
    })
})
   req.write(postData)
   req.end()
}
function geturl(){
    let refer = `https://jwc.gdmec.edu.cn/xs_main.aspx?xh=07190527`
    let opt={
        headers:{
            'Referer':refer,
            'Cookie':cookie,
        }
    }
    https.get(someurl,opt,(res)=>{
        let chunks=[]
        res.on('data',(chunk)=>{
            chunks.push(chunk)
        })
        res.on('end',()=>{
            let buffer = Buffer.concat(chunks)
            let str = iconv.decode(buffer,'gbk')
            let $ = cheerio.load(str)
            $('#DataGrid1>tbody>tr>td:nth-child(3)').map(function(el){
                console.log($(this).text())
            })
        })
    })
}