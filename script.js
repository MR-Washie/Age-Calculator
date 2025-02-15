const dateEle = document.querySelector(".date");
const resultEle = document.querySelector(".result");
const btnEle = document.querySelector(".btn");


let currentDate = new Date();
const today = new Date().toISOString().split("T")[0];
dateEle.setAttribute('max' , today);

let d1 = currentDate.getDate();
let m1 = currentDate.getMonth() + 1;
let y1 = currentDate.getFullYear();



btnEle.addEventListener("click" , () => {
    resultEle.innerHTML = "";
    let dateEnter = new Date(dateEle.value)
    
    if(dateEle.value == "") {
        alert("Please Enter your birth date");
        resultEle.textContent = "";
    }
    else {
        finalAns(dateEnter);
        return;
    }
})

function finalAns(dateEnter) {
    let d2 = dateEnter.getDate();
    let m2 = dateEnter.getMonth() + 1;
    let y2 = dateEnter.getFullYear();

    let dd = d1 - d2;
    if(dd < 0) {
    dd = (d1 + 30) - d2;
    m1--;
    }

    let md = m1 - m2;
    if(md < 0) {
    md = (m1 + 12) - m2;
    y1--;
    }

    let yd = y1 - y2;

    resultEle.innerHTML = `Your age is ${yd} years ${md} months & ${dd} days`;
    dateEle.value = "";
    return;
}
