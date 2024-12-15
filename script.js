const startButton = document.getElementById("startButton");
const userWordInput = document.getElementById("userWord");
const container = document.getElementById("container");

startButton.addEventListener("click", () => {
    const word = userWordInput.value.trim();

    if (word === "") {
        alert("Please enter a word!");
        return;
    }

    // Clear the container
    container.innerHTML = "";

    // Generate letter divs dynamically
    word.split("").forEach((char, index) => {
        const letterDiv = document.createElement("div");
        letterDiv.id = `letter-${index}`;
        letterDiv.textContent = char;
        letterDiv.style.display = index === 0 ? "block" : "none"; 
        container.appendChild(letterDiv);
    });

    // Add final "Complete" div
    const completeDiv = document.createElement("div");
    completeDiv.id = "complete";
    completeDiv.textContent = word;
    completeDiv.style.display = "none";
    container.appendChild(completeDiv);

    // Add event listeners for toggling
    const divs = container.children;
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", () => {
            divs[i].style.display = "none";
            if (i + 1 < divs.length) {
                divs[i + 1].style.display = "block";
            } else {
                divs[0].style.display = "block";
            }
        });
    }
});
