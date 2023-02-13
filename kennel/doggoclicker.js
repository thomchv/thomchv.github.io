var score = 0;

function clickBtn() {
  score++;
  console.log(score);
  document.getElementsByTagName("p")[0].firstChild.data = "dogecoins: " + score;
}
