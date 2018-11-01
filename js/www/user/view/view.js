/**
 * View user
 */
var qstArr = [];
var userChioce;

// which qs to load
function chooseToLoad(){
    //hide submit btn
    hideSubmit();
    showScore("What difficult level of question you want?", false);
    $("#qst-top").append("<br><button type='button' class='btn btn-dark btn-sm btn-hard' onclick='userChoice(true)' >Hard</button>" + 
    "<button type='button' class='btn btn-dark btn-sm btn-easy' onclick='userChoice(false)'>Easy</button>");
}

// create questions
function createQ(total){
    for(let i = 0; i < total; ++i){
    //create quesiton body
        let newQ = $("<div id=qst" + i + " class='border-q'>");
        let bodyQ = $("<div class='margin'>");
        let newLbl = $("<label class='float-left'>Question " + (i + 1) 
        + "&nbsp: </label><label class='float-right'>" + qstArr[i].tag + " </label><br>");
        let newQBody = $("<p class='margin ' id='qstBody" + i + "'>" + qstArr[i].body + "</p>");
        bodyQ.append(newLbl, newQBody);
    // create question options
        let answers = $("<div class='margin rdo-center'>");
        answers.attr("id", "rdoAnswers" + i); 
        for(let j = 0; j < 4; ++j){
            let radio = $("<input type='radio'class='space-right' >");
            radio.attr("name", "answer" + i);
    //options txt
            let answerTxt = $("<label class='answer-txt margin option-border'>"+ qstArr[i].asrs[j] +"</label>");
            answerTxt.attr("id", "an" + i + j);
            let br = $("<br>");
            answers.append(radio, answerTxt, br);
        }
        newQ.append(bodyQ, answers);
        $("#questions").append(newQ);
    }
}

// show total score on the top
function showScore(score, isfreeze){
    $("#qst-top").html(score);
    $("#qst-top").attr("class", "dis-msg");
    $(window).scrollTop($("#qst-top").position().top);
    isfreeze?freezPage():"";
}

// hide score dialog
function hideScore(){
    $("#qst-top").html("");
    $("#qst-top").attr("class", "");
}

//freeze page all inputs
function freezPage(){
    $(':button').prop('disabled', true);
    $(':input[type=radio]').prop('disabled', true);
}

//show errs
function showErr(idxQ =[]){
    if(idxQ == undefined){
        // user all correct
        calScore();
    }else{ 
        for(let i = 0; i < idxQ.length; ++i){
            $("#qst" + idxQ[i]).attr("class", "err-q");
            //show correct answer
        }
        showRight();
        calScore();
    }
}

// show right answers
function showRight(){
    for(let i = 0; i < errs.length; ++i){
        let correctIdx = qstArr[errs[i]].idx;
        $("#an" + errs[i] + correctIdx).attr("class", "answer-txt margin option-border corr-idx");
    }
}

// hide btn submit
function hideSubmit(){
    $("#btnSubmit").hide();
}

//show btn submit
function showSubmit(){
    $("#btnSubmit").show();
}