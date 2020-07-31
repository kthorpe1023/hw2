var portfolio = [
    {
        name: "Pantry Pirates",
        link: "https://kthorpe1023.github.io/project-one/#!",
        gitHub: "https://github.com/kthorpe1023/project-one",
        img: "./images/pantryPirates.PNG",
        description: "A group project creating a website to lookup recipes based on ingredients you have in your pantry. You are also able to lookup an alternative if you are missing an ingreditent. APIs used: Spoonacular, Edamame, and Mapbox"

    },
    {
        name: "Weather Dashboard",
        link: "https://kthorpe1023.github.io/weather-dashboard/",
        gitHub: "https://github.com/kthorpe1023/weather-dashboard",
        img: "./images/weather.PNG",
        description: "Search a city and the current weather as well as the four day forecast will appear. Past cities searched will populate under the search bar so you can look them up again. Technology used: CSS, HTML, Jquery, localStorage, OpenWeather API"
    },
    {
        name: "Daily Schedule",
        link: "https://kthorpe1023.github.io/hw5/",
        gitHub: "https://github.com/kthorpe1023/hw5",
        img: "./images/scheduler.PNG",
        description: "A scheduler that displays the current date and will change colors based on the time of day. You can save your plans in this planner. Plans are saved using local storage and jquery was used for functionality"
    },
    {
        name: "Code Connect",
        link: "http://project-02-code-connect.herokuapp.com/",
        github: "https://github.com/darnocer/Project-02-Code-Connect",
        img: "./images/codeConnect.PNG",
        description: "A group project creating a social media platform for coders to ask questions, share projects, and follow other projects. I implemented the OAuth Github Authorization and identifying the user ID for posting and filtering one user's posts."
    },
    {
        name: "Note Taker",
        link: "https://cryptic-crag-79236.herokuapp.com/",
        github: "https://github.com/kthorpe1023/katie-note-taker",
        img: "./images/notetaker.PNG",
        description: "Create and delete notes to keep track of your thoughts and tasks. A full stack application deployed through Heroku. This app posts notes to an api route. Anyone entering the site will see my notes."
    },
    {
        name: "Eat a Burger",
        link: "https://hidden-atoll-33702.herokuapp.com/",
        github: "https://github.com/kthorpe1023/eat-a-burger",
        img: "./images/burger.PNG",
        description: "This is a full stack application using MySQL as a database deployed through Heroku. Users are able to add burgers to be devoured. When the devoured button is selected, it moves to devoured. Users can delete burgers as well."
    }
];

$(document).ready(function(){
for(var i = 0; i < portfolio.length; i++){
    var portDiv = $("<div>").addClass("col s12 m6");
    var cardDiv = $("<div>").addClass("card")
    var imgDiv= $("<div>").addClass("card-image");
    var title = $("<span>").text(portfolio[i].name);
    title.addClass("card-title")
    title.css("color", "black")
    var img = $("<img>").attr("src", portfolio[i].img);
    var link = $("<a>", {
        text: "Checkout the " + portfolio[i].name + " Website",
        title: portfolio[i].name,
        href: portfolio[i].link,
        target: "_blank"
    });
    var br =  $("<br>");
    var github = $("<a>", {
        text: "Review my Github Repository",
        href: portfolio[i].gitHub,
        target: "_blank"
    });
    var description = $("<p>").text("Description: " + portfolio[i].description);
    var descriptionDiv = $("<div>").addClass("card-content");
    var linkDiv = $("<div>").addClass("card-action")
    linkDiv.append(link, br, github)
    descriptionDiv.append(title, description)
    imgDiv.append(img);
    cardDiv.append(imgDiv, descriptionDiv, descriptionDiv, linkDiv)
    portDiv.append(cardDiv);
    $(".portfolio").append(portDiv)
}

$(".send").on("click", function(){
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    $("#send").attr("action",
    "mailto: kthorpe1023@gmail.com?subject=" + subject + "&body=" + message)
    $("#send").submit()
});

})