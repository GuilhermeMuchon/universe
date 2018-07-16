//Setup canvas element.
var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.Width();
var canvasHeight = canvas.Height();

canvas.attr({
	height: canvasHeight,
	width: canvasWidth
});

//Quantos frames vai rodar
var frames = 150;

//Referência para os frames
var currentFrame = 0;

//Cria o ponto
var dot = {
	x: 10,
	y: 10,
	radius: 5
};

//Inicia a animação do frame conforme é definido o tempo
setTimeout(function()){
	window.requestAnimationFrame(moveDot);
}, 1000);

//Função para mover o ponto
function moveDot(){

	//Limpa o canvas
	context.clearRect(0, 0, canvasWidth, canvasHeight)

	//Define a pos x e y
	dot.x += 1;
	dot.y += 1;

	//Desenha o ponto
	drawDot(dot)

	//Passa o tempo para +1 frame
	currentFrame += 1;

	//Se chega no max de frames reseta
	if(currentFrame == frames) {
		currentFrame = 0;
		dot = {
			x: 10,
			y: 10,
			radius: 5
		};
	}

	//Chama a função novamente
	window.requestAnimationFrame(moveDot);
}

function drawDot(dot) {
	context.beginPath();
	context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
	context.fillStyle = '#FFF';
	context.fill();
}