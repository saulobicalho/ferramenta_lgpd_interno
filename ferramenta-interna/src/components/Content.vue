<template>
<div id="content">


<div id="main">
<!--inicio dados basicos-->
  <h2 id="dadosbasicos">Minha Empresa</h2>
  <h4>Status: Em andamento</h4>
    <p><br>Entrar os dados da empresa. <br><br> </p>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Nome da Empresa</label>
      <input type="text" class="form-control"
       placeholder="Escreva aqui o nome da empresa">
      <small  class="form-text text-muted">Não ultrapasse 50 caracteres.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Setor de Atuação</label>
      <select class=" form-control">

        <option disabled selected>Escolha uma categoria</option>
        <option>Comércio Varejista</option>
        <option>Imobiliário</option>
        <option>Educacional</option>
        <option>Saúde</option>
        <option>Transportes</option>
      </select>
      <small  class="form-text text-muted">Escolha a mais adequada ao seu
        projeto.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Local do Projeto</label>
      <select class=" form-control">

        <option disabled selected>Escolha uma localidade</option>
        <option>Belo Horizonte</option>
        <option>Rio de Janeiro</option>
        <option>São Paulo</option>
      </select>
      <small class="form-text text-muted">Onde o seu projeto será realizado?
         Caso ele aconteça em mais de um lugar, você pode selecionar uma
         cidade onde sua rede de potenciais apoiadores é maior.</small>
    </div>
</form>

<!--inicio categoria1-->

<h2 id="categoria1">Categoria 1 - Acesso Humano</h2>
<p><br>Favor preencher com informações sobre o acesso humano. <br> <br></p>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Quem acessa?</label>
    <select class=" form-control">
      <option disabled selected>Escolha a melhor opção</option>
      <option>Opção 1</option>
      <option>Opção 2</option>
      <option>Opção 3</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Por que acessa?</label>
    <select class=" form-control">
      <option disabled selected>Escolha a melhor opção</option>
      <option>Opção 1</option>
      <option>Opção 2</option>
      <option>Opção 3</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Qual o grau de confidencialidade?</label>
    <select class=" form-control">
      <option disabled selected>Escolha a melhor opção</option>
      <option>Opção 1</option>
      <option>Opção 2</option>
      <option>Opção 3</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Qual o grau de sensibilidade?</label>
    <select class=" form-control">
      <option disabled selected>Escolha a melhor opção</option>
      <option>Opção 1</option>
      <option>Opção 2</option>
      <option>Opção 3</option>
    </select>
  </div>

  <h2 id="categoria2">Categoria 2 - Banco de Dados</h2>
  <p><br>Favor preencher com informações sobre o banco de dados. <br> <br></p>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Quais são?</label>
      <select class=" form-control">
        <option disabled selected>Escolha a melhor opção</option>
        <option>Opção 1</option>
        <option>Opção 2</option>
        <option>Opção 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Quem acessa?</label>
      <select class=" form-control">
        <option disabled selected>Escolha a melhor opção</option>
        <option>Opção 1</option>
        <option>Opção 2</option>
        <option>Opção 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Quais sistemas alimenta?</label>
      <select class=" form-control">
        <option disabled selected>Escolha a melhor opção</option>
        <option>Opção 1</option>
        <option>Opção 2</option>
        <option>Opção 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Há SGBD? Qual?</label>
      <select class=" form-control">
        <option disabled selected>Escolha a melhor opção</option>
        <option>Opção 1</option>
        <option>Opção 2</option>
        <option>Opção 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Políticas de segurança p/ banco?</label>
      <select class=" form-control">
        <option disabled selected>Escolha a melhor opção</option>
        <option>Opção 1</option>
        <option>Opção 2</option>
        <option>Opção 3</option>
      </select>
    </div>

    <h2 id="categoria3">Categoria 3 - Segurança da Informação</h2>
    <p><br>Favor preencher com informações sobre o banco de dados. <br> <br></p>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Pergunta 1</label>
        <select class=" form-control">
          <option disabled selected>Escolha a melhor opção</option>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Pergunta 2</label>
        <select class=" form-control">
          <option disabled selected>Escolha a melhor opção</option>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
      </div>

      <h2 id="categoria4">Categoria 4 - Infraestrutura</h2>
      <p><br>Favor preencher com informações sobre o banco de dados. <br> <br></p>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Servidor?</label>
          <select class=" form-control">
            <option disabled selected>Escolha a melhor opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Data Center?</label>
          <select class=" form-control">
            <option disabled selected>Escolha a melhor opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Continuidade?</label>
          <select class=" form-control">
            <option disabled selected>Escolha a melhor opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Disponilidade?</label>
          <select class=" form-control">
            <option disabled selected>Escolha a melhor opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Quem acessa?</label>
          <select class=" form-control">
            <option disabled selected>Escolha a melhor opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Cloud?</label>
          <select class=" form-control">
            <option disabled selected>Escolha a melhor opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>
        </div>

  </div>


<!--inicio bd-->


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" >Continuar</button>

</div>


</template>

<script>
  export default{
  }
</script>

<style>

</style>
