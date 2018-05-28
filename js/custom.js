/*global console,prompt*/

	var dropdown = document.getElementById('dropdown'),
		dropcontent = document.getElementById('dropdown-content'),
		close = document.getElementsByClassName("close");

  dropdown.onclick = function(){
	  dropcontent.style.display = "block";
  }
  close[0].onclick = function(){
	  dropcontent.style.display = "none";
  }
