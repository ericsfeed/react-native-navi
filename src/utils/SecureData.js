var RSAKey = require('react-native-rsa');
const bits = 2048;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
var publicKey = rsa.RSAGetPublicString(); // return json encoded string
var privateKey = rsa.RSAGetPrivateString(); // return json encoded string

var rsa = new RSAKey();
rsa.setPublicString(publicKey);
var originText = 'sample String Value';
var encrypted = rsa.encrypt(originText);
console.log('encrypted:');
console.log(encrypted);

rsa.setPrivateString(privateKey);
var decrypted = rsa.decrypt(encrypted); // decrypted == originText
console.log('decrypted:');
console.log(decrypted);
