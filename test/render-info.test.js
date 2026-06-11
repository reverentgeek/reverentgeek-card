import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { renderInfoSections } from "../bin/render-info.js";

describe( "renderInfoSections", () => {
	it( "right-pads labels to the widest label and appends a colon", () => {
		const result = renderInfoSections( [
			{ label: "A", value: "1" },
			{ label: "Long", value: "2" }
		] );

		assert.deepEqual( result, [
			"   A:  1",
			"Long:  2"
		] );
	} );

	it( "applies the supplied labelColor to each label", () => {
		const result = renderInfoSections(
			[ { label: "Work", value: "dev" } ],
			{ labelColor: label => `[${ label }]` }
		);

		assert.deepEqual( result, [ "[Work:]  dev" ] );
	} );

	it( "renders array values as repeated rows, blanking the label after the first", () => {
		const result = renderInfoSections( [
			{ label: "Work", value: [ "Role", "Company" ] }
		] );

		assert.deepEqual( result, [
			"Work:  Role",
			"       Company"
		] );
	} );

	it( "prefixes the first row with the leading newline character when leadingNewline is set", () => {
		const result = renderInfoSections(
			[ { label: "Card", value: "npx", leadingNewline: true } ],
			{ labelColor: label => label, leadingNewlineChar: "\n" }
		);

		assert.deepEqual( result, [ "\nCard:  npx" ] );
	} );

	it( "only applies the leading newline to the first row of a multi-line value", () => {
		const result = renderInfoSections(
			[ { label: "Work", value: [ "Role", "Company" ], leadingNewline: true } ],
			{ labelColor: label => label, leadingNewlineChar: ">>" }
		);

		assert.deepEqual( result, [
			">>Work:  Role",
			"       Company"
		] );
	} );

	it( "renders an empty label as blank padding the width of the labels plus the colon", () => {
		const result = renderInfoSections( [
			{ label: "", value: "value" },
			{ label: "Wide", value: "other" }
		] );

		// labelWidth is 4 ("Wide"), so an empty label is padded to width + 1 = 5 spaces
		assert.deepEqual( result, [
			"       value",
			"Wide:  other"
		] );
	} );
} );
