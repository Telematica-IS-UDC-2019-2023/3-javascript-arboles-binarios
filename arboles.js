class Nodo{
    constructor(numero){
    this.numero = numero;
    this.leftSon = null;
    this.rightSon = null
    }
}


class Arbol{
    constructor(){
        this.raiz=null;
    }

    agregar(nuevo){
        if(this.raiz==null){
            this.raiz=nuevo;
        } else {
            this.agregate(nuevo, this.raiz);
        }
    }

    agregate(nuevo, r){
        if(nuevo.numero<r.numero){
            console.log(nuevo.numero, 'va a la izquierda')
            if(r.leftSon==null){
                r.leftSon=nuevo;
                console.log(`\n ${nuevo.numero} quedo a la izquierda de ${r.numero}\n `)
            } else {
                console.log('Recursiva (', nuevo.numero, ',', r.leftSon.numero, ')')
                this.agregate(nuevo, r.leftSon)
            }
        } else {
            console.log(nuevo.numero, 'va a la derecha')
            if(r.rightSon==null){
                r.rightSon=nuevo;
                console.log(`\n ${nuevo.numero} quedo a la derecha de ${r.numero}\n `)
            } else {
                console.log('Recursiva (', nuevo.numero, ',', r.rightSon.numero, ')')
                this.agregate(nuevo, r.rightSon)
            }
        }
    }
}


{
    dato = new Nodo(50)
    arbol = new Arbol()
    arbol.agregar(dato)
}


{
    dato=new Nodo(25)
    arbol.agregar(dato)
}

{
    dato=new Nodo(18)
    arbol.agregar(dato)
}

{
    dato=new Nodo(12)
    arbol.agregar(dato)
}

{
    dato=new Nodo(6)
    arbol.agregar(dato)
}

{
    dato=new Nodo(60)
    arbol.agregar(dato)
}

{
    dato=new Nodo(55)
    arbol.agregar(dato)
}