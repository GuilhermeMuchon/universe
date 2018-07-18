document.addEventListener('DOMContentLoaded',domloaded,false);

function domloaded(){

//Cria o elemento canvas
var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();

canvas.attr({
	height: canvasHeight,
	width: canvasWidth
});

//Cria o ponto
var dot = {
	x: 1000,
	y: 500,
	radius: 5,
	xMove: '+', //Diz a direção que moverá o ponto
	yMove: '+'
};

drawDot(dot);

//Inicia a animação do frame conforme é definido o tempo
setTimeout(function(){
	window.requestAnimationFrame(moveDot);
}, 2500);

//Função para mover o ponto
function moveDot(){

	//Limpa o canvas
	context.clearRect(0, 0, canvasWidth, canvasHeight)

	if(dot.xMove == '+') {
		dot.x += 1;
	} else {
		dot.x -= 1;
	}

	if(dot.yMove == '+') {
		dot.y += 1;
	} else {
		dot.y -= 1;
	}

	//Desenha o ponto
	drawDot(dot)

	/*if( (dot.x + dot.radius) == canvasWidth ) {
		dot.xMove = '-';
	}
	if( (dot.x - dot.radius) == 0 ) {
		dot.xMove = '+';
	}
	if( (dot.y + dot.radius) == canvasHeight ) {
		dot.yMove = '-';
	}
	if( (dot.y - dot.radius) == 0 ) {
		dot.yMove = '+';
	}*/


	//Define o angulo que o ponto vai andar
	if((dot.x + dot.radius) > (canvasWidth/2) 
		&& (dot.y + dot.radius) > (canvasHeight/2)){
			dot.xMove = '+'
			dot.yMove = '+'
	} else if((dot.x + dot.radius) > (canvasWidth/2) 
		&& (dot.y + dot.radius) < (canvasHeight/2)){
			dot.xMove = '+'
			dot.yMove = '-'
	} else if((dot.x + dot.radius) < (canvasWidth/2) 
		&& (dot.y + dot.radius) > (canvasHeight/2)){
			dot.xMove = '-'
			dot.yMove = '+'
	}else if((dot.x + dot.radius) < (canvasWidth/2) 
		&& (dot.y + dot.radius) < (canvasHeight/2)){
			dot.xMove = '-'
			dot.yMove = '-'
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

}