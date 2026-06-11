import chalk from "chalk";
import gs from "gradient-string";

export const colors = {
	blue: "#006EFF",
	blueSky: "#00D2FF",
	springGreen: "#00ED64",
	inkyBlue: "#001E2B",
	lightBlue: "#99DAFF",
	orange: "#FF9F10",
	pink: "#F2C5EE",
	yellow: "#FFE212"
};

export const palette = {
	blue: chalk.hex( colors.blue ),
	lightBlue: chalk.hex( colors.lightBlue ),
	orange: chalk.hex( colors.orange ),
	yellow: chalk.hex( colors.yellow )
};

export const gradient = gs( [ colors.springGreen, colors.blueSky ] );
