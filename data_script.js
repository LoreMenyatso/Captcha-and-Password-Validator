let saveFile = () => {
    // Get the data from each element on the form.
    
    const username = document.getElementById("userEntry");
    const password = document.getElementById("PassEntry");

    // This variable stores all the data.
    let data = "\r User Name: " + username.value + 
    " \r\n " + "Password: " + password.value;

    
    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });

    ///
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};