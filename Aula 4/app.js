var min = 1;
var max = 10;
var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

var num;

while (true) {
  num = Number(
    prompt(
      "Digite um Número de 1 até 10 e tente acertar qual o número que a maquina escolheu"
    )
  );

  if (num === numeroAleatorio) {
    console.log("Parabens vc acertou o numero");
    break;
  } else {
    continue;
  }
}
