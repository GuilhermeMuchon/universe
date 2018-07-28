document.addEventListener('DOMContentLoaded', domloaded, false);

function domloaded(){

//Cria o elemento canvas
var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
var quantidade = 150;
var cores = ['#7BC954', '#007EBF', '#DC3527', '#9AD9F2', '#FFFFFF', '#F5FF50'];

var objetivo = {x: canvasWidth/2, y: canvasHeight/2, radius: 0, aceleracaoX: 0, aceleracaoY: 0, color: '#DC3527'};

canvas.attr({
	height: canvasHeight,
	width: canvasWidth
});

//Cria o ponto
var dots = [];
createDot(quantidade);

//Desenha cada ponto da array
for( i = 0; i < dots.length; i++ ) {
	drawDot(dots[i]);
};
//drawDot(dot);

//Inicia a animação do frame conforme é definido o tempo
setTimeout(function(){
	window.requestAnimationFrame(moveDot);
}, 2500);

//Função para mover o ponto
function moveDot(){

	//Limpa o canvas
	context.clearRect(0, 0, canvasWidth, canvasHeight)

	for( i = 0; i < dots.length; i++ ) {
		if(dots[i].xMove == '+') {
			dots[i].x += dots[i].aceleracaoX;
			dots[i].radius += (10/(Math.random() * 3000 + 1000) * 2);
		} else {
			dots[i].x -= dots[i].aceleracaoX;
			dots[i].radius += (10/(Math.random() * 3000 + 1000) * 2);
		}

		if(dots[i].yMove == '+') {
			dots[i].y += dots[i].aceleracaoY;
			dots[i].radius += (10/(Math.random() * 3000 + 1000) * 2);
		} else {
			dots[i].y -= dots[i].aceleracaoY;
			dots[i].radius += (10/(Math.random() * 3000 + 1000) * 2);
		}

		//Desenha o ponto
		drawDot(dots[i])
		drawDot(objetivo)

		objetivo.radius += 0.00005;

		//Define o angulo que o ponto vai andar
		defineAngulo(dots[i]);

		//Faz o ponto rebater nos cantos da tela
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
	}

	//Chama a função novamente
	window.requestAnimationFrame(moveDot);
}

function defineAngulo(dots) {
	if (dots.y < 0 || dots.y > canvasHeight){
		dots.x = Math.floor(Math.random() * canvasWidth);
		dots.y = Math.floor(Math.random() * canvasHeight);
		dots.aceleracaoX = Math.floor(Math.random() * 5 + 1);
		dots.aceleracaoY = Math.floor(Math.random() * 5 + 1);
		dots.radius = 0;
		dots.color = cores[Math.floor(Math.random() * cores.length)];
	} else if((dots.x + dots.radius) > (canvasWidth/2) 
		&& (dots.y + dots.radius) > (canvasHeight/2)){
		dots.xMove = '+'
		dots.yMove = '+'
	} else if((dots.x + dots.radius) > (canvasWidth/2) 
		&& (dots.y + dots.radius) < (canvasHeight/2)){
		dots.xMove = '+'
		dots.yMove = '-'
	} else if((dots.x + dots.radius) < (canvasWidth/2) 
		&& (dots.y + dots.radius) > (canvasHeight/2)){
		dots.xMove = '-'
		dots.yMove = '+'
	}else if((dots.x + dots.radius) < (canvasWidth/2) 
		&& (dots.y + dots.radius) < (canvasHeight/2)){
		dots.xMove = '-'
		dots.yMove = '-'
	}
}

function drawDot(dot) {
	context.beginPath();
	context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
	context.fillStyle = dot.color;
	context.fill();
}

function createDot(amount) {
	for(i = 0; i < amount; i++) {
		dots[i] = {x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight),
			radius: 0, xMove: '+', yMove: '+', aceleracaoX: Math.floor(Math.random() * 3 + 2),
			aceleracaoY: Math.floor(Math.random() * 3 + 2), color: cores[Math.floor(Math.random() * cores.length)]};
	}
}

//Função que tentei utilizar para fazer a alterações das cores mas deu muito certo
/*function chooseColor() {
	var cor = Math.floor(Math.random() * 10);
	if(cor == 7) {
		return dots[i] = {color: '#7BC954'};
	} else if(cor == 8) {
		return dots[i] = {color: '#007EBF'};
	} else if(cor == 9) {
		return dots[i] = {color: '#DC3527'};
	} else if(cor == 10) {
		return dots[i] = {color: '#9AD9F2'};
	} else {
		return dots[i] = {color: '#FFFFFF'};
	}
}*/

}
