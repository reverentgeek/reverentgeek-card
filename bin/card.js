#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

// Some sweet ascii art
const avatar = require( "../art/avatar" );
const banner = require( "../art/banner" );

const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

// Text + chalk definitions
const data = {
	name: chalk.white.bold( "                   DAVID NEAL" ),
	handle: chalk.cyan( "reverentgeek" ),
	work: chalk.white( "Senior Developer Advocate at Okta" ),
	workUrl: chalk.cyan( "https://developer.okta.com" ),
	twitter: chalk.cyan( "https://twitter.com/reverentgeek" ),
	github: chalk.cyan( "https://github.com/reverentgeek" ),
	linkedin: chalk.cyan( "https://linkedin.com/in/davidneal" ),
	web: chalk.cyan( "https://reverentgeek.com" ),
	npx: chalk.white( "npx reverentgeek" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelWorkUrl: chalk.white.bold( "           " ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" ),
	bio: chalk.yellow( `I am a family man, geek, musician, illustrator, 
speaker, software developer, and Microsoft MVP
living in North GA. I run on a high-octane
mixture of caffeine and JavaScript, and
I’m entirely made of bacon.` )
};

// Actual strings we're going to output
const hr = chalk.yellow( "----------~~~~~~~~~==========~~~~~~~~~-----------" );
const heading = `${ data.name }`;
const working = `\n${ data.labelWork }  ${ data.work }`;
const workingUrl = `${ data.labelWorkUrl }  ${ data.workUrl }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;

const card = [
	avatar, banner,
	hr, heading, hr, working, workingUrl,
	twittering, githubing, linkedining,
	webing, carding, bio
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
