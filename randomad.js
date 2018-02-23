var x=document.getElementById("ads");
var adList=[
{"https://scratch.mit.edu/projects/192395027/","https://1.bp.blogspot.com/-wmGMfHdls68/WpCjhoJCtBI/AAAAAAAAACA/73PQLWfcl6gDg0JMDfhsrFhrPP340nAswCPcBGAYYCw/s1600/Ad1.png"},
];
var rand=adList[Math.round(adList.length*Math.random())-1];
x.children[0].src=rand[1];
x.href=rand[0]
