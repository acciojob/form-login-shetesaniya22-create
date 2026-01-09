function getFormvalue() {
    //Write your code here
	event.preventDefault();
	let fname=document.querySelector('input[name="fname"]')
	let lname=document.querySelector('input[name="lname"]')
	
	if(fname="" && laname=""){
		alert("Please enter your name")
		return;
	}
	alert(fname+" "+lname);


}
