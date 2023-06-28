const name = 'Alessio';
const age = 31;
const email = 'alessio@boolean.careers';

const personAlessio = {
    name: name,
    age: age,
    email: email
};

console.log(personAlessio);

const personAlessioSimple = {
    name,
    age,
    email
};

console.log(personAlessioSimple);

const nomeDellaChiaveNome = 'name';
const nomeDellaChiaveEta = 'age';
const nomeDellaChiaveEmail = 'email';

const personAlessioComplex = {
    [nomeDellaChiaveNome]: name,
    [nomeDellaChiaveEta]: age,
    [nomeDellaChiaveEmail]: email
};

console.log(personAlessioComplex);


// const customKey = prompt('Inserisci la chiave:');
// personAlessioComplex[customKey] = 'Valore della nuova chiave';

// console.log(personAlessioComplex);


const car = {
    brand: 'Hyundai',
    model: 'i10',
    plate: 'AB1234CD',
    sold: true,
    owners: [
        'Nunz',
        'Boco',
        'Bon',
        'DC'
    ]
};

// const model = car.model;
// const targa = car.targa;
// const brand = car.brand;
// const sold = car.sold;
// const owners = car.owners;

// OPPURE

const { model, targa, brand, sold, owners } = car;

console.log(brand, model, targa, sold, owners);

const arrayMisto = [
    1,
    true,
    'stringa',
    {
        a: 'A1',
        b: 'B1',
    },
    {
        b: 'B2',
        a: 'A2',
    },
    {
        a: 'A3',
        b: 'B3',
    }
];

console.log(arrayMisto[1]);
console.log(arrayMisto[4]);
console.log(arrayMisto[4].b);


const arrayDiOggetti = [
    {
        brand: 'Hyundai',
        model: 'i10',
        plate: 'AB123CD',
        sold: true
    },
    {
        brand: 'BMW',
        model: 'Z4',
        plate: 'IJ432KL',
        sold: false
    }
];

console.log(arrayDiOggetti.brand);
console.log(arrayDiOggetti.length);
console.log(arrayDiOggetti[1].brand);












// const console = {
//     log(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             const argomento = arr[i];
//             this.printInConsole(argomento);
//         }
//     },
//     printInConsole(qualcosa) {
//         // Stampa qualcosa in console
//     }
// };

function sum(num1, num2) {
    return num1 + num2;
}

console.log(
    sum(sum(1, 2), sum(3, 4))
);

function sumWArray(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    return sum;
}

console.log(
    sumWArray([1, 2, 3, 4])
);

// ... = operatore spread
// ...numbers = parametro rest

// function sumFinal(num1, num2, num3, num4, num5, num6........) {
function sumFinal(...numbers) {
    /* 
        numbers = [
            1,
            2,
            3,
            4
        ]
    */
    console.log('numbers', numbers, typeof numbers);

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}


console.log(
    'RISULTATO DI SUMFINAL 1',
    sumFinal(1, 2, 3, 4)
);

console.log(
    'RISULTATO DI SUMFINAL 2',
    sumFinal(5, 6)
);


function operationOnNumbers(gino, ...roba) {

    let result = 0;

    switch (gino) {
        case '+':
            for (let i = 0; i < roba.length; i++) {
                const element = roba[i];
                result += element;
            }
            break;

        case '-':
            for (let i = 0; i < roba.length; i++) {
                const element = roba[i];
                result -= element;
            }
            break;
    }

    return result;

}

console.log(
    'Risultato di operationOnNumbers con la somma',
    operationOnNumbers('+', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
);

console.log(
    'Risultato di operationOnNumbers con la sottrazione',
    operationOnNumbers('-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
);

console.log(
    'Risultato di operationOnNumbers con la somma',
    operationOnNumbers('+', 16, 7, 8, 9, 10)
);

console.log(
    'Risultato di operationOnNumbers con la sottrazione',
    operationOnNumbers('-', 1, 2, 3, 4, 5, 6, 10)
);










const obj = {
    nome: 'palla',
    peso: 50
};
console.log('obj PRE', obj); 
const copyObj = {
    ...obj,             // nome: 'palla', peso: 50,
    colore: 'blue'
};
console.log('copyObj', copyObj); 
console.log('obj MIDDLE', obj);

const copyObjDue = obj;         // Sto copiando il riferimento, non sto clonando
copyObjDue.colore = 'blue';
console.log('copyObjDue', copyObjDue); 
console.log('obj POST', obj);   // Qui obj è modificato



const arrUno = [1, 2, 3];
console.log('arrUno PRE', arrUno); 
const arrDue = arrUno;          // Sto copiando il riferimento, non sto clonando
arrDue.push(4);
console.log('arrDue', arrDue); 

console.log('arrUno POST', arrUno);     // Qui arrUno è modificato
