export function encode(plainText: string): string {
  let cipherText = ''; 
  plainText = plainText.toLowerCase();
  for(let i of plainText) {
      if(i >= 'a' && i <= 'z') {
         let c = String.fromCharCode((25 - (i.charCodeAt(0) - 97)) + 97);
         cipherText += c;
      }
      else if(i >= '0' && i <= '9'){
          cipherText += i;
      }
   }
   let cnt = 0;
   let result = '';
   console.log(cipherText);
   for(let i = 0;i < cipherText.length;i++) {
      cnt++;
      if(cnt == 5){
          result += cipherText[i] + ' ';
          cnt = 0;
      }else{
        result += cipherText[i];
      }
   }
   return result.trim();
}

export function decode(cipherText: string): string {
  let plainText = '';
  for(let i of cipherText) {
    if(i == ' ') continue;
    if(i >= 'a' && i <= 'z') {
        let c = String.fromCharCode((25 - (i.charCodeAt(0) - 97)) + 97);
        plainText += c;
    }
    else plainText += i;
  }
  return plainText;

}

console.log(encode("Abc 123"));
console.log(decode("zyx 123"));