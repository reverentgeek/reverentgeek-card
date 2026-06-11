#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import { buildCard } from "./build-card.js";

console.log( buildCard() );
