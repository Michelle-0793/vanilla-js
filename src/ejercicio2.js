class contador{
  constructor() {
    this.valor = 0
  }

siguiente (){
  return this.valor++
}
  

}


let instancia = new contador()
export { contador, instancia }