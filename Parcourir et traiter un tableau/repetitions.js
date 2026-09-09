let nombres = [4, 7, 2, 7, 9, 4, 5];
let repetition = [];

for (let i = 0; i < nombres.length; i++) {

    for (let a = 0; a < nombres.length; a++) {

        if (nombres[i] == nombres[a] && i != a) {

            let existe = false;

            // N9elbo f repetition
            for (let b = 0; b < repetition.length; b++) {

                if (nombres[i] == repetition[b]) {
                    existe = true;
                }
            }

            // Ila mazal ma kaynch
            if (existe == false) {
                repetition.push(nombres[i]);
            }
        }
    }
}

    console.log(repetition);
    













// let nombres = [4, 7, 2, 7, 9, 4, 5];
// let repetition=[];

// for(let i=0 ; i < nombres.length ; i++){

//     for(let a=0 ; a < nombres.length ; a++){
      
//         if(nombres[i] == nombres[a] && i!=a){

//             repetition.push(nombres[i]);
//         }
//     }
  
// }
// console.log(repetition);
