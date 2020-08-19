import * as React from "react";
import {
	MaterialTopTabBar
} from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	labelStyle: {
		fontSize: 18,
		textTransform: "none",
	},
});

export const CustomTabBar = (
	props
) => {
	return (
		<MaterialTopTabBar
			{...props}
			activeTintColor={"#000"}
			inactiveTintColor={"#333"}
			indicatorStyle={{ backgroundColor: "#000" }}
			labelStyle={styles.labelStyle}
			pressColor={"#123456"}
			pressOpacity={0.6}
			style={{ backgroundColor: "#fff" }}
		/>
	);
};
