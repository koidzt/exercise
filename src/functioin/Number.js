export function formatNumber(length_format,number){
  const stringNum = String(number);
  const lengthFormatMinusLengthNum = length_format - stringNum.length;
  let lengthZero ='';
  for(let i=0; i<lengthFormatMinusLengthNum; i++){
      lengthZero=lengthZero+'0'
  }

  return lengthZero+ stringNum
}


