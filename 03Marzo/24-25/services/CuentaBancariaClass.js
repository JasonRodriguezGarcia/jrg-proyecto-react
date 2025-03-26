class CuentaBancariaClass{
    
    constructor (saldoInicial) {
        this.saldo = saldoInicial
    }

    depositar(deposito) {
        this.saldo += deposito
        console.log("Saldo al sumar: ", this.saldo)
        return this
    }
    
    retirar(retiro) {
        if (retiro > this.saldo) throw new Error("Saldo insuficiente");
        this.saldo -= retiro
        console.log("Saldo al restar: ", this.saldo)
        return this
    }

    getSaldo() {
        return this.saldo
    }
}

export { CuentaBancariaClass };