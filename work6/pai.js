function calculate(){
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('num').value = pi(num)
    }
}
function factorrial(n){
    let sum = 1
