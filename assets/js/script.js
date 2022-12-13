agregar = document.getElementById("agregar");
const resumen=document.querySelector("#resumen");
const tarea=document.querySelector("#tarea");
const tareaMostrar=document.querySelector("#tareaMostrar");
const idLista=document.querySelector("#idLista");
const totalTareasMostrar=document.querySelector("#totalTareas");
const totalRealizadasMostrar=document.querySelector("#totalRealizadas");

const tareasArreglo=[{id:"1",descripcion:"Alimentar a los gatos",isDone:false},{id:"2",descripcion:"Salir a correr",isDone:false},{id:"3",descripcion:"Hacer la tarea de JS",isDone:false}];
let id=3

render=function(arregloTareas){
    let textoTareas=""
   
    let textoIds=""
    arregloTareas.forEach(element => {
        objeto=datosTarea(element)
        textoIds+=objeto.textoId
        textoTareas+=objeto.textoTarea
    });
    tareaMostrar.innerHTML=textoTareas
    idLista.innerHTML=textoIds
    const ntareas=contarTareas(arregloTareas)
    totalTareasMostrar.textContent=ntareas.cantTotalTareas
    totalRealizadasMostrar.textContent=ntareas.cantRealizadas

}

datosTarea=function(objetoTarea){
    const textoTarea=`<div class="linea ${objetoTarea.isDone? 'estiloDone':''}">
    <p>${objetoTarea.descripcion}</p> 
    <input onclick="marcarRealizado(${objetoTarea.id})" type="checkbox" ${objetoTarea.isDone? 'checked':''}/>
    <button onclick="borrar(${objetoTarea.id})">cancelar</button>
</div>`
const textoId=`<p>${objetoTarea.id}</p>`
return {textoId:textoId,textoTarea:textoTarea}
}
marcarRealizado=function(id){
    const index=tareasArreglo.findIndex((ele) => ele.id==id)
    if(tareasArreglo[index].isDone){
        tareasArreglo[index].isDone=false
    }else{
        tareasArreglo[index].isDone=true
    }
    render(tareasArreglo)

}
borrar=function(id){
    const index=tareasArreglo.findIndex((ele) => ele.id==id)
    tareasArreglo.splice(index,1)
    render(tareasArreglo)

}
contarTareas=function(arreglo){
    const arregloRealizadas=arreglo.filter((ele)=>ele.isDone==true)
     const cantRealizadas=arregloRealizadas.length
     const cantTotalTareas=arreglo.length
     return {cantTotalTareas:cantTotalTareas,cantRealizadas:cantRealizadas}

}
render(tareasArreglo)
agregar.addEventListener("click", () => {
    ++id
    console.log(id)
    tareasArreglo.push({id:id,descripcion:tarea.value,isDone:false})
    console.log(tareasArreglo)
    render(tareasArreglo)
       
          
});
