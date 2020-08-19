module.exports = {
	preset: "react-native",
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
	setupFiles: [
		"./setup.js",
		"./node_modules/react-native-gesture-handler/jestSetup.js",
	],
	moduleFileExtensions: ["js", "jsx", "json", "node"],
	transformIgnorePatterns: [
		"<rootDir>/node_modules/(?!(jest-)?react-native(.*)|react-navigation(.*)|@react-navigation(.*)|@react-native-community)",
	],
};
