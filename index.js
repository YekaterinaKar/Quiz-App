const showButton = document.querySelector("#first-show");
const answer = document.querySelector("#answer");

showButton.addEventListener("click", () => {
    if (showButton.textContent === "Show Answer") {
        showButton.textContent = "Hide Answer";
        answer.textContent = "flex-direction";
    } else {
        showButton.textContent = "Show Answer";
        answer.textContent = "";
    }
});

const bookmark = document.querySelector("#bookmarkclick");

bookmark.addEventListener("click", () => {
    if (bookmark.getAttribute("src") === "./images/bookmark.png") {
        bookmark.setAttribute("src", "./images/bookmark_filled.png");
    } else {
        bookmark.setAttribute("src", "./images/bookmark.png");
    }
});

const myForm = document.querySelector("#my-form");
const submitButton = document.querySelector("#submit-button");
