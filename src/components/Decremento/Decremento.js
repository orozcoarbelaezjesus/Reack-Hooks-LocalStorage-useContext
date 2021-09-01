function Decremento ({ contador, modificarContador }){
    contador--;
    modificarContador(contador);
}

export { Decremento }