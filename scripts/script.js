function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("topnav");
    var z = document.getElementById("collaps");
    var a = document.getElementById("hot-ads")
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.height = "65vh";
      y.style.width = "100%";
      z.style.transform = "rotate(180deg)"
      z.style.padding = "0 0 12px 0";
      a.style.margin = "66vh 0 0 0";
    } else {
      x.style.display = "none";
      x.style.height = "auto";
      y.style.width = "45px";
      z.style.transform = "none";
      z.style.padding = "12px 0 0 0";
      a.style.margin = "15px 0 0 0";
    }
  }

window.addEventListener("scroll", myScroll);

function myScroll() {
    document.getElementById("myLinks").style.display = "none";
    document.getElementById("collaps").style.transform = "rotate(0deg)";
    document.getElementById("collaps").style.padding = "12px 0 0 0";
    document.getElementById("hot-ads").style.margin = "15px 0 0 0";
}