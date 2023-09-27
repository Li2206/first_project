function minute(a,b) {
    let reusltat =a-b; 
    return reusltat;
}

function calcul(a, b, operator) {
    if (operator == '+') return addition(a, b);
    if (operator == '-') return minute(a, b);

}
console.log(calcul(3,10,'-'));