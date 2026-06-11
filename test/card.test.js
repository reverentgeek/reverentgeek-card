import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";

describe( "card entry point", () => {
	const original = console.log;

	afterEach( () => {
		console.log = original;
	} );

	it( "prints the rendered card to stdout when imported", async () => {
		const output = [];
		console.log = ( ...args ) => output.push( args.join( " " ) );

		await import( "../bin/card.js" );

		assert.equal( output.length, 1 );
		assert.ok( output[0].includes( "DAVID NEAL" ) );
	} );
} );
