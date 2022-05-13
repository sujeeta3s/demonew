function QrcodeGenerator1(){
    var inputElement=document.getElementById('site_Url').value;
   
    let qrcode=new QRCode(document.getElementById('qrcode1'),{
        text:inputElement? inputElement:'https://www.resumebuilderweb.com/qr-code-generator',

        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}


function downloadQR1(){
    let dataUrl=document.querySelector('#qrcode1').querySelector('img').src;
    var link=document.createElement('a');
    link.download='qrcode.png';
    link.href=dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

    
}


//copy Image to Clipboard
function copyQR1(){
    let img=document.querySelector('#qrcode1').querySelector('img');
    const canvas=document.createElement('canvas');
    canvas.width=img.width;
    canvas.height=img.height;
    canvas.getContext('2d').drawImage(img,0,0,img.width,img.height);
    canvas.toBlob((blob)=>{
        navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
    },'image/png');
    console.log('success');
}