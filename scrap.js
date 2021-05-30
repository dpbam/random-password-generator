var lowerChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
var result = ""
var chaactersLength = characters.length;

for ( var i = 0; i < 5 ; i++ ) {
    result += lowerChars.charAt(Math.floor(Math.random() * chaactersLength));
}

console.log(result)