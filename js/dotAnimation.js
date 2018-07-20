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
var dots = [{x: canvasWidth/2, y: canvasHeight/2, radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'},
{x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight), radius: Math.floor(Math.random() * 5), xMove: '+', yMove: '+'}];

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
			dots[i].x += 3;
		} else {
			dots[i].x -= 3;
		}

		if(dots[i].yMove == '+') {
			dots[i].y += 3;
		} else {
			dots[i].y -= 3;
		}

		//Desenha o ponto
		drawDot(dots[i])

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


		//Define o angulo que o ponto vai andar
		if (dots[i].y < 0 || dots[i].y > canvasHeight){
			dots[i].x = Math.floor(Math.random() * canvasWidth);
			dots[i].y = Math.floor(Math.random() * canvasHeight);
		} else if((dots[i].x + dots[i].radius) > (canvasWidth/2) 
			&& (dots[i].y + dots[i].radius) > (canvasHeight/2)){
			dots[i].xMove = '+'
			dots[i].yMove = '+'
		} else if((dots[i].x + dots[i].radius) > (canvasWidth/2) 
			&& (dots[i].y + dots[i].radius) < (canvasHeight/2)){
			dots[i].xMove = '+'
			dots[i].yMove = '-'
		} else if((dots[i].x + dots[i].radius) < (canvasWidth/2) 
			&& (dots[i].y + dots[i].radius) > (canvasHeight/2)){
			dots[i].xMove = '-'
			dots[i].yMove = '+'
		}else if((dots[i].x + dots[i].radius) < (canvasWidth/2) 
			&& (dots[i].y + dots[i].radius) < (canvasHeight/2)){
			dots[i].xMove = '-'
			dots[i].yMove = '-'
		}
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