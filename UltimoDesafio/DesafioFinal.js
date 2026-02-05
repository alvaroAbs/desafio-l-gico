class Heroi {
    constructor(nome,idade,tipo){
         this.nome = nome
         this.idade = idade
         this.tipo = tipo

    }
    atacar(_){
        let ataque = ""

        if(this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        } else {
            ataque = "soco"
        }
    
    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
let heroi1 = new Heroi ("Alvaro", 20,"guerreiro" )
let heroi2 = new Heroi ("Felipe", 28,"ninja")

heroi1.atacar()
heroi2.atacar()
    
   


