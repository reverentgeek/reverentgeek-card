export const centerText = ( text, width ) => {
	const textLength = text.length;
	const paddingTotal = Math.max( width - textLength, 0 );
	const paddingLeft = Math.floor( paddingTotal / 2 );
	const paddingRight = paddingTotal - paddingLeft;

	return `${ " ".repeat( paddingLeft ) }${ text }${ " ".repeat( paddingRight ) }`;
};

export const wrapText = ( text, width ) => {
	const words = text.split( /\s+/ );
	const lines = [];
	let currentLine = "";

	words.forEach( ( word ) => {
		const candidate = currentLine.length === 0 ? word : `${ currentLine } ${ word }`;

		if ( candidate.length <= width ) {
			currentLine = candidate;
			return;
		}

		if ( currentLine.length > 0 ) {
			lines.push( currentLine );
		}

		currentLine = word;
	} );

	if ( currentLine.length > 0 ) {
		lines.push( currentLine );
	}

	return lines;
};
