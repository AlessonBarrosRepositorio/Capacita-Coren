var nome = "Registros e anotações de enfermagem";
var publico = "Equipe de enfermagem";
var dataInicial = "20/06/2023 19h00";
var dataFinal = "20/06/2023 21h00";
var cargaHoraria = "4h";
var vagas = 50;
var local = "Hospital Municipal da Piedade";
var endereco = "Rua da Capela, 96 - Auditório - PIEDADE, Rio de Janeiro - RJ";

inicializarDados = () => {
    var containerDados = document.getElementById('direita');

    containerDados.innerHTML += `
        <div class="inicializar">
        <div class="titulo">
                    <h1 >
                        <span class="text" style="text-align: center;"><b>` + nome + `</b></span>
                    </h1>
                </div>
            <div class="dados">
                
                <div class="list-dados">
                    <ul  id="blocoDireita">
                        <li>
                            <div>
                                <h6 class="my-0">Público-alvo</h6>
                                <small class="text-body-secondary">` + publico + `</small>
                            </div>
                        </li>
                        <li >
                            <div>
                                <h6 class="my-0">Data de início</h6>
                                <small class="text-body-secondary">` + dataInicial + `</small>
                            </div>
                        </li>
                        <li >
                            <div>
                                <h6 class="my-0">Data final</h6>
                                <small class="text-body-secondary">` + dataFinal + `</small>
                            </div>
                        </li>
                        <li bg-body-tertiary">
                            <div>
                                <h6 class="my-0">Carga horária</h6>
                                <small class="text-body-secondary">` + cargaHoraria + `</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h6 class="my-0">Vagas</h6>
                                <small class="text-body-secondary">` + vagas + `</small>
                            </div>
                        </li>
                        <li class="tirarborder">
                            <div>
                                <h6 class="my-0">Local</h6>
                                <small class="text-body-secondary">` + local + `<p>` + endereco + `</small>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
}
inicializarDados();