function createElement(data){
    document.createElement('p');
    p.innerHTML = JSON.stringify(data);
    document.body.appendChild(p);
}
function queryWikipedia(callback){
    var q = new XMLHttpRequest();
    adr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    q.open('GET', adr, true);
    q.responseType = "json";
    q.send();
    q.onreadystatechange(){
        if(q.readyState == 4 && q.status == 200){
            callback(createElement(JSON.parse(q.response).query.pages["42"].extract));
        }
    }
    }
    queryWikipedia(createElement);
