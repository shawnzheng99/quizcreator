 /**
  * model admin
  */
 var isOk = [];
 // firebase init
 const db = firebase.firestore();
 // check user input, not null
 function chkNull(body, idx, qNum, qstBody, answers, correctIdx, idxDiff) {
     if (body == undefined || body == '' || idx == -1 || idxDiff == -1) {
         showBorder(qNum);
         isOk.push(false);
     } else {
         hideBorder(qNum);
         isOk.push(true);
         let tag = '';
         idxDiff == 0 ? tag = "Hard" : tag = "Easy";
         let qst = {
             body: qstBody,
             asrs: answers,
             idx: correctIdx,
             tag: tag
         };
         qstArr.push(qst);
     }
 }

 function storeQuiz() {
     let save = true;
     isOk.forEach(function (i) {
         i == false ? save = false : ""; //do nothing;
     });
     if (qstArr.length == 0) {
         save = false;
     }
     if (save == true) {
         //save to locaStorage
         console.log("saved!");
         disMsg("Your quiz is created!");
         //localStorage.setItem('questions', JSON.stringify(qstArr)); 
         /**
          * save qs to db
          */
         send(qstArr);
         freezePage();
     } else {
         disMsg("Not saved, Please fill the empty in the red boxes.");
         isOk = [];
         qstArr = [];
     }
 }

 /**
  * save data to db.
  */

 function send(qst) {
     let qstdata = [];
     let curDate = currDate();
     for (let i = 0; i < qst.length; ++i) {
         qstdata[i] = {
             body: qst[i].body,
             options: JSON.stringify(qst[i].asrs),
             idx: qst[i].idx,
             tag: qst[i].tag
         };
     }
     if (isFirebase) {
        //console.log('firebase go')
        db.collection('qsts').doc('uid').set({
            [curDate]: qstdata // use current date as key, the original questions will be overwritten
        })
        .then(docRef =>{
            console.log('Quiz saved to Firestore');
        }).catch(e=>{
            console.error('fireStore err===>', e);
        })
     } else {
         // MySql version    
         const url = '/qs/save';
         let data = { // convert to obj and send to db
             qst: qstdata
         };
         //send to server
         $.post(url, data, function (data, status) {
             console.log("from server ", data);
         });

     }

 }

 function currDate(){
     let curr = new Date();
     let month = curr.getMonth() + 1;
     return ''+curr.getFullYear()+ month + curr.getDate();
 }