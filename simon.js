let level=1;
let random = -1;
let score=0;
let start =-1;
let seq=[];
let i =0;
let over = -1;
$("body").keypress(function(){

	if(start==-1){
		start=1;
		$("h1").text("Game in Progress...")
	random = flash(level);
	seq.push(`box${random}`);
	}
	
});
$(".square").click(function(e){
		let id=e.target.id;
		animatePress(id);
			
				$(`#a${id.slice(id.length-1)}`)[0].play();
		
			if(i<seq.length){
				if(e.target.id===seq[i]){
					i++;
				}else{
					over =1;
				}
					
			}
			if(i==seq.length){
				setTimeout(function(){
			level++;
			score+=5;
			i=0;


			$("h2").text(`level ${level}`)
			$(".score").text(`Score:${score}`);
			 random = flash(level);
			 seq.push(`box${random}`);
			 console.log(seq);

			
		},1000);
			}
		 if(over==1){
			alert("gameOver");
			reset();
				}
		
	});
function flash(l){
	let random = Math.floor(Math.random()*4);
	$(`#box${random}`).fadeOut(200).fadeIn(200);

	$(`#a${random}`)[0].play();
	
	return random;
}
function reset(){
	seq=[];
	random=-1;
	level = 1;
	score=0;
	start=-1;
	over=-1;
	i=0;
	$("h2").text(`level ${level}`);
	$(".score").text("Score:0");
	$("h1").text("Press any Key to Restart");
}

function animatePress(id) {
 
  $("#" + id).addClass("pressed");
setTimeout(function () {
  $("#" + id).removeClass("pressed");
}, 100);
}