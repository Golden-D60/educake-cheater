answers = localStorage.getItem('answers')
if (!answers) {
    answers = {}
}
else {
    answers = JSON.parse(answers)
}

const answerText = document.createElement("strong");

function answer() {
    const qtext = document.getElementsByClassName("question-text")[0].children[0]
    const a = document.getElementsByClassName("pre-line fs-5 d-inline")[0]
    const ans = document.getElementsByName("answer")[0]
    const sca = document.getElementsByClassName("selected bg-purple")[0]
    if (a && a.textContent.length > 0) {
        answers[qtext.textContent] = a.textContent
    }
    if (answers[qtext.textContent]) {
        answerText.textContent = "The answer is " + answers[qtext.textContent]
        if (qtext.childElementCount < 2) {
            qtext.after(answerText)
        }
        return
    }
    if (ans && ans.value.length > 0) {
        answers[qtext.textContent] = "\"" + ans.value + "\""
    }
    if (sca && sca.children[0].textContent.length > 0) {
        answers[qtext.textContent] = "\"" + sca.children[0].textContent + "\""
    }
    localStorage.setItem('answers', JSON.stringify(answers))
}

setInterval(answer, 3)