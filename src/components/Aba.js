import React from "react";
import { View, StyleSheet, TouchableNativeFeedback as TNF, Dimensions } from "react-native";

import Grid from "../images/vectors/instagram-grid-line.svg";
import Reels from "../images/vectors/instagram-reels-line-gray.svg";
import Contact from "../images/vectors/instagram-contact-line-gray.svg";

const vw = Dimensions.get("screen").width;

export default function Aba() {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.tab}>
                <Grid width={23} height={23} />
            </View>
            <View style={StyleSheet.tab}>
                <Reels width={23} height={23} />
            </View>
            <View style={StyleSheet.tab}>
                <Contact width={23} height={23} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: vw,
        height: 50,
        backgroundColor: "#1a1a1a",
        borderColor: "#565656",
        borderTopWidth: 0.2,
        flexDirection: "row",
    },

    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})