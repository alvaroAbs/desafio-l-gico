class formaDebolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicoso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
	assar(){
    	console.log("Bolo assando de "+ this.saborDaMassa)
    
    }    
}

let boloFesta = new formaDebolo("chocolate", " Nutella")
let boloPremium = new formaDebolo("baunilha", "coco")


boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()
