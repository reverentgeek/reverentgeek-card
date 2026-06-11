import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { artOrder, profile } from "../config/profile.js";
import { availableArt } from "../art/index.js";

describe( "profile", () => {
	it( "lists an art order that only references known art assets", () => {
		assert.ok( Array.isArray( artOrder ) );
		assert.ok( artOrder.length > 0 );

		const known = availableArt();
		for ( const name of artOrder ) {
			assert.ok( known.includes( name ), `unknown art asset in artOrder: ${ name }` );
		}
	} );

	it( "exposes the core profile fields", () => {
		assert.equal( typeof profile.name, "string" );
		assert.equal( typeof profile.handle, "string" );
		assert.equal( typeof profile.bio, "string" );
		assert.ok( Array.isArray( profile.infoSections ) );
		assert.ok( profile.infoSections.length > 0 );
	} );

	it( "gives every info section a label and a value", () => {
		for ( const section of profile.infoSections ) {
			assert.equal( typeof section.label, "string" );
			assert.ok(
				typeof section.value === "string" || Array.isArray( section.value ),
				`section ${ section.label } must have a string or array value`
			);
		}
	} );

	it( "only references styles that the renderer knows how to apply", () => {
		const knownStyles = new Set( [ "orange", "gradient", "lightBlue", "yellow", undefined ] );
		for ( const section of profile.infoSections ) {
			assert.ok(
				knownStyles.has( section.style ),
				`section ${ section.label } uses unknown style: ${ section.style }`
			);
		}
	} );
} );
