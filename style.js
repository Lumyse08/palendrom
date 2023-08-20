function palendrom(mot) {
    mot = mot.toLowerCase(); 
    let inverse = mot.split('').reverse().join(''); 
    
    return mot === inverse;
  }
  
  let chwa = prompt("Antre yon chenn/chif: ");
  
  if (palendrom(chwa)) {
    console.log("Sa se yon palendwòm.");
  } else {
    console.log("sa se Pa se yon palendwòm.");
  }
  