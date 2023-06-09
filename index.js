const{Contacto} = require("./objetos")
const{anadirContacto, eliminarContacto, mostrarContacto} = require("./controladores")

mostrarContacto()
let contact5 = new Contacto ("juan", "maecha", 13131352, 5);
anadirContacto(contact5);
mostrarContacto()
eliminarContacto(1)