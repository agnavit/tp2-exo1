function faireQuelqueChose (x: number) {
    while (liste[x] < 4) {
        led.unplot(x, liste[x])
        liste[x] = liste[x] + 1
        led.plot(x, liste[x])
        basic.pause(100)
    }
    while (liste[x] > 0) {
        led.unplot(x, liste[x])
        liste[x] = liste[x] - 1
        led.plot(x, liste[x])
        basic.pause(100)
    }
}
let liste: number[] = []
liste = [0, 1, 2, 3, 4]
let y = 0
led.plot(0, 0)
basic.forever(function () {
    faireQuelqueChose(3)
})
basic.forever(function () {
    faireQuelqueChose(4)
})
basic.forever(function () {
    faireQuelqueChose(2)
})
basic.forever(function () {
    faireQuelqueChose(1)
})
basic.forever(function () {
    faireQuelqueChose(0)
})
