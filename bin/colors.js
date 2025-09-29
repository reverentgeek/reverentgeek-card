import chalk from "chalk";
import gs from "gradient-string";

export const colors = {
	blue: "#00A3FF",
	blueSky: "#51D2FB",
	mintGreen: "#42F0CD",
	inkyBlue: "#130f25",
	lightBlue: "#99DAFF",
	orange: "#ff7b01",
	pink: "#ff1675",
	yellow: "#ffc942"
};

export const palette = {
	blue: chalk.hex( colors.blue ),
	lightBlue: chalk.hex( colors.lightBlue ),
	orange: chalk.hex( colors.orange ),
	yellow: chalk.hex( colors.yellow )
};

export const gradient = gs( [ colors.mintGreen, colors.blueSky ] );
