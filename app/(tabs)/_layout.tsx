import { Tabs } from "expo-router";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    title: "List",
                    tabBarLabel: "List",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                    ),
                }}
            />
        </Tabs>
    );
}