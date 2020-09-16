document.addEventListener("DOMContentLoaded", (e) => {

    let intervalID = "";

    const startCounter = () => {
        intervalID = setInterval(() => {changeCounter(1)}, 1000);
    }
    
    const changeCounter = (num) => {
        let count = document.querySelector('#counter');
        count.innerText = parseInt(count.innerText) + num;
    };
    
    const currentCount = () => {
        return document.querySelector('#counter').innerText;
     };
    
     const disableButtons = (bool) => {
        const getButtons = document.querySelectorAll("button");
        for (const button of getButtons) {
            button.disabled = bool;
        }
    };

    const clickHandler = () => {
        document.addEventListener("click", e => {
            if (e.target.matches("#plus")) {
                changeCounter(1);
            } else if (e.target.matches("#minus")) {
                changeCounter(-1);
            } else if (e.target.matches("#heart")) {
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
                }
            } else if (e.target.matches("#pause")) {
                if (e.target.innerText === "pause") {
                    clearInterval(intervalID);
                    e.target.innerText = "resume";
                    disableButtons(true);
                    e.target.disabled = false;
                } else {
                    startCounter();
                    e.target.innerText = "pause";
                    disableButtons(false);
                };
            }
        })
    }

    const submitHandler = () => {
        document.addEventListener("submit", (e) => {
            if (e.target.matches("#comment-form"))
            e.preventDefault();

            const form = e.target;
            const comment = form["comment"].value;
            
            const commentDiv = document.querySelector("div.comments");
            const newComment = document.createElement("p");
            newComment.innerText = comment;
            commentDiv.append(newComment);
        })
    }

    startCounter();
    clickHandler();
    submitHandler();
});