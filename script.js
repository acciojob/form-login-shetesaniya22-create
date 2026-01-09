function getFormvalue(event) {
    event.preventDefault(); // stop page reload

    let fname = document.querySelector('input[name="fname"]').value.trim();
    let lname = document.querySelector('input[name="lname"]').value.trim();

    if (fname === "" && lname === "") {
        alert("Please enter your name");
        return;
    }

    alert(fname + " " + lname);
}
