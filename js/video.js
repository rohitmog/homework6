var video;

function getVid(){
	video = document.querySelector("#myVideo"); 

	play = document.querySelectorAll('.play')[0];
	pause = document.querySelectorAll('.pause')[0];

	temp = document.createElement('img');
	temp.src = "./brady.png";
	temp.type = "image";
	temp.alt = "hello world"
	temp.style.float = "left";
	play.appendChild(temp);

	temp = document.createElement('img');
	temp.src = "./rodgers.png";
	temp.type = "image";
	temp.alt = "hello world"
	temp.style.float = "left";
	pause.appendChild(temp);
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate * .8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 

  		console.log("Unmuted");
		video.muted = !video.muted;
		if (document.querySelector("#mute").innerHTML == 'Mute'){
			document.querySelector("#mute").innerHTML = 'Unmute';
			console.log("Unmuted");
		}
		else{
			document.querySelector("#mute").innerHTML = 'Mute';
			console.log("Muted");
		}
		

}

function changeVolume() {
	video.volume = document.querySelector("#volumeSlider").value * 0.01
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%' ;
	console.log("Volume is " + video.volume);
}
       

function gray() { 
	video.setAttribute('class','grayscale');
	console.log("In grayscale")
}

function color() {
	video.setAttribute('class','color');
	console.log("In color") 
}

