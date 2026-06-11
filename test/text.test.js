import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { centerText, wrapText } from "../bin/text.js";

describe( "centerText", () => {
	it( "centers text within an even amount of padding", () => {
		// width 7, text length 3 -> 4 padding split 2/2
		assert.equal( centerText( "abc", 7 ), "  abc  " );
	} );

	it( "puts the extra space on the right with odd padding", () => {
		// width 6, text length 3 -> 3 padding split 1/2
		assert.equal( centerText( "abc", 6 ), " abc  " );
	} );

	it( "returns the text unchanged when it exactly fills the width", () => {
		assert.equal( centerText( "abc", 3 ), "abc" );
	} );

	it( "does not add negative padding when the text is wider than the width", () => {
		assert.equal( centerText( "abcdef", 3 ), "abcdef" );
	} );
} );

describe( "wrapText", () => {
	it( "returns a single line when the text fits within the width", () => {
		assert.deepEqual( wrapText( "hello world", 20 ), [ "hello world" ] );
	} );

	it( "wraps text onto multiple lines at word boundaries", () => {
		assert.deepEqual( wrapText( "one two three four", 7 ), [
			"one two",
			"three",
			"four"
		] );
	} );

	it( "places a word that is longer than the width on its own line", () => {
		assert.deepEqual( wrapText( "supercalifragilistic word", 10 ), [
			"supercalifragilistic",
			"word"
		] );
	} );

	it( "collapses runs of whitespace between words", () => {
		assert.deepEqual( wrapText( "a   b", 10 ), [ "a b" ] );
	} );

	it( "returns an empty array for an empty string", () => {
		assert.deepEqual( wrapText( "", 10 ), [] );
	} );
} );
