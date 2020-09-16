let intervalID = "";

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOMloaded");

    intervalID = setInterval(incrementCounter, 1000);
});

const incrementCounter = () => {
    let count = document.querySelector('#counter');
    count.innerText = parseInt(count.innerText) + 1;
};

const plusButton = document.getElementById('plus');

plusButton.addEventListener("click",(e) => {
    incrementCounter();
} );

const decrementCounter = () => {
    let count = document.querySelector('#counter');
    count.innerText = parseInt(count.innerText) - 1;
};

const minusButton = document.getElementById('minus');

minusButton.addEventListener("click",(e) => {
    decrementCounter();
});

const currentCount = () => {
   return document.querySelector('#counter').innerText;
};

const heartButton = document.getElementById('heart');

heartButton.addEventListener("click", (e) => {

    let likeUl = document.querySelector(".likes");  

    let existLi = likeUl.querySelector(`[data-number='${currentCount()}']`);
    if (existLi) {
        let numLikes = existLi.dataset.likes;
        numLikes = parseInt(numLikes) + 1;
        existLi.dataset.likes = numLikes;
        existLi.innerText = `${existLi.dataset.number} has ${existLi.dataset.likes} likes.`;
    } else {
        let likeLi = document.createElement("li");     
        likeLi.dataset.number = currentCount();
        likeLi.dataset.likes = 0;
        likeLi.innerText = `${likeLi.dataset.number} has ${likeLi.dataset.likes} likes.`;
        likeUl.append(likeLi);
    }; 
});

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener("click", (e) => {

    if (pauseButton.innerText === "pause") {
        clearInterval(intervalID)
        pauseButton.innerText = "resume"
        disableButtons()
        pauseButton.disabled = false;
    } else {
        intervalID = setInterval(incrementCounter, 1000)
        pauseButton.innerText = "pause"
        enableButtons()
    };
       

});

const disableButtons = () => {
    const getButtons = document.querySelectorAll("button");
    for (const button of getButtons) {
        button.disabled = true;
    }
};

const enableButtons = () => {
    const getButtons = document.querySelectorAll("button");
    for (const button of getButtons) {
        button.disabled = false;
    }
};

const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const comment = form["comment"].value;
    
    const commentDiv = document.querySelector("div.comments");
    const newComment = document.createElement("p");
    newComment.innerText = comment;
    commentDiv.append(newComment);
});