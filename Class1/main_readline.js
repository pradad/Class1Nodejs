const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Which is your name?", (answer)=>{
      processname(answer)
  })

  function processname(nombre){
      console.log("nice to meet you " + nombre)
  }