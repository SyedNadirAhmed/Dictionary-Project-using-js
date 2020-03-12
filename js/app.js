{
	var x = document.getElementById("txt");
	x.addEventListener("focusin", FocusIn);
	x.addEventListener("focusout", FocusOut);

	function FocusIn(x) {
	  document.getElementById("txtsuggestion").style.display = 'block';
	}

	function FocusOut(x) {
	  document.getElementById("txtsuggestion").style.display = 'none';  
	}
}	