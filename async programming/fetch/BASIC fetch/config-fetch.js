document.addEventListener('DOMContentLoaded', configAJAX_long);

function configAJAX_long()
{
    document.getElementById("btn_consulta").addEventListener('click',()=>
    {
        fetch('recurso-externo.txt')
            .then(ajax_positive)
            .catch(fn_error);
    });
}
    
function ajax_positive(response) 
{
    if(response.ok) 
    {
        alert(response.status);
        response.text().then(showResult);
    }else 
    {
        fn_error('codigo de estado de respuesta de HTTP: ' + response.status);
    }
}

function showResult(txt) 
{
   document.body.innerHTML += '<p>contenido de recurso al que accedo: ' + txt + '</p>';
}

function fn_error(err) 
{ 
    document.body.innerHTML += '<p>error: ' + err + '</p>';
}

