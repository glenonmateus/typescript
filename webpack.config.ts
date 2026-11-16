import path from "node:path";
import { fileURLToPath } from "node:url";
import type webpack from "webpack";

// in case you run into any TypeScript error when configuring `devServer`
import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/A0018-webpack/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "frontend", "assets", "js"),
	},
};

export default config;
