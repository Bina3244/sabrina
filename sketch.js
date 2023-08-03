//Posição e Tamanho da bolinha
let xbolinha = 300;
let ybolinha =200;
let diametro = 25;

//Velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
}

function mostraBolinha() {
 fill ("gold")
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha() {
   xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
  //Colisão da bolinha
  if(xbolinha > width || xbolinha < 0) {
    velocidadeXbolinha *= -1;
  }
  if (ybolinha> height || ybolinha < 0) {
    velocidadeYbolinha *= -1;
  }
  }

function mostraRaquete() {
  fill("deeppink")
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, 15);
}
fill("deeppink");
rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, 15);

// Movimenta a minha raquete
function movimentaRaquete() {
  if (keysIsDown(UP_ARROW)) {
    yRaquete -=10;
  }
  if (keysIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

//Verifica a colisão entre a minha raquete e a bolinha
function verificaColisao() {
  if(
  xbolinha - raio < xRaquete + raqueteComprimento &&
    ybolinha - raio < yRaquete + raqueteAltura &&
    ybolinha + raio > yRaquete
  ){
    velocidadeXbolinha *= -1;
}
}