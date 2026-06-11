import { defineConfig } from "eslint/config"; // eslint-disable-line n/no-unpublished-import
import rg from "eslint-config-reverentgeek"; // eslint-disable-line n/no-unpublished-import

export default defineConfig(
	{
		extends: [ rg.configs["node-esm"] ],
		rules: {
		}
	},
	{
		// Tests use the built-in `node:test` runner, which the shared config
		// flags as unsupported against older Node versions. The test suite is
		// only ever run with the local toolchain, so allow those builtins here.
		files: [ "test/**/*.js" ],
		rules: {
			"n/no-unsupported-features/node-builtins": "off"
		}
	}
);
