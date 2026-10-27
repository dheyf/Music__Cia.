const botaoCadastrar = document.getElementById("cadastrar");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

botaoCadastrar.addEventListener("click", function() {
  const emailDigitado = inputEmail.value;
  const senhaDigitada = inputSenha.value; 


if (emailDigitado === "" || senhaDigitada === "") {
    alert("Preencha todos os campos!");
  } 
  
  else if ( emailDigitado === "aluno@email" && senhaDigitada === "2026") {
    alert("Bem vindo a loja");
    window.location.href = "instrumento.html"
  }
});