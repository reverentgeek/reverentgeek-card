import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { colors, gradient, palette } from "../bin/colors.js";
import { stripAnsi } from "./helpers.js";

describe( "colors", () => {
	it( "exposes the hex palette used throughout the card", () => {
		assert.equal( colors.blue, "#006EFF" );
		assert.equal( colors.blueSky, "#00D2FF" );
		assert.equal( colors.springGreen, "#00ED64" );
		assert.equal( colors.inkyBlue, "#001E2B" );
		assert.equal( colors.lightBlue, "#99DAFF" );
		assert.equal( colors.orange, "#FF9F10" );
		assert.equal( colors.pink, "#F2C5EE" );
		assert.equal( colors.yellow, "#FFE212" );
	} );

	it( "exposes chalk-based palette stylers that preserve the input text", () => {
		for ( const name of [ "blue", "lightBlue", "orange", "yellow" ] ) {
			const styled = palette[name]( "x" );
			assert.equal( typeof styled, "string" );
			assert.equal( stripAnsi( styled ), "x" );
		}
	} );

	it( "exposes a gradient function that returns a string containing the input", () => {
		const styled = gradient( "hello" );
		assert.equal( typeof styled, "string" );
		assert.equal( stripAnsi( styled ), "hello" );
	} );
} );
