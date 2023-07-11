function scuberGreetingForFeet(feet){
  let result;
  if (feet<=400){
    result = 'This one is on me!'
  }else if((feet > 2000) && (feet <= 2500)){
    result = 'I will gladly take your thirty bucks.'
  }else {
    result = 'No can do.'
  }

  return result
}

function ternaryCheckCity(city){
  let result = city === "NYC"? "Ok, sounds good.": "No go."
  // if (city === "NYC"){
  //   result = "Ok, sounds good."
  // }else{ 
  //   result = "No go."

  // }
  return result

}


function switchOnCharmFromTip(tip){
  let result;
  switch (tip){
    case "generous":
      result = 'Thank you so much.'
      break
    case 'not as generous':
      result = 'Thank you.'
      break
    default:
      result = 'Bye.'
  }


  // if (tip == "generous"){
  //   result = 'Thank you so much.'
  // }else{
  //   result = 'Thank you.'
  // }
    return result
}

console.log(switchOnCharmFromTip(
  'generous'
))
