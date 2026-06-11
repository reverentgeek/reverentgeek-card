import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { boxenOptions, buildCard, buildCardContent, styleValue } from "../bin/build-card.js";
import { stripAnsi } from "./helpers.js";

describe( "styleValue", () => {
	it( "wraps a single string value in an array", () => {
		const result = styleValue( { value: "hi", style: "yellow" } );
		assert.equal( result.length, 1 );
		assert.equal( stripAnsi( result[0] ), "hi" );
	} );

	it( "styles each entry of an array value", () => {
		const result = styleValue( { value: [ "a", "b" ], style: "orange" } );
		assert.deepEqual( result.map( stripAnsi ), [ "a", "b" ] );
	} );

	it( "supports every named styler", () => {
		for ( const style of [ "orange", "gradient", "lightBlue", "yellow" ] ) {
			const result = styleValue( { value: "v", style } );
			assert.equal( stripAnsi( result[0] ), "v" );
		}
	} );

	it( "returns the raw values when the style is unknown", () => {
		assert.deepEqual( styleValue( { value: "plain", style: "bogus" } ), [ "plain" ] );
	} );

	it( "returns the raw values when no style is provided", () => {
		assert.deepEqual( styleValue( { value: [ "x", "y" ] } ), [ "x", "y" ] );
	} );
} );

describe( "buildCardContent", () => {
	const fixture = {
		profile: {
			name: "TEST USER",
			handle: "tester",
			bio: "A short bio that should appear in the rendered output.",
			infoSections: [
				{ label: "Work", value: [ "Role", "https://example.com" ], style: "gradient" },
				{ label: "Handle", value: "tester", style: "yellow" }
			]
		},
		artOrder: [ "avatar" ],
		availableArt: () => [ "avatar", "banner" ],
		loadArt: name => `<art:${ name }>`
	};

	it( "renders the heading, info, bio, and the requested art", () => {
		const content = stripAnsi( buildCardContent( fixture ) );

		assert.ok( content.includes( "TEST USER" ) );
		assert.ok( content.includes( "Work:" ) );
		assert.ok( content.includes( "Role" ) );
		assert.ok( content.includes( "Handle:" ) );
		assert.ok( content.includes( "<art:avatar>" ) );
		assert.ok( content.includes( "A short bio" ) );
	} );

	it( "renders multi-line values on their own rows", () => {
		const content = stripAnsi( buildCardContent( fixture ) );
		assert.ok( content.includes( "https://example.com" ) );
	} );

	it( "falls back to availableArt() when artOrder is empty", () => {
		const loaded = [];
		const content = stripAnsi( buildCardContent( {
			...fixture,
			artOrder: [],
			loadArt: ( name ) => {
				loaded.push( name );
				return `<art:${ name }>`;
			}
		} ) );

		assert.deepEqual( loaded, [ "avatar", "banner" ] );
		assert.ok( content.includes( "<art:avatar>" ) );
		assert.ok( content.includes( "<art:banner>" ) );
	} );

	it( "uses the real profile and art when called with no arguments", () => {
		const content = stripAnsi( buildCardContent() );
		assert.ok( content.includes( "DAVID NEAL" ) );
		assert.ok( content.includes( "reverentgeek" ) );
	} );
} );

describe( "buildCard", () => {
	it( "wraps the content in a boxen frame", () => {
		const card = stripAnsi( buildCard() );
		// boxen "round" border draws rounded corners around the content.
		assert.ok( card.includes( "╭" ) );
		assert.ok( card.includes( "╯" ) );
		assert.ok( card.includes( "DAVID NEAL" ) );
	} );

	it( "exposes the boxen options used to frame the card", () => {
		assert.equal( boxenOptions.borderStyle, "round" );
		assert.equal( boxenOptions.padding, 1 );
		assert.equal( boxenOptions.margin, 1 );
	} );
} );
