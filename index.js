/**
 * index login page
 */

// btns submit lisnters
$(()=>{
	//btnSubmit
	$('#btnSubmit').click(()=>{
		console.log('submit pressed');
	});

	//Register btn
	$('#btnRegi').click(()=>{
		regiWin();
	});
});

function loginWin(){
	// email input field
	let emailDiv = $('<div class="form-group" id="emailDiv">'); //show err id
	let emailLbl = $('<label for="loginEmail">Email address</label>');
	let emailIpt = $('<input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" required>');
	let emailHelp = $('<small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>');
	emailDiv.append(emailLbl, emailIpt, emailHelp);

	// password input field
	let pwdDiv = $('<div class="form-group" id="pwdDiv">'); //show err id
	let pwdLbl = $('<label for="loginPwd">Password</label>');
	let pwdIpt = $('<input type="password" class="form-control" id="loginPwd" placeholder="Password" required>');
	let regiDiv = $('<div id="regi">');
	pwdDiv.append(pwdLbl, pwdIpt);
	regiDiv.append(pwdDiv);

	//btns div
	let btnDiv = $('<div class="action-btns mx-auto">');
	let regiBtn = $('<button type="button" class="btn btn-info btn-lg float-left" id="btnRegi">Register</button>');
	let loginBtn = $('<button type="submit" class="btn btn-primary btn-lg float-right" id="btnSubmit">&nbsp;Submit&nbsp;</button>');
	btnDiv.append(regiBtn, loginBtn);

	// append to root div
	$('#loginWin').append(emailDiv, regiDiv, btnDiv);
}

function regiWin(){
	// password confirm input field
	let pwdDiv = $('<div class="form-group" id="pwdDiv">'); //show err id
	let pwdLbl = $('<label for="loginPwd">Confirm your password:</label>');
	let pwdIpt = $('<input type="password" class="form-control" id="loginPwd" placeholder="Password" required>');
	pwdDiv.append(pwdLbl, pwdIpt);
	$('#regi').append(pwdDiv);
}