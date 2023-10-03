### Ejercicios para resolver

Tres son distintas maneras para convertir un String en un Arreglo.

```
const arr = [...str]
const arr2 = Array.from(str)
const arr3 = str.split('')
```

`Tue 3 Oct 09:43`
Reverse Integer
He logrado revertir el arreglo y quitarle los ceros en el proceso, pero no se ha logrado parsear el nuevo arreglo cuando contiene un guion. El valor es convertido a NaN. Porque JS no lee '-902' como numero. Ahora que estoy analizando bien hay un 0 en el medio del numero, eso no lo tuve en cuenta al momento de removerlo. Falta ajustar.

`Tue 3 Oct 10:28`

-   [x] Completado
        La solucion era mas simple de lo pensado. El parseInt() ya se encarga de remover los ceros innecesarios. Luego la funcion de la libreria standard Math, Math.sign() devuelve -1 o 1, lo que facilita la conversion a negativo en caso de serlo.
