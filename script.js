document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const progressBar = document.getElementById("progress");
    const progressText = document.createElement("span");
    progressText.className = "progress-text";
    progressBar.parentElement.appendChild(progressText);
    const totalQuestions = 12;

    // Update progress bar
    quizForm.addEventListener("change", function () {
        const answered = document.querySelectorAll('input[type="radio"]:checked').length;
        const progressPercent = (answered / totalQuestions) * 100;
        progressBar.style.width = progressPercent + "%";
        progressText.textContent = `${Math.round(progressPercent)}%`;
    });

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the page from reloading

        // Collect answers
        const answers = Array.from(document.querySelectorAll('input[type="radio"]:checked')).map(input => input.value);
        if (answers.length < totalQuestions) {
            alert("Please answer all the questions!");
            return;
        }

        const score = { thoughtful: 0, simple: 0, shocked: 0, cool: 0, sad: 0, fancy: 0 };
        answers.forEach(answer => score[answer]++);

        let monkeyType, monkeyImage;
        if (score.thoughtful >= score.simple && score.thoughtful >= score.shocked && score.thoughtful >= score.cool && score.thoughtful >= score.sad && score.thoughtful >= score.fancy) {
            monkeyType = "overthink maymun 🐵";
            monkeyImage = "images/düşünceli.jpeg"; // Ensure this file exists
        } else if (score.simple >= score.thoughtful && score.simple >= score.shocked && score.simple >= score.cool && score.simple >= score.sad && score.simple >= score.fancy) {
            monkeyType = "düz maymun 🐒";
            monkeyImage = "images/düz.jpg"; // Ensure this file exists
        } else if (score.shocked >= score.thoughtful && score.shocked >= score.simple && score.shocked >= score.cool && score.shocked >= score.sad && score.shocked >= score.fancy) {
            monkeyType = "şaşkın maymıun 🐵";
            monkeyImage = "images/şaşkın.jpg"; // Ensure this file exists
        } else if (score.cool >= score.thoughtful && score.cool >= score.simple && score.cool >= score.shocked && score.cool >= score.sad && score.cool >= score.fancy) {
            monkeyType = "havali maymun 🐒";
            monkeyImage = "images/havalı.gif"; // Ensure this file exists
        } else if (score.sad >= score.thoughtful && score.sad >= score.simple && score.sad >= score.shocked && score.sad >= score.cool && score.sad >= score.fancy) {
            monkeyType = "üzgün maymun 🐵";
            monkeyImage = "images/sad-monkey.gif"; // Ensure this file exists
        } else if (score.fancy >= score.thoughtful && score.fancy >= score.simple && score.fancy >= score.shocked && score.fancy >= score.cool && score.fancy >= score.sad) {
            monkeyType = "süslü maymun 🐒";
            monkeyImage = "images/süslü.gif"; // Ensure this file exists
        }

        localStorage.setItem("monkeyResult", monkeyType);
        localStorage.setItem("monkeyImage", monkeyImage);
        window.location.href = "results.html";
    });
});