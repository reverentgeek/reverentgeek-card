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
const pink = "#ff1675";
const orange = "#ff7b01";
const inkyBlue = "#130f25";
const yellow = "#ffc942";
const blue = "#00A3FF";
const green = "#02e088";
const lightBlue = "#99DAFF";

// set up chalk and gradients
const yellowChalk = chalk.hex( yellow );
const lbChalk = chalk.hex( lightBlue  );
const blueChalk = chalk.hex( blue );
const greenChalk = chalk.hex( green  );
const orangeChalk = chalk.hex( orange );
// const pinkChalk = chalk.hex( pink );
const ps = gs( [ pink, orange ] );

const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: pink,
	backgroundColor: inkyBlue
};

// Text + chalk definitions
const data = {
	name: yellowChalk.bold( "                   DAVID NEAL" ),
	handle: yellowChalk( "reverentgeek" ),
	// work: ps( "Principal Developer Advocate" ),
	// workUrl: ps( "https://pluralsight.com" ),
	twitter: yellowChalk( "https://x.com/reverentgeek" ),
	mastodon: yellowChalk( "@reverentgeek@reverentgeek.com" ),
	bluesky: yellowChalk( "@reverentgeek.com" ),
	threads: yellowChalk( "@reverentgeek" ),
	github: yellowChalk( "https://github.com/reverentgeek" ),
	linkedin: yellowChalk( "https://linkedin.com/in/davidneal" ),
	web: yellowChalk( "https://reverentgeek.com" ),
	email: yellowChalk( "david@reverentgeek.com" ),
	npx: orangeChalk( "npx reverentgeek" ),
	labelWork: blueChalk( "      Work:" ),
	labelWorkUrl: blueChalk( "           " ),
	labelTwitter: blueChalk( "X (Twitter):" ),
	labelMastodon: blueChalk( "   Mastodon:" ),
	labelBluesky: blueChalk( "    BlueSky:" ),
	labelThreads: blueChalk( "    Threads:" ),
	labelGitHub: blueChalk( "     GitHub:" ),
	labelLinkedIn: blueChalk( "   LinkedIn:" ),
	labelWeb: blueChalk( "        Web:" ),
	labelCard: blueChalk( "       Card:" ),
	labelEmail: blueChalk( "      Email:" ),
	bio: lbChalk( `I am a family man, geek, musician, illustrator, 
speaker, software developer, and Microsoft MVP
living in North GA. I run on a high-octane
mixture of caffeine and JavaScript, and
I'm entirely made of bacon.` ),
	msg: greenChalk( `If there's anything I can help you with,
reach out anytime! You can reach me by email and
my Twitter direct messages are open!` )
};

// Actual strings we're going to output
const hr = ps( "----------~~~~~~~~~==========~~~~~~~~~-----------" );
const heading = data.name;
// const working = `\n${ data.labelWork }  ${ data.work }`;
// const workingUrl = `${ data.labelWorkUrl }  ${ data.workUrl }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const tooting = `${ data.labelMastodon }  ${ data.mastodon }`;
const skeeting = `${ data.labelBluesky }  ${ data.bluesky }`;
const threading = `${ data.labelThreads }  ${ data.threads }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const emailing = `${ data.labelEmail }  ${ data.email }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;
const msg = `\n${ data.msg }`;

// const card = [
// 	ps.multiline( avatar ), ps.multiline( banner ),
// 	hr, heading, hr, working, workingUrl,
// 	twittering, tooting, skeeting, threading,
// 	githubing, linkedining,
// 	webing, emailing, carding, bio, msg
// ];

const card = [
	ps.multiline( avatar ), ps.multiline( banner ),
	hr, heading, hr,
	twittering, tooting, skeeting, threading,
	githubing, linkedining,
	webing, emailing, carding, bio, msg
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( boxen( output, options ) );
