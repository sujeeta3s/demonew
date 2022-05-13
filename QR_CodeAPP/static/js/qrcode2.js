function QrcodeGenerator2(){
    var inputElement=document.getElementById('phone').value;
   
    let qrcode=new QRCode(document.getElementById('qrcode2'),{
        text:inputElement? inputElement:'https://www.resumebuilderweb.com/qr-code-generator',

        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}


function downloadQR2(){
    let dataUrl=document.querySelector('#qrcode2').querySelector('img').src;
    var link=document.createElement('a');
    link.download='qrcode.png';
    link.href=dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

    
}


//copy Image to Clipboard
function copyQR2(){
    let img=document.querySelector('#qrcode2').querySelector('img');
    const canvas=document.createElement('canvas');
    canvas.width=img.width;
    canvas.height=img.height;
    canvas.getContext('2d').drawImage(img,0,0,img.width,img.height);
    canvas.toBlob((blob)=>{
        navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
    },'image/png');
    console.log('success');
}