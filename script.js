// let user_comment = document.getElementById('user_comment');
// let remainingText = document.getElementById('remain-text');


// function CountRemainingText(){
//     let inputLength = user_comment.ariaValueMax.length;
//     let remaining = inputLength - user_comment.value.length;
//     remainingText.textContent = remaining;

//     if(inputLength >=  30){
//         remainingText.style.color ='red';
//     }else{
//         remainingText.style.color = 'black';
//     }
// }

// user_comment.addEventListener('input', CountRemainingText)



let user_comment = document.getElementById('user-comment');
let remainingText = document.getElementById('remainingText');
const maxLength = 30;

function CountRemainingText() {
    let inputLength = user_comment.value.length;
    let remaining = maxLength - inputLength;
    remainingText.textContent = remaining;

    if (inputLength >= maxLength) {
        remainingText.style.color = 'red';
    } else {
        remainingText.style.color = 'black';
    }
}

user_comment.addEventListener('input', CountRemainingText);
