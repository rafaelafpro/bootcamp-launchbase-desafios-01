const nome = 'Rafael';
const peso = 80;
const altura = 1.70;

const imc = peso / (altura*altura);

if (imc > 29.9){
    console.log(`${nome}, você está acima do peso.`);
}
else {
    console.log(`${nome}, você não está acima do peso`);
}

