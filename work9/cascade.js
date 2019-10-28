var collegeSelectArr = ['电子与通信学院', '先进制造学院', '电气技术学院', '汽车学院', '计算机与设计学院', '外语商务学院', '经济贸易学院', '物流学院', '马克思主义学院']
var majorSelectArr = [
    ['电子', '电信', '通信', '嵌入', '物联'],
    ['数控', '模具', '机设', '机自'],
    ['机电', '电气', '建电', '建智', '空调', '光电', '机器人'],
    ['汽检', '汽配', '汽电', '汽营', '汽新'],
    ['网络', '电商', '软件', '工设', '广告', '室内'],
    ['商英', '应英', '日语', '旅管', 'TAFE旅管', '国际'],
    ['会计', '财管', '金融', '国贸'],
    ['物流', '物技', '工企', '营销', '报关', '连锁'],
    ['社工']
]
var classSelectArr = [
    [
        ["电子1801", "电子1802"],
        ["电信1803", "电信1804"],
        ["通信1805", "通信1806"],
        ["嵌入1807", "嵌入1808"],
        ["物联1809", "物联1810"]
    ],
    [
        ["数控1801", "数控1802", "数控1803", "数控1804", "数控1805"],
        ["模具1806", "模具1807", "模具1808", "模具1809"],
        ["机设1810", "机设1811", "机设1812", "机设1813"],
        ["机自1814", "机自1815"]
    ],
    [
        ["机电1801", "机电1802", "机电1803", "机电1804", "机电1805"],
        ["电气1806", "电气1807", "电气1808", "电气1809", "电气1810"],
        ["建电1811"],
        ["建智1812"],
        ["空调1813"],
        ["光电1814"],
        ["机器人1815", "机器人1816"]
    ],
    [
        ["汽检1801", "汽检1802", "汽检1803", "汽检1804", "汽检1805"],
        ["汽配1806", "汽配1807"],
        ["汽电1808", "汽电1809"],
        ["汽营1810", "汽营1811", "汽营1812"],
        ["汽新1813", "汽新1814"]
    ],
    [
        ["网络1901","网络1902","网络1903","网络1917"],
        ["电商1904","电商1918","电商1919"],
        ["软件1905","软件1906","软件1907","软件1908","软件1909"],
        ["工设1910","工设1911","工设1912"],
        ["广告1913","广告1914"],
        ["室内1915","室内1916"]
    ],
    [
        ["商英1801", "商英1802", "商英1803", "商英1804"],
        ["应英1805", "应英1806"],
        ["日语1807", "日语1808"],
        ["旅管1809", "旅管1810"],
        ["TAFE旅管1811", "TAFE旅管1812"],
        ["国际1813"]
    ],
    [
        ["会计1801", "会计1802", "会计1803", "会计1804"],
        ["财管1805", "财管1806"],
        ["金融1807", "金融1808", "金融1809"],
        ["国贸1810", "国贸1811", "国贸1812"]
    ],
    [
        ["物流1801", "物流1802", "物流1803", "物流1804"],
        ["物技1805"],
        ["工企1806"],
        ["营销1807", "营销1808"],
        ["报关1809", "报关1810"],
        ["连锁1811"]
    ],[
        ['社工1801']
    ]
];
function createOption (obj,data){
    for (var i in data) {
        var op = new Option(data[i], i);
        obj.options.add(op);
    }
}
var collegeSelect= document.getElementById('collegeSelect');
createOption(collegeSelect,collegeSelectArr);

var majorSelect=document.getElementById('majorSelect');
collegeSelect.onchange = function(){
    majorSelect.options.length = 0;
    createOption(majorSelect,majorSelectArr[collegeSelect.value]);
};

var classSelect = document.getElementById('classSelect');
majorSelect.onchange = function(){
    classSelect.options.length = 0;
    createOption(classSelect,classSelectArr[collegeSelect.value][majorSelect.value]);
    
};

collegeSelect.onchange = function(){
    majorSelect.options.length = 0;
    createOption(majorSelect,majorSelectArr[collegeSelect.value]);
    if (collegeSelect.value >=0){
        majorSelect.onchange();

    }else {
        classSelect.options.length = 0;
    }
};

var classSelect = document.getElementById('classSelect');
majorSelect.onchange = function() {
    classSelect.options.length = 0;
    createOption(classSelect, classSelectArr[collegeSelect.value][majorSelect.value]);
};


