function scuberGreetingForFeet(rideDistance){
  if (rideDistance <= 400) {
    return 'This one is on me!';
  }
  else if (rideDistance >= 400 && rideDistance < 2000) {
    return 'That will be twenty bucks.';
  }
  else if (rideDistance > 2000 && rideDistance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (rideDistance >= 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}