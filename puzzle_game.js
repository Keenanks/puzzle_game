var gameport = document.getElementById("gameport");


var requestAnimationFrame = window.requestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.msRequestAnimationFrame;
							
var cancelAnimationFrame = window.cancelAnimationFrame ||
							window.mozCancelAnimationFrame ||
							window.webkitCancelAnimationFrame ||
							window.msCancelAnimationFrame;
							
var backgroundImg = PIXI.Texture.fromImage("sprites/backgroundExit.png");
var topDoorTexture = PIXI.Texture.fromImage("sprites/doorTop.png");
var botDoorTexture = PIXI.Texture.fromImage("sprites/doorBottom.png");


var renderer = PIXI.autoDetectRenderer({width:1080, height:400, backgroundColor: 0x330033});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
var background = new PIXI.Sprite(backgroundImg);
var topDoor1 = new PIXI.Sprite(topDoorTexture);
var topDoor2 = new PIXI.Sprite(topDoorTexture);
var botDoor1 = new PIXI.Sprite(botDoorTexture);
var botDoor2 = new PIXI.Sprite(botDoorTexture);

topDoor1.x = 100;
topDoor1.y = 0;

topDoor2.x = 500;
topDoor2.y = 0;

botDoor1.x = 100;
botDoor1.y = 370;

botDoor2.x = 500;
botDoor2.y = 370;


stage.addChild(background);
stage.addChild(topDoor1);
stage.addChild(topDoor2);
stage.addChild(botDoor1);
stage.addChild(botDoor2);




/*StandingStillImages*/
var frontSide = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale1.png");
var leftSide = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale4.png");
var backSide = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale7.png");
var rightSide = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale10.png");

/*Movement Images*/
var upFirstStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale8.png");
var upSecondStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale9.png");
var downFirstStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale2.png");
var downSecondStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale3.png");
var leftFirstStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale5.png");
var leftSecondStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale6.png");
var rightFirstStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale11.png");
var rightSecondStep = PIXI.Texture.fromFrame("sprites/finalGuyInSuit12upscale12.png");


var frames = [frontSide];


PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add("sprites/assets.json")
  .load(ready);


var key = 0;
var xPos = 50;
var yPos = 200;
var framesRemoved = false;
var framesAdded = false;

function ready(){
	
	player = new PIXI.AnimatedSprite(frames);
	player.scale.x = 1;
	player.scale.y = 1;
	player.animationSpeed = .1;
	player.position.x = xPos;
	player.position.y = yPos;
	player.play();
	
	stage.addChild(player);
	
	
	
	
	function removeFrames(){
		while( frames.length != 0 )
		{
			frames.pop();
			framesRemoved = true;
		}
	}
	
	function keydownEventHandler(e)
	{
		if(e.keyCode == 87)
		{
			key = 87;
			walkUp();
		}
		
		if(e.keyCode == 83)
		{
			key = 83;
			walkDown();
		}
		
		if(e.keyCode == 65)
		{
			key = 65;
			walkLeft();
		}
		
		if(e.keyCode == 68)
		{
			key = 68;
			walkRight();
		}
	}
	
	function walkUp()
	{
		if(!framesRemoved)
		{
			removeFrames();
		}
		if(!framesAdded)
		{
			frames.push(upFirstStep, upSecondStep);
			framesAdded = true;
		}
		
		yPos -= 6;
		createjs.Tween.get(player.position).to({y: yPos});
		
	}
	
	function walkDown()
	{
		if(!framesRemoved)
		{
			removeFrames();
		}
		if(!framesAdded)
		{
			frames.push(downFirstStep, downSecondStep);
			framesAdded = true;
		}
		
		player.y += 6;
		
	}
	
	function walkLeft()
	{
		if(!framesRemoved)
		{
			removeFrames();
		}
		if(!framesAdded)
		{
			frames.push(leftFirstStep, leftSecondStep);
			framesAdded = true;
		}
		
		player.x -= 6;
		
	}
	
	function walkRight()
	{
		if(!framesRemoved)
		{
			removeFrames();
		}
		if(!framesAdded)
		{
			frames.push(rightFirstStep, rightSecondStep);
			framesAdded = true;
		}
		
		player.x += 6;
		
	}
	
	function keyupEventHandler()
	{
		if(key == 87)
		{
			if(framesRemoved)
		{
			removeFrames();
			framesRemoved = false;
		}
		if(framesAdded)
		{
			frames.push(backSide);
			framesAdded = false;
		}
		}
		
		if(key == 83)
		{
			if(framesRemoved)
		{
			removeFrames();
			framesRemoved = false;
		}
		if(framesAdded)
		{
			frames.push(frontSide);
			framesAdded = false;
		}
		}
		
		if(key == 65)
		{
			if(framesRemoved)
		{
			removeFrames();
			framesRemoved = false;
		}
		if(framesAdded)
		{
			frames.push(leftSide);
			framesAdded = false;
		}
		}
		
		if(key == 68)
		{
			if(framesRemoved)
		{
			removeFrames();
			framesRemoved = false;
		}
		if(framesAdded)
		{
			frames.push(rightSide);
			framesAdded = false;
		}
		}
	}
	
	function animate()
	{
	document.addEventListener('keydown', keydownEventHandler);
	document.addEventListener('keyup', keyupEventHandler);
	requestAnimationFrame(animate);
	renderer.render(stage);
	}
	animate();
	

}






