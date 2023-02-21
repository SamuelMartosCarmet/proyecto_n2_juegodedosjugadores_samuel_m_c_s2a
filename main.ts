input.onButtonPressed(Button.A, function () {
    if (pulsado == false) {
        let numero_de_imagen = ""
        pulsado = true
        if (numero_de_imagen == "0" || (numero_de_imagen == "3" || numero_de_imagen == "7")) {
            puntuacion_1 += 1
            basic.showString("" + (puntuacion_1))
        } else if (numero_de_imagen == "6") {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else {
            if (puntuacion_1 > 0) {
                puntuacion_1 += -1
                basic.showString("" + (puntuacion_1))
            }
        }
    }
})
function Cojer_elemento_de_la_lista () {
    icono = randint(0, 9)
    lista[icono].showImage(0)
    basic.pause(200)
}
let pulsado = false
let lista: Image[] = []
let icono = 0
let puntuacion_1 = 0
puntuacion_1 = 0
icono = 0
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
basic.forever(function () {
    Cojer_elemento_de_la_lista()
})
