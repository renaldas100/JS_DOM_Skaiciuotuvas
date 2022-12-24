console.log('veikia');
/*
const firstNumber = document.getElementsByName('first');
console.log(firstNumber[0]);
console.log(firstNumber[0].value);


const firstN = firstNumber[0];
console.log(firstN);
console.log(firstN.value);
*/


// PIRMO SKAIČIAUS LANGELIO VERTĖS PAĖMIMAS, TIKRINIMAS

const firstNumber = document.querySelector('.first');
console.log(firstNumber);
console.log(firstNumber.value);

const error1 = document.querySelector('.error1')

let check1 = 0;
let check2 = 0;

function numberCheck(){
let skai = firstNumber.value
console.log(skai)
let skaiciai = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
let a = skai.length
let count = 0
for (j = 0; j < a; j++) {
    for (k = 0; k < skaiciai.length; k++) {
        if (skai[j] == skaiciai[k]) {
            count++
        }
    }
}
if (count == a && a != 0) {
    console.log(`Pirmo skaiciai teisingi`);
    error1.innerHTML ='';
    check1 = 1;
    // return check2
} 
if (count != a) {
    // console.log(`Rašykite tik skaičius`);
    error1.innerHTML ='*Rašykite tik skaičius';
    check1 = 0;
}
if (a == 0) {
    error1.innerHTML ='';
    check1 = 0;
}console.log(check1, check2);
}

firstNumber.addEventListener('keyup', numberCheck);


// ANTRO SKAIČIAUS LANGELIO VERTĖS PAĖMIMAS, TIKRINIMAS

const secondNumber = document.querySelector('.second');

const error3 = document.querySelector('.error3')

function numberCheck2(){
    let skai = secondNumber.value
    console.log(skai)
    let skaiciai = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
    let a = skai.length
    let count = 0
    for (j = 0; j < a; j++) {
        for (k = 0; k < skaiciai.length; k++) {
            if (skai[j] == skaiciai[k]) {
                count++
            }
        }
    }
    if (count == a && a != 0) {
        console.log(`Antro skaiciai teisingi`);
        error3.innerHTML ='';
        check2 = 1;
        // return check2
    } 
    if (count != a) {
        // console.log(`Rašykite tik skaičius`);
        error3.innerHTML ='*Rašykite tik skaičius';
        check2 = 0;
    }
    if (a == 0) {
        error3.innerHTML ='';
        check2 = 0;
    }console.log(check1, check2);
}
    
secondNumber.addEventListener('keyup', numberCheck2);

check = check1 + check2;
console.log(check1, check2);

// VEIKSMO VERTĖS PAĖMIMAS






const mainForm = document.forms.main;
// console.log(mainForm);
// Gaunam visų option kolekcija
const sarasas = mainForm.nameSelect;
// console.log(sarasas.options);


// gaunam indeksa parinkto option
const indeksas = sarasas.selectedIndex
console.log(indeksas);




// gaunam Value parinkto option
let verte = sarasas.value;
console.log(verte);

function veiksmas(){
}

mainForm.addEventListener('click', veiksmas);


// REZULTATO SKAIČIAVIMAS (MYGTUKO PASPAUDIMAS)

const button = document.querySelector('.button');
console.log(button);

function calc(){
    // let a = +firstNumber.value;
    // let b = verte;
    // let c = +secondNumber.value;
    // console.log(a);

if(indeksas == 1){
    a = +firstNumber.value * +secondNumber.value;
    // console.log(`${+firstNumber.value} ${verte} ${+secondNumber.value} = ${a}`);
    // return `${+firstNumber.value} ${verte} ${+secondNumber.value} = ${a}`;
}
if(indeksas == 2){
    a = +firstNumber.value / +secondNumber.value;
    // return firstNumber.value;
    // console.log(+firstNumber.value +verte +secondNumber.value);
    // console.log(+firstNumber.value);
    // console.log(typeof +firstNumber.value);
    // console.log(verte);
    // console.log(typeof +verte);
    // console.log(+secondNumber.value);
    // console.log('5599');
}
    const results = document.querySelector('.results');
    const newElement = document.createElement('div');
    newElement.innerHTML = `${+firstNumber.value} ${verte} ${+secondNumber.value} = ${a}`;
    results.prepend(newElement);


}
// console.log(calc())

button.addEventListener('click', calc);






// REZULTATO ĮTERPIMAS
/*
    const results = document.querySelector('.results');
    const newElement = document.createElement('div');
    newElement.innerHTML = calc();
    results.prepend(newElement);

*/


// MYGTUKO AKTYVAVIMAS


