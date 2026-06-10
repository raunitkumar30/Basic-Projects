
let currentdisplay = '';
let display = document.querySelector(".item_res");

let container = document.querySelector(".container");
//note to refunction x and %

container.addEventListener("click", (event) => {
    let button = event.target;
    let value = button.getAttribute('data-value');
    if (value === "C") {
        currentdisplay = "";
        display.value = "";
    }
    else if (value === "=") {
        try {
            currentdisplay = eval(currentdisplay);
            display.value = currentdisplay;
        } catch {
            currentdisplay = "";
            display.value = "Error";
        }
    }
    else if (value === "%") {
        currentdisplay = eval(currentdisplay);
        display.value = currentdisplay / 100;
    }
    else if (value === "X") {
        currentdisplay = currentdisplay.slice(0, -1);
        display.value = currentdisplay;
    }
    else {
        currentdisplay += value;
        display.value = currentdisplay;
    }
});

// display.value = currentdisplay;

// function appendValue(value) {
//     currentdisplay += value;
//     display.value = currentdisplay;
// }

// let zero = document.querySelector("#item0");
// let one = document.querySelector("#item1");
// let two = document.querySelector("#item2");
// let three = document.querySelector("#item3");
// let four = document.querySelector("#item4");
// let five = document.querySelector("#item5");
// let six = document.querySelector("#item6");
// let seven = document.querySelector("#item7");
// let eight = document.querySelector("#item8");
// let nine = document.querySelector("#item9");
// let add = document.querySelector("#item_add");
// let sub = document.querySelector("#item_sub");
// let mul = document.querySelector("#item_mul");
// let div = document.querySelector("#item_div");
// let clr = document.querySelector("#item_clr");
// let equal = document.querySelector("#itemeql");

// zero.onclick = () => appendValue('0');
// one.onclick = () => appendValue('1');
// two.onclick = () => appendValue('2');
// three.onclick = () => appendValue('3');
// four.onclick = () => appendValue('4');
// five.onclick = () => appendValue('5');
// six.onclick = () => appendValue('6');
// seven.onclick = () => appendValue('7');
// eight.onclick = () => appendValue('8');
// nine.onclick = () => appendValue('9');
// add.onclick = () => appendValue('+');
// sub.onclick = () => appendValue('-');
// mul.onclick = () => appendValue('*');
// div.onclick = () => appendValue('/');
// clr.onclick = () => {
//     currentdisplay='';
//     display.value = currentdisplay;
// }
// equal.onclick = () => {
//     currentdisplay = eval(currentdisplay);
//     display.value = currentdisplay;
// }


// let one =document.querySelector("#item1");
// one.onclick = () => {
//     currentdisplay = currentdisplay + '1';
//     document.querySelector("#item_res").value = currentdisplay;
// }

// let two =document.querySelector("#item2");
// two.onclick = () => {
//     currentdisplay = currentdisplay + '2';
//     document.querySelector("#item_res").value = currentdisplay;
// }

// let three =document.querySelector("#item3");
// three.onclick = () => {
//     currentdisplay = currentdisplay + '3';
//     document.querySelector("#item_res").value = currentdisplay;
// }

// let four =document.querySelector("#item4");
// four.onclick = () => {
//     currentdisplay = currentdisplay + '4';
//     document.querySelector("#item_res").value = currentdisplay;
// }
