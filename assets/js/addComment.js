// Promise 기반의 HTTP 통신 라이브러리 
import axios from "axios"

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.querySelector(".jsCommentNumber");

// api를 통해 바꾼 데이터의 내용은 새로고침 했을 때 나타나기 때문에 실시간으로 추가되는 것처럼 보이기 위해 현재화면에서만 유효한 fake 데이터를 만들어줌

const increaseNumber = () => {
    commentNumber.innerHTML = Number(commentNumber.innerHTML) + 1;
}

const addCommentLikeFakeRealTime = (comment) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    // 가장 최근에 추가된 li가 최상위에 오도록.
    commentList.prepend(li);
    increaseNumber();
}


const sendComment = async (comment) => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `http://localhost:4000/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    })
    console.log(response) 
    if(response.status === 200) addCommentLikeFakeRealTime(comment);
}

const handleSubmit = (event) => {
    event.preventDefault();
    let commentInput = addCommentForm.querySelector('input');
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = ''

}


const init = () => {
    addCommentForm.addEventListener("submit", handleSubmit);
}

if(addCommentForm){
    init();
}