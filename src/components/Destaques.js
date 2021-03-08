import React from "react";
import {  View, Text, StyleSheet, ScrollView} from "react-native"

import { ColorsStory, Story } from "./Story"

import amizade from "../images/destaques/amizade.jpeg";
import burger from "../images/destaques/burger.jpeg";
import familia from '../images/destaques/familia.png';
import viagens from '../images/destaques/viagens.jpg';

export default function Destaques() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<View style={[styles.destaque, { marginLeft: 4 }]}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={amizade}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						amizade
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={burger}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						burger
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={familia}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						familia
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={viagens}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						viagens
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		height: 105,
	},
	destaque: {
		alignItems: "center",
		justifyContent: "center",
		padding: 2,
		width: 82,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 12,
		paddingTop: 3,
		fontWeight: "300",
	},
});