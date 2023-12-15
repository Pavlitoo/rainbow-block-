document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const rainbowContainer = document.getElementById("rainbowContainer");

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let currentIndex = 0;

    addButton.addEventListener("click", function () {
        if (currentIndex >= colors.length) {
            currentIndex = 0;
        }

        const rainbowBlock = document.createElement("div");
        rainbowBlock.className = "rainbowBlock";
        rainbowBlock.style.backgroundColor = colors[currentIndex];
        rainbowContainer.appendChild(rainbowBlock);

        currentIndex++;
    });
});
