async function getDeputado() {
    let template = document.getElementById("template");
  
const profileResponse = await fetch(
      `https://dadosabertos.camara.leg.br/api/v2/deputados/`);
  
let data = await profileResponse.json();
    console.log(data.dados);

const dados = data.dados;

    for (let index = 0; index < dados.length; index++) {
        const deputados = dados[index];

        template.innerHTML += `
        <div class="container">
         <div class="row">
      <div class="col-md-4"></div>
        <div class="col-md-4">
           </div>
           <div class="col-md-4"></div>
        </div>
          <div class="row" id="card">
            <img src=${deputados.urlFoto} id="img" />
                 <div class="col-md-3">
               </div>
                                  <div class="col-md-9">
                        <p><b>Deputado: </b> ${ deputados.nome }</p>
                    < p><b>Partido: </b> ${ deputados.siglaPartido } - ${deputados.siglaUf} </p>
            <p><b>Email: </b>${ deputados.email }</p>                       <a target="_blank" href=${deputados.uri}>Ver gastos</a>
                    </div>
                </div>
        
    </div>
        `;
        
    }
  
  }
