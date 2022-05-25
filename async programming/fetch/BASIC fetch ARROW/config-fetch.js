document.addEventListener('DOMContentLoaded', configAJAX_arrow);

function configAJAX_arrow()
{
    document.getElementById("btn_consulta").addEventListener('click',()=>
    { 
        fetch('recurso-externo.txt')
            .then( response => (response.ok)?response.text():print("fallo response ok. codigo: " + response.status))
            .then( resultText => (typeof(resultText)!="undefined")?print("recurso al que desea acceder: " + resultText): print("no hay contenido que mostrar, fallo de acceso."))
            .catch( err => print("codigo de status HTTP: "+ err));
    });
}

const print = function (text)
{
    //console.log(text);
    document.body.innerHTML = '<button id="btn_consulta">realizar consulta a archivo en servidor</button><br><br>' + text;
}