const searchFun = () => {
  let words = document.getElementById("myinput").value.toUpperCase();
  console.log(words);
  let mytable = document.querySelectorAll(".tile");
  let a = [];

  var j = 0;
  var m = 0;

  for (var i = 0; i < mytable.length; i++) {
    let d = mytable[i].getElementsByTagName("span")[2];

    if (d) {
      let textval = d.textContent || d.innerHTML;

      if (textval.toUpperCase().indexOf(words) > -1) {
        mytable[i].style.display = "block";
        m++;
        document.getElementById("errmsg").style.display = "none";
        document.getElementById("results").style.display = "block";

        console.log(m);
      } else {
        mytable[i].style.display = "none";
      }

      if (m == 0) {
        document.getElementById("errmsg").style.display = "block";
        document.getElementById("results").style.display = "none";
      }
    }

    if (words.length == 0) {
      document.getElementById("results").style.display = "none";
    } else {
    }
  }
};

function filterpcos() {
  $(".tile").hide();
  $(".tile.pcos").show();
}
function filterall() {
  $(".tile").hide();
}
