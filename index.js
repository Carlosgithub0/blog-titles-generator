const form = document.querySelector("#mainForm");
const button = document.querySelector("#buttonGenerate")

/* moved const out of function so titles can be found outside of it */
const titles = [`Top 1 Apps Created With ${form.input.value} in 2022`,
`Top 2 Apps Created With ${form.input.value} in 2022`,
`Top 3 Apps Created With ${form.input.value} in 2022`]

/*function to generate random number including min and max */
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let titlePicker = generateRandomIntegerInRange(0,titles.length);

function generateTitles (form) {
    
    if (form.input.value != "")  {
        /* updated name from test to inputTech */
       let inputTech = form.input.value;
       
       /* old, safe version 
       let title1 = `Top 5 Apps Created With ${inputTech} in 2022`
       document.getElementById("result1").innerHTML = title1   
       */
       
       /* ? -> Why doesn't it get the $inputTech? */
       let title1 = titles[titlePicker]
       document.getElementById("result1").innerHTML = title1

   }
   else {
       alert ("You must type something!");
   }

} 

/* checks */
console.log("random " + titles.length)
console.log("random " + titlePicker)


button.addEventListener("click",()=>generateTitles(form))