let incidencia_orales = 10, incidencia_extra = 10, avg_pruebas = 7, avg_actividades = 12 - avg_pruebas, incidencia_proyecto = 8;
let datos = [];

function calcular_calificacion()
{
    cargar_datos();
    promedio_actividades = (datos[4] - ((datos[0] - datos[2])*0.25))*avg_actividades/12;
    promedio_pruebas = (datos[5] - ((datos[1] - datos[3])*1.5))*avg_pruebas/12;
    promedio_sin_extras = promedio_actividades+promedio_pruebas;

    promedio_extras = promedio_sin_extras;
    if(!isNaN(datos[6])){promedio_extras += datos[6]/incidencia_orales}
    if(!isNaN(datos[7])){promedio_extras += datos[7]/incidencia_extra}

    calificacion_final=0;
    (datos[8]=="si")? calificacion_final= (datos[9]*incidencia_proyecto/12) + (promedio_extras*(12-incidencia_proyecto)/12): calificacion_final = promedio_extras;
    
    document.getElementById("cal").value = calificacion_final;
    
}

function cargar_datos()
{
    datos.length = 0;

    for(let i=0;i<=9;i++)
    {
        datos.push(document.getElementById("data-"+ i).value);
    }
    
}