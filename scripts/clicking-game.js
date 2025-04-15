var minimumResolutionMessage = "Minimum Resolution to play this game is 1920x1080! \nAdjust with ctrl+wheel if needed";
alert(minimumResolutionMessage);
var clickMe = document.getElementById("click-me");
var restartButton = document.getElementById("restart");
var score = document.getElementById("score");
var time = document.getElementById("time");
var scoreValue = 0;
function updateScoree() {
    scoreValue++;
    if (score) {
        score.textContent = "SCORE: " + scoreValue.toString();
    }
}
function resetScore() {
    scoreValue = 0;
    if (score) {
        score.textContent = "SCORE: 0";
    }
}
if (clickMe) {
    clickMe.addEventListener("click", function () {
        updateScoree();
    });
}
if (restartButton) {
    restartButton.addEventListener("click", function () {
        resetScore();
    });
}
