var x=document.getElementById("ads");
var adList=[
["https://scratch.mit.edu/projects/192395027/","https://1.bp.blogspot.com/-wmGMfHdls68/WpCjhoJCtBI/AAAAAAAAACA/73PQLWfcl6gDg0JMDfhsrFhrPP340nAswCPcBGAYYCw/s1600/Ad1.png"],
["https://scratch.mit.edu/projects/200514383/","https://1.bp.blogspot.com/-J509tZxUKqc/WpKNUwrsv7I/AAAAAAAAACk/M6bDlG202FcxqMpvqZ-rgW3PfZAjw86FwCPcBGAYYCw/s1600/Ad2.png"],
];
var adList2=[
["https://scratch.mit.edu/projects/205600380/","https://4.bp.blogspot.com/-6YI-KepAwYw/WpKOF2ihlMI/AAAAAAAAACw/qODoQecIOPkjySTBIldsNH8KX5EHMP7mQCPcBGAYYCw/s1600/Ad2-1.png"],
["https://scratch.mit.edu/projects/190480002/","https://uploads.scratch.mit.edu/projects/thumbnails/190480002.png"]
];
var rand=adList[Math.round((adList.length-1)*Math.random())];
x.children[0].src=rand[1];
x.href=rand[0]
if (document.getElementById("ads2")!=undefined) {
  x=document.getElementById("ads2");
  rand=adList2[Math.round((adList2.length-1)*Math.random())];
x.children[0].src=rand[1];
x.href=rand[0]
}
