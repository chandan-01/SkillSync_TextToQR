var btn = document.querySelector("button");


btn.addEventListener("click", function () {
    const text=document.querySelector('#inputText').value;

    //genrate url 
    const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text;
    

    // display output
document.querySelector('img').setAttribute('src',url);
})