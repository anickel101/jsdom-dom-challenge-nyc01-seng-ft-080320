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

// 1. check if likeUL has a li with currentCount
//     a. if yes, get that li
//         i. increment li.dataset.number + 1
//     b. if no, create new li
//         i. with new dataset.number and likes
//         ii. append to Ul
let existLi = likeUl.querySelector(`[data-number='${currentCount()}']`);
if (existLi) {
    let numLikes = existLi.dataset.likes.innerText;
  numLikes = parseInt(numLikes) + 1;
 existLi.dataset.likes.innerText = numLikes;

} else {
    let likeLi = document.createElement("li");     
    likeLi.dataset.number = currentCount();
    likeLi.dataset.likes = 0;
    likeLi.innerText = `${likeLi.dataset.number} has ${likeLi.dataset.likes} likes.`;
    likeUl.append(likeLi);
}; 


});