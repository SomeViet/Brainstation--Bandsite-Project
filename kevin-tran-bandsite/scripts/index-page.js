let commentHistory = [
    {
        userName: "Miles Acosta",
        comment:
            "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        dateHistory: "12/20/2020",
        // avatarSource: "",
    },
    {
        userName: "Kevin Tran",
        comment:
            "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        dateHistory: "01/01/19",
        // avatarSource: "",
    },
];

let historyUpdate = () => {
    for (let i = commentHistory.length - 1; i >= 0; i--) {
        // Set-up Tags for Loop
        let paste = document.querySelector(".comments__history");
        let userSetup = document.createElement("h6");
        let dateSetup = document.createElement("h6");
        let commentSetup = document.createElement("p");
        let avatarSetup = document.createElement("img");
        let list = document.createElement("li");
        console.log(commentHistory.length);

        // New User
        userSetup.innerText = commentHistory[i].userName;
        userSetup.classList.add("comments__history-name");

        // New Comment
        commentSetup.innerText = commentHistory[i].comment;
        commentSetup.classList.add("comments__history-comment");

        // Date Setup
        dateSetup.innerText = commentHistory[i].dateHistory;
        dateSetup.classList.add("comments__history-timestamp");

        // Avatar Setup
        avatarSetup.innerText = commentHistory[i].avatarSource;
        avatarSetup.classList.add("comments__avatar");
        avatarSetup.setAttribute("src", "");

        // Structure Setup
        let divHeader = document.createElement("div");
        divHeader.classList.add("comments__history-header");
        let divContainer = document.createElement("div");
        divContainer.classList.add("comments__history-right-container");

        // Piecing it together
        list.appendChild(avatarSetup);
        divHeader.appendChild(userSetup);
        divHeader.appendChild(dateSetup);
        divContainer.appendChild(divHeader);
        divContainer.appendChild(commentSetup);
        list.appendChild(divContainer);
        list.classList.add("comments__history-list-item");
        paste.appendChild(list);
    }
};

let clear = () => {
    let reset = document.querySelector(".comments__history");
    reset.innerHTML = "";
};

historyUpdate();

const form = document.querySelector(".comments__form");
form.addEventListener("submit", function (convo) {
    convo.preventDefault();
    let dateNow = new Date();
    let commentClear = document.querySelector(".comments__comment-input");
    commentHistory.push({
        userName: convo.target.user_name.value,
        comment: convo.target.user_comment.value,
        dateHistory: dateNow.toLocaleDateString(),
        // not applicable for sprint 2
        avatarSource: "",
    });
    console.log(commentHistory);
    clear();
    historyUpdate();
    commentClear.value = "";
});
