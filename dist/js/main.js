var slogan = ["Design And Beyond","Powerful Web Applications", "Creative Leverage", "Tomorrow's Problems, Today's Solutions"];


for (i = 1; i <= 5; ++i) {
    setDelay(i);
  }
  
  function setDelay(i) {
    setTimeout(function(){
      console.log("The slogan is now - " + slogan[i]);
    }, 1000);
}

/**
 * for (i = 1; i <= 5; ++i) {
  setDelay(i);
}

function setDelay(i) {
  setTimeout(function(){
    console.log("The slogan is now - " + slogan[i]);
  }, 1000);
}
 */