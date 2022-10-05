const form = document.querySelector("#mainForm");
const button = document.querySelector("#buttonGenerate");
const inputTechnology = document.querySelector("#inputTechnology"); // IDEA Extract values from tech radar https://tech-radar.monterail.com/
const inputIndustry = document.querySelector("#inputIndustry");
const persona = document.querySelector("#inputPersona");
const hero = document.querySelector("#inputHero");
const threat = document.querySelector("#inputThreat");

function generateTitles(tech, industry, persona, hero, threat) {
  industry = industry || " In IT "; // TODO debug why it's not passing the default value
  /* Fallbacks */;
  hero.value.length == 0 ? hero.value = "Your Hero" : null;
  threat.value.length == 0 ? threat.value = "Threat" : null;

  
  // Cleans up on every submit + resets animations
  const results = document.querySelector(".results");
  while (results.firstChild) {
    results.removeChild(results.lastChild);
    void document.querySelector(".results").offsetWidth;
    document.querySelector(".results").classList.remove("fader");
  }

  // Capitalizes input
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  tech.value = capitalizeFirstLetter(tech.value);
  industry.value = capitalizeFirstLetter(industry.value);

  // List of titles
  const titleListTech = [
    `Top ${genRanNum()} Apps Created With ${tech.value} in 2022 ${"In "+industry.value}`,
    `${genRanNum()} Warning Signs That Your ${tech.value} Project is in Danger ${"In "+industry.value}`,
    `${genRanNum()} Things Your ${tech.value} Developers Won’t Tell You ${"In "+industry.value}`,
    `${genRanNum()} Little-Known Factors That Could Affect Your ${tech.value} Project ${"In "+industry.value}`,
    `${tech.value} Alert: The New ${threat.value} to Avoid ${"In "+industry.value}`,
    `Can’t Keep Up? ${genRanNum()} Ways to Simplify Your ${tech.value} Workload`, 
    `How to Take Charge of Your Day In ${tech.value}`,
    `${genRanNum()} Shortcuts for Completing Tedious ${tech.value} Tasks in Record Time`,
    `${genRanNum() * 5} Hacks: A Cheat Sheet for ${tech.value} ${"In "+industry.value}`,
    `Use ${tech.value} Like ${hero.value}: ${genRanNum()} Ways`,
    `${hero.value+"'s"} Top ${genRanNum()} Tips for ${tech.value} ${"In "+industry.value}`,
    `${genRanNum()} Secrets of Microsoft ${tech.value} Developers ${"In "+industry.value}`,
    `Do You Make These ${genRanNum()} ${tech.value} Mistakes ${"In "+industry.value}?`,
    `${genRanNum()} ${tech.value} Mistakes That Make You Look Like a Newbie`,
  ];

  const titleListBusiness = [
   `Get Rid of This ${tech.value} ${threat.value} Risk ${"In "+industry.value} Once and for All`,
   `What This Case Study Can Teach Us About ${tech.value} ${"In "+industry.value}`,
   `${genRanNum()} ${tech.value} Mistakes That Can Derail Your Project`,
   `The Shocking Truth About ${tech.value}  ${"In "+industry.value}`,
   `Don't Gamble with Your ${tech.value} Project:  ${genRanNum()} Ways to Protect Yourself ${"In "+industry.value}`,
   `Can We Really Trust ${tech.value} Developers ${"In "+industry.value}?`,
   `Lies ${tech.value} Developers Like to Tell ${"In "+industry.value}`,
   `How Safe Is Your ${tech.value} Stack from ${threat.value} ${"In "+industry.value}?`,

  ];

  // Choose title list based on persona picker
  var titleListSelected = undefined;

  switch (persona.value) {
    case "0": titleListSelected = titleListBusiness;
    console.log('case 0');
        break;
    case "1": titleListSelected = titleListBusiness.concat(titleListTech);
    console.log('case 1');
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

  // First run if field not empty
  if (tech.value != "") {
    let inputTech = tech.value;
    let button = document.querySelector("#buttonGenerate");
    button.innerHTML = "Generate More";
    inputTechnology.classList.remove("blinkMe");
    inputTechnology.style.animationPlayState = "paused";
    document.querySelector(".results").classList.add("fader")
    document.querySelector(".results").style.animationPlayState = "running";

    // Generate each title
    for (let index = 0; index <= 2; index++) {
      let number = generateRandomIntegerInRange();
      let listNumber = genRanNum();
      let paragraph = document.createElement("p");
      paragraph.innerHTML = `${titleListSelected[number]} (${
      titleListSelected[number].length + inputTech.length} chars)`;
      paragraph.setAttribute("id", `result${index}`);
      document.querySelector(".results").appendChild(paragraph);
      titleListSelected.splice(number, 1); // removes one index
    }
  } else {
    // Validation for empty Technoloty field
    inputTechnology.placeholder = "Hongry feed me techs ;(";
    inputTechnology.classList.remove("blinkMe");
    void inputTechnology.offsetWidth;
    inputTechnology.classList.add("blinkMe");
    inputTechnology.style.animationPlayState = "running";

  }
}

button.addEventListener("click", () =>
  generateTitles(inputTechnology, inputIndustry, inputPersona, inputHero, inputThreat)
);
