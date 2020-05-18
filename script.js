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
        description: "A scheduler that displays the current date and will change colors based on the time of day. You can save your plans in this planner. Skills used: local storage, jquery"
    }
];

$(document).ready(function(){
for(var i = 0; i < portfolio.length; i++){
    var portDiv = $("<div>").addClass("portContainer col s12 m6 l4 xl3")
    var title = $("<h5>").text(portfolio[i].name);
    title.css("text-align", "center")
    var img = $("<img>").attr("src", portfolio[i].img);
    img.addClass("portfolioimg");
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
    })
    var description = $("<p>").text("Description: " + portfolio[i].description)
    portDiv.append(title, img, link, br, github, description);
    $(".portfolio").append(portDiv)
}

$(".send").on("click", function(){
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    $("#send").attr("action",
    "mailto: kthorpe1023@gmail.com?subject=" + subject + "&body=" + message)
    $("#send").submit()
})

})