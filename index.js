
// A executer avec node dans le terminal

var qrcode = require('qrcode-terminal');

qrcode.generate('This will be a small QRCode, eh!', {small: true}, function (qrcode) {
    console.log(qrcode)
});
