const form = document.querySelector("#mainForm");
const button = document.querySelector("#buttonGenerate")


function generateTitles (form) {
    /* Clean up */
    const results = document.querySelector(".results");
    while (results.firstChild)  {
        results.removeChild(results.lastChild);
    }

    /* List of titles */
    const titles = [`Top 1 Apps Created With ${form.input.value} in 2022`,
    `Top 2 Apps Created With ${form.input.value} in 2022`,
    `Top 3 Apps Created With ${form.input.value} in 2022`]

    /* Random generator */
    function generateRandomIntegerInRange(min=0, max=titles.length-1) {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
            
    }
    
    if (form.input.value != "")  {
       let inputTech = form.input.value;
    
       /* Generate each title */
        for (let index = 0; index <= 2; index++) {

            let paragraph = document.createElement("p");
            paragraph.setAttribute("id",`result${index}`);
            paragraph.innerHTML = titles[generateRandomIntegerInRange()];
            document.querySelector(".results").appendChild(paragraph)
        }

   }

   else {
       alert ("You must type something!");
   }
} 

button.addEventListener("click",()=>generateTitles(form))