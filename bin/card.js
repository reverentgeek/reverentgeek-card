#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import gs from "gradient-string";

// Some sweet ascii art
import avatar from "../art/avatar.js";
import banner from "../art/banner.js";

// define custom colors
const colors = {
	blue: "#00A3FF",
	blueSky: "#51D2FB",
	mintGreen: "#42F0CD",
	inkyBlue: "#130f25",
	lightBlue: "#99DAFF",
	orange: "#ff7b01",
	pink: "#ff1675",
	yellow: "#ffc942"
};

// set up chalk and gradients
const yellowChalk = chalk.hex( colors.yellow );
const lbChalk = chalk.hex( colors.lightBlue );
const blueChalk = chalk.hex( colors.blue );
const orangeChalk = chalk.hex( colors.orange );
const gradient = gs( [ colors.mintGreen, colors.blueSky ] );

const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: colors.blueSky,
	backgroundColor: colors.inkyBlue
};

// Text + chalk definitions
const data = {
	name: yellowChalk.bold( "                   DAVID NEAL" ),
	handle: yellowChalk( "reverentgeek" ),
	work: gradient( "Developer Relations Engineer" ),
	workUrl: gradient( " https://plaid.com" ),
	twitter: yellowChalk( "https://x.com/reverentgeek" ),
	instagram: yellowChalk( "https://instagram.com/reverentgeek" ),
	mastodon: yellowChalk( "@reverentgeek@reverentgeek.com" ),
	bluesky: yellowChalk( "@reverentgeek.com" ),
	threads: yellowChalk( "@reverentgeek" ),
	github: yellowChalk( "https://github.com/reverentgeek" ),
	linkedin: yellowChalk( "https://linkedin.com/in/davidneal" ),
	web: yellowChalk( "https://reverentgeek.com" ),
	email: yellowChalk( "david@reverentgeek.com" ),
	npx: orangeChalk( "npx reverentgeek" ),
	labelWork: blueChalk( "       Work:" ),
	labelWorkUrl: blueChalk( "           " ),
	labelTwitter: blueChalk( "          X:" ),
	labelInstagram: blueChalk( "  Instagram:" ),
	labelMastodon: blueChalk( "   Mastodon:" ),
	labelBluesky: blueChalk( "    BlueSky:" ),
	labelThreads: blueChalk( "    Threads:" ),
	labelGitHub: blueChalk( "     GitHub:" ),
	labelLinkedIn: blueChalk( "   LinkedIn:" ),
	labelWeb: blueChalk( "        Web:" ),
	labelCard: blueChalk( "       Card:" ),
	labelEmail: blueChalk( "      Email:" ),
	bio: lbChalk( `David is a family man, geek, musician, illustrator, 
speaker, software developer, and Microsoft MVP
living in North GA. He runs on a high-octane
mixture of caffeine and JavaScript, and
is entirely made of bacon.` )
// msg: greenChalk( `If there's anything I can help you with,
// reach out anytime!` )
};

// Actual strings we're going to output
const hr = gradient( "----------~~~~~~~~~==========~~~~~~~~~-----------" );
const heading = data.name;
const working = `\n${ data.labelWork }  ${ data.work }`;
const workingUrl = `${ data.labelWorkUrl }  ${ data.workUrl }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const instagramming = `${ data.labelInstagram }  ${ data.instagram }`;
const tooting = `${ data.labelMastodon }  ${ data.mastodon }`;
const skeeting = `${ data.labelBluesky }  ${ data.bluesky }`;
const threading = `${ data.labelThreads }  ${ data.threads }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const emailing = `${ data.labelEmail }  ${ data.email }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;
// const msg = `\n${ data.msg }`;

const card = [
	gradient.multiline( avatar ), gradient.multiline( banner ),
	hr, heading, hr,
	working, workingUrl,
	webing, emailing,
	linkedining,
	githubing,
	instagramming,
	tooting, skeeting, threading,
	twittering,
	carding, bio
	// , msg
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( boxen( output, options ) );
