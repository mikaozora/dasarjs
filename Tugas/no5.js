class Lingkaran{
    constructor(r){
        const phi = 3.14
        this.jari = r
    }
    luas = () => {
        const phi = 3.14
        return phi * this.jari**2
    }
    keliling = () => {
        const phi = 3.14
        return phi * this.jari * 2
    }

}
// let koin = new Lingkaran(7)
// console.log("Luas : "+ koin.luas())
// console.log("Keliling : "+ koin.keliling())

class Tabung extends Lingkaran{
    constructor(r, t){
        super(r)
        this.tinggi = t
        
    }
    volume = () => {
        const phi = 3.14
        return phi * this.jari**2 * this.tinggi
    }
    luaspermukaan = () => {
        const phi = 3.14
        return phi * this.jari * (this.jari + 2 * this.tinggi)
    }
    luasselimut = () => {
        const phi = 3.14
        return 2 * phi * this.jari * this.tinggi
    }
}
let gelas = new Tabung(50, 7.5)
console.log("---Tabung---")
console.log("Volume Tabung : "+ gelas.volume())
console.log("Luas permukaan Tabung : "+ gelas.luaspermukaan())
console.log("Luas Selimut Tabung : "+ gelas.luasselimut())

class Kerucut extends Lingkaran{
    constructor(r, t){
        super(r)
        this.tinggi = t
        
    }
    volume = () => {
        const phi = 3.14
        return 1/3 * phi * this.jari**2 * this.tinggi
    }
    luaspermukaan = () => {
        const phi = 3.14
        let s = 41.2
        return phi * this.jari * (s + this.jari)

    }
    luasselimut = () => {
        const phi = 3.14
        let s = 41.2
        return phi * this.jari * s
    }
}
let kerucuth = new Kerucut(10, 40)
console.log("---Kerucut---")
console.log("Volume Kerucut : "+ kerucuth.volume())
console.log("Luas permukaan Kerucut : "+ kerucuth.luaspermukaan())
console.log("Luas Selimut Kerucut : "+ kerucuth.luasselimut())

class Bola extends Lingkaran{
    constructor(r){
        super(r)
        
    }
    volume = () => {
        const phi = 3.14
        return 4/3 * phi * this.jari**3
    }
    luaspermukaan = () => {
        const phi = 3.14
        return 4 * phi * this.jari**2

    }
}
let ball = new Bola(15)
console.log("---Bola---")
console.log("Volume bola : "+ ball.volume())
console.log("Luas permukaan bola : "+ ball.luaspermukaan())
