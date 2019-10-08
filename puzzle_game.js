var gameport = document.getElementById("gameport");


var requestAnimationFrame = window.requestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.msRequestAnimationFrame;
							
var cancelAnimationFrame = window.cancelAnimationFrame ||
							window.mozCancelAnimationFrame ||
							window.webkitCancelAnimationFrame ||
							window.msCancelAnimationFrame;
						






/*game textures*/					
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
		neg.x = 0;
		neg.y = 0;
		
		
		
var one = new PIXI.Sprite(oneTexture);
		one.interactive = true;
		one.buttonMode = true;
		one.on("mousedown", (event) => {
			puzzle2String += "1";
			checkEqSolved();
		});
		one.x = 200;
		one.y = 0;	
		
		
		
var two = new PIXI.Sprite(twoTexture);
		two.interactive = true;
		two.buttonMode = true;
		two.on("mousedown", (event) => {
			puzzle2String += "2";
			checkEqSolved();
		});
two.x = 300;
two.y = 0;
	
		
		
var three = new PIXI.Sprite(threeTexture);
		three.interactive = true;
		three.buttonMode = true;
		three.on("mousedown", (event) => {
			puzzle2String += "3";
			checkEqSolved();
		});
		three.x = 400;
		three.y = 0;
		
		
		
var four = new PIXI.Sprite(fourTexture);
		four.interactive = true;
		four.buttonMode = true;
		four.on("mousedown", (event) => {
			puzzle2String += "4";
			checkEqSolved();
		});
		four.x = 500;
		four.y = 0;
		
		
var five = new PIXI.Sprite(fiveTexture);
		five.interactive = true;
		five.buttonMode = true;
		five.on("mousedown", (event) => {
			puzzle2String += "5";
			checkEqSolved();
		});
		five.x = 600;
		five.y = 0;
		
		
		
var six = new PIXI.Sprite(sixTexture);
		six.interactive = true;
		six.buttonMode = true;
		six.on("mousedown", (event) => {
			puzzle2String += "6";
			checkEqSolved();
		});
		six.x = 700;
		six.y = 0;
		
		
var seven = new PIXI.Sprite(sevenTexture);
		seven.interactive = true;
		seven.buttonMode = true;
		seven.on("mousedown", (event) => {
			puzzle2String += "7";
			checkEqSolved();
		});
		seven.x = 800;
		seven.y = 0;
		
		
var eight = new PIXI.Sprite(eightTexture);
		eight.interactive = true;
		eight.buttonMode = true;
		eight.on("mousedown", (event) => {
			puzzle2String += "8";
			checkEqSolved();
		});
		eight.x = 900;
		eight.y = 0;
		
		
		
var nine = new PIXI.Sprite(nineTexture);
		nine.interactive = true;
		nine.buttonMode = true;
		nine.on("mousedown", (event) => {
			puzzle2String += "9";
			checkEqSolved();
		});
		nine.x = 1000;
		nine.y = 0;
		
		
		
var zero = new PIXI.Sprite(zeroTexture);
		zero.interactive = true;
		zero.buttonMode = true;
		zero.on("mousedown", (event) => {
			puzzle2String += "0";
			checkEqSolved();
		});
		zero.x = 100;
		zero.y = 0;	
		
		
var reset = new PIXI.Sprite(resetTexture);
		reset.interactive = true;
		reset.buttonMode = true;
		reset.on("mousedown", (event) => {
			puzzle2String = "";
			checkEqSolved();
		});
		reset.x = 1000;
		reset.y = 150;
// end of number sprites









var tableTexture = PIXI.Texture.fromImage("sprites/tableWithInstructions.png");

var playTexture = PIXI.Texture.fromImage("sprites/playButton.png");

var creditsTexture = PIXI.Texture.fromImage("sprites/credits.png");

var instTexture = PIXI.Texture.fromImage("sprites/instr.png");

var backTextrue = PIXI.Texture.fromImage("sprites/backBtn.png");

var renderer = PIXI.autoDetectRenderer({width:1080, height:400, backgroundColor: 0x330033});

gameport.appendChild(renderer.view);








/*stage is parent container*/
var stage = new PIXI.Container();

/*child containers*/
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

//array that holds containers
var containerArr = [];

containerArr = [game, puzzleRoom1, puzzleRoom2, instruciton1, instruciton2, endScreen,
				creditsScreen, instructionScreen, titleScreen];
				
var containerIterator;

// iterate through array and add to stage container(the parent container)
for( containerIterator = 0; containerIterator < containerArr.length; containerIterator++)
{
	stage.addChild( containerArr[containerIterator] );
}





/* create sprites */
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




function resetPuzzleRoom1()
{
	puzzleRoom1.removeChild(leaveRoomDoor);
	puzzle1Solved = false;
	switch1State = 0;
	switch2State = 0;
	switch3State = 0;
	//reset textures
	switch1.texture = switchOffTexture;
	switch2.texture = switchOffTexture;
	switch3.texture = switchOffTexture;
	
	
}

function resetPuzzleRoom2()
{
	puzzleRoom2.removeChild(exitDoor2);
	puzzle2Solved = false;
	instruciton2.removeChild(text);
	//reset textures
	correctString = '';
	stringMade = '';
	
	
}





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
		
		
		
		
		
		
/*buttons for returning back to rooms*/
var backBtnRoom1 = new PIXI.Sprite(backTextrue);
		backBtnRoom1.interactive = true;
		backBtnRoom1.buttonMode = true;
		backBtnRoom1.on("mousedown", showRoom1);
		
		
		
var backBtnRoom2 = new PIXI.Sprite(backTextrue);
		backBtnRoom2.interactive = true;
		backBtnRoom2.buttonMode = true;
		backBtnRoom2.on("mousedown", showRoom2);
		




/*objects that show instructions on click*/
var tableGuide1 = new PIXI.Sprite(tableTexture);
		tableGuide1.interactive = true;
		tableGuide1.buttonMode = true;
		tableGuide1.on("mousedown", displayInstruction1);
		
		
		
var tableGuide2 = new PIXI.Sprite(tableTexture);
		tableGuide2.interactive = true;
		tableGuide2.buttonMode = true;
		tableGuide2.on("mousedown", displayInstruction2);
		
		
		
		
		
// switches the sprite on click to either one or two and checks the state and if it matches	
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
		
		
		
// switches the sprite on click to either one or two and checks the state and if it matches	
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
		
		
		
// switches the sprite on click to either one or two and checks the state and if it matches	
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


/*add sprites too containers*/
endScreen.addChild(endScreenBack);

var puzzleRoom2Sprites = [];
puzzleRoom2Sprites = [ secondRoomBack, tableGuide2, neg, zero, one, two, three,
						four, five, six, seven, eight, nine, reset ];
						
addChildToContainer(puzzleRoom2, puzzleRoom2Sprites);



var puzzleRoom1Sprites = [];
puzzleRoom1Sprites = [ roomBack, tableGuide1, switch1, switch2, switch3 ];
addChildToContainer( puzzleRoom1, puzzleRoom1Sprites );



var gameSprites = [];
gameSprites = [ background, topDoor1, topDoor2, botDoor1, botDoor2 ];
addChildToContainer( game, gameSprites );



function addChildToContainer( container, childArr )
{
	var iter;
	
	for( iter = 0; iter < childArr.length; iter++)
	{
		container.addChild( childArr[ iter ] );
	}
}




// add text to blank screen*/
text = new PIXI.Text('Made by Keenan Swanson',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});

// add text to container
creditsScreen.addChild(text);

/*add title screen sprites*/
var titleScreenSprites = [];
titleScreenSprites = [ titleBack, playBtn, creditsBtn, instrBtn, title, clown];
addChildToContainer( titleScreen , titleScreenSprites );


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



// array defaulted to single image of player facing you
var frames = [frontSide];


PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;


/*add and load assets to be used in the game*/
PIXI.loader
  .add("sprites/assets.json","sprites/assets2.json")
  .load(ready);

// variables in which the switches need to match
var switch1Result = 10,switch2Result = 10,switch3Result = 10;

// variables that show the switches current state
var switch1State = 0,switch2State = 0,switch3State = 0;

// saves the key pressed to put a still image in the correctly faced direction
var key = 0;

// the x and y position of the player
var xOrg = 50;
var yOrg = 200;
var xPos = xOrg;
var yPos = yOrg;

// stores a boolean if the frames have been removed
// 		so that frames don't keep getting removed when not needed
var framesRemoved = false;

// if frames have been added set to true so frames
// 		won't continually be added
var framesAdded = false;

// the state of completion of the puzzles (only 1 & 2 have
// 		been implemented)
var puzzle1Solved = false, puzzle2Solved = false;

// the state in which room the player is in
var inRoom1 = false, inMainRoom = true, inRoom2 = false;

// puzzle2String is what the player inputs and is compared
// 		to the correct string that receives its data from
//		the method create equation
var puzzle2String = '';
var correctString = '';

// function that returns a random number including the min and max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



// sets game screen visible
function playGame()
{
	titleScreen.visible = false;
	
	creditsScreen.visible = false;
	
	endScreen.visible = false;
	
	game.visible = true;
}



// sets credit screen visible
function displayCredits()
{
	titleScreen.visible = false;
	
	endScreen.visible = false;
	
	creditsScreen.addChild(backBtn);
	
	creditsScreen.visible = true;
	
	game.visible = false;
}



// sets instruction screen visible
function displayInstructions()
{
	var text = new PIXI.Text('WASD to move around\n\r To get back to the main menu press esc(this also restarts your game)\n\r Tables with note pages give a hint for the puzzle\n\r'
						,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
	
	titleScreen.visible = false;
	
	creditsScreen.visible = false;
	
	game.visible = false;
	
	endScreen.visible = false;
	
	instructionScreen.addChild(backBtn);
	
	instructionScreen.addChild(text);
	
	instructionScreen.visible = true;
}



// sets instruction1 screen visible
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



// stores the result of the created equation
var stringMade = '';

var textQuestion = new PIXI.Text(''
						,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
// sets instructions2 screen visible
function displayInstruction2()
{
	var eq = stringMade;
	textQuestion.text = 'Solve the equation( '+ eq +' ) by pressing the plates\n\r press the reset plate to clear your answer';
						
	titleScreen.visible = false;
	
	creditsScreen.visible = false;
	
	game.visible = false;
	
	endScreen.visible = false;
	
	puzzleRoom2.visible = false;
	
	instruciton2.addChild(backBtnRoom2);
	
	instruciton2.addChild(textQuestion);
	
	instruciton2.visible = true;
	
}



// set title screen visible
function displayTitle()
{
	titleScreen.visible = true;
	
	creditsScreen.visible = false;
	
	endScreen.visible = false;
	
	game.visible = false;
	
	instructionScreen.visible = false;
}



// sets room1 visible after reading instructions
function showRoom1()
{
	instruciton1.visible = false;
	
	puzzleRoom1.visible = true;
}



// sets room2 visible after reading instructionss
function showRoom2()
{
	instruciton2.visible = false;
	
	puzzleRoom2.visible = true;
}



// randomizes the state in which the switches should be
// 		to complete the puzzle
function randomizeSwitchResult()
{
	switch1Result = getRndInteger(1,2);
	
	switch2Result = getRndInteger(1,2);
	
	switch3Result = getRndInteger(1,2);
}



// checks if the state of the switches matches the expected
//		result
function checkSwitchState()
{
	if((switch1State == switch1Result && switch2State == switch2Result) 
		&& switch3State == switch3Result)
		{
			puzzleRoom1.addChild(leaveRoomDoor);
			
			puzzle1Solved = true;
		}
	else{
		try{
			puzzleRoom1.removeChild(leaveRoomDoor);
			puzzle1Solved = false;
		} catch(err){}
	}
	
}



// checks if the inputed result from puzzle 2 
//		matches the expected result of the equation
function checkEqSolved()
{
	if(puzzle2String == correctString)
	{
		puzzle2Solved = true;
		
		puzzleRoom2.addChild(exitDoor2);
	}
}



// creates a random addition or subtraction equation
//		using the random number generator(getRndInteger)
function createEquation()
{
	var firstInt = getRndInteger(1, 1000);
	
	var secondInt = getRndInteger(1, 1000);
	
	var result;
	
	var sign = getRndInteger(0,1);
	
	var str = '';
	
	// displays equation as a text using +
	if( sign == 0 )
	{
		str = ""+firstInt+" + "+ secondInt + " = ?"
		
		result = firstInt + secondInt;
		
		correctString = ''+result;
		
		return str;
	}
	
	// displays equation as a text using -
	else{
		str = ""+firstInt+" - "+ secondInt + " = ?"
		
		result = firstInt - secondInt;
		
		correctString = ''+result;
		
		return str;
	}
}

var footsteps;

// loads the sounds files
PIXI.loader
  .add("sprites/Footstep.mp3")
  .load(soundReady);
  
  
  
// assigns footsteps the sound aquired
function soundReady()
{
	footsteps = PIXI.audioManager.getAudio('sprites/Footstep.mp3');
}



// loads the files the have sprite sheets
function ready(){
	
	// creates a moving sprites by rotating through frames array
	player = new PIXI.AnimatedSprite(frames);
	
	player.scale.x = 1;
	
	player.scale.y = 1;
	
	player.animationSpeed = .1;
	
	
	player.position.x = xPos;
	
	player.position.y = yPos;
	
	player.play();
	
	game.addChild(player);
	
	
	// acts as a collision detector
	function checkPlayerPosition()
	{
		if(inMainRoom)
		{
			if((player.x >= 50 && player.x <= 300) && (player.y <= 0 && !puzzle1Solved))
			{
				randomizeSwitchResult();
				
				game.visible = false;
				
				puzzleRoom1.addChild(player);
				
				puzzleRoom1.visible = true;
				
				inMainRoom = false;
				
				inRoom1 = true;
			}
			
			if((player.x >= 50 && player.x <= 300) && (player.y >= 330 && !puzzle2Solved))
			{
				game.visible = false;
				
				stringMade = createEquation();
				
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
					
					inMainRoom = true;
					
					inRoom1 = false;
					
					inRoom2 = false;
				}
			}
			
			
		}
		
		if(inRoom1 && puzzle1Solved)
		{
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
	
	
	
	// removes images from array
	function removeFrames(){
		while( frames.length != 0 )
		{
			frames.pop();
			
			framesRemoved = true;
		}
	}
	
	
	
	// gets keyboard input
	function keydownEventHandler(e)
	{
		if(e.keyCode == 87 /*key w*/)
		{
			key = 87;
			walkUp();
		}
		
		// this returns you to the main menu and restarts the game	
		if(e.keyCode == 27 /*key esc*/)
		{
			key = 27;
			try{
				game.removeChild(exitDoor);
				
				endScreen.visible = false;
			}
			catch(err)
			{
				
			}
			
			if(inRoom1)
			{
				inRoom1 = false;
				
				xPos = xOrg;
				
				yPos = yOrg;
				
				puzzleRoom1.removeChild(player);
				
				puzzleRoom1.visible = false;
				
				resetPuzzleRoom1();
				
				resetPuzzleRoom2();
				
				game.addChild(player);
				
				player.x = xPos;
				
				player.y = yPos;
				
				titleScreen.visible = true;
				
				inMainRoom = true;
			}
			
			if( inMainRoom )
			{
				xPos = xOrg;
				
				yPos = yOrg;
				
				game.removeChild(player);
				
				game.visible = false;
				
				resetPuzzleRoom1();
				
				resetPuzzleRoom2();
				
				game.addChild(player);
				
				player.x = xPos;
				
				player.y = yPos;
				
				titleScreen.visible = true;
			}
			
			if( inRoom2 )
			{
				inRoom1 = false;
				
				xPos = xOrg;
				
				yPos = yOrg;
				
				puzzleRoom2.removeChild(player);
				
				puzzleRoom2.visible = false;
				
				resetPuzzleRoom1();
				
				resetPuzzleRoom2();
				
				game.addChild(player);
				
				player.x = xPos;
				
				player.y = yPos;
				
				titleScreen.visible = true;
				
				inMainRoom = true;
			}
		}
		
		if(e.keyCode == 83 /*key s*/)
		{
			key = 83;
			walkDown();
		}
		
		if(e.keyCode == 65 /*key a*/)
		{
			key = 65;
			walkLeft();
		}
		
		if(e.keyCode == 68/*key d*/)
		{
			key = 68;
			walkRight();
		}
	}
	
	
	
	/*moves the player up
		it also removes the current frames and adds 2 new images for
		the frames array to cycle through
	*/
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
		
		// prevents the player from leaving screen
		if( yPos - 12 > -30 )
		{
			yPos -= 12;
			
			createjs.Tween.get(player.position).to({y: yPos}, 100 , createjs.Ease.linear);
			
			footsteps.play();	
		}
		
	}
	
	
	
	/*moves the player down
		it also removes the current frames and adds 2 new images for
		the frames array to cycle through
	*/
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
		
		// prevents the player from leaving screen
		if( yPos + 12 < 350 )
		{
			yPos += 12;	
			
			createjs.Tween.get(player.position).to({y: yPos}, 100 , createjs.Ease.linear);
			
			footsteps.play();
		}
	}
	
	
	
	/*moves the player left
		it also removes the current frames and adds 2 new images for
		the frames array to cycle through
	*/
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
		
		// prevents the player from leaving screen
		if(xPos - 12 > -30)
		{
			xPos -= 12;	
			
			createjs.Tween.get(player.position).to({x: xPos}, 100 , createjs.Ease.linear);
			
			footsteps.play();
		}
	}
	
	
	
	/*moves the player right
		it also removes the current frames and adds 2 new images for
		the frames array to cycle through
	*/
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
		
		// prevents the player from leaving screen
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

