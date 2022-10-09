// FIXME - field values not registered after clear button
const form = document.querySelector("#mainForm");
const buttonGenerate = document.querySelector("#buttonGenerate");
const buttonClear = document.querySelector('#buttonClear');
const buttonRandom = document.querySelector('#buttonRandom');
const inputTechnology = document.querySelector("#inputTechnology"); // IDEA Extract values from tech radar https://tech-radar.monterail.com/
const inputIndustry = document.querySelector("#inputIndustry");
const persona = document.querySelector("#inputPersona");
const hero = document.querySelector("#inputHero");
const threat = document.querySelector("#inputThreat");
const optionsTech = document.querySelector("#technologySelection");
const optionsIndustry = document.querySelector("#industrySelection");
const optionsHero = document.querySelector("#heroSelection");
const optionsThreat = document.querySelector("#threatSelection");


function generateTitles(tech, industry, persona, hero, threat) {
  industry = industry || " In IT "; // TODO debug why it's not passing the default value

  /* Cleans up on every submit + resets animations */
  const results = document.querySelector(".resultsList");
  while (results.firstChild) {
    results.removeChild(results.lastChild);
    void document.querySelector(".resultsList").offsetWidth;
    document.querySelector(".resultsList").classList.remove("fader");
  }

// If Industry is not empty, adds "In". Just once
  industry.value != "" && !industry.value.includes("In") ? industry.value = ` In ` + industry.value: null;

  // Capitalize inputs
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  tech.value = capitalizeFirstLetter(tech.value);
  industry.value = capitalizeFirstLetter(industry.value);

  // List of titles
  const titleListTech = [
    `Top ${genRanNum()} Apps Created With ${tech.value} in 2022${industry.value}`,
    `${genRanNum()} Warning Signs That Your ${tech.value} Project is in Danger${industry.value}`,
    `${genRanNum()} Things Your ${tech.value} Developers Won’t Tell You${industry.value}`,
    `${genRanNum()} Little-Known Factors That Could Affect Your ${tech.value} Project${industry.value}`,
    `${tech.value} Alert: The New ${threat.value} to Avoid ${industry.value}`,
    `Can’t Keep Up? ${genRanNum()} Ways to Simplify Your ${tech.value} Workload`, 
    `How to Take Charge of Your Day In ${tech.value}`,
    `${genRanNum()} Shortcuts for Completing Tedious ${tech.value} Tasks in Record Time`,
    `${genRanNum() * 5} Hacks: A Cheat Sheet for ${tech.value}${industry.value}`,
    `Use ${tech.value} Like ${hero.value}: ${genRanNum()} Ways`,
    `${hero.value+"'s"} Top ${genRanNum()} Tips for ${tech.value}${industry.value}`,
    `${genRanNum()} Secrets of Microsoft ${tech.value} Developers${industry.value}`,
    `Do You Make These ${genRanNum()} ${tech.value} Mistakes${industry.value}?`,
    `${genRanNum()} ${tech.value} Mistakes That Make You Look Like a Newbie`,
  ];

  const titleListBusiness = [
   `Get Rid of This ${tech.value} ${threat.value} Risk${industry.value} Once and for All`,
   `What This Case Study Can Teach Us About ${tech.value}${industry.value}`,
   `${genRanNum()} ${tech.value} Mistakes That Can Derail Your Project`,
   `The Shocking Truth About ${tech.value}${industry.value}`,
   `Don't Gamble with Your ${tech.value} Project: ${genRanNum()} Ways to Protect Yourself${industry.value}`,
   `Can We Really Trust ${tech.value} Developers${industry.value}?`,
   `Lies ${tech.value} Developers Like to Tell${industry.value}`,
   `How Safe Is Your ${tech.value} Stack From ${threat.value}${industry.value}?`,

  ];

  // Choose title list based on persona picker
  var titleListSelected = undefined;
    switch (persona.value) {
      case "0": titleListSelected = titleListBusiness;
        break;
      case "1": titleListSelected = titleListBusiness.concat(titleListTech);
        break;
      case "2": titleListSelected = titleListTech;
        break;
      default: break;
    }

  // Random number generator for titles
  function generateRandomIntegerInRange(min = 0, max = titleListSelected.length - 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Random number generator for list numbers
  function genRanNum(min = 3, max = 15) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // If tech field not empty 
  if (tech.value.length !== 0) {
    /* Fallbacks */ 
    hero.value.length == 0 ? hero.value = "Your Hero" : null; 
    threat.value.length == 0 ? threat.value = "Threat" : null;
    
    /* UX - Add helper text, play animations */
    buttonGenerate.innerHTML = "Generate More";
    buttonClear.style="display:block";
    buttonClear.classList.add("fader")
    buttonClear.classList.remove("disabled")
    inputTechnology.classList.remove("blinkMe");
    inputTechnology.style.animationPlayState = "paused";
    document.querySelector(".resultsList").classList.add("fader");
    document.querySelector(".resultsList").style.animationPlayState = "running";

    /* Generate each title */
    for (let index = 0; index <= 2; index++) {
     let number = generateRandomIntegerInRange(); // Create a random number for each title, that can be called back with genRanNum()
      
     /* Evaluate title length */
     let titleItemLength = titleListSelected[number].length;
     let titleItemLengthScore = undefined;
      switch (true) {
        case titleItemLength<=40: titleItemLengthScore = "⚠️ Short";
          break;
        case titleItemLength>40 && titleItemLength<60 : titleItemLengthScore = "✅ Optimal";
          break;
        case titleItemLength>=60 : titleItemLengthScore = "❗️ Long";
          break;
      }

      /* Version 1 -  Add titles and char count to a paragraph */
        // let paragraph = document.createElement("p");
        // paragraph.innerHTML = `${titleListSelected[number]} (${titleListSelected[number].length + inputTech.length} chars)`;
        // paragraph.setAttribute("id", `resultItem${index}`);
        // document.querySelector(".resultsList").appendChild(paragraph);

      /* Version 2 - Add titles and char count to a table */
        let titleItem = titleListSelected[number]; 
        let titleItemURL = titleItem.replace(" ","-");
        let tableElement = document.createElement("tr");
        tableElement.innerHTML = `<td><p>${titleItem}</p></td><td class="resultDetail"> ${titleItemLengthScore} (${titleItemLength} chars)</td><td><a class="resultDetail" href="https://www.google.com/search?q=${titleItem}" target="_blank">Search Google</a></td>`;
        tableElement.setAttribute("id", `resultItem${index}`);
        document.querySelector(".resultsList").appendChild(tableElement);
        
      /* Remove one index at the end of the for */
      titleListSelected.splice(number, 1);
    }
  } else {
    /* Validates empty Technology field with text and animations */
    inputTechnology.placeholder = "Hongry feed me techs ;(";
    inputTechnology.classList.remove("blinkMe");
    void inputTechnology.offsetWidth; // Necessary to restart animation
    inputTechnology.classList.add("blinkMe");
    inputTechnology.style.animationPlayState = "running";

  }
}



/* Random button */
function randomizeInput() {

  function genRanNumRange(min,max) {
    return Math.floor(Math.random() * max);
    
  }
  
  /* Fill inputs with content coming from datalist -> very proud of this block! */
  inputTechnology.value = optionsTech.options[genRanNumRange(0,optionsTech.options.length)].value;
  inputIndustry.value = optionsIndustry.options[genRanNumRange(0,optionsIndustry.options.length)].value;  
  inputHero.value = optionsHero.options[genRanNumRange(0,optionsHero.options.length)].value;  
  inputThreat.value = optionsThreat.options[genRanNumRange(0,optionsThreat.options.length)].value;  
  inputPersona.value = Math.floor(Math.random() * 3) // Generates random from 0 to 2

  buttonGenerate.classList.remove("disabled"); // TODO hotfix for enabling the button (ideally, the listener should notice it)
  buttonClear.classList.remove ("disabled");// TODO hotfix for enabling the button (ideally, the listener should notice it)
  buttonClear.style="display:block";

  


  }

/* Clear button - FIXME Make it disabled on ALL inputs */ 
function clearInputAll() {
  inputTechnology.value = "";
  inputIndustry.value = "";
  inputHero.value = "";
  inputThreat.value = "";
  inputPersona.value = "1";
  buttonClear.classList.add("disabled");
  buttonGenerate.classList.add("disabled");

}

/* Event listeners */
buttonGenerate.addEventListener("click", () =>
  generateTitles(inputTechnology, inputIndustry, inputPersona, inputHero, inputThreat)
);

buttonClear.addEventListener("click", () => 
  clearInputAll()
);

buttonRandom.addEventListener("click", () => 
  randomizeInput()
);

/* Listener on input Technology input to monitor when it's not empty */
document.querySelector("#inputTechnology").addEventListener('input', buttonGenerateEnable);

  function buttonGenerateEnable(){
    if (inputTechnology.value.length != 0){
      buttonGenerate.classList.remove("disabled");
      buttonClear.classList.add("disabled");
    }
    else {
      buttonGenerate.classList.add("disabled");
      buttonClear.classList.add("disabled");
    }
  }
