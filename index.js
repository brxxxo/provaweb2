//---1---//

function determinarPrimo(Number) {
    if (Number <= 1) {
        return false;
    }
    const limit = Math.floor(Math.sqrt(Number));
    for (let i = 2; i <= limit; i++) {
      if (Number % i === 0) {
        return false;
      }
    }
        return true;
  }
  const userInput = prompt("Digite um número: ");
  const Number = parseInt(userInput);
  if (isNaN(Number)) {
    alert("Entrada inválida! Por favor, digite um número válido.");
  } else {
    if (determinarPrimo(Number)) {
      console.log(Number + " é um número primo.");
    } else {
      console.log(Number + " não é um número primo.");
    }
  }
  const primes = [];
  for (let i = 1; i <= 1000; i++) {
    if (determinarPrimo(i)) {
      primes.push(i);
    }
  }
  console.log(primes);
  
//---2---//

 function criarSenha(senha) {
    if (senha.length < 8) {
      return "A senha deve possuir pelo menos 8 caracteres.";
    }
    if (!/[A-Z]/.test(senha)) {
      return "A senha deve possuir pelo menos uma letra maiúscula.";
    }
    if (!/[a-z]/.test(senha)) {
      return "A senha deve possuir pelo menos uma letra minúscula.";
    }
    if (!/[0-9]/.test(senha)) {
      return "A senha deve possuir pelo menos um número.";
    }
    return "senha validada e  criada com sucesso.";
  }
  const userInput = prompt("Digite uma senha: ");
  const senha = userInput.trim();
  console.log(criarSenha(senha));
  
//---3---//
 
function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
    return n * calcularFatorialRecursivamente (n - 1);
}
function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
    return calcularFatorialRecursivamente(fatorial);
}
const userInput = prompt("Digite um número:");
  const Number = parseInt(userInput);
 
console.log(calcularFatorialRecursivamente(Number));

//---4---//

function QuadradoPerfeito(num) {
    const raiz = Math.sqrt(num);
    if (Number.isInteger(raiz)) {
      return true;
    } else {
      return false;
    }
  }
  const userInput = prompt("Digite um número: ");
  const Number = parseInt(userInput);
  console.log(QuadradoPerfeito(Number));
