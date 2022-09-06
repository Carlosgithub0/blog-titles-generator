const form = document.querySelector("#mainForm");
const button = document.querySelector("#buttonGenerate")


function generateTitles (form) {
    /* Clean up */
    const results = document.querySelector(".results");
    while (results.firstChild)  {
        results.removeChild(results.lastChild);
    }

    /* List of titles */
    const titles = [`Top 10 Apps Created With ${form.input.value} in 2022`,
    `How Safe Is Your ${form.input.value} from [Threat]?`,
    `Warning Signs That Your ${form.input.value} Project Project is in Danger`,
    `Can We Really Trust ${form.input.value} Developers?`,
    `The Shocking Truth about ${form.input.value}`,
    `Don't Gamble with Your ${form.input.value} Project: 7 Ways to Protect Yourself`,
    `Lies ${form.input.value} Developers Like to Tell`,
    `13 Things Your ${form.input.value} Developers Won’t Tell You`,
    `5 Little-Known Factors That Could Affect Your ${form.input.value} Project`,
    `${form.input.value} Alert: The New [Threat] Scam to Avoid`]


    /* Random no generator */
    function generateRandomIntegerInRange(min=0, max=titles.length-1) {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }

    if (form.input.value != "")  {
       let inputTech = form.input.value;
       let indexStorage = [];
       

       /* Generate each title */
        for (let index = 0; index <= 2; index++) {
            let number = generateRandomIntegerInRange();

            if (indexStorage.length===0) {
                indexStorage.push(number);
            }
            else {

                if(!indexStorage.includes(number)){
                indexStorage.push(number);

                }
                else
                {         
                    while(indexStorage.includes(number))
                    {
                        number = generateRandomIntegerInRange();    
                    }      
                    indexStorage.push(number);

                }
            };

            /* To do - Debug duplicated list */
            // indexStorage.map(num => {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = titles[number];
            paragraph.setAttribute("id",`result${index}`);
            document.querySelector(".results").appendChild(paragraph);
            // });
        };

        console.log("indexStorage " + indexStorage); 

   }

   else {
       alert ("You must type something!");
   }
} 



button.addEventListener("click",()=>generateTitles(form))