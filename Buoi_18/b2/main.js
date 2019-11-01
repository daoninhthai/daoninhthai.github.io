
let slideItems = document.querySelectorAll(".images");
function showImage(button) {
			var a=button.innerHTML;
			var b=document.getElementById("in").innerHTML =a;

		}
function toggleClass(item) {
  for (let item of slideItems) {
    item.classList.remove("active");
  }
  item.classList.add("active");
}
