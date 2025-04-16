var minimumResolutionMessage = `Minimum Resolution to play this game is 1920x1080! 
Adjust with ctrl+wheel if needed`;
const isClickedString = "it's clicked";
// var clickMe = document.getElementById("click-me");
// var restartButton = document.getElementById("restart");
// var score = document.getElementById("score");
// var time = document.getElementById("time");
// var scoreValue : number = 0;
class ClickingGame {
    constructor() {
        this.clickMe = document.getElementById("click-me");
        if (this.clickMe) {
            this.clickMe.addEventListener("click", () => {
                alert(isClickedString);
            });
        }
        // if (restartButton){
        //     restartButton.addEventListener("click", () => {
        //         resetScore();
        //     });
        // }
    }
}
export default ClickingGame;
// function updateScoree() : void{
//     scoreValue++;
//     if (score){
//         score.textContent = "SCORE: " + scoreValue.toString();
//     } 
// }
// function resetScore() : void{
//     scoreValue = 0;
//     if (score){
//         score.textContent = "SCORE: 0";
//     }
// }
// if (clickMe){
//     clickMe.addEventListener("click", () => {
//         updateScoree();
//     });
// }
// if (restartButton){
//     restartButton.addEventListener("click", () => {
//         resetScore();
//     });
// }
