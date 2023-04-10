import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Ionicons from '@expo/vector-icons/Ionicons';

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100

function GameScreen({choosenNum}) {
    const initialGuess = generateRandomNumber(minBoundary, maxBoundary, choosenNum);
    const [currentGuess, setCurrentGuess] = useState(initialGuess); 
    
    function nextGuessHandler(direction) {
        if(
            (direction === 'lower' && currentGuess < choosenNum) ||
            (direction === 'greater' && currentGuess > choosenNum)
        ){
            Alert.alert("Don't lie!", [{text: 'Sorry', style: 'cancel'}]);
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }    
        const newRndNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum); 
    }

    return(
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <Title>{currentGuess}</Title>
            <View>
                <Text>Higher Or Lower?</Text>
                <View style={styles.inRow}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'upper')}>+</PrimaryButton>
                </View>
            </View>
        </View>
    )
} 

export default GameScreen;

const styles = StyleSheet.create({
    inRow: {
        flexDirection: "row"
    },
    screen: {
        flex: 1,
        padding: 24
    }
})