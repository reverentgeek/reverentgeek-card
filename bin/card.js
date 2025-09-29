#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import boxen from "boxen";

import { availableArt, loadArt } from "../art/index.js";
import { artOrder, profile } from "../config/profile.js";
import { colors, gradient, palette } from "./colors.js";
import { renderInfoSections } from "./render-info.js";

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
	const formatter = valueStylers[style];

	if ( !formatter ) {
		return value;
	}

	return formatter( value );
};

const styledInfoSections = profile.infoSections.map( section => ( {
	...section,
	value: styleValue( section )
} ) );

// Actual strings we're going to output
const hrText = "----------~~~~~~~~~==========~~~~~~~~~-----------";
const hr = gradient( hrText );
const centerText = ( text, width ) => {
	const textLength = text.length;
	const paddingTotal = Math.max( width - textLength, 0 );
	const paddingLeft = Math.floor( paddingTotal / 2 );
	const paddingRight = paddingTotal - paddingLeft;

	return `${ " ".repeat( paddingLeft ) }${ text }${ " ".repeat( paddingRight ) }`;
};
const wrapText = ( text, width ) => {
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
