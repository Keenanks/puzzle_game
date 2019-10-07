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
var backgroundTitleImg = PIXI.Texture.fromImage("sprites/background.png");
var topDoorTexture = PIXI.Texture.fromImage("sprites/doorTop.png");
var botDoorTexture = PIXI.Texture.fromImage("sprites/doorBottom.png");

var playTexture = PIXI.Texture.fromImage("sprites/playButton.png");
var creditsTexture = PIXI.Texture.fromImage("sprites/credits.png");
var instTexture = PIXI.Texture.fromImage("sprites/instr.png");
var backTextrue = PIXI.Texture.fromImage("sprites/backBtn.png");


var renderer = PIXI.autoDetectRenderer({width:1080, height:400, backgroundColor: 0x330033});

gameport.appendChild(renderer.view);








/*create all the screens*/
var stage = new PIXI.Container();
var game = new PIXI.Container();
var titleScreen = new PIXI.Container();
var creditsScreen = new PIXI.Container();
var instructionScreen = new PIXI.Container();

/*initially have all screens except title screen not visible */
game.visible = false;
creditsScreen.visible = false;
instructionScreen.visible = false;
titleScreen.visible = true;

/*add screens to parent container */
stage.addChild(game);
stage.addChild(creditsScreen);
stage.addChild(instructionScreen);
stage.addChild(titleScreen);

var background = new PIXI.Sprite(backgroundImg);
var titleBack = new PIXI.Sprite(backgroundTitleImg);
var topDoor1 = new PIXI.Sprite(topDoorTexture);
var topDoor2 = new PIXI.Sprite(topDoorTexture);
var botDoor1 = new PIXI.Sprite(botDoorTexture);
var botDoor2 = new PIXI.Sprite(botDoorTexture);


var playBtn = new PIXI.Sprite(playTexture);
		playBtn.interactive = true;
		playBtn.buttonMode = true;
		playBtn.on("mousedown", playGame);
var creditsBtn = new PIXI.Sprite(creditsTexture);
		creditsBtn.interactive = true;
		creditsBtn.buttonMode = true;
		creditsBtn.on("mousedown", displayCredits);
var instrBtn = new PIXI.Sprite(instTexture);
		instrBtn.interactive = true;
		instrBtn.buttonMode = true;
		instrBtn.on("mousedown", displayInstructions);
var backBtn = new PIXI.Sprite(backTextrue);
		backBtn.interactive = true;
		backBtn.buttonMode = true;
		backBtn.on("mousedown", displayTitle);
		
		

topDoor1.x = 100;
topDoor1.y = 0;

topDoor2.x = 500;
topDoor2.y = 0;

botDoor1.x = 100;
botDoor1.y = 370;

botDoor2.x = 500;
botDoor2.y = 370;

playBtn.x = 500;
playBtn.y = 100;

creditsBtn.x = 500;
creditsBtn.y = 200;

instrBtn.x = 500;
instrBtn.y = 300;

backBtn.x = 800;
backBtn.y = 300;




game.addChild(background);
game.addChild(topDoor1);
game.addChild(topDoor2);
game.addChild(botDoor1);
game.addChild(botDoor2);

text = new PIXI.Text('Made by Keenan Swanson',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});

creditsScreen.addChild(text);

titleScreen.addChild(titleBack);
titleScreen.addChild(playBtn);
titleScreen.addChild(creditsBtn);
titleScreen.addChild(instrBtn);


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


function playGame()
{
	titleScreen.visible = false;
	creditsScreen.visible = false;
	game.visible = true;
}

function displayCredits()
{
	titleScreen.visible = false;
	creditsScreen.addChild(backBtn);
	creditsScreen.visible = true;
	game.visible = false;
}

function displayInstructions()
{
	var text = new PIXI.Text('WASD to move around',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
	titleScreen.visible = false;
	creditsScreen.visible = false;
	game.visible = false;
	instructionScreen.addChild(backBtn);
	instructionScreen.addChild(text);
	instructionScreen.visible = true;
}

function displayTitle()
{
	titleScreen.visible = true;
	creditsScreen.visible = false;
	game.visible = false;
	instructionScreen.visible = false;
}

function ready(){
	
	player = new PIXI.AnimatedSprite(frames);
	player.scale.x = 1;
	player.scale.y = 1;
	player.animationSpeed = .1;
	player.position.x = xPos;
	player.position.y = yPos;
	player.play();
	
	game.addChild(player);
	
	
	
	
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
		
		if(e.keyCode == 27)
		{
			key = 27;
			game.visible = false;
			titleScreen.visible = true;
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
		
		yPos -= 12;
		createjs.Tween.get(player.position).to({y: yPos}, 100 , createjs.Ease.linear);
		
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
		
		yPos += 12;
		createjs.Tween.get(player.position).to({y: yPos}, 100 , createjs.Ease.linear);
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
		
		xPos -= 12;
		createjs.Tween.get(player.position).to({x: xPos}, 100 , createjs.Ease.linear);
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
		
		xPos += 12;
		createjs.Tween.get(player.position).to({x: xPos}, 100 , createjs.Ease.linear);
		
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






