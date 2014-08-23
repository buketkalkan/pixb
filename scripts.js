var mymessage = "Sağ tık yasaklanmıştır";
function rtclickcheck(keyp){
  if (navigator.appName == "Netscape" && keyp.which == 3) {
    alert(mymessage);
    return false;
}
  if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
    alert(mymessage);
    return false;
  }
}
document.onmousedown = rtclickcheck
//-->

function imgadclose2()
{
  var image_x = document.getElementById('imgad2');
image_x.parentNode.removeChild(imgad2);
var image_y = document.getElementById('imgad2');
image_y.parentNode.removeChild(imgad2);
} 

function imgadclose3()
{
  var image_x = document.getElementById('imgad3');
image_x.parentNode.removeChild(imgad3);
var image_y = document.getElementById('imgad3');
image_y.parentNode.removeChild(imgad3);
} 
