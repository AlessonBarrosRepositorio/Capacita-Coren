
const Items = [
    {
        nome: "Registros e anotações de enfermagem",
        publico: "Equipe de enfermagem",
        dataInicial: "20/06/2023 19h00",
        dataFinal: "20/06/2023 21h00",
        cargaHoraria: "4h",
        vagas: 50,
        local: "Hospital Municipal da Piedade",
        endereco: "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ",
    },
    {
      nome: "Registros e anotações de enfermagem",
      publico: "Equipe de enfermagem",
      dataInicial: "20/06/2023 19h00",
      dataFinal: "20/06/2023 21h00",
      cargaHoraria: "4h",
      vagas: 50,
      local: "Hospital Municipal da Piedade",
      endereco: "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ",
  },
  {
    nome: "Registros e anotações de enfermagem",
    publico: "Equipe de enfermagem",
    dataInicial: "20/06/2023 19h00",
    dataFinal: "20/06/2023 21h00",
    cargaHoraria: "4h",
    vagas: 50,
    local: "Hospital Municipal da Piedade",
    endereco: "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ",
},
{
  nome: "Registros e anotações de enfermagem",
  publico: "Equipe de enfermagem",
  dataInicial: "20/06/2023 19h00",
  dataFinal: "20/06/2023 21h00",
  cargaHoraria: "4h",
  vagas: 50,
  local: "Hospital Municipal da Piedade",
  endereco: "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ",
},
{
  nome: "Registros e anotações de enfermagem",
  publico: "Equipe de enfermagem",
  dataInicial: "20/06/2023 19h00",
  dataFinal: "20/06/2023 21h00",
  cargaHoraria: "4h",
  vagas: 50,
  local: "Hospital Municipal da Piedade",
  endereco: "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ",
},
{
  nome: "Registros e anotações de enfermagem",
  publico: "Equipe de enfermagem",
  dataInicial: "20/06/2023 19h00",
  dataFinal: "20/06/2023 21h00",
  cargaHoraria: "4h",
  vagas: 50,
  local: "Hospital Municipal da Piedade",
  endereco: "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ",
}

    
    
]
/*
inicializarEvento = () => {
    var containerEventos = document.getElementById('bloco');

    Items.map((val) => {

        containerEventos.innerHTML += `

        <div class="tudo" id="tudo">
          <fieldset class="bloco"  preserveAspectRatio="xMidYMid slice" focusable="false"><title id="nome"> `+ val.nome + ` </title><rect></rect><label class="textoBloco" > ` + val.nome + ` </label></fieldset>
          <div class="card-body">
            <p " class="card-text" id="dataInicial">Data inicial: ` + val.dataInicial + `</p><p  class="card-text" id="dataFinal">Data final: ` + val.dataFinal + `</p><hr> <p >Público-alvo: ` + val.publico + `</p><p > Carga horária: ` + val.cargaHoraria + `</p><p > Vagas: ` + val.vagas + `</p><p >Local: `
                + val.local + `</p><p > ` + val.endereco + `</p>
                <div class="botao">
                <div class="botao">
                  <a class="inscrevase" href="/inscricao/pag_inscricao.html" target="">Inscreva-se</a>
                </div>
                </div>
              </div>
            </div>
          </div>        
        `;})

}
inicializarEvento();*/
inicializarEvento2 = () => {
  var containerEventos = document.getElementById('bloco');

  Items.map((val) => {

      containerEventos.innerHTML += `

      <div class="caixa01">
        <div class="titulo">
          <h1>`+ val.nome + `<h1/>
        </div> 
        <div class="foto"></div>                
        <div class="principal">
          <p><b>Data de Inicio: </b>` + val.dataInicial + `</p>
          <p class="terminoBorda" ><b>Data de Termino: </b>` + val.dataFinal + `</p>
        </div>
        <div class="secundaria">
          <p><b>Pulblico alvo: </b>` + val.publico + `</p>
          <p><b>Carga horária: </b>` + val.cargaHoraria + `</p>
          <p><b>Vagas: </b>` + val.vagas + `</p> 
          <p><b>Local: </b>` + val.local + `</p>
          <p><b>Endereço: </b>` + val.endereco + `</p>         
        </div>
        <div class="botao">
          <a class="inscrevase" href="../inscricao/pag_inscricao.html" target="">Inscreva-se</a>
        </div>                       
    </div>

      
      `;})

}
inicializarEvento2();
