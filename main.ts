input.onButtonPressed(Button.A, function () {
    if (pulsado == false) {
        pulsado = true
        if (numero_de_imagen == "0" || (numero_de_imagen == "3" || numero_de_imagen == "7")) {
            puntuacion_1 += 1
            if (puntuacion_1 == 10) {
                basic.showString("A: has ganado")
                juego_detenido = true
            }
        } else if (numero_de_imagen == "6") {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else if (puntuacion_1 > 0) {
            puntuacion_1 += -1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (pulsado == false) {
        pulsado = true
        if (numero_de_imagen == "1" || (numero_de_imagen == "4" || numero_de_imagen == "8")) {
            puntuacion_b += 1
            if (puntuacion_b == 10) {
                basic.showString("A: has ganado")
                juego_detenido = true
            }
        } else if (numero_de_imagen == "6") {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else {
            if (puntuacion_b > 0) {
                puntuacion_b += -1
            }
        }
    }
})
function Cojer_elemento_de_la_lista () {
    icono = randint(0, 9)
    lista[icono].showImage(0)
    basic.pause(200)
}
let juego_detenido = false
let numero_de_imagen = ""
let pulsado = false
let puntuacion_b = 0
let icono = 0
let puntuacion_1 = 0
let lista: Image[] = []
lista = [
images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `),
images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `),
images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `),
images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `),
images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `),
images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `),
images.createImage(`
    . # # # .
    # . # . #
    # . # . #
    . # # # .
    . # # # .
    `),
images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `),
images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `),
images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
]
puntuacion_1 = 0
icono = 0
puntuacion_b = 0
basic.forever(function () {
    Cojer_elemento_de_la_lista()
})
