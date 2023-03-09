const bloque1 = document.querySelector('#bloque1')
const bloque2 = document.querySelector('#bloque2')
const bloque3 = document.querySelector('#bloque3')
const bloque4 = document.querySelector('#bloque4')
const bloque5 = document.querySelector('#bloque5')
const nombreUsuario = document.querySelector('#nombreUsuario')
const iniciars = document.querySelector('#iniciars')
const password = document.querySelector('#password')


iniciars.addEventListener("click", () => {
if (nombreUsuario.value === "asd" && password.value === "1") {
        let bloque1 = document.querySelector("#bloque1");
        let bloque2 = document.querySelector("#bloque2");
        bloque1.classList.add("quitar")
        bloque1.classList.remove("visible")
        bloque2.classList.add("visible")
        bloque2.classList.remove("quitar")
}else {

}
}) 
 const cerrars = document.querySelector('#cerrars')

 cerrars.addEventListener("click", () => {
        let bloque1 = document.querySelector("#bloque1")
        let bloque2 = document.querySelector("#bloque2")
        bloque1.classList.remove("quitar")
        bloque1.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")
        formulario1.reset()
 })

 const btnclientes = document.querySelector('#btnclientes')

btnclientes.addEventListener("click", () =>{
        let bloque3 = document.querySelector("#bloque3")
        let bloque2 = document.querySelector("#bloque2")
        bloque3.classList.remove("quitar")
        bloque3.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")

        })

const btnAtras = document.querySelector('#btnAtras')

btnAtras.addEventListener("click", () => {
        let bloque3 = document.querySelector("#bloque3")
        let bloque2 = document.querySelector("#bloque2")
        bloque3.classList.remove("visible")
        bloque3.classList.add("quitar")
        bloque2.classList.remove("quitar")
        bloque2.classList.add("visible")

})

const btncelulares = document.querySelector('#btncelulares')

btncelulares.addEventListener("click", () => {
        let bloque4 = document.querySelector("#bloque4")
        let bloque2 = document.querySelector("#bloque2")

        bloque4.classList.remove("quitar")
        bloque4.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")
  
})
const btnAtras2 = document.querySelector('#btnAtras2')

btnAtras2.addEventListener("click", () => {
        let bloque4 = document.querySelector("#bloque4")
        let bloque2 = document.querySelector("#bloque2")
        bloque4.classList.remove("visible")
        bloque4.classList.add("quitar")
        bloque2.classList.remove("quitar")
        bloque2.classList.add("visible")

})


const btncomputadores = document.querySelector('#btncomputadores')

btncomputadores.addEventListener("click", () => {
        let bloque5 = document.querySelector("#bloque5")
        let bloque2 = document.querySelector("#bloque2")

        bloque5.classList.remove("quitar")
        bloque5.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")
  
})
const btnAtras3 = document.querySelector('#btnAtras3')

btnAtras3.addEventListener("click", () => {
        let bloque5 = document.querySelector("#bloque5")
        let bloque2 = document.querySelector("#bloque2")
        bloque5.classList.remove("visible")
        bloque5.classList.add("quitar")
        bloque2.classList.remove("quitar")
        bloque2.classList.add("visible")

})









