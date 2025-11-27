export function encode(plainText: string): string {
   return translate(plainText).reduce((sum, cur, index) => sum + (index === 0 || index % 5 ? cur : " " + cur),"");
}

export function decode(cipherText: string): string {
    return translate(cipherText).join("");
}

function translate(input: string) : string []{
   return Array.from(input.replace(/\W/g, "").toLowerCase()).map(char => 
    char.match(/\d/) ? char : String.fromCharCode((25 - (char.charCodeAt(0) - 97)) + 97)
   );
}

console.log(encode("Abc 123"));
console.log(decode("zyx 123"));