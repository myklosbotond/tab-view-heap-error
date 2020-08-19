import * as React from "react";
import { create } from "react-test-renderer";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { HeraTabBar } from "../hera-tab-bar";

// Disable warning for unnecessary .getNode() until react-native-tab-view fixes it
jest.spyOn(global.console, "warn").mockImplementation(() => {});

describe("HeraTabBar component", () => {
	it("renders correctly with theme colors", () => {
		const mockProps: MaterialTopTabBarProps = {
			layout: {
				width: 320,
				height: 42,
			},
			position: new Animated.Value(0),
			jumpTo: jest.fn(),
			state: {
				key: "",
				index: 0,
				routeNames: ["route"],
				routes: [
					{
						key: "route0",
						name: "route",
					},
				],
				type: "tab",
				stale: false,
				history: [],
			},
			navigation: {
				...useNavigation(),
				emit: jest.fn(),
			},
			descriptors: {
				route0: {
					render: jest.fn(),
					options: {
						tabBarLabel: "A tab name",
					},
					navigation: useNavigation(),
				},
			},
		};
		const component = create(<HeraTabBar {...mockProps} />);

		expect(component.toJSON()).toMatchSnapshot();
	});
});
