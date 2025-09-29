const defaultOptions = {
	labelColor: text => text,
	leadingNewlineChar: "\n"
};

export const renderInfoSections = ( sections, options = defaultOptions ) => {
	const { labelColor, leadingNewlineChar } = { ...defaultOptions, ...options };

	const labelWidth = sections.reduce( ( max, { label } ) => Math.max( max, label.length ), 0 );

	const formatLabel = ( label ) => {
		if ( label.length === 0 ) {
			return labelColor( "".padStart( labelWidth + 1 ) );
		}

		const baseLabel = `${ label.padStart( labelWidth ) }:`;

		return labelColor( baseLabel );
	};

	return sections.flatMap( ( { label, value, leadingNewline = false } ) => {
		const values = Array.isArray( value ) ? value : [ value ];

		return values.map( ( entry, index ) => {
			const prefix = leadingNewline && index === 0 ? leadingNewlineChar : "";
			const formattedLabel = formatLabel( index === 0 ? label : "" );

			return `${ prefix }${ formattedLabel }  ${ entry }`;
		} );
	} );
};
