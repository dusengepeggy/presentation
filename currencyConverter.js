//money converter from rwf to dollars and vice versa
const convert=(amount,currency)=>{
    var newAmount;
    const val=1237.59;
   switch (currency) {
    case '$':
        newAmount=amount / val;
        break;
    case "frw": 
        newAmount=amount * val;
        break;
    default:
        newAmount="Unable to convert to that currency";
        break;
    }
   return newAmount;


}

console.log(convert(100000 ,'frw'));
console.log(convert(100000 ,'$'));