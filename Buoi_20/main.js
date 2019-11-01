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

/**
 * Debounce function to limit rapid invocations.
 * @param {Function} func - The function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

