// Nama : Abdul Basir
//Alamat Email: abdulbasir960@gmail.com
//Waktu Mulai : 07.00 WIB
//Waktu Selesai : 10.50 WIB
//3. buatlah program looping untuk menampilkan output di bawah 

 //  output 1:  

  //  *
  //  **
  //  ***
  //  ****
  //  *****
   // ******

   // output 2: 

     //       *
     //      **
     //     ***
     //    ****
     //   *****
     
console.log('Output 1')
function output1 (baris){
    let pola = '';
for(let i = 1; i <= baris; i++){
    for(let j = 1; j <= i; j++){
        pola += '*';
    }
    pola += '\n';
}
return pola;
}
console.log(output1(6));

console.log('Output 2')
function output2 (baris){
    let pola = '';
for(let i = 1; i <= baris; i++){
    for(let j = baris - 1; j >= i; j--){
        pola += ' ';
    }
    for(let k = 1; k <= i; k++){
        pola += '*';
    }
        pola += '\n';
}
return pola;
}
console.log(output2(5));
