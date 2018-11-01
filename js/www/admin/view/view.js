 /**
 * View admin
 */
var qstArr = [];
var newId = 0;
var temp = [];
// event for add new questions.
$(function(){
    $("#addNew").click(function(){
        createQ();
        $("#qst-top").html("");
        $("#qst-top").attr("class", "");
        hideBorder();
    });
});

// creating questions
function createQ(){
// create new question body
    let newQ = $("<div id=qst" + newId + " class='border-q'>");
    let bodyQ = $("<div class='margin'>");
    let newLbl = $("<label class='float-left'>Question Text*:&nbsp;</label>");
// new del btn
    let btnDel = $("<button type='button' class='btn btn-danger btn-sm btn-del float-right' >delete</button>");
    btnDel.attr("id", "btn-del" + newId);
    bodyQ.append(newLbl, btnDel);
// new txt area
    let newTxt = $("<textarea placeholder='Enter question here' class='margin txt-border'></textarea>")
    newTxt.attr("id", "qstBody"+ newId);
// new diffculty btn
    let newDiffcult = $("<div class='margin rdo-center' id='rdoDiff" + newId + "'>");
    let rdoDiff = $("<div class='custom-control custom-radio custom-control-inline'>" +
    "<input type='radio' value='Hard' id='hard" + newId + "' name='diff" + newId + "' class='custom-control-input'>" +
    "<label class='custom-control-label' for='hard" + newId + "'>Hard</label></div>" +
    "<div class='custom-control custom-radio custom-control-inline'>" +
    "<input type='radio' value='Easy' id='easy" + newId + "' name='diff" + newId + "' class='custom-control-input'>" +
    "<label class='custom-control-label' for='easy" + newId + "'>Easy</label></div>");
    newDiffcult.append(rdoDiff);
// create new question options
    let answers = $("<div class='margin rdo-center'>");
    answers.attr("id", "rdoAnswers" + newId);
// new radio btns
    for(let i = 0; i < 4; ++i){
        let radio = $("<input type='radio'class='space-right' >");
        radio.attr("name", "answer" + newId);
//options txt
        let answerTxt = $("<input type='text' class='answer-txt margin option-border'>");
        answerTxt.attr("id", "an" + newId + i);
        let br = $("<br>");
        answers.append(radio, answerTxt, br);
    }

    
    newQ.append(bodyQ, newTxt, newDiffcult, answers);
    $("#questions").append(newQ);
    $(window).scrollTop($("#qst"+newId).position().top);

    ++newId;
    
    btnDelEvent();
}

//delete btn event
function btnDelEvent(){  
    $(".btn-del").on('click', function(event) {
        let id = event.target.id;
        id = id.substring(id.length - 1);   
        $("#qst" + id).remove(); 
        //remove from arr
    });  
}

// show err border
function showBorder(qNum){
    $("#qst" + qNum).attr("class", "err-q");
}

// show msg box on the top
function disMsg(msg){
    $("#qst-top").html(msg);
    $("#qst-top").attr("class", "dis-msg");
    $(window).scrollTop($("#qst-top").position().top);
}

//hide err border
function hideBorder(qNum){
    $("#qst" + qNum).attr("class", "");
}

//no more inputs
function freezePage(){
    $(':button').prop('disabled', true);
    $(':input').prop('disabled', true);
}

//btn save event
$(function(){
    $("#btnSave").click(function(){
        getIpt(); 
        storeQuiz();  
    });
});