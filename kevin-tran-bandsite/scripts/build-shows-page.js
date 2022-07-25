let apiKey = "?api_key=0513fbe4-38a5-46c5-b22c-03b4c959c081";

let showsHistory = [];

axios
    .get("https://project-1-api.herokuapp.com/showdates" + apiKey)
    .then((result) => {
        for (let i = 0; i < result.data.length; i++) {
            showsHistory.push(result.data[i]);
        }
    })
    .then(() => {
        console.log(showsHistory);
        upcomingShows();
    })
    .catch((error) => console.log(error));

let structureSetup = () => {
    // Set-up Tags
    let heroSelect = document.querySelector(".hero");
    let mainUpcoming = document.createElement("main");
    let headerShows = document.createElement("h1");
    let showsRightContainer = document.createElement("div");
    let subheaderContainer = document.createElement("div");
    let subheaderDate = document.createElement("div");
    let subheaderVenue = document.createElement("div");
    let subheaderLocation = document.createElement("div");
    let subheaderBuyTicket = document.createElement("div");

    // Inner Text Setup
    headerShows.innerText = "Shows";
    subheaderDate.innerText = "Date";
    subheaderVenue.innerText = "Venue";
    subheaderLocation.innerText = "Location";

    // Class Set-up
    mainUpcoming.classList.add("upcoming");
    headerShows.classList.add("upcoming__header");
    showsRightContainer.classList.add("upcoming__shows");
    subheaderContainer.classList.add("upcoming__container-subheader");
    subheaderDate.classList.add("upcoming__subheader");
    subheaderVenue.classList.add("upcoming__subheader");
    subheaderLocation.classList.add("upcoming__subheader");
    subheaderBuyTicket.classList.add("upcoming__subheader-ticket");

    // Piecing it together
    subheaderContainer.appendChild(subheaderDate);
    subheaderContainer.appendChild(subheaderVenue);
    subheaderContainer.appendChild(subheaderLocation);
    subheaderContainer.appendChild(subheaderBuyTicket);
    showsRightContainer.appendChild(subheaderContainer);
    mainUpcoming.appendChild(headerShows);
    mainUpcoming.appendChild(showsRightContainer);
    heroSelect.after(mainUpcoming);
};

let upcomingShows = () => {
    for (let i = 0; i < showsHistory.length; i++) {
        // Set-up Tags
        let paste = document.querySelector(".upcoming__shows");
        let eventSetup = document.createElement("ul");
        let subheaderDate = document.createElement("div");
        let subheaderVenue = document.createElement("div");
        let subheaderLocation = document.createElement("div");
        let itemDate = document.createElement("li");
        let itemVenue = document.createElement("li");
        let itemLocation = document.createElement("li");
        let buyTicket = document.createElement("button");

        // Inner Text Setup
        subheaderDate.innerText = "Date";
        subheaderVenue.innerText = "Venue";
        subheaderLocation.innerText = "Location";
        buyTicket.innerText = "BUY TICKETS";
        let dateFormat = new Date(Number(showsHistory[i].date));
        itemDate.innerText = dateFormat.toDateString();
        itemVenue.innerText = showsHistory[i].place;
        itemLocation.innerHTML = showsHistory[i].location;

        // Class List Setup
        eventSetup.classList.add("upcoming__items");
        subheaderDate.classList.add("upcoming__mobile-subheader");
        subheaderVenue.classList.add("upcoming__mobile-subheader");
        subheaderLocation.classList.add("upcoming__mobile-subheader");
        itemDate.classList.add("upcoming__date");
        itemVenue.classList.add("upcoming__venue");
        itemLocation.classList.add("upcoming__location");
        buyTicket.classList.add("upcoming__buy-ticket");

        // Piecing it together
        eventSetup.append(
            subheaderDate,
            itemDate,
            subheaderVenue,
            itemVenue,
            subheaderLocation,
            itemLocation,
            buyTicket
        );
        paste.appendChild(eventSetup);
    }
};

structureSetup();
