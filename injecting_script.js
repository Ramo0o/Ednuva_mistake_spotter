
setTimeout(main,2000)
function main(){
    //get the quiz number retrieve the corresponding quiz from the storage 
    getQuizData().then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
            console.log(data);
            injectClassName(data);
        } else {
            console.warn("No wrong questions found or invalid data.");
        }
    });
}




async function getQuizData(){
    const result = await chrome.storage.local.get(["wrongQuestions"]);
    if (result["wrongQuestions"].length === 0){
        alert("عاش يا وحش")
    }
    else{
        return result["wrongQuestions"];
    }
}





function injectClassName(wrongQuestions){
    //get the buttons of the question numbers
    const elements = document.getElementsByClassName("text-15 lh-1");
    //intialize an index for iterating over the wrongQuestions array instead of an nested for loops to save time and power 
    let questionsIndex = 0
    //iterate over the buttons of the questions and check wether or not they match with the questionindex and if so inject the class into that element

    for (i in elements){
        console.log(i,Number(wrongQuestions[questionsIndex]-1))
        if (i == Number(wrongQuestions[questionsIndex]-1)){
            elements[i].parentElement.classList.add("-red-3")
            questionsIndex++
        }
    }
}