document.addEventListener("DOMContentLoaded", function () {
    const resultText = document.getElementById("resultText");
    const resultImage = document.getElementById("resultImage");
    const monkeyType = localStorage.getItem("monkeyResult");
    const monkeyImage = localStorage.getItem("monkeyImage");
    const dramaticMusic = document.getElementById("dramaticMusic");

    if (monkeyType && monkeyImage) {
        resultText.textContent = `You are a ${monkeyType}!`;
        resultImage.src = monkeyImage;
    } else {
        resultText.textContent = "Oops! No result found. Take the quiz again.";
        resultImage.style.display = "none";
    }

    // Play music after user interaction
    const playMusic = () => {
        dramaticMusic.play().catch(error => {
            console.error("Music playback failed:", error);
        });
        document.body.removeEventListener("click", playMusic); // Ensure it only plays once
    };

    document.body.addEventListener("click", playMusic);
});