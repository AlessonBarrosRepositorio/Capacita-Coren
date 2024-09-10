function formatarCelular(input) {
    var ultimoNum = input.value.slice(-1);
    if (isNaN(ultimoNum)) {
      input.value = input.value.slice(0, -1); 
      return;
    }

    var limparCaracteres = input.value.replace(/[\(\)\-\s]/g, '');

    var quantidade = limparCaracteres.length;

    var formattedValue = '';
    for (var i = 0; i < quantidade; i++) {
      if (i == 0) {
        formattedValue += '(' + limparCaracteres[i];
      } else if (i == 1) {
        formattedValue += limparCaracteres[i] + ')';
      } else if (i == 7) {
        formattedValue += '-' + limparCaracteres[i];
      } else {
        formattedValue += limparCaracteres[i];
      }
    }

    input.value = formattedValue;
  }

  function formatarCPF(input) {
    var ultimoNum = input.value.slice(-1);
    if (isNaN(ultimoNum)) {
      input.value = input.value.slice(0, -1);
      return;
    }

    var limparCaracteres = input.value.replace(/[^\d]/g, '');
    var quantidade = limparCaracteres.length;

    var formattedValue = '';
    for (var i = 0; i < quantidade; i++) {
      if (i == 3 || i == 6) {
        formattedValue += '.' + limparCaracteres[i];
      } else if (i == 9) {
        formattedValue += '-' + limparCaracteres[i];
      } else {
        formattedValue += limparCaracteres[i];
      }
    }

    input.value = formattedValue;
  }

  function formatarCEP(input) {
    var ultimoNum = input.value.slice(-1);
    if (isNaN(ultimoNum)) {
      input.value = input.value.slice(0, -1);
      return;
    }

    var limparCaracteres = input.value.replace(/[^\d]/g, '');
    var quantidade = limparCaracteres.length;

    var formattedValue = '';
    for (var i = 0; i < quantidade; i++) {
      if (i == 5) {
        formattedValue += '-' + limparCaracteres[i];
      }
      else {
        formattedValue += limparCaracteres[i];
      }
    }

    input.value = formattedValue;
  }

  function botao() {

    var campoCPF = document.getElementById('itemObrigatorioCpf');
    var campoNome = document.getElementById('itemObrigatorioNome');
    var campoCoren = document.getElementById('itemObrigatorioCoren');
    var campoCelular = document.getElementById('itemObrigatorioCelular');
    var campoTelefone = document.getElementById('itemObrigatorioTelefone');
    var campoEndereco = document.getElementById('itemObrigatorioEndereco');
    var campoNumero = document.getElementById('itemObrigatorioNumero');
    var campoBairro = document.getElementById('itemObrigatorioBairro');
    var campoCidade = document.getElementById('itemObrigatorioCidade');
    var campoCep = document.getElementById('itemObrigatorioCep');
    var campoCategoria = document.getElementById('itemObrigatorioCategoria');
    var campoUF = document.getElementById('itemObrigatorioUF');
    var campoUF2 = document.getElementById('itemObrigatorioUF2');
    var campoEmpregado = document.getElementById('itemObrigatorioEmpregado');

    var enviar = document.getElementById('enviar');
    
    if (campoCPF.value == '' || campoCPF.value.length < 14 || campoCategoria.value == "escolha" || campoNome.value == '' || campoCoren.value == '' || campoUF.value == "selecione" || campoCelular.value == '' || campoCelular.value.length < 14 || campoTelefone.value == '' || campoTelefone.value.length < 14 || campoEndereco.value == '' || campoNumero.value == '' || campoBairro.value == '' || campoCidade.value == '' || campoUF.value == "selecione" || campoCep.value == '' || campoCep.value.length < 8 || campoEmpregado.value == "selecione") {
      enviar.disabled = true;

      enviar.style.backgroundColor = '';
      enviar.style.color = '';
    }else{
        enviar.disabled = false;

        enviar.style.backgroundColor = "rgb(3, 78, 153)";
        enviar.style.color = "white";
    }

}

  function cpf(){
    var campoCPF = document.getElementById('itemObrigatorioCpf');

    if(campoCPF.value === ''|| campoCPF.value.length < 14 || validarCpf() == false){
      campoCPF.style.borderColor = "red";
    }
    else{
      campoCPF.style.borderColor = "black";
    }
  }
  
  function validarCpf(){
    var campoCpf = document.getElementById('itemObrigatorioCpf').value;
    var enviar = document.getElementById('enviar');

    var cpf = campoCpf.replace(/\.|-/g,""); //tirando os pontos e os traços

    var soma1 = 0;

    //multiplicando os nove primeiros números (de trás para frente) por 2, 3, 4... até chegar a 10
    soma1 += cpf[0] * 10;
    soma1 += cpf[1] * 9;
    soma1 += cpf[2] * 8;
    soma1 += cpf[3] * 7;
    soma1 += cpf[4] * 6;
    soma1 += cpf[5] * 5;
    soma1 += cpf[6] * 4;
    soma1 += cpf[7] * 3;
    soma1 += cpf[8] * 2;

    soma1 = (soma1 * 10) % 11;

    //se o resultado da soma for igual a 10 ou a 11 o primeiro dígito será igual a 0
    if(soma1 == 10 || soma1 == 11){
        soma1 = 0;
    }

    //se o resultado da soma não for igual ao décimo número do cpf dado pelo usuário a função retorna false, pois o cpf está errado
    if(soma1 != (cpf[9])){
        enviar.disabled = true;

        exibirErroCpf('CPF inválido');
        campoCpf.style.borderColor = "red";
    }

    var soma2 = 0;

    //multiplicando os dez primeiros números (de trás para frente) por 2, 3, 4... até chegar a 11
    soma2 += cpf[0] * 11;
    soma2 += cpf[1] * 10;
    soma2 += cpf[2] * 9;
    soma2 += cpf[3] * 8;
    soma2 += cpf[4] * 7;
    soma2 += cpf[5] * 6;
    soma2 += cpf[6] * 5;
    soma2 += cpf[7] * 4;
    soma2 += cpf[8] * 3;
    soma2 += cpf[9] * 2;

    soma2 = (soma2 * 10) % 11;

    //se o resultado da soma for igual a 10 ou a 11 o segundo dígito será igual a 0
    if(soma2 == 10 || soma2 == 11){
        soma2 = 0;
    }

    //se o resultado da soma não for igual ao último número do cpf dado pelo usuário a função retorna false, pois o cpf está errado
    if(soma2 != cpf[10]){
        enviar.disabled = true;

        //estilização do botão continuará nula
        enviar.style.backgroundColor = '';
        enviar.style.color = '';

        exibirErroCpf('CPF inválido');
        campoCpf.style.borderColor = "red";
    }
    else{
        limparErroCpf();
        campoCpf.style.borderColor = "black";

        return true;
    }
  }

  //funções de exibir erro

  //cpf
  function exibirErroCpf(mensagem) {
    var errorSpan = document.getElementById('cpf-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroCpf() {
    var campoCPF = document.getElementById('itemObrigatorioCpf');
    var errorSpan = document.getElementById('cpf-error');

    errorSpan.textContent = '';

    campoCPF.style.borderColor = "black";
  }

  //categoria
  function exibirErroCategoria(mensagem){
    var errorSpan = document.getElementById('categoria-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroCategoria(){
    var campoCategoria = document.getElementById('itemObrigatorioCategoria');
    var errorSpan = document.getElementById('categoria-error');

    errorSpan.textContent = '';

    campoCategoria.style.borderColor = "black";
  }

  function mostrarErroOuNaoCategoria(){
    var campoCategoria = document.getElementById('itemObrigatorioCategoria');
    var enviar = document.getElementById('enviar');
    
    if(campoCategoria.value == "escolha"){
        exibirErroCategoria("Campo requerido");
        enviar.disabled = true;
        campoCategoria.style.borderColor = "red";

        return false;
    }
    else{
        limparErroCategoria();
        campoCategoria.style.borderColor = "black";

        return true;
    }
  }

  //UF Coren
  function exibirErroUFCoren(mensagem){
    var errorSpan = document.getElementById('ufCoren-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroUFCoren(){
    var campoUFCoren = document.getElementById('itemObrigatorioUF');
    var errorSpan = document.getElementById('ufCoren-error');

    errorSpan.textContent = '';

    campoUFCoren.style.borderColor = "black";
  }

  function mostrarErroOuNaoUFCoren(){
    var campoUFCoren = document.getElementById('itemObrigatorioUF');
    var enviar = document.getElementById('enviar');
    
    if(campoUFCoren.value == "selecione"){
        exibirErroUFCoren("Campo requerido");
        enviar.disabled = true;
        campoUFCoren.style.borderColor = "red";

        return false;
    }
    else{
        limparErroUFCoren();
        campoUFCoren.style.borderColor = "black";

        return true;
    }
  }

  //UF2
  function exibirErroUF2(mensagem){
    var errorSpan = document.getElementById('uf2-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroUF2(){
    var campoUF2 = document.getElementById('itemObrigatorioUF2');
    var errorSpan = document.getElementById('uf2-error');

    errorSpan.textContent = '';

    campoUF2.style.borderColor = "black";
  }

  function mostrarErroOuNaoUF2(){
    var campoUF2 = document.getElementById('itemObrigatorioUF2');
    var enviar = document.getElementById('enviar');
    
    if(campoUF2.value == "selecione"){
        exibirErroUF2("Campo requerido");
        enviar.disabled = true;
        campoUF2.style.borderColor = "red";

        return false;
    }
    else{
        limparErroUF2();
        campoUF2.style.borderColor = "black";

        return true;
    }
  }

  //celular
  function exibirErroCelular(mensagem){
    var errorSpan = document.getElementById('celular-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroCelular(){
    var campoCelular = document.getElementById('itemObrigatorioCelular');
    var errorSpan = document.getElementById('celular-error');

    errorSpan.textContent = '';

    campoCelular.style.borderColor = "black";
  }

  function mostrarErroOuNaoCelular(){
    var campoCelular = document.getElementById('itemObrigatorioCelular');
    var enviar = document.getElementById('enviar');
    
    if(campoCelular.value.length < 14){
        exibirErroCelular("Número inválido");
        enviar.disabled = true;
        campoCelular.style.borderColor = "red";

        return false;
    }
    else{
        limparErroCelular();
        campoCelular.style.borderColor = "black";

        return true;
    }
  }

  //telefone
  function exibirErroTelefone(mensagem){
    var errorSpan = document.getElementById('telefone-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroTelefone(){
    var campoTelefone = document.getElementById('itemObrigatorioTelefone');
    var errorSpan = document.getElementById('telefone-error');

    errorSpan.textContent = '';

    campoTelefone.style.borderColor = "black";
  }

  function mostrarErroOuNaoTelefone(){
    var campoTelefone = document.getElementById('itemObrigatorioTelefone');
    var enviar = document.getElementById('enviar');
    
    if(campoTelefone.value.length < 14){
        exibirErroTelefone("Número inválido");
        enviar.disabled = true;
        campoTelefone.style.borderColor = "red";

        return false;
    }
    else{
        limparErroTelefone();
        campoTelefone.style.borderColor = "black";

        return true;
    }
  }

  //empregado
  function exibirErroEmpregado(mensagem){
    var errorSpan = document.getElementById('empregado-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroEmpregado(){
    var campoEmpregado = document.getElementById('itemObrigatorioEmpregado');
    var errorSpan = document.getElementById('empregado-error');

    errorSpan.textContent = '';

    campoEmpregado.style.borderColor = "black";
  }

  function mostrarErroOuNaoEmpregado(){
    var campoEmpregado = document.getElementById('itemObrigatorioEmpregado');
    var enviar = document.getElementById('enviar');
    
    if(campoEmpregado.value == "selecione"){
        exibirErroEmpregado("Campo requerido");
        enviar.disabled = true;
        campoEmpregado.style.borderColor = "red";

        return false;
    }
    else{
        limparErroEmpregado();
        campoEmpregado.style.borderColor = "black";

        return true;
    }
  }

  //cep
  function exibirErroCep(mensagem){
    var errorSpan = document.getElementById('cep-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroCep(){
    var campoCep = document.getElementById('itemObrigatorioCep');
    var errorSpan = document.getElementById('cep-error');

    errorSpan.textContent = '';

    campoCep.style.borderColor = "black";
  }

  function mostrarErroOuNaoCep(){
    var campoCep = document.getElementById('itemObrigatorioCep');
    var enviar = document.getElementById('enviar');
    
    if(campoCep.value.length < 9){
        exibirErroCep("CEP inválido");
        enviar.disabled = true;
        campoCep.style.borderColor = "red";

        return false;
    }
    else{
        limparErroCep();
        campoCep.style.borderColor = "black";

        return true;
    }
  }

  //nome
  function exibirErroNome(mensagem){
    var errorSpan = document.getElementById('nome-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroNome(){
    var campoNome = document.getElementById('itemObrigatorioNome');
    var errorSpan = document.getElementById('nome-error');

    errorSpan.textContent = '';

    campoNome.style.borderColor = "black";
  }

  function mostrarErroOuNaoNome(){
    var campoNome = document.getElementById('itemObrigatorioNome');
    var enviar = document.getElementById('enviar');
    
    if(campoNome.value == ''){
        exibirErroNome("Campo requerido");
        enviar.disabled = true;
        campoNome.style.borderColor = "red";

        return false;
    }
    else{
        limparErroNome();
        campoNome.style.borderColor = "black";

        return true;
    }
  }

  //coren
  function exibirErroCoren(mensagem){
    var errorSpan = document.getElementById('coren-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroCoren(){
    var campoCoren = document.getElementById('itemObrigatorioCoren');
    var errorSpan = document.getElementById('coren-error');

    errorSpan.textContent = '';

    campoCoren.style.borderColor = "black";
  }

  function mostrarErroOuNaoCoren(){
    var campoCoren = document.getElementById('itemObrigatorioCoren');
    var enviar = document.getElementById('enviar');
    
    if(campoCoren.value == ''){
        exibirErroCoren("Campo requerido");
        enviar.disabled = true;
        campoCoren.style.borderColor = "red";

        return false;
    }
    else{
        limparErroCoren();
        campoCoren.style.borderColor = "black";

        return true;
    }
  }

  //endereco
  function exibirErroEndereco(mensagem){
    var errorSpan = document.getElementById('endereco-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroEndereco(){
    var campoEndereco = document.getElementById('itemObrigatorioEndereco');
    var errorSpan = document.getElementById('endereco-error');

    errorSpan.textContent = '';

    campoEndereco.style.borderColor = "black";
  }

  function mostrarErroOuNaoEndereco(){
    var campoEndereco = document.getElementById('itemObrigatorioEndereco');
    var enviar = document.getElementById('enviar');
    
    if(campoEndereco.value == ''){
        exibirErroEndereco("Campo requerido");
        enviar.disabled = true;
        campoEndereco.style.borderColor = "red";

        return false;
    }
    else{
        limparErroEndereco();
        campoEndereco.style.borderColor = "black";

        return true;
    }
  }

  //numero
  function exibirErroNumero(mensagem){
    var errorSpan = document.getElementById('numero-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroNumero(){
    var campoNumero = document.getElementById('itemObrigatorioNumero');
    var errorSpan = document.getElementById('numero-error');

    errorSpan.textContent = '';

    campoNumero.style.borderColor = "black";
  }

  function mostrarErroOuNaoNumero(){
    var campoNumero = document.getElementById('itemObrigatorioNumero');
    var enviar = document.getElementById('enviar');
    
    if(campoNumero.value == ''){
        exibirErroNumero("Campo requerido");
        enviar.disabled = true;
        campoNumero.style.borderColor = "red";

        return false;
    }
    else{
        limparErroNumero();
        campoNumero.style.borderColor = "black";

        return true;
    }
  }

  //bairro
  function exibirErroBairro(mensagem){
    var errorSpan = document.getElementById('bairro-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroBairro(){
    var campoBairro = document.getElementById('itemObrigatorioBairro');
    var errorSpan = document.getElementById('bairro-error');

    errorSpan.textContent = '';

    campoBairro.style.borderColor = "black";
  }

  function mostrarErroOuNaoBairro(){
    var campoBairro = document.getElementById('itemObrigatorioBairro');
    var enviar = document.getElementById('enviar');
    
    if(campoBairro.value == ''){
        exibirErroBairro("Campo requerido");
        enviar.disabled = true;
        campoBairro.style.borderColor = "red";

        return false;
    }
    else{
        limparErroBairro();
        campoBairro.style.borderColor = "black";

        return true;
    }
  }

  //cidade
  function exibirErroCidade(mensagem){
    var errorSpan = document.getElementById('cidade-error');
    errorSpan.textContent = mensagem;
  }

  function limparErroCidade(){
    var campoCidade = document.getElementById('itemObrigatorioCidade');
    var errorSpan = document.getElementById('cidade-error');

    errorSpan.textContent = '';

    campoCidade.style.borderColor = "black";
  }

  function mostrarErroOuNaoCidade(){
    var campoCidade = document.getElementById('itemObrigatorioCidade');
    var enviar = document.getElementById('enviar');
    
    if(campoCidade.value == ''){
        exibirErroCidade("Campo requerido");
        enviar.disabled = true;
        campoCidade.style.borderColor = "red";

        return false;
    }
    else{
        limparErroCidade();
        campoCidade.style.borderColor = "black";

        return true;
    }
  }

  //botao

  function mostrarErroOuNaoBotao(){
    var enviar = document.getElementById('enviar');
    var secreta = document.getElementById('secreta');

    if(enviar.disabled){
      secreta.textContent = '*Só será ativado após preencher os campos requeridoss';
    }
    else if(!enviar.disabled){
      secreta.textContent = '*Só será ativado após preencher os campos requeridos';
    }
  }