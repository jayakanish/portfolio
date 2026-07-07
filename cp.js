let index = 0;
let job = [
    "WEB DEVELOPER",
    "PYTHON PROGRAMMER",
    "JAVA LEARNER",
    "FRONTEND DEVELOPER"
];

let jobText = document.getElementById("job");

setInterval(function () {
    jobText.textContent = job[index];
    index++;

    if (index == job.length) {
        index = 0;
    }
}, 2000);