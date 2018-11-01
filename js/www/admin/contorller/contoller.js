/**
 * Controller admin
 */
// get user input
function getIpt(){
    for(let i = 0; i < newId; ++i){  
        let qstBody = $("#qstBody"+i).val(); 
        let radioButtons = $("#rdoAnswers" + i + " input:radio[name='answer" + i + "']");
        let correctIdx = radioButtons.index(radioButtons.filter(':checked'));
        let rdoDiff = $("#rdoDiff" + i + " input:radio[name='diff" + i + "']");
        let idx = rdoDiff.index(rdoDiff.filter(':checked'));
        
        if($("#qstBody"+i).length){// check if element exists.
            let answers = []; 
            for(let j = 0; j < 4; ++j){
                answers.push($("#an"+ i + j).val());
            }

            chkNull(qstBody, correctIdx, i, qstBody, answers, correctIdx, idx); 
        }
    }// end of loop
};
