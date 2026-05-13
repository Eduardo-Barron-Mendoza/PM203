console.log("Hola Mundo js desde el Servidor")

/* medir el tiempo del proceso */
console.time("miProceso")

for(let i=0; i<10000000000; i++){}

console.timeEnd("miProceso")

/* Objetos tipo tabla*/
let usuarios=[
    {nombre:"Eduardo", edad: 23},
    {nombre:"Lalo", edad: 23},
];

console.table(usuarios)