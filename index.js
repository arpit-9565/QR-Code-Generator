document.querySelector("button").addEventListener("click",function(){
    var data=document.querySelector("input").value;
    var url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data;
    
    document.getElementById("qrImage").src=url;

    document.getElementById("qrImage").alt=data;
});

function downloadImage() {
    var imageUrl = document.querySelector('img').src;
    var filename = 'QR_Code.jpg';
    
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading image:', error));
}
