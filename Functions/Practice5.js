function vowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i] =='a' || str[i]=='e' || str[i]=="u"  || str[i]=='i' || str[i]=='o')
            count++;
    }
    return count;


}
let str = prompt("Enter a string: ")
let result = vowels(str.toLowerCase())
console.log(result)