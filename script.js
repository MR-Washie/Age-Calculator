const dateEle = document.querySelector(".date");
const resultEle = document.querySelector(".result");
const btnEle = document.querySelector(".btn");


let currentDate = new Date();
const today = new Date().toISOString().split("T")[0];
dateEle.setAttribute('max' , today);

btnEle.addEventListener("click" , () => {
    resultEle.innerHTML = "";
    let dateEnter = new Date(dateEle.value)
    
    if(dateEle.value == "") {
        alert("Please Enter your birth date");
        resultEle.textContent = "";
    }
    else {
        finalAns(dateEnter)
    }
})

function finalAns(dateEnter) {
    d1 = dateEnter.getDate();
    m1 = dateEnter.getMonth();
    y1 = dateEnter.getFullYear();

    d2 = currentDate.getDate();
    m2 = currentDate.getMonth();
    y2 = currentDate.getFullYear();

    let d3;
    let m3;
    let y3;


    if(d2 >= d1){
        d3 = d2 - d1;
    } else {
        d3 = (d2 + 30) - d1;
        m2--;
    }

    if(m2 >= m1){
        m3 = m2 - m1;
    } else {
        m3 = (m2 + 12) - m1;
        y2--;
    }
    y3 = y2 - y1;

    resultEle.innerHTML = `your age is ${y3} years ${m3} months & ${d3} days`

    dateEle.value = "";
}
