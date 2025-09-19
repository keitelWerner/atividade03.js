let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
console.log(nomes[2]);

nomes.push("Fernanda");
nomes.unshift("Gabriel");
console.log(nomes);

nomes.pop();
console.log(nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);

let lista = [1, 3, 5, 7, 9];
let maioresQue5 = lista.filter(num => num > 5);
console.log(maioresQue5);