function coletarDados() {
    let alturas = [];
    let generos = [];
    

    for (let i = 0; i < 15; i++) {
        let altura = parseFloat(prompt(`Digite a altura da pessoa ${i+1} (em metros):`));
        let genero = prompt(`Digite o gênero da pessoa ${i+1} (M para Masculino / F para Feminino):`).toUpperCase();
        
        alturas.push(altura);
        generos.push(genero);
    }


    let maiorAltura = Math.max(...alturas);
    let menorAltura = Math.min(...alturas);


    let somaMasc = 0;
    let qtdMasc = 0;
    for (let i = 0; i < alturas.length; i++) {
        if (generos[i] === "M") {
            somaMasc += alturas[i];
            qtdMasc++;
        }
    }
    let mediaMasc = qtdMasc > 0 ? (somaMasc / qtdMasc).toFixed(2) : "Nenhum homem informado";


    let qtdFem = generos.filter(g => g === "F").length;


    console.log("Maior altura do grupo:", maiorAltura);
    console.log("Menor altura do grupo:", menorAltura);
    console.log("Média de altura dos homens:", mediaMasc);
    console.log("Número de mulheres:", qtdFem);
}
