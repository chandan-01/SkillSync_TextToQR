var btn = document.querySelector("button");
var outputArea = document.querySelector('.outputArea');


btn.addEventListener("click", function () {
    const text = document.querySelector('#inputText').value;
    if (text !== "") {
        //genrate url 
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;

        // display output
        document.querySelector('img').setAttribute('src', url);
        //add border over qr
        outputArea.style.border = "2px solid red";
    }
    else outputArea.textContent="Please Type Something";

})