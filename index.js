

function main() {
  obtenerCoincidencia(1);
}

function obtenerCoincidencia( listaNumeros ) {
  if ( Array.isArray( listaNumeros ) ){
    console.log('TODO GOOD: ', listaNumeros);
  } else {
    console.error( 'UN error' );
    throw "ERROR";
  }
}

main();