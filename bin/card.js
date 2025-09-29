#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import boxen from "boxen";

import { availableArt, loadArt } from "../art/index.js";
import { artOrder, profile } from "../config/profile.js";
import { colors, gradient, palette } from "./colors.js";
import { renderInfoSections } from "./render-info.js";
import { centerText, wrapText } from "./text.js";

const newline = "\n";

// Define options for Boxen
const options = {
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

const styleValue = ( { value, style } ) => {
	const values = Array.isArray( value ) ? value : [ value ];
	const formatter = valueStylers[style];

	if ( !formatter ) {
		return values;
	}

	return values.map( entry => formatter( entry ) );
};

const styledInfoSections = profile.infoSections.map( section => ( {
	...section,
	value: styleValue( section )
} ) );

// Actual strings we're going to output
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

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( boxen( output, options ) );
