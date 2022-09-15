const form = document.querySelector("#mainForm");
const button = document.querySelector("#buttonGenerate")
const inputTechnology = document.querySelector("#inputTechnology") // IDEA Extract values from tech radar https://tech-radar.monterail.com/
const inputIndustry = document.querySelector("#inputIndustry")
//const industryDefault = 123 //TODO DEBUG

function generateTitles (tech,industry) {
    industry = industry || " In IT " // TODO debug why it's not passing the default value

    /* Cleanes up on every submit */
    const results = document.querySelector(".results");
    while (results.firstChild)  {
        results.removeChild(results.lastChild);
    }

    // Capitalizes input
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
        tech.value = capitalizeFirstLetter(tech.value);
        industry.value = capitalizeFirstLetter(industry.value);
    
    /* TODO CARLOS - If industry is NOT empty, add "In "
     industry.value = undefined ? industry.value.concat("In ") : null; 
    */
        
    /* List of titles */
    const titles = [`Top 10 Apps Created With ${tech.value} in 2022 ${industry.value}`,
    `How Safe Is Your ${tech.value} from [Threat] ${industry.value}?`,
    `Warning Signs That Your ${tech.value} Project is in Danger ${industry.value}`,
    `Can We Really Trust ${tech.value} Developers ${industry.value}?`,
    `The Shocking Truth About ${tech.value} ${industry.value}?`,
    `Don't Gamble with Your ${tech.value} Project: 7 Ways to Protect Yourself ${industry.value}?`,
    `Lies ${tech.value} Developers Like to Tell ${industry.value}?`,
    `13 Things Your ${tech.value} Developers Won’t Tell You ${industry.value}?`,
    `5 Little-Known Factors That Could Affect Your ${tech.value} Project ${industry.value}?`,
    `${tech.value} Alert: The New [Threat] Scam to Avoid ${industry.value}?`]

    /* Random number generator */
    function generateRandomIntegerInRange(min=0, max=titles.length-1) {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }

    // First run if field not empty
    if (tech.value != "")  {
        let inputTech = tech.value;
        let indexStorage = [];

       /* Generate each title */
        for (let index = 0; index <= 2; index++) {
            let number = generateRandomIntegerInRange();    
            let paragraph = document.createElement("p");
            paragraph.innerHTML = `${titles[number]} (${titles[number].length+inputTech.length} chars)`;
            paragraph.setAttribute("id",`result${index}`);
            document.querySelector(".results").appendChild(paragraph);
            titles.splice(number,1); // removes one index

        };

   }

   else {
       alert ("You must type a techology!");
   }
} 

button.addEventListener("click",()=>generateTitles(inputTechnology,inputIndustry))