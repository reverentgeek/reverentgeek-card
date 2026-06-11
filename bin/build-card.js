// Builds the rendered calling-card string. Kept separate from `card.js` so the
// rendering logic can be unit-tested without triggering console output.
import boxen from "boxen";

import { availableArt as defaultAvailableArt, loadArt as defaultLoadArt } from "../art/index.js";
import { artOrder as defaultArtOrder, profile as defaultProfile } from "../config/profile.js";
import { colors, gradient, palette } from "./colors.js";
import { renderInfoSections } from "./render-info.js";
import { centerText, wrapText } from "./text.js";

const newline = "\n";

// Default options for Boxen
export const boxenOptions = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: colors.blueSky,
	backgroundColor: colors.inkyBlue
};

const valueStylers = {
	orange: value => palette.orange( value ),
	gradient: value => gradient( value ),
	lightBlue: value => palette.lightBlue( value ),
	yellow: value => palette.yellow( value )
};

export const styleValue = ( { value, style } ) => {
	const values = Array.isArray( value ) ? value : [ value ];
	const formatter = valueStylers[style];

	if ( !formatter ) {
		return values;
	}

	return values.map( entry => formatter( entry ) );
};

// Build the full card content (without the boxen frame).
export const buildCardContent = ( {
	profile = defaultProfile,
	artOrder = defaultArtOrder,
	availableArt = defaultAvailableArt,
	loadArt = defaultLoadArt
} = {} ) => {
	const styledInfoSections = profile.infoSections.map( section => ( {
		...section,
		value: styleValue( section )
	} ) );

	const hrText = "----------~~~~~~~~~==========~~~~~~~~~-----------";
	const hr = gradient( hrText );
	const heading = palette.yellow.bold( centerText( profile.name, hrText.length ) );
	const formattedInfo = renderInfoSections( styledInfoSections, {
		labelColor: palette.blue
	} );

	const bioLines = wrapText( profile.bio, hrText.length );
	const bio = `\n${ bioLines.map( line => palette.lightBlue( line ) ).join( newline ) }`;

	const artAssets = artOrder.length > 0 ? artOrder : availableArt();
	const art = artAssets.map( name => gradient.multiline( loadArt( name ) ) );

	const card = [
		...art,
		hr, heading, hr,
		...formattedInfo,
		bio
	];

	return card.join( newline );
};

// Build the full card, wrapped in the boxen frame, ready to print.
export const buildCard = ( options = {} ) => boxen( buildCardContent( options ), boxenOptions );
