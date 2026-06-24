let button = document.getElementById("voteBtn");
let message = document.getElementById("message");

let eligible = false;
let voted = false;

let gopal = 0;
let fire = 0;
let pushapa = 0;

function checkAge() {
    let age = Number(document.getElementById("age").value);

    if (age >= 18) {
        eligible = true;
        document.getElementById("status").textContent =
            "✅ You are eligible to vote.";
    } else {
        eligible = false;
        document.getElementById("status").textContent =
            "❌ You are not eligible to vote.";
    }
}

function vote(name) {

    if (!eligible) {
        alert("Please verify your age first!");
        return;
    }

    if (voted) {
        alert("❌ You have already voted!");
        return;
    }

    if (name == "Gopal") {
        gopal++;
        document.getElementById("gopalVote").textContent = gopal;
    }
    else if (name == "Fire") {
        fire++;
        document.getElementById("fireVote").textContent = fire;
    }
    else if (name == "Pushapa") {
        pushapa++;
        document.getElementById("pushapaVote").textContent = pushapa;
    }

    document.getElementById("selectedCandidate").textContent =
        "Selected Candidate : " + name;

    voted = true;

    console.log("Vote Recorded for :", name);
    console.log("Current Votes");
    console.log("Gopal :", gopal);
    console.log("Fire :", fire);
    console.log("Pushapa :", pushapa);
}

button.addEventListener("click", function () {
    message.textContent = "✅ Your vote has been recorded successfully!";
});