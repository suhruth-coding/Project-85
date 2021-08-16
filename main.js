var canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");
greencar_image_width = 75;
greencar_image_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_image_x = "5";
greencar_image_y = "225";
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_image_x, greencar_image_y, canvas.width, canvas.height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_image_y>=0){
		greencar_image_y = greencar_image_y - 10;
		console.log("When up arrow is pressed x="+greencar_image_x+"y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_image_y<=390){
		greencar_image_y = greencar_image_y + 10;
		console.log("When down arrow is pressed x="+greencar_image_x+"y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}
}
function left()
{
	if(greencar_image_x>=0){
		greencar_image_y = greencar_image_x - 10;
		console.log("When left arrow is pressed x="+greencar_image_x+"y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}
}
function right()
{
	if(greencar_image_x<=790){
		greencar_image_y = greencar_image_x + 10;
		console.log("When right arrow is pressed x="+greencar_image_x+"y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();	
	}
}