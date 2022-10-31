img = "";
NoseX = 0;
NoseY = 0 ;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();

	img = loadImage("mario05.jpg");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
// My Code
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game()


}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		NoseX = results[0].pose.rightWrist.x;
		NoseY = results[0].pose.rightWrist.y;
		
	}
}








