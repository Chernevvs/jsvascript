let nome = "Ana"
let idade = 17 * 365
let cidade = "Londrina"
let hobbie = "comprar"
let animal = "Mel"
console.log("Oioi meu nome é " + nome + ", tenho " + idade + " dias, moro em " + cidade + ", gosto de " + hobbie + " varias coisas e tenho uma salsichinha que se chama " + animal)



const valor_minimo = 20000
let desconto 
const subtotal = 400
let resultado = subtotal < valor_minimo
console.log(resultado)



if (idade <=18) 
    {console.log("maior de idade") }
else
    {console.log("menor de idade")}


let nota = 9
if (nota <=6) {
    console.log("reprovado")
} else if (nota >=5) {
    console.log("aprovado")
}


let diadasemana = "quarta"
switch (diadasemana) {
    case "seg":
        console.log("pior dia");
        break;
    case "ter":
         console.log("ruim");
        break;
    case "qua":
         console.log("mais ou menos");
         break;
    case "qui":
         console.log("melhoro");
         break;
    case "sex":
         console.log("AEEEEEEEEE");
         break;
    case "sab":
         console.log("AEEEEEEEEEEEEEEEEEEEEEE");
         break;
    case "dom":
         console.log("NAOOO SEGUNDAAAAA"); 
}