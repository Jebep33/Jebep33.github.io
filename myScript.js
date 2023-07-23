/*windows.onload = () => {
	if(localStorage.getItem('content')) {
		document.querySelector('.content').innerText = localStorage.getItem('content');
  }
}*/


let editBtn = document.querySelector("#edit-welcome");
let content = document.querySelector('#welcome');
let saveBtn = document.querySelector("#save");
var text = content.innerText;

editBtn.addEventListener('click', () => {
  // Toggle contentEditable on button click
	content.contentEditable = true;
  
	content.style.border = "1px solid black";
	saveBtn.style.display = "block";
  
  console.log(content.contentEditable);
  console.log(content);
  console.log(text);
  
});

saveBtn.addEventListener('click', () => {
	content.contentEditable = false;
	content.style.border = "none";
	saveBtn.style.display = "none";
	
	text = content.innerText;
	
	console.log(text);
	
	/*if(content.contentEditable === 'false') {
  	localStorage.setItem('content',content.innerText);
  }*/
	
});
