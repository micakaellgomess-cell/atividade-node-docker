const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoDigitado) => {
  rl.question("Digite sua altura em metros: ", (alturaDigitada) => {

    const peso = Number(pesoDigitado);
    const altura = Number(alturaDigitada);

    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      console.log("Você está abaixo do peso.");
    } else if (imc < 25) {
      console.log("Você está com o peso normal.");
    } else {
      console.log("Você está acima do peso.");
    }

    rl.close();
  });
});