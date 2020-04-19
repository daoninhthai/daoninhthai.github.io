let slideImages =document.querySelectorAll(".slide");
let arrowleft =document.getElementById('arrow-left');
let arrowright=document.getElementById('arrow-right');
let current=0;
function reset() {
	for (var i =0; i < slideImages.length; i++) {
		slideImages[i].style.display='none';

	}}
function starSlider() {
	reset();
	slideImages[0].style.display='block';
}
function slideLeft(){
	reset();
	slideImages[current -1].style.display='block';
	current--;
}
arrowleft.addEventListener('click',function(){
	if(current==0){
		current=slideImages.length;
	}
	slideLeft();
})
function slideRight(){
	reset();
	slideImages[current +1].style.display='block';
	current++;
}
arrowright.addEventListener('click',function(){
	if(current==slideImages.length-1){
		current=-1;
	}
	slideRight();
})






