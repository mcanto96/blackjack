import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array} retorna un nuevo deck
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('Tipos de carta es obligatorio');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('Tipos de carta especial es obligatorio');
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo );
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );;
}