let apiKey = "?api_key=0513fbe4-38a5-46c5-b22c-03b4c959c081";

// load database data.

let commentHistory = [];

axios
    .get("https://project-1-api.herokuapp.com/comments" + apiKey)
    .then((result) => {
        for (let i = 0; i < result.data.length; i++) {
            commentHistory.push(result.data[i]);
        }
    })
    .then(() => {
        displayComment();
    })
    .catch((error) => console.log(error));

let displayComment = () => {
    for (let i = commentHistory.length - 1; i >= 0; i--) {
        // Set-up Tags for Loop
        let paste = document.querySelector(".comments__history");
        let userSetup = document.createElement("h6");
        let dateSetup = document.createElement("h6");
        let commentSetup = document.createElement("p");
        let avatarSetup = document.createElement("img");
        let list = document.createElement("li");

        // New User
        userSetup.innerText = commentHistory[i].name;
        userSetup.classList.add("comments__history-name");

        // New Comment
        commentSetup.innerText = commentHistory[i].comment;
        commentSetup.classList.add("comments__history-comment");

        // Date Setup
        let dateFormat = new Date(commentHistory[i].timestamp);
        dateSetup.innerText =
            dateFormat.getMonth() +
            1 +
            "/" +
            dateFormat.getDate() +
            "/" +
            dateFormat.getFullYear();
        dateSetup.classList.add("comments__history-timestamp");

        // Avatar Setup
        avatarSetup.innerText = commentHistory[i].avatarSource;
        avatarSetup.classList.add("comments__avatar");
        avatarSetup.setAttribute("src", "#");
        // avatarSetup.setAttribute("alt", " ");

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

// comment submitter
const form = document.querySelector(".comments__form");
form.addEventListener("submit", function (convo) {
    // to prevent refresh
    convo.preventDefault();

    // insert comments into comment array on click
    let dateNow = new Date();
    let nameClear = document.querySelector(".comments__name-input");
    let commentClear = document.querySelector(".comments__comment-input");
    commentHistory.push({
        name: convo.target.user_name.value,
        comment: convo.target.user_comment.value,
        timestamp: dateNow.toLocaleDateString(),
    });

    // clear comments
    let clearHistory = () => {
        let reset = document.querySelector(".comments__history");
        reset.innerHTML = "";
    };
    clearHistory();

    // display comment with updated comments
    displayComment();

    // post comments into API
    let apiConfig = { headers: { "content-type": "application/json" } };
    axios.post(
        "https://project-1-api.herokuapp.com/comments" + apiKey,
        {
            name: convo.target.user_name.value,
            comment: convo.target.user_comment.value,
        },
        apiConfig
    );
    nameClear.value = "";
    commentClear.value = "";
});

// Manually Delete Test Data
// let reset = () => {
//     let idDelete = "8a69df13-3578-4214-85e0-7b1d63ad2b50"; // enter in data ID to delete
//     axios.delete(
//         "https://project-1-api.herokuapp.com/comments/" + idDelete + apiKey
//     );
// };
// reset();
