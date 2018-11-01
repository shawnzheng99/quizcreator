 /**
 * model admin
 */
var isOk = [];

// check user input, not null
function chkNull(body, idx, qNum, qstBody, answers, correctIdx, idxDiff){
    if(body == undefined || body == '' || idx == -1 || idxDiff == -1){
        showBorder(qNum);
        isOk.push(false);
    }else{
        hideBorder(qNum);
        isOk.push(true);
        let tag = '';
        idxDiff == 0?tag = "Hard":tag = "Easy"; 
        let qst = {body: qstBody,
            asrs: answers,
            idx: correctIdx,
            tag: tag
        };
        qstArr.push(qst);
    }
}

function storeQuiz(){
    let save = true;
    isOk.forEach(function(i){
        i == false ? save = false:""; //do nothing;
    });
    if(qstArr.length == 0){
        save = false;
    }      
    if(save == true){
        //save to locaStorage
        console.log("saved!");
        disMsg("Your quiz is created!");
        //localStorage.setItem('questions', JSON.stringify(qstArr)); 
        /**
         * save qs to db
         */
        send(qstArr);
        freezePage();  
    }else{
        disMsg("Not saved, Please fill the empty in the red boxes.");
        isOk = [];
        qstArr = [];
    }
}

function send(qst){
    let qstdata = [];
    for(let i = 0; i < qst.length; ++i){
        qstdata[i] = {
            body: qst[i].body,
            options: JSON.stringify(qst[i].asrs),
            idx: qst[i].idx,
            tag: qst[i].tag
        };
    }
    const url = '/qs/save';
    let data = { // convert to obj and send to db
        qst: qstdata
    };
    //send to server
    $.post(url, data, function(data, status){
        console.log("from server ", data);
    });

}
