class CuentaBancariaClass{
    
    constructor (saldo) {
        this.saldo = saldo
    }

    depositar(deposito) {
        this.saldo += deposito
        console.log("Saldo al sumar: ", this.saldo)
    }
    
    retirar(retiro) {
        if (retiro > this.saldo) throw new Error("Saldo insuficiente");
        this.saldo -= retiro
        console.log("Saldo al restar: ", this.saldo)
    }
}

export {CuentaBancariaClass};