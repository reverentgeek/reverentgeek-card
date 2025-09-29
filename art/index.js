import avatar from "./avatar.js";
import banner from "./banner.js";

const assets = {
	avatar,
	banner
};

export const loadArt = ( name ) => {
	const art = assets[name];

	if ( !art ) {
		throw new Error( `Unknown art asset: ${ name }` );
	}

	return art;
};

export const availableArt = () => Object.keys( assets );
