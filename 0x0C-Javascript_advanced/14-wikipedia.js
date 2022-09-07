function createElement(data) {
	p = document.createElement('p');
	p.innerHTML = JSON.stringify(data);
	document.body.appendChild(p);
}
function queryWikipedia(callback) {
	let q = new XMLHttpRequest();
	q.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
	q.send();
	q.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			createElement(JSON.parse(q.response).query.pages["42"].extract);
		}
	}
}
queryWikipedia(createElement);