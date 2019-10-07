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
var room1Back = PIXI.Texture.fromImage("sprites/room1.png");
var room2Back = PIXI.Texture.fromImage("sprites/room1.png");
var topDoorTexture = PIXI.Texture.fromImage("sprites/doorTop.png");
var leftDoorTexture = PIXI.Texture.fromImage("sprites/doorLeftSide.png");
var rightDoorTexture = PIXI.Texture.fromImage("sprites/doorRightSide.png");
var botDoorTexture = PIXI.Texture.fromImage("sprites/doorBottom.png");
var switchOnTexture = PIXI.Texture.fromImage("sprites/switchOn.png");
var switchOffTexture = PIXI.Texture.fromImage("sprites/switchOff.png");
var endTexture = PIXI.Texture.fromImage("sprites/endScreen.png");
var titleTexture = PIXI.Texture.fromImage("sprites/title.png");
var resetTexture = PIXI.Texture.fromImage("sprites/reset.png");
var clownTexture = PIXI.Texture.fromImage("sprites/clown.png");

// Number images
var negTexture = PIXI.Texture.fromFrame("sprites/numbers1.png");
var zeroTexture = PIXI.Texture.fromFrame("sprites/numbers2.png");
var oneTexture = PIXI.Texture.fromFrame("sprites/numbers3.png");
var twoTexture = PIXI.Texture.fromFrame("sprites/numbers4.png");
var threeTexture = PIXI.Texture.fromFrame("sprites/numbers5.png");
var fourTexture = PIXI.Texture.fromFrame("sprites/numbers6.png");
var fiveTexture = PIXI.Texture.fromFrame("sprites/numbers7.png");
var sixTexture = PIXI.Texture.fromFrame("sprites/numbers8.png");
var sevenTexture = PIXI.Texture.fromFrame("sprites/numbers9.png");
var eightTexture = PIXI.Texture.fromFrame("sprites/numbers10.png");
var nineTexture = PIXI.Texture.fromFrame("sprites/numbers11.png");
// end of number images

// number sprites
var neg = new PIXI.Sprite(negTexture);
		neg.interactive = true;
		neg.buttonMode = true;
		neg.on("mousedown", (event) => {
			puzzle2String += "-";
			checkEqSolved();
		});
var one = new PIXI.Sprite(oneTexture);
		one.interactive = true;
		one.buttonMode = true;
		one.on("mousedown", (event) => {
			puzzle2String += "1";
			checkEqSolved();
		});
var two = new PIXI.Sprite(twoTexture);
		two.interactive = true;
		two.buttonMode = true;
		two.on("mousedown", (event) => {
			puzzle2String += "2";
			checkEqSolved();
		});
var three = new PIXI.Sprite(threeTexture);
		three.interactive = true;
		three.buttonMode = true;
		three.on("mousedown", (event) => {
			puzzle2String += "3";
			checkEqSolved();
		});
var four = new PIXI.Sprite(fourTexture);
		four.interactive = true;
		four.buttonMode = true;
		four.on("mousedown", (event) => {
			puzzle2String += "4";
			checkEqSolved();
		});
var five = new PIXI.Sprite(fiveTexture);
		five.interactive = true;
		five.buttonMode = true;
		five.on("mousedown", (event) => {
			puzzle2String += "5";
			checkEqSolved();
		});
var six = new PIXI.Sprite(sixTexture);
		six.interactive = true;
		six.buttonMode = true;
		six.on("mousedown", (event) => {
			puzzle2String += "6";
			checkEqSolved();
		});
var seven = new PIXI.Sprite(sevenTexture);
		seven.interactive = true;
		seven.buttonMode = true;
		seven.on("mousedown", (event) => {
			puzzle2String += "7";
			checkEqSolved();
		});
var eight = new PIXI.Sprite(eightTexture);
		eight.interactive = true;
		eight.buttonMode = true;
		eight.on("mousedown", (event) => {
			puzzle2String += "8";
			checkEqSolved();
		});
var nine = new PIXI.Sprite(nineTexture);
		nine.interactive = true;
		nine.buttonMode = true;
		nine.on("mousedown", (event) => {
			puzzle2String += "9";
			checkEqSolved();
		});
var zero = new PIXI.Sprite(zeroTexture);
		zero.interactive = true;
		zero.buttonMode = true;
		zero.on("mousedown", (event) => {
			puzzle2String += "0";
			checkEqSolved();
		});
var reset = new PIXI.Sprite(resetTexture);
		reset.interactive = true;
		reset.buttonMode = true;
		reset.on("mousedown", (event) => {
			puzzle2String = "";
			checkEqSolved();
		});
// end of number sprites

var tableTexture = PIXI.Texture.fromImage("sprites/tableWithInstructions.png");

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
var puzzleRoom1 = new PIXI.Container();
var puzzleRoom2 = new PIXI.Container();
var instruciton1 = new PIXI.Container();
var instruciton2 = new PIXI.Container();
var endScreen = new PIXI.Container();

/*initially have all screens except title screen not visible */
game.visible = false;
endScreen.visible = false;
puzzleRoom1.visible = false;
puzzleRoom2.visible = false;
creditsScreen.visible = false;
instructionScreen.visible = false;
instruciton1.visible = false;
instruciton2.visible = false;
titleScreen.visible = true;

/*add screens to parent container */
stage.addChild(game);
stage.addChild(puzzleRoom1);
stage.addChild(puzzleRoom2);
stage.addChild(instruciton1);
stage.addChild(instruciton2);
stage.addChild(endScreen);
stage.addChild(creditsScreen);
stage.addChild(instructionScreen);
stage.addChild(titleScreen);

var background = new PIXI.Sprite(backgroundImg);
var roomBack = new PIXI.Sprite(room1Back);
var secondRoomBack = new PIXI.Sprite(room2Back);
var endScreenBack = new PIXI.Sprite(endTexture);
var titleBack = new PIXI.Sprite(backgroundTitleImg);
var topDoor1 = new PIXI.Sprite(topDoorTexture);
var topDoor2 = new PIXI.Sprite(topDoorTexture);
var botDoor1 = new PIXI.Sprite(botDoorTexture);
var exitDoor2 = new PIXI.Sprite(botDoorTexture);
var botDoor2 = new PIXI.Sprite(botDoorTexture);
var leaveRoomDoor = new PIXI.Sprite(leftDoorTexture);
var exitDoor = new PIXI.Sprite(rightDoorTexture);
var title = new PIXI.Sprite(titleTexture);
var clown = new PIXI.Sprite(clownTexture);



/* buttons for navigating main screens*/
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
var backBtnRoom1 = new PIXI.Sprite(backTextrue);
		backBtnRoom1.interactive = true;
		backBtnRoom1.buttonMode = true;
		backBtnRoom1.on("mousedown", showRoom1);
var backBtnRoom2 = new PIXI.Sprite(backTextrue);
		backBtnRoom2.interactive = true;
		backBtnRoom2.buttonMode = true;
		backBtnRoom2.on("mousedown", showRoom2);
var tableGuide1 = new PIXI.Sprite(tableTexture);
		tableGuide1.interactive = true;
		tableGuide1.buttonMode = true;
		tableGuide1.on("mousedown", displayInstruction1);
		
var tableGuide2 = new PIXI.Sprite(tableTexture);
		tableGuide2.interactive = true;
		tableGuide2.buttonMode = true;
		tableGuide2.on("mousedown", displayInstruction2);
		
/* buttons for game for switches and instructions pages to go back*/
var switch1 = new PIXI.Sprite(switchOffTexture);
		switch1.interactive = true;
		switch1.buttonMode = true;
		switch1.on("mousedown", (event)=>{
			if(switch1.texture == switchOffTexture)
			{
				switch1.texture = switchOnTexture;
				switch1State = 1;
				checkSwitchState();
			}
	
			else
			{
				
				switch1.texture = switchOffTexture;
				switch1State = 2;
				checkSwitchState();
			}
		});
var switch2 = new PIXI.Sprite(switchOffTexture);
		switch2.interactive = true;
		switch2.buttonMode = true;
		switch2.on("mousedown", (event)=>{
			if(switch2.texture == switchOffTexture)
			{
				
				switch2.texture = switchOnTexture;
				switch2State = 1;
				checkSwitchState();
			}
	
			else
			{
				
				switch2.texture = switchOffTexture;
				switch2State = 2;
				checkSwitchState();
			}
		});
		
		
var switch3 = new PIXI.Sprite(switchOffTexture);
		switch3.interactive = true;
		switch3.buttonMode = true;
		switch3.on("mousedown", (event)=>{
			if(switch3.texture == switchOffTexture)
			{
				switch3.texture = switchOnTexture;
				switch3State = 1;
				checkSwitchState();
			}
	
			else
			{
				switch3.texture = switchOffTexture;
				switch3State = 2;
				checkSwitchState();
			}
		});
	

title.x = 10;
title.y = 10;
title.scale.x = .5;
title.scale.y = .5;	

topDoor1.x = 100;
topDoor1.y = 0;

topDoor2.x = 500;
topDoor2.y = 0;

botDoor1.x = 100;
botDoor1.y = 370;

botDoor2.x = 500;
botDoor2.y = 370;

exitDoor2.x = 100;
exitDoor2.y = 370;

playBtn.x = 500;
playBtn.y = 100;

creditsBtn.x = 500;
creditsBtn.y = 200;

instrBtn.x = 500;
instrBtn.y = 300;

backBtn.x = 800;
backBtn.y = 300;

backBtnRoom1.x = 800;
backBtnRoom1.y = 300;

backBtnRoom2.x = 800;
backBtnRoom2.y = 300;

tableGuide1.x = 500;
tableGuide1.y = 200;

tableGuide2.x = 500;
tableGuide2.y = 200;

switch1.x = 800;
switch1.y = 90;

switch2.x = 850;
switch2.y = 90;

switch3.x = 900;
switch3.y = 90;

leaveRoomDoor.x = 0;
leaveRoomDoor.y = 150;

exitDoor.x = 1050;
exitDoor.y = 150;

clown.x = 50
clown.y = 115;

// number locations
neg.x = 0;
neg.y = 0;
zero.x = 100;
zero.y = 0;
one.x = 200;
one.y = 0;
two.x = 300;
two.y = 0;
three.x = 400;
three.y = 0;
four.x = 500;
four.y = 0;
five.x = 600;
five.y = 0;
six.x = 700;
six.y = 0;
seven.x = 800;
seven.y = 0;
eight.x = 900;
eight.y = 0;
nine.x = 1000;
nine.y = 0;
reset.x = 1000;
reset.y = 150;
// end of number locations

endScreen.addChild(endScreenBack);

puzzleRoom2.addChild(secondRoomBack);
puzzleRoom2.addChild(tableGuide2);
puzzleRoom2.addChild(neg);
puzzleRoom2.addChild(zero);
puzzleRoom2.addChild(one);
puzzleRoom2.addChild(two);
puzzleRoom2.addChild(three);
puzzleRoom2.addChild(four);
puzzleRoom2.addChild(five);
puzzleRoom2.addChild(six);
puzzleRoom2.addChild(seven);
puzzleRoom2.addChild(eight);
puzzleRoom2.addChild(nine);
puzzleRoom2.addChild(reset);

puzzleRoom1.addChild(roomBack);
puzzleRoom1.addChild(tableGuide1);
puzzleRoom1.addChild(switch1);
puzzleRoom1.addChild(switch2);
puzzleRoom1.addChild(switch3);

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
titleScreen.addChild(title);
titleScreen.addChild(clown);


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
  .add("sprites/assets.json","sprites/assets2.json")
  .load(ready);

var switch1Result = 0,switch2Result = 0,switch3Result = 0;
var switch1State = 0,switch2State = 0,switch3State = 0;
var key = 0;
var xPos = 50;
var yPos = 200;
var framesRemoved = false;
var framesAdded = false;
var puzzle1Solved = false, puzzle2Solved = false;
var inRoom1 = false, inMainRoom = true, inRoom2 = false;
var puzzle2String = '';
var correctString = '';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function playGame()
{
	titleScreen.visible = false;
	creditsScreen.visible = false;
	endScreen.visible = false;
	game.visible = true;
}

function displayCredits()
{
	titleScreen.visible = false;
	endScreen.visible = false;
	creditsScreen.addChild(backBtn);
	creditsScreen.visible = true;
	game.visible = false;
}

function displayInstructions()
{
	var text = new PIXI.Text('WASD to move around\n\r To get back to the main menu press esc\n\r Tables with note pages give a hint for the puzzle\n\r'+
						'Press F5 to start the game over',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
	titleScreen.visible = false;
	creditsScreen.visible = false;
	game.visible = false;
	endScreen.visible = false;
	instructionScreen.addChild(backBtn);
	instructionScreen.addChild(text);
	instructionScreen.visible = true;
}

function displayInstruction1()
{
	var text = new PIXI.Text('The switches have to be in the right sequence to leave the room.'
						,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
	titleScreen.visible = false;
	creditsScreen.visible = false;
	game.visible = false;
	endScreen.visible = false;
	puzzleRoom1.visible = false;
	instruciton1.addChild(backBtnRoom1);
	instruciton1.addChild(text);
	instruciton1.visible = true;
}

var stringMade = createEquation();
function displayInstruction2()
{
	var eq = stringMade;
	var text = new PIXI.Text('Solve the equation( '+ eq +' ) by stepping on the plates\n\r step on reset plate to clear your answer'
						,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
	titleScreen.visible = false;
	creditsScreen.visible = false;
	game.visible = false;
	endScreen.visible = false;
	puzzleRoom2.visible = false;
	instruciton2.addChild(backBtnRoom2);
	instruciton2.addChild(text);
	instruciton2.visible = true;
}

function displayTitle()
{
	titleScreen.visible = true;
	creditsScreen.visible = false;
	endScreen.visible = false;
	game.visible = false;
	instructionScreen.visible = false;
}

function showRoom1()
{
	instruciton1.visible = false;
	puzzleRoom1.visible = true;
}

function showRoom2()
{
	instruciton2.visible = false;
	puzzleRoom2.visible = true;
}

function randomizeSwitchResult()
{
	switch1Result = getRndInteger(1,2);
	switch2Result = getRndInteger(1,2);
	switch3Result = getRndInteger(1,2);
}
randomizeSwitchResult();

function checkSwitchState()
{
	if((switch1State == switch1Result && switch2State == switch2Result) 
		&& switch3State == switch3Result)
		{
			puzzleRoom1.addChild(leaveRoomDoor);
			puzzle1Solved = true;
		}
}

function checkEqSolved()
{
	if(puzzle2String == correctString)
	{
		puzzle2Solved = true;
		puzzleRoom2.addChild(exitDoor2);
	}
}

function createEquation()
{
	var firstInt = getRndInteger(1, 1000);
	var secondInt = getRndInteger(1, 1000);
	var result;
	var sign = getRndInteger(0,1);
	var str = '';
	if( sign == 0 )
	{
		str = ""+firstInt+" + "+ secondInt + " = ?"
		result = firstInt + secondInt;
		correctString = ''+result;
		return str;
	}
	else{
		str = ""+firstInt+" - "+ secondInt + " = ?"
		result = firstInt - secondInt;
		correctString = ''+result;
		return str;
	}
}

var footsteps;

PIXI.loader
  .add("sprites/Footstep.mp3")
  .load(soundReady);
  
function soundReady()
{
	footsteps = PIXI.audioManager.getAudio('sprites/Footstep.mp3');
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
	
	
	function checkPlayerPosition()
	{
		if(inMainRoom)
		{
			if((player.x >= 50 && player.x <= 300) && player.y <= 0)
			{
				game.visible = false;
				puzzleRoom1.addChild(player);
				puzzleRoom1.visible = true;
				inMainRoom = false;
				inRoom1 = true;
			}
			
			if((player.x >= 50 && player.x <= 300) && player.y >= 330)
			{
				game.visible = false;
				puzzleRoom2.addChild(player);
				puzzleRoom2.visible = true;
				inMainRoom = false;
				inRoom1 = false;
				inRoom2 = true;
			}
			
			if(puzzle1Solved && puzzle2Solved)
			{
				game.addChild(exitDoor);
				if((player.y >= 50 && player.y <= 300) && player.x >= 1030)
				{
					
					endScreen.visible = true;
					game.visible = false;
					puzzleRoom1.visible = false;
					inMainRoom = false;
					inRoom1 = false;
				}
			}
			
			
		}
		
		if(inRoom1 && puzzle1Solved)
		{
			//checkCompletion();
			if((player.y >= 50 && player.y <= 300) && player.x <= 0)
			{
				game.addChild(player);
				game.visible = true;
				puzzleRoom1.visible = false;
				inMainRoom = true;
				inRoom1 = false;
			}
		}
		
		if(inRoom2 && puzzle2Solved)
		{
			//checkCompletion();
			if((player.x >= 50 && player.x <= 300) && player.y >= 330)
			{
				game.addChild(player);
				game.visible = true;
				puzzleRoom2.visible = false;
				inMainRoom = true;
				inRoom2 = false;
			}
		}
		
	}
	
	
	function checkCompletion()
	{
		if(puzzle1Solved && puzzle2Solved)
		{
			game.appendChild(exitDoor);
		}
	}
	
	
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
		
		checkPlayerPosition();
		
		if( yPos - 12 > -30 )
		{
			
			yPos -= 12;
			createjs.Tween.get(player.position).to({y: yPos}, 100 , createjs.Ease.linear);
			footsteps.play();
			
		
			
		}
		
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
		checkPlayerPosition();
		if( yPos + 12 < 350 )
		{
			yPos += 12;		
			createjs.Tween.get(player.position).to({y: yPos}, 100 , createjs.Ease.linear);
			footsteps.play();
		}
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
		checkPlayerPosition();
		
		if(xPos - 12 > -30)
		{
			xPos -= 12;		
			createjs.Tween.get(player.position).to({x: xPos}, 100 , createjs.Ease.linear);
			footsteps.play();
		}
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
		checkPlayerPosition();
		
		if(xPos + 12 < 1080 )
		{
			xPos += 12;		
			createjs.Tween.get(player.position).to({x: xPos}, 100 , createjs.Ease.linear);
			footsteps.play();
		}
		
	}
	
	/* removes frames when not moving so the player looks like they are 
		no longer in motion
	*/
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






