setTimeout(main,2000)
function main(){
    //get the quiz number retrieve the corresponding quiz from the storage 
    getQuizNo().then(data=>{
        console.log(data)
        injectClassName(data)
        })
}

async function getQuizNo(){
    const result = await chrome.storage.local.get(["wrongQuestions"]);
    if (result["wrongQuestions"].length === 0){
        alert("عاش يا وحش")
    }
    else{
        return result["wrongQuestions"];
    }

}

function injectClassName(wrongQuestions){
    const elements = document.getElementsByClassName("text-15 lh-1");
    let questionsIndex = 0
    for (i in elements){
        console.log(i,Number(wrongQuestions[questionsIndex]-1))
        if (i == Number(wrongQuestions[questionsIndex]-1)){
            console.log(i)
            elements[i].parentElement.classList.add("-red-3")
            questionsIndex++
        }
    }
}