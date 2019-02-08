if (localStorage.getItem("status") === "date")
	showDate();
else
	showList();

$('a').hover(
	function(){
		$(this).nextAll("hr")[0].css("borderColor", "white");
	}
);

// document.getElementsByTagName('h1')[0].onclick = showDate;
$('h1').click(showDate);
// document.getElementsByClassName('date')[0].onclick = showList;
$(".date").click(showList);

function showDate() {
	localStorage.setItem("status", "date");
	// document.getElementsByTagName('main')[0].style.display = 'none';
	$('main').hide();
	setdate();
	// document.getElementsByClassName('date')[0].style.display = 'block';
	$('.date').show();
}

function showList() {
	localStorage.setItem("status", "list");
	// document.getElementsByClassName('date')[0].style.display = 'none';
	$('.date').hide();
	// document.getElementsByTagName('main')[0].style.display = 'block';
	$('main').show();
}

function setdate(){
	var date = new Date();
	document.getElementsByClassName("date")[0].children[0].innerHTML = date.toDateString();
	// $(".date").children()[0].css("content = " + date.toDateString());
	if (date.getMinutes() < 10) 
		document.getElementsByClassName("date")[0].children[1].innerHTML = date.getHours() + ":0" + date.getMinutes();
	else
		document.getElementsByClassName("date")[0].children[1].innerHTML = date.getHours() + ":" + date.getMinutes();
}