
// button up start
let mybutton = document.getElementById("btn_up");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// button up end
//video display start
function video(x){
document.getElementById("img-"+x).style.display="none";
let video=document.getElementById("video-"+x)
document.getElementById("video-"+x).style.display="block"
video.src+="?autoplay=1"
                                                                     
}
//video display end

  



