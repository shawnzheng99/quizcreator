/**
 * Model user
 */
var errs = [];
var userAnswer = [];

// init the page
function init(){
    //show submit btn
    showSubmit();
    //hide score
    hideScore();
    loadFromDb(()=>{
        loadQ();
    })
}

// get question from db
function loadFromDb(cb){
    const url = '/qs/getq';
    let data = {
        tag: userChioce
    };
    $.get(url, data, (data, status) =>{
        console.log("data incoming from db: ", data);
        if(status != "success"){
            console.log("check connection: ", status);
        }
        for(let i = 0; i < data.length; ++i){
            let option = JSON.parse(data[i].answers);
            qstArr[i] = {
                body: data[i].body,
                asrs: option,
                idx: data[i].correct,
                tag: data[i].tag
            };
        }
        cb(); // callback in a callback
    });
    
}

// load questions
function loadQ(){
    //load from local storage
    //let storage = localStorage.getItem('questions');
    //qstArr = JSON.parse(storage);
    
    console.log("loadQ qstArr", qstArr);
    if(qstArr.length == 0){
        showScore("You don't have any quizes", true);
        hideSubmit();
    }else{
        createQ(qstArr.length);
    }

}

// user choice btn lisenter
function userChoice(isHard){
    if(isHard){
        userChioce = "Hard";
        init();
    }else{
        userChioce = "Easy";
        init();
    }
}

// chk answers.
function chk(){
    for(let i = 0; i < qstArr.length; ++i){
        if(userAnswer[i] != qstArr[i].idx){ // i == q's index
            errs.push(i);
        }
    }
    console.log("err ", errs)
    showErr(errs);
}

// calculates score, shows in %
function calScore(){
    console.log("calculating score...");
    let score = (1 - errs.length / qstArr.length) * 100;
    score = score.toFixed(0);
    showScore("Your score: "+score + "%", true);
}

