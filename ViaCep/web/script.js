document.querySelector("form").onsubmit = function(event){
    event.preventDefault();
    searchCEP(document.querySelector("input[type='text']").value);
};

function searchCEP(cep){
    let url = "http://viacep.com.br/ws/"+cep+"/json/";
    let requestCEP = new XMLHttpRequest();
    requestCEP.open("GET", url);
    requestCEP.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            writeCEP(JSON.parse(this.responseText));
        }
    }
    requestCEP.send();
    console.log(cep);
}

function writeCEP( response ){
    let table = "<table class='lightTable verticalTable'>"+
            "<tr> <th>CEP</th> <td>"+response.cep+"</td> </tr>"+
            "<tr> <th>Logadouro</th> <td>"+response.logradouro+"</td> </tr>"+
            "<tr> <th>Complemento</th> <td>"+response.complemento+"</td> </tr>"+
            "<tr> <th>Bairro</th> <td>"+response.bairro+"</td> </tr>"+
            "<tr> <th>Cidade</th> <td>"+response.localidade+"</td> </tr>"+
            "<tr> <th>UF</th> <td>"+response.uf+"</td> </tr>"+
        "</table>";
    document.querySelector("div").innerHTML = table;
} 