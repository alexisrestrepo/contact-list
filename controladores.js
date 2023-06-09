 let {Contacto} = require("./objetos")  

let contact1 = new Contacto ("alexis", "restrepo", 3218537120, 1); 
let contact2 = new Contacto ("jeferson", "cubides", 4567900932, 2);
let contact3 = new Contacto ("juan", "forero", 8765435935, 3);
let contact4 = new Contacto ("pedro", "jimenez", 2121360800, 4);

let misContactos=[contact1, contact2, contact3, contact4];
function mostrarContacto(){
  console.log(misContactos);
}
  
function anadirContacto(contacto){
  const {nombre, apellido, telefono, id} = contacto;

  if(contacto && nombre && apellido && telefono && id){
    misContactos.push(contacto);
    console.log("contacto añadido correctamente");
    mostrarContacto();
} else{
  console.log("los campos no pueden estar vacios");
}
}

function eliminarContacto(id){
  misContactos=misContactos.filter((contacto)=>{return contacto.id !== id})
  mostrarContacto()  
   }

module.exports ={
  anadirContacto,
  eliminarContacto,
  mostrarContacto
}






    