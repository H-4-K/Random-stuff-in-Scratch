var canRunAds = true;
var x=document.getElementById("ads");
var adList=[
["https://scratch.mit.edu/projects/192395027/","https://1.bp.blogspot.com/-wmGMfHdls68/WpCjhoJCtBI/AAAAAAAAACA/73PQLWfcl6gDg0JMDfhsrFhrPP340nAswCPcBGAYYCw/s1600/Ad1.png"],
["https://scratch.mit.edu/projects/200514383/","https://lh6.googleusercontent.com/G_M0IzLoNIP28veWlJznE9CcihL5MAeEu6EWnBuoyROQHxv5WZWW5LsAWMFS7E2W5BokdFBIAuYIE1GveXd4=w1366-h637"],
];
var rand=adList[Math.round((adList.length-1)*Math.random())];
x.children[0].src=rand[1];
x.href=rand[0]
