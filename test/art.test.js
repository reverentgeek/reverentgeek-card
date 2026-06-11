import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { availableArt, loadArt } from "../art/index.js";
import avatar from "../art/avatar.js";
import banner from "../art/banner.js";

describe( "art", () => {
	it( "lists the available art assets", () => {
		assert.deepEqual( availableArt(), [ "avatar", "banner" ] );
	} );

	it( "loads the avatar asset by name", () => {
		assert.equal( loadArt( "avatar" ), avatar );
		assert.equal( typeof loadArt( "avatar" ), "string" );
	} );

	it( "loads the banner asset by name", () => {
		assert.equal( loadArt( "banner" ), banner );
		assert.equal( typeof loadArt( "banner" ), "string" );
	} );

	it( "throws a descriptive error for an unknown asset", () => {
		assert.throws(
			() => loadArt( "nope" ),
			/Unknown art asset: nope/
		);
	} );
} );
