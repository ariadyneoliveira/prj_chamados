

function fazerCadastro(){
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    console.log("teste");
    var tipousuario = document.getElementById("tipousuario");
    if (nome.length < 3) {
        alert("Campo nome inválido.");
        nome.focus();
        return false;
    }
    if (email.length<6 ||
		email.indexOf("@")<=0 ||
		email.lastIndexOf(".")<=email.indexOf("@") ||
		(email.lastIndexOf(".")+1)==
		email.lenght) {
            alert("Campo email inválido.");
            email.focus();
            return false;
        }
    if (senha.length < 7 || senha.length > 20) {
        alert("Sua senha precisa ter entre 6 e 20 digitos.");
        senha.focus();
        return false;
    }
    if (tipousuario.options[tipousuario.selectedIndex].value == "Tipo de Usuário"){
        alert("Selecione um tipo de usuário");
        tipousuario.focus();
        return false;
    }

    alert("Cadastro realizado");
    localStorage.setItem(email, JSON.stringify({ "conta" : [nome, email, senha, tipousuario]}));
    checar = JSON.parse(localStorage.getItem(email));
};

function verificarLogin(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    checarLogin = JSON.parse(localStorage.getItem(email))

    if (email == "" || verificarEmail(email)) {
        alert("Email não informado ou não cadastrado");
        email.focus();
        return false;
    }
    if (senha == "" || verificarSenha(senha)) {
        alert("Senha não informada ou incorreta");
        senha.focus();
        return false;
    }
    alert("Login efetuado");
    console.log(verificarSenha(senha))
    return true;
};

function verificarSenha(senha){
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        var kk = JSON.parse(value)
        if (kk["conta"][2] === senha){
            return false;
        }
    }
    return true;
}

function verificarEmail(emailChecar){
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (emailChecar === key){
            return false;
        }
    }
    return true;
};

function validarEmail(email) {
    var email = document.getElementById("email").value;
    if (email.length<6 ||
        email.indexOf("@")<=0 ||
        email.lastIndexOf(".")<=email.indexOf("@") ||
        (email.lastIndexOf(".")+1)==
        email.lenght) {
            alert("Email inválido.");
            email.focus();
        return false;
    }
};

function validarSenha() {
    var senha = document.getElementById("password").value;
    if (senha.length < 7 || senha.length > 20) {
        alert("A senha precisa ter entre 6 e 20 dígitos.");
        senha.focus();
        return false;
    }
};

function validaCricacaoChamado(){
    var titulo = document.getElementById("titulo").value;
    var comment = document.getElementById("comment").value;
    var prioridade = document.getElementById("prioridade");

    if (titulo.length < 4 || titulo.length > 20) {
        alert("Descreva um título");
        return false;
    }

    if (prioridade.options[prioridade.selectedIndex].value == "Prioridade"){
        alert("Selecione a prioridade");
        prioridade.focus();
        return false;
    };

    if(!comment){
        alert("Por favor,descreva o(s) problema(s) encontrado(s) de forma detalhada");
        return false;
    };

    alert("Chamado criado. Aguarde o atendimento!");
};

function validarBusca(){
    var busca = document.getElementById("txtBusca").value;

    if (busca.lenght < 0) {
        alert("Digite o que gostaria de pesquisar!");
        busca.focus();
        return false;
    };
};
