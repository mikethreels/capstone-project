function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("topnav");
    var z = document.getElementById("collaps");
    var a = document.getElementById("hot-ads");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.height = "65vh";
      y.style.width = "100%";
      z.style.transform = "rotate(180deg)"
      z.style.paddingBottom = "12px";
      a.style.marginTop = "75vh";
    } else {
      x.style.display = "none";
      x.style.height = "auto";
      y.style.width = "45px";
      z.style.transform = "none";
      z.style.paddingTop = "12px";
      a.style.marginTop = "15px";
    }
  }

window.addEventListener("scroll", myScroll);

function myScroll() {
  var x = document.getElementById("myLinks");
  if (x.style.display == "block") {
      return;
  } else {
    document.getElementById("myLinks").style.display = "none";
    document.getElementById("collaps").style.transform = "rotate(0deg)";
    document.getElementById("collaps").style.paddingTop = "12px";
    document.getElementById("hot-ads").style.marginTop = "15px";
    }
}