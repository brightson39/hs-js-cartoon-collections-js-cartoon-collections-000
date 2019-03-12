function dwarfRollCall(dwarves) {
  let rollCall = [];
  for (let i = 0; i < dwarves.length; i++){
    rollCall.push(((i+1) +". " + dwarves[i] +" "));
  }
  return rollCall.join("");
}

function summonCaptainPlanet(planeteerCalls){
  let call =[];
  for(let i=0; i < planeteerCalls.length; i++){
    let firstElement= planeteerCalls[i];
    firstElement= firstElement.toUpperCase()+"!";
    call.push(firstElement);
  }
  return call;
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
