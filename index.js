

function main() {
  console.log('=====================================================');
  console.log('Ejercicio #1');
  const listaNumeros = [ 9, 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
  const paresRepetidos = contarNumerosParesRepetidos( listaNumeros );
  console.log('Numero de pares repetidos: ', paresRepetidos);
  console.log('=====================================================');
}

function contarNumerosParesRepetidos( listaNumeros ) {
  let numeroCoincidencias = 0;

  if ( Array.isArray( listaNumeros ) ){

    const listaSoloNumeros = listaNumeros.every( (numero) => isNaN( numero ) === false  );

    if (listaSoloNumeros) {
      const datos = new Set( listaNumeros );
      const listaLimpia = [...datos];

      listaLimpia.forEach( (numero) => {
        const coincidencias = listaNumeros.filter( (number) => number === numero);
        const sizeArray = coincidencias.length;

        if ( coincidencias.length >= 2 ) {
          numeroCoincidencias += sizeArray % 2 === 0 ? (sizeArray / 2) : (sizeArray - 1) / 2;
        }

      });
      return numeroCoincidencias;
    }

  }
  console.error('No es una lista valida, vuelve a intentarlo');
  return numeroCoincidencias;
}

main();