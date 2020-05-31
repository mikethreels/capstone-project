function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("topnav");
    var z = document.getElementById("collaps");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.height = "65vh";
      y.style.width = "100%";
      z.style.transform = "rotate(180deg)"
      z.style.padding = "0 0 12px 0";
    } else {
      x.style.display = "none";
      x.style.height = "auto";
      y.style.width = "45px";
      z.style.transform = "none";
      z.style.padding = "12px 0 0 0";
    }
  }

window.addEventListener("scroll", myFunction);

function myFunction() {
    document.getElementById("myLinks").style.display = "none";
}