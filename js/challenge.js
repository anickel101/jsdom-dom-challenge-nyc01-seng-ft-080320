document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOMloaded");

    let intervalID = setInterval(incrementCounter, 1000);
});

const incrementCounter = () => {
    let count = document.querySelector('#counter');
    count.innerText = parseInt(count.innerText) + 1;
};

const plusButton = document.getElementById('plus')

plusButton.addEventListener("click",(e) => {
    incrementCounter();
} );

const decrementCounter = () => {
    let count = document.querySelector('#counter');
    count.innerText = parseInt(count.innerText) - 1;
};

const minusButton = document.getElementById('minus')

minusButton.addEventListener("click",(e) => {
    decrementCounter();
} );

const currentCount = () => {
   return document.querySelector('#counter').innerText;
};

const heartButton = document.getElementById('heart')
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