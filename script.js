let user_comment = document.getElementById('user-comment');
let remainingText = document.getElementById('remainingText');
const maxLength = 70;

function CountRemainingText() {
    let inputLength = user_comment.value.length;
    let remaining = maxLength - inputLength;
    remainingText.textContent = remaining;

    if (inputLength >= 50) {
        remainingText.style.color = 'red';
    } else {
        remainingText.style.color = 'black';
    }
}

user_comment.addEventListener('input', CountRemainingText);
