Canvas= document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

greencar_width= 75;
greencar_heigth= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x= 10;
greencar_y= 10;

function add() {
	backgroung_imagetag= new Image();
	backgroung_imagetag.onload= uploadBackground;
	backgroung_imagetag.src= background_image;

	greencar_imagetag= new Image();
	greencar_imagetag.onload= uploadgreencar;
	greencar_imagetag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroung_imagetag,0,0, Canvas.width, Canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imagetag,greencar_x,greencar_y,greencar_width,greencar_heigth)

	
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
	if(greencar_y>0){
		greencar_y= greencar_y - 10;
		uploadBackground()
		uploadgreencar()
	}	
	}
	


function down()
{
	if(greencar_y<600){
		greencar_y= greencar_y + 10;
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
 if(greencar_x>0){
	greencar_x= greencar_x - 10;
	uploadBackground()
	uploadgreencar()
 }
}

function right()
{
	if(greencar_x<700){
		greencar_x= greencar_x + 10;
		uploadBackground()
		uploadgreencar()
	}
}
