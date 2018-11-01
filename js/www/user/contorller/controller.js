/**
 * Controller user
 */

//btn submit event
$(function(){
    $("#btnSubmit").click(function(){
        totalQ = $("#questions").children().length;
        for(let i = 0; i < totalQ; ++i){
            let radioButtons = $("#rdoAnswers" + i + " input:radio[name='answer" + i + "']");
            let selected = radioButtons.index(radioButtons.filter(':checked'));
            userAnswer.push(selected);
        }
        chk();
    });
});