import React from "react";
import { create } from "react-test-renderer";
import Animated from "react-native-reanimated";

import { CustomTabBar } from "../TabBar";

describe("CustomTabBar component", () => {
	it("renders correctly", () => {
		const mockProps = {
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
				emit: jest.fn(),
			},
			descriptors: {
				route0: {
					render: jest.fn(),
					options: {
						tabBarLabel: "A tab name",
					},
				},
			},
		};
		const component = create(<CustomTabBar {...mockProps} />);

		expect(component.toJSON()).toMatchSnapshot();
	});
});
