
let invoice = {
	name: "Felipe", 
    age: 28,
   	products: {
		0 :["mouse", 29.90],
        1 : ["Teclado", 120.00],
        2 : ["Monitor", 320.90],
    }
}

generateInvoice(invoice)


function generateInvoice(invoice){

	console.log (`O comprador é ${invoice.name}`)
    console.log (`A idade é ${invoice.age}`)
    console.log ("-------------------")
    
    for (const index in invoice.products){
    	let [productName, productPrice] = invoice.products[ index]
    console.log (`- ${productName}: R$ ${productPrice}`)
    }

	

}