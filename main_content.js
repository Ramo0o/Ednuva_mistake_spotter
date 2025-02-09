
setTimeout(main,2000);
function main(){
    //get the wrong questions as a list 
    const wrongQuestions = createWrongQuestionsList();
    //clear the stoarage to store the latest exam results
    chrome.storage.local.clear();
    //save it to the session storage as an object 
    chrome.storage.local.set({"wrongQuestions":wrongQuestions});
}

function createWrongQuestionsList(){
    let wrongQuestions = [];
    const htmlCollection = [...document.getElementsByClassName("-red-3")];
    for( i in htmlCollection){
        wrongQuestions.push(htmlCollection[i].innerHTML)
    }
    return wrongQuestions
}