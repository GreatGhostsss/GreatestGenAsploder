const words = document.querySelectorAll('span:not(#xjs)');
for(i=0; i< words.length; i++){ 
      words[i].innerText = words[i].innerText.replace(/beer/gi, "Pod fluid").replace(/Wife/gi, "She who is my wife").replace(/wormhole/gi, "space butthole").replace(/Holster/gi, "Cat Basket").replace(/gun/gi, "Dust-Buster").replace(/video conference/gi, "The Facetimes").replace(/sickbay/gi, "sixbay").replace(/borg/gi, "Borgs").replace(/dollars/gi, "scarves").replace(/conference/gi, "McLaughlin Group").replace(/enterprise/gi, "Entrepreneur");
  }