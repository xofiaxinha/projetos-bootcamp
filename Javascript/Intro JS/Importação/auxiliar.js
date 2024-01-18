const entrada = [2, 10, 29, 45, 12]
let i = 0;

function gets(){
    const num = entrada[i];
    i++;
    return num;
}
function print(valor){
    console.log(valor);
}
module.exports = {gets, print};
