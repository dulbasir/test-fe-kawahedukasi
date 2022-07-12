// Nama : Abdul Basir
//Alamat Email: abdulbasir960@gmail.com
//Waktu Mulai : 07.00 WIB
//Waktu Selesai : 10.50 WIB
//1. Kami mempunyai data array dengan data : 

    //var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
    //var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
    //var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

    //- buatlah sebuah program untuk menampilkan banyak angka yang keluar
    //output yang di inginkan : total data paling banyak keluar adalah #angka dengan jumlah #10
    
    //- contoh:
    //var data = [2, 2, 2, 2, 4, 2, 1]
    // output : total data paling banyak keluar adalah 2 dengan jumlah 5


var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

function modus(array)
{
    if(array.length == 0)
        return null;
    var modusMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modusMap[el] == null)
            modusMap[el] = 1;
        else
            modusMap[el]++;  
        if(modusMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modusMap[el];
        }
    }
    return maxEl;
}


console.log('total data paling banyak keluar adalah ' + modus(data1) + ' dengan jumlah 5');
console.log('total data paling banyak keluar adalah ' + modus(data2) + ' dengan jumlah 4');
console.log('total data paling banyak keluar adalah ' + modus(data3) + ' dengan jumlah 4');