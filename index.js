const showButton = document.querySelector("#first-show");
const answer = document.querySelector("#yourAnswer");

// Button togle and show answer

showButton.addEventListener("click", () => {
    if (showButton.textContent === "Show Answer") {
        showButton.textContent = "Hide Answer";
        answer.textContent = "flex-direction";
    } else {
        showButton.textContent = "Show Answer";
        answer.textContent = "";
    }
});

//Bookmark togle
const bookmark = document.querySelector("#bookmarkclick");

bookmark.addEventListener("click", () => {
    if (bookmark.getAttribute("src") === "./images/bookmark.png") {
        bookmark.setAttribute("src", "./images/bookmark_filled.png");
    } else {
        bookmark.setAttribute("src", "./images/bookmark.png");
    }
});
