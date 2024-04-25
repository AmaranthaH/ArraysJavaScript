/**
 * Suma de resistencias en serie
 */
const sumaN=[8,15,-100];
function Suma(arrayV) {
    //n acumulado, i valor de iteración
    return arrayV.reduce((n, i) => Math.abs(n) + Math.abs(i));
}
let total= Suma(sumaN);
console.log(sumaN)
console.log(total+" ohms"); 

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Número dividido en mitades
 */
function numDiv(num) {
    const mitad = num / 2;
    let mid=[mitad, mitad];
    return mid;
}
let array=numDiv(9);
console.log(array);
////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Sociedad secreta
Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.
 */
const sName=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Ana'];

function secretName(nombres) {
    //mapea "recorre " de forma de char la palabra y selecciona el primer valor
    const palabrasSecretas = nombres.map(nombre => nombre[0]);
    //sort (ordena alfabeticamente), join (los une en una cadena de texto)
    return palabrasSecretas.sort().join('');
}
let nombreSecreto=secretName(sName);
console.log(nombreSecreto);
//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Estado en línea
 
Muestra el estado en línea de los usuarios que solo estan en linea usuarios, si son más de 2, el tercelo solo aparece como numero o incremente el numero

Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` .
 */

usuario=[['mockIng99',false],['J0eyPunch',true],['glassedFer',true],['SosozozRel',true],['gohan324',true]]

function onlineStatus(users) {
    const conectados = users.filter(user => user[1]).length;
    if (conectados === 0) {
        return 'Nadie está en línea';
    } else if (conectados === 1) {
        //busca al usuario que tiene true en el segundo subarreglo y lo pasa al arreglo resultado
        return `${users.find(user => user[1])[0]} está en línea`;
    } else if (conectados === 2) {

        const enLinea = users.filter(user => user[1]).map(user => user[0]);
        return `${enLinea[0]} y ${enLinea[1]} están en línea`;
    } else {
        const otros = conectados - 2;
        const enLinea = users.filter(user => user[1]).map(user => user[0]);
        return `${enLinea[0]}, ${enLinea[1]} y ${otros} más están en línea`;
    }
}

console.log(onlineStatus(usuario)); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Matriz de múltiplos
 
Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` .
 */


function Multiplos(numero,nMultiplos){
    const multiplos=[];
    for(let i=1;i<=nMultiplos;i++){
        multiplos.push(numero*i);
    }
    return multiplos;
}

let ListaMultiplos=Multiplos(2,10);

console.log(ListaMultiplos); 
/////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Dominio positivo en Array

Escribe una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 
Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `falso` .
 */

valores=[1,5, -1, -2, -6767,1,1]

function dominanteP(array) {
    let positivos = 0;
    let negativos = 0;

    array.forEach(element => {
        if (element >= 0) { 
            positivos++;
        } else {
            negativos++;
        }
    });
    if (positivos === negativos){
        return "Iguales";
    }
    else{
    return positivos > negativos;}
}

let dominancia = dominanteP(valores);
console.log(dominancia); 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Promedio antípoda

Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Divide cada número de la matriz resultante entre 2.

Ejemplo:
- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` .
 */

let matriz=[1,2,3,5,22,6,1,8];

function promediMatriz(matrix){
    const resultado = [];
    const conectados = matrix.length;
    let mitadPrincipio;
    let mitadFinal;
    
    let borrar=matrix.length/2;
    if(conectados%2 != 0){
        array.splice(borrar, 1);
    }
    mitadPrincipio=matrix.slice(0,borrar);
    mitadFinal=matrix.slice(borrar);

    for (let i = 0; i < mitadPrincipio.length; i++) {
        resultado.push((mitadPrincipio[i] + mitadFinal[mitadFinal.length - 1 - i])/2);
    }
    return resultado;
}

let reduccion = promediMatriz(matriz);
console.log(reduccion); 
///////////////////////////////////////////////////////////////////////////////////////////////