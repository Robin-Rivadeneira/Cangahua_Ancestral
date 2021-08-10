class inicio{
    constructor(){
        this.imagen1 = document.getElementById('imagen1')
        this.imagen2 = document.getElementById('imagen2')
        this.imagen3 = document.getElementById('imagen3')
        this.imagen4 = document.getElementById('imagen4')
        this.imagen5 = document.getElementById('imagen5')
    }
    carrucel(){
        this.imagen2.style.display = "none"
        this.imagen3.style.display = "none"
        this.imagen4.style.display = "none"
        this.imagen5.style.display = "none"
    }
    cambio(){
        setTimeout(imagenes.cambio1, 3000)
        this.imagen1.style.display = "block"
        this.imagen2.style.display = "none"
        this.imagen3.style.display = "none"
        this.imagen4.style.display = "none"
        this.imagen5.style.display = "none"
    }
    cambio1(){
        setTimeout(imagenes.cambio2, 3000)
        this.imagen1.style.display = "none"
        this.imagen2.style.display = "block"
        this.imagen3.style.display = "none"
        this.imagen4.style.display = "none"
        this.imagen5.style.display = "none"
    }
    cambio2(){
        setTimeout(imagenes.cambio3, 3000)
        this.imagen1.style.display = "none"
        this.imagen2.style.display = "none"
        this.imagen3.style.display = "block"
        this.imagen4.style.display = "none"
        this.imagen5.style.display = "none"
    }
    cambio3(){
        setTimeout(imagenes.cambio4, 3000)
        this.imagen1.style.display = "none"
        this.imagen2.style.display = "none"
        this.imagen3.style.display = "none"
        this.imagen4.style.display = "block"
        this.imagen5.style.display = "none"
    }
    cambio4(){
        setTimeout(imagenes.cambio, 3000)
        this.imagen1.style.display = "none"
        this.imagen2.style.display = "none"
        this.imagen3.style.display = "none"
        this.imagen4.style.display = "none"
        this.imagen5.style.display = "block"
    }
}

let imagenes = new inicio()

window.onload = imagenes.carrucel()
setTimeout(imagenes.cambio, 3000)