var minimumResolutionMessage: string = "Minimum Resolution to play this game is 1920x1080";
console.log(minimumResolutionMessage);

const div = document.getElementById("click-me");

if (div){
    div.addEventListener("click", (event: MouseEvent) => {
        console.log("Div was clicked", event);
        alert("Div was clicked");
    });
}