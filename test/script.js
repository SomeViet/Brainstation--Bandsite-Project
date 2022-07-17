const pageCount = document.querySelector(".res__page");
const totalPageCount = document.querySelector(".res__total-pages");

//4a.
axios.get("https://reqres.in/api/users?page=2").then((response) => {
    console.log(response.data);
    pageCount.innerText = response.data.page;
    totalPageCount.innerText = response.data.total_pages;
    console.log(response.data.data);

    //4b.

    for (let i = 0; i < response.data.data.length; i++) {
        const userData = document.querySelector(".res-users");
        const user = document.createElement("li");
        const userName = document.createElement("span");
        const userEmail = document.createElement("span");
        const userAvatar = document.createElement("img");
        console.log(response.data.data[i]);

        // username
        userName.innerText =
            response.data.data[i].first_name +
            " " +
            response.data.data[i].last_name;
        userName.classList.add("res-users__name");

        // avatar
        userAvatar.setAttribute("src", response.data.data[i].avatar);
        userAvatar.classList.add("res-users__avatar");

        // // email
        userEmail.innerText = response.data.data[i].email;
        userEmail.classList.add("res-users__email");

        // piecing it together
        user.appendChild(userAvatar);
        user.appendChild(userName);
        user.innerHTML += " - ";
        user.appendChild(userEmail);

        userData.appendChild(user);
    }
});
