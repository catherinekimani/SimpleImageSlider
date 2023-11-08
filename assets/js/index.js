document.getElementById('next').onclick = function () {
	let myLists = document.querySelectorAll('.item');
	document.getElementById('slide').appendChild(myLists[0]);
}
document.getElementById('prev').onclick = function () {
	let myLists = document.querySelectorAll('.item');
	document.getElementById('slide').appendChild(myLists[myLists.length - 1]);
}