let themeButton = document.getElementById("mode");

themeButton.addEventListener("click", changeTheme);

function changeTheme(){
    document.body.classList.toggle("light-mode");
}
let job = [
    "WEB DEVELOPER",
    "PYTHON PROGRAMMER",
    "JAVA LEARNNER",
    "SOMETHING"
    ];
    let index=0;
    let jobText = document.getElementById("job");
setInterval(function(){
    jobText.textContent = job[index];
    index++;
    if(index==job.length){index=0;}
},1000);
let buttons = document.querySelectorAll("button");
let cards = document.querySelectorAll(".card");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        let filter = btn.dataset.filter;

        cards.forEach(function(card){

            if(filter === "all"){
                card.style.display = "block";
            }
            else if(card.dataset.category === filter){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});
