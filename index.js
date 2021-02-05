function search(url) {
	var x = document.getElementById("search-string").value;
	if (x != "") {
		window.open(url+x, "_self");
	}
}

function keycheck(url){
	var x = event.keyCode;
	/*detect if enter is pressed*/
	if (x == 13){
		search(url);
	};
}
	