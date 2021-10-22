

function main() {

  console.log('================= Ejercicio #1 =================');
  const listaNumerosEjercicio1 = [ 9, 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
  const paresRepetidos = contarNumerosParesRepetidos( listaNumerosEjercicio1 );
  console.log('Numero de pares repetidos: ', paresRepetidos);
  console.log('================================================');
  console.log('');

  console.log('================= Ejercicio #2 =================');
  const listaNumerosEjercicio2 = [ 2, 3, 5, 1, 4 ];
  const { sumaMinima, sumaMaxima } = sumaMaximosMinimos( listaNumerosEjercicio2 );
  console.log(`Suma minima: ${ sumaMinima }  Suma máxima: ${ sumaMaxima }`);
  console.log('================================================');
  console.log('');

  console.log('================= Ejercicio #3 =================');
  const edad = 4;
  const velasASoplar = cuantasVelasSoplar( edad );
  console.log(`Cuantas puede soplar: ${ velasASoplar }`)
  console.log('================================================');
}

function contarNumerosParesRepetidos( listaNumeros ) {
  let numeroCoincidencias = 0;

  if ( esUnaListaNumericaValida( listaNumeros ) ){
      const datosUnicos = new Set( listaNumeros );
      const listaLimpia = [...datosUnicos];

      listaLimpia.forEach( (numeroUnicoLista) => {
        const coincidencias = listaNumeros.filter( (number) => number === numeroUnicoLista);
        const sizeArray = coincidencias.length;

        if ( coincidencias.length >= 2 ) {
          numeroCoincidencias += sizeArray % 2 === 0 ? (sizeArray / 2) : (sizeArray - 1) / 2;
        }

      });
      return numeroCoincidencias;
  }
  console.error('No es una lista valida, vuelve a intentarlo');
  return numeroCoincidencias;
}

function sumaMaximosMinimos( listaNumeros ) {
  let sumaMinima = 0;
  let sumaMaxima = 0;

  if ( esUnaListaNumericaValida( listaNumeros ) ) {
    const minimo = Math.min( ...listaNumeros );
    const maximo = Math.max( ...listaNumeros );

    sumaMinima = listaNumeros.reduce( (acum, actual) => acum += actual !== maximo ? actual : 0, 0);
    sumaMaxima = listaNumeros.reduce( (acum, actual) => acum += actual !== minimo ? actual : 0, 0);
  } else {
    console.error('Ingrese una lista valida');
  }

  return { sumaMinima, sumaMaxima };
}

function cuantasVelasSoplar( edad ) {

  let cantidadVelasSoplar = 0;

  if ( isNaN( edad ) === false ) {
    const velas = crearVelas( edad );
    const velaMasGrande = Math.max( ...velas );
    console.log(`Velas: ${ velas }`);
    cantidadVelasSoplar = velas.reduce( (acum, actual) => acum += actual === velaMasGrande ? 1 : 0, 0);
  } else {
    console.error('No es una edad valida, intentalo nuevamente');
  }

  return cantidadVelasSoplar;
}

function crearVelas( velasMaximas ) {
  const velas = [];

  for( let i = 1; i <= velasMaximas; i++ ) {
    const vela = Math.floor( Math.random() * velasMaximas + 1);
    velas.push( vela );
  }

  return velas;
}

function esUnaListaNumericaValida( listado ) {

  let valida = false;

  if ( Array.isArray(listado) ) {
    valida = listado.every( (numero) => isNaN( numero ) === false  );
  }

  return valida;

}

main();