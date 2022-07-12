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
     
console.log('output 1')

var string = '';
for(var i = 0; i < 6; i++){
   for(var j = 0; j <= i; j++){
       string += '*';
   }
   string += '\n';
}
console.log(string)

console.log('output 2')

var string = '';
for(var i = 5; i > 0; i--){
   for(var j = 0; j < i; j++){
       string += '*';
   }
   string += '\n';
}
console.log(string)
