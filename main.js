// function findNum(num){
//     let s=0;
//     let x=0;
//     while (num>1) {
//         if(num%3==0){
//             num = num/3;
//             s++;
//         }
//         else{
//             x++;
//             break;
//         }
//     }
//     if (x==0) {
//         console.log(s);
//     }
//     else{
//         console.log("siz kiritgan son 3 ning darajas emas!");
//     }
// }
// findNum(81);

let s=0;
    str1="ABC";
    str2="BCA";
    for (let i = 0; i < srt1.length; i++) {
        if (!(str2.includes(str1[i]))) {
            s++;
        }
    }
    if (s>0) {
        console.log(false)
    }
    else{
        console.log(true);
    }
const myfunc = (arr, num) => {
    let sum = 0;
    let k = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] % num == 0){
            sum += arr[i];
            console.log(sum);
            k++;
        }else{
            sum += arr[j] ;
            (sum / (j+1)) == num && k++;
            console.log(sum);
        }
    }
  }
  console.log(k);
};

myfunc([1,3,2,2],2);