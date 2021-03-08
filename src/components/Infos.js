import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Story, ColorsStory } from "./Story"

const vw = Dimensions.get("screen").width;

import PhotoPerfil from "../images/perfil.jpeg";

export default function Infos() {
    return (
    <View style={styles.container}>
        <Story
            source={PhotoPerfil}
            size={92}
            colors={ColorsStory.Destaques}
        />
        <View style={styles.containerInfo}>
            <View style={styles.info} >
               <Text style={[styles.text, styles.number]} >9</Text>
               <Text style={styles.text} >Publicações</Text>
            </View>
            <View style={styles.info} >
               <Text style={[styles.text, styles.number]} >1067</Text>
               <Text style={styles.text} >Seguidores</Text>
            </View>
            <View style={styles.info} >
               <Text style={[styles.text, styles.number]} >1200</Text>
               <Text style={styles.text}>Seguindo</Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
        width: vw,
        height: 110,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },

    containerInfo: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around",
        paddingLeft: 10,
    },

    image: {
        height: 92,
        width: 92,
        borderRadius: 46,
    },

    info: {
        alignItems: "center",
    },

    text: {
        color: "#ffffff",
    },

    number: {
        fontSize: 20,
        fontWeight: "bold",
    }
});