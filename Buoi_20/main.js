document.getElementById('button').addEventListener('click',loadText);
function loadText(){
	var xhr=new XMLHttpRequest();
	xhr.open('GET',"sample.txt",true);
	xhr.onload=function(){
		if(this.readyState==4 && this.status==200){
		
			document.getElementById("text").innerHTML =
			this.responseText;

		}
	}
	xhr.send();
}