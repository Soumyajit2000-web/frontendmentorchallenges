document.getElementById("daily").addEventListener("click", () => {
    if (document.getElementById("daily").classList.item(0) == null) {
        document.getElementById("daily").classList.add("active");
        
        if (document.getElementById("weekly").classList.item(0) == "active") {
            document.getElementById("weekly").classList.remove("active");
        }

        if (document.getElementById("monthly").classList.item(0) == "active") {
            document.getElementById("monthly").classList.remove("active");
        }
    }

    document.getElementById("work-time").innerHTML = "5hrs";
    document.getElementById("work-preTime").innerHTML = "Last Week - 7hrs";

    document.getElementById("play-time").innerHTML = "1hrs";
    document.getElementById("play-preTime").innerHTML = "Last Week - 2hrs";

    document.getElementById("study-time").innerHTML = "0hrs";
    document.getElementById("study-preTime").innerHTML = "Last Week - 1hrs";

    document.getElementById("exercise-time").innerHTML = "1hrs";
    document.getElementById("exercise-preTime").innerHTML = "Last Week - 1hrs";

    document.getElementById("social-time").innerHTML = "1hrs";
    document.getElementById("social-preTime").innerHTML = "Last Week - 3hrs";

    document.getElementById("selfCare-time").innerHTML = "0hrs";
    document.getElementById("selfCare-preTime").innerHTML = "Last Week - 1hrs";

    // console.log(document.getElementById("weekly").classList.item(0));

})


document.getElementById("weekly").addEventListener("click", () => {
    if (document.getElementById("weekly").classList.item(0) == null) {
        document.getElementById("weekly").classList.add("active");
        
        if (document.getElementById("daily").classList.item(0) == "active") {
            document.getElementById("daily").classList.remove("active");
        }

        if (document.getElementById("monthly").classList.item(0) == "active") {
            document.getElementById("monthly").classList.remove("active");
        }
    }

    document.getElementById("work-time").innerHTML = "32hrs";
    document.getElementById("work-preTime").innerHTML = "Last Week - 36hrs";

    document.getElementById("play-time").innerHTML = "10hrs";
    document.getElementById("play-preTime").innerHTML = "Last Week - 8hrs";

    document.getElementById("study-time").innerHTML = "4hrs";
    document.getElementById("study-preTime").innerHTML = "Last Week - 7hrs";

    document.getElementById("exercise-time").innerHTML = "4hrs";
    document.getElementById("exercise-preTime").innerHTML = "Last Week - 5hrs";

    document.getElementById("social-time").innerHTML = "5hrs";
    document.getElementById("social-preTime").innerHTML = "Last Week - 10hrs";

    document.getElementById("selfCare-time").innerHTML = "2hrs";
    document.getElementById("selfCare-preTime").innerHTML = "Last Week - 2hrs";

    // console.log(document.getElementById("weekly").classList.item(0));

})

document.getElementById("monthly").addEventListener("click", () => {
    if (document.getElementById("monthly").classList.item(0) == null) {
        document.getElementById("monthly").classList.add("active");
        
        if (document.getElementById("weekly").classList.item(0) == "active") {
            document.getElementById("weekly").classList.remove("active");
        }

        if (document.getElementById("daily").classList.item(0) == "active") {
            document.getElementById("daily").classList.remove("active");
        }
    }

    document.getElementById("work-time").innerHTML = "103hrs";
    document.getElementById("work-preTime").innerHTML = "Last Week - 128hrs";

    document.getElementById("play-time").innerHTML = "23hrs";
    document.getElementById("play-preTime").innerHTML = "Last Week - 29hrs";

    document.getElementById("study-time").innerHTML = "13hrs";
    document.getElementById("study-preTime").innerHTML = "Last Week - 19hrs";

    document.getElementById("exercise-time").innerHTML = "11hrs";
    document.getElementById("exercise-preTime").innerHTML = "Last Week - 18hrs";

    document.getElementById("social-time").innerHTML = "21hrs";
    document.getElementById("social-preTime").innerHTML = "Last Week - 23hrs";

    document.getElementById("selfCare-time").innerHTML = "7hrs";
    document.getElementById("selfCare-preTime").innerHTML = "Last Week - 11hrs";

    // console.log(document.getElementById("weekly").classList.item(0));

})
