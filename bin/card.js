#!/usr/bin/env node
"use strict";
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
	work: chalk.white( "Principal Developer Advocate" ),
	workUrl: chalk.cyan( "https://pluralsight.com" ),
	twitter: chalk.cyan( "https://twitter.com/reverentgeek" ),
	github: chalk.cyan( "https://github.com/reverentgeek" ),
	linkedin: chalk.cyan( "https://linkedin.com/in/davidneal" ),
	web: chalk.cyan( "https://reverentgeek.com" ),
	email: chalk.cyan( "david@reverentgeek.com" ),
	npx: chalk.white( "npx reverentgeek" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelWorkUrl: chalk.white.bold( "           " ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" ),
	labelEmail: chalk.white.bold( "     Email:" ),
	bio: chalk.yellow( `I am a family man, geek, musician, illustrator, 
speaker, software developer, and Microsoft MVP
living in North GA. I run on a high-octane
mixture of caffeine and JavaScript, and
I’m entirely made of bacon.` ),
	msg: chalk.white( `If there's anything I can help you with,
reach out anytime! You can reach me by email and
my Twitter direct messages are open!` )
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
const emailing = `${ data.labelEmail }  ${ data.email }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;
const msg = `\n${ data.msg }`;

const card = [
	avatar, banner,
	hr, heading, hr, working, workingUrl,
	twittering, githubing, linkedining,
	webing, emailing, carding, bio, msg
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
