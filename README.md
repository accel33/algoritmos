# Ejercicios de Algoritmos para resolver


`Tue 3 Oct`

### Reverse Integer
Se ha logrado revertir el arreglo y quitarle los ceros en el proceso, pero no se ha logrado parsear el nuevo arreglo cuando contiene un guion. El valor es convertido a NaN. Porque JS no lee '-902' como numero. Ahora que estoy analizando bien hay un 0 en el medio del numero, eso no lo tuve en cuenta al momento de removerlo. Falta ajustar.

La solucion era mas simple de lo pensado. El parseInt() ya se encarga de remover los ceros innecesarios. Luego la funcion de la libreria standard Math, Math.sign() devuelve -1 o 1, lo que facilita la conversion a negativo en caso de serlo.

### Max Character
