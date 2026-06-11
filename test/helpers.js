// Removes ANSI SGR escape sequences (e.g. the codes chalk and gradient-string
// emit when color is enabled) so assertions can compare the visible text
// regardless of whether the terminal supports color. Building the pattern from
// String.fromCharCode keeps the literal escape character out of the source.
const ANSI_PATTERN = new RegExp( `${ String.fromCharCode( 27 ) }\\[[0-9;]*m`, "g" );

export const stripAnsi = text => text.replace( ANSI_PATTERN, "" );
