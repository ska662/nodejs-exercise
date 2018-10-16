function count(string,char) {
 var re = new RegExp(char,"m");
 return string.match(re).length;
}

var str = 'gamil.com,m';
console.log(count(str,'m'));