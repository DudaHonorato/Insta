import React from "react";
import { View, Image, StyleSheet, Dimensions, TouchableOpacity as TO } from "react-native";

import Galery from "../images/vectors/instagram-galery-fill.svg";

const vw = Dimensions.get("screen").width;

const imagens = [
    {
       id: Math.random(),
       source: require("../images/posts/post1.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post2.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post3.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post4.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post5.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post6.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post7.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post8.jpeg"),
       icon: null, 
    },
    {
       id: Math.random(),
       source: require("../images/posts/post9.jpeg"),
       icon: null, 
    },
]

export default function Posts() {
    return (<View style={styles.containerPosts}>{Post()}</View>)
}

function Post() {
    return (imagens.map((element) => {
        return (
            <TO key={element.id} onPress={() => {}}>
            <View style={styles.container}>
                <Image source={element.source} style={styles.image} />
                {element.icon === "galery" && (
                    <Galery width={17} height={17} style={styles.icon} />
                )}
            </View>
        </TO>
        )
    }))
}

const styles = StyleSheet.create({
    containerPosts: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        backgroundColor: "#1a1a1a",
    },

    container: {
        position: "relative",
    },

    image: {
        width: vw / 3 - 2,
        height: vw / 3 -2,
        margin: 1,
    },

    icon: {
        position: "absolute",
        top: 8,
        right: 8,
    }
})