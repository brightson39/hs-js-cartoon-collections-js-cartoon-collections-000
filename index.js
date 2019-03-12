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

function longPlaneteerCalls(characters) {
  for (let i = 0; i<characters.length; i++){
    if(characters[i].length>4)
    return true;
  }
  return false;
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < cheese.length; i++ ){
    let firstcheese = cheese[i];
    for(let i = 0; i < foods.length; i++){
      let firstfoods = foods[i];
      if (firstcheese===firstfoods)
      return foods[i]
    }
  }
  return "no cheese!"
}
