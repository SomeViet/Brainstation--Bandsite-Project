let userhistory = ["Miles Acosta", "Emilie Beach", "Connor Walton"];
let commenthistory = [
    "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
];
let datehistory = ["12/20/2020", "01/09/2021", "02/17/2021"];
let avatarhistory = [];

const form = document.getElementById("comments");
form.addEventListener("submit", function (convo) {
    convo.preventDefault();
    let date1 = new Date();
    userhistory.push(convo.target.user_name.value);
    commenthistory.push(convo.target.user_comment.value);
    datehistory.push(date1.toLocaleDateString());
    //To delete console logs when done.
    console.log(userhistory);
    console.log(commenthistory);
    console.log(datehistory);
});

// let form2 = document.getElementById("commentsgohere");
// let form2comments = document.createElement("div");
// form2comments.classList.add("comment-red");
// form2comments.innerText = "YAY";
// form2.appendChild(form2comments);
