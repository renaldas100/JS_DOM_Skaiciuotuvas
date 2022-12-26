

// PIRMO SKAIČIAUS LANGELIO VERTĖS PAĖMIMAS, TIKRINIMAS

const firstNumber = document.querySelector('.first');
console.log(firstNumber);
console.log(firstNumber.value);

const buttonBasic = document.querySelector('.buttonBasic');
const results = document.querySelector('.resultsBasic')
const error1 = document.querySelector('.error1')

let check1 = 0;
let check2 = 0;
let check3 = 0;

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
    
} 
if (count != a) {
    // console.log(`Rašykite tik skaičius`);
    error1.innerHTML ='*Rašykite tik skaičius';
    check1 = 0;
}
if (a == 0) {
    error1.innerHTML ='';
    check1 = 0;
} return check1;
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
        check3 = 1;
       
    } 
    if (count != a) {
        // console.log(`Rašykite tik skaičius`);
        error3.innerHTML ='*Rašykite tik skaičius';
        check3 = 0;
    }
    if (a == 0) {
        error3.innerHTML ='';
        check3 = 0;
    } return check3;
}
    
secondNumber.addEventListener('keyup', numberCheck2);



// VEIKSMO VERTĖS PAĖMIMAS


const mainForm = document.forms.main;
// console.log(mainForm);
// Gaunam visų option kolekcija
const sarasas = mainForm.nameSelect;
// console.log(sarasas.options);


function veiksmas(){

// gaunam indeksa parinkto option
const index = sarasas.selectedIndex
console.log(index);
selectedIndex = index;
// return selectedIndex;

// gaunam Value parinkto option
let verte1 = sarasas.value;
console.log(verte1);
selectedVerte = verte1;

return selectedIndex, selectedVerte;
}

mainForm.addEventListener('click', veiksmas);


// REZULTATO SKAIČIAVIMAS (MYGTUKO PASPAUDIMAS)

const button = document.getElementById('itemID');
    console.log(button);


function calc(){
        
let indeksas = selectedIndex;
let verte = selectedVerte;

if(indeksas == 0){
    a = +firstNumber.value * +secondNumber.value;
}

if(indeksas == 1){
    a = +firstNumber.value * +secondNumber.value;
}

if(indeksas == 2){
    a = +firstNumber.value / +secondNumber.value;
}

if(indeksas == 3){
    a = +firstNumber.value + +secondNumber.value;
}

if(indeksas == 4){
    a = +firstNumber.value - +secondNumber.value;
}

// REZULTATO ĮTERPIMAS
    const results = document.querySelector('.results');
    const newElement = document.createElement('div');
    // newElement.innerHTML = `${+firstNumber.value} ${verte} ${+secondNumber.value} = ${a}`;
    newElement.innerHTML = `${+firstNumber.value} ${verte} ${+secondNumber.value} = ${(Math.round(((a))*(10**10))/(10**10))}`;
    // newElement.innerHTML = (Math.round(((0.121321 * 0.21245)+Number.EPSILON)*(10 ** 100))/(10 ** 100));
    // newElement.innerHTML = (Math.round(((0.121321 * 0.21245)+Number.EPSILON)*(10 ** 100))/(10 ** 100));
    // newElement.innerHTML = (Math.round(((a))*(10**10))/(10**10));

    results.prepend(newElement);
     
}

button.addEventListener('click', calc);



// MYGTUKO AKTYVAVIMAS

const inputArea = document.querySelector('.inputArea');

function cheking(){

if(selectedIndex == 0){
    check2 = 0;
} else check2 = 1;


    checkSum = check1 + check2 + check3;
    console.log(checkSum)

    if(checkSum < 3){
        buttonBasic.classList.remove('enabledButton');
        buttonBasic.classList.add('disabledButton');
        results.classList.remove('results');
    }
    if(checkSum == 3){
        buttonBasic.classList.add('enabledButton');
        buttonBasic.classList.remove('disabledButton');
        results.classList.add('results');
    }
   
}

inputArea.addEventListener('click', cheking);
inputArea.addEventListener('mouseover', cheking);
inputArea.addEventListener('keyup', cheking);