var minimumResolutionMessage = "Minimum Resolution to play this game is 1920x1080";
console.log(minimumResolutionMessage);
var div = document.getElementById("click-me");
if (div) {
    div.addEventListener("click", function (event) {
        console.log("Div was clicked", event);
        alert("Div was clicked");
    });
}
