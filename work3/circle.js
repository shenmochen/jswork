var r = prompt('请输入圆的半径')
r= parseFloat(r)&&Number(r)
if (!isNaN(r)){
    var cir = 2 * Math.PI*r
    var area = Math.PI*r*r
    document.getElementById('r').value = r
    document.getElementById('cir').value = cir.toFixed(2)
    document.getElementById('area').value = area.toFixed(2)
}else{
    alert('请输入正确的数字')
}