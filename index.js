const form = document.querySelector("#mainForm");
const button = document.querySelector("#buttonGenerate")

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTitles (form) {
    
    const titles = [`Top 1 Apps Created With ${form.input.value} in 2022`,
    `Top 2 Apps Created With ${form.input.value} in 2022`,
    `Top 3 Apps Created With ${form.input.value} in 2022`]

    let titlePicker1 = generateRandomIntegerInRange(0,titles.length-1);
    
    let titlePicker2 = generateRandomIntegerInRange(0,titles.length-1);
    
    let titlePicker3 = generateRandomIntegerInRange(0,titles.length-1);


    if (form.input.value != "")  {
       let inputTech = form.input.value;
       
       let title1 = titles[titlePicker1];
       document.getElementById("result1").innerHTML = title1

       let title2 = titles[titlePicker2];
       document.getElementById("result2").innerHTML = title2

       let title3 = titles[titlePicker3];
       document.getElementById("result3").innerHTML = title3

   }
   else {
       alert ("You must type something!");
   }

   console.log("titles.lenght = " + titles.length)
   console.log("titlePicker = " + titlePicker1)
} 




button.addEventListener("click",()=>generateTitles(form))