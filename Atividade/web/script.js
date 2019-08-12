onload = init;

function init(){
    let table = document.querySelector("table");
    buscarCD(table);
}

function buscarCD(table){
    let xmlhr = new XMLHttpRequest();
    xmlhr.open("GET", "cd_catalog.xml");
    xmlhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let resp = this.responseXML;
            writeTable(resp, table);
        }
    }
    xmlhr.send();
}

function writeTable(resp, table){
    let cds = resp.querySelectorAll("cd");
    let tam= cds.length;
    for(let i=0; i < tam; i++){
        let tr = document.createElement("tr");
        let td = "<td>"+ cds[i].querySelector("title").textContent + "</td>"+
            "<td>"+ cds[i].querySelector("artist").textContent + "</td>"+
            "<td>"+ cds[i].querySelector("country").textContent + "</td>"+
            "<td>"+ cds[i].querySelector("company").textContent + "</td>"+
            "<td>"+ cds[i].querySelector("price").textContent + "</td>"+
            "<td>"+ cds[i].querySelector("year").textContent + "</td>";
        tr.innerHTML = td;
        table.append(tr);

        
    }
    console.log(cds.length);
    
}




