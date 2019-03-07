function dwarfRollCall(dwarves) {
  let newStr = [];
  for (let i = 0; i < dwarves.length; i++){
    newStr.push(((i+1) +". " + dwarves[i] +" "));
  }
  return newStr.join("");
}

function summonCaptainPlanet(planeteerCalls){
  let string =[];
  for(let i=0; i < planeteerCalls.length; i++){
    let firstElement= planeteerCalls[i];
    firstElement= firstElement.toUpperCase()+"!";
    string.push(firstElement);
  }
  return string;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i<words.length; i++){
    if(words[i].length>4)
    return true;
  }
  return false;
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < cheese.length; i++ ){
    let firstcheese = cheese[i];
    for(let a = 0; a < foods.length; a++){
      let firstfoods = foods[a];
      if (firstcheese===firstfoods)
      return foods[a]
    }
  }
  return "no cheese!"
}
