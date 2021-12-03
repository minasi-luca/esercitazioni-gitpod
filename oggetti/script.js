
const gallo = {
  specie: "gallo",
  razza: "andalusa",
  zampe: 2,
  verso: "chichirichi"
}
  const maiale = {
    specie: "maiale",
    razza: "scrofa",
    zampe: 4,
    verso: "ronfronf"
  };


  const mucca = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    verso: "muuuu"
    
  };


  function buttongallo (){
  document.getElementById("galloid").innerHTML = gallo.specie + " " + gallo.razza + " " + gallo.zampe + " " + gallo.verso
  }
  
  function buttonmucca (){
    document.getElementById("muccaid").innerHTML = mucca.specie + " " + mucca.razza + " " + mucca.zampe + " " + mucca.verso
    }
    function buttonmaiale (){
      document.getElementById("maialeid").innerHTML = maiale.specie + " " + maiale.razza + " " + maiale.zampe + " " + maiale.verso
      }
    