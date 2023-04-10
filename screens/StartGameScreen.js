import  PrimaryButton from "../components/PrimaryButton";
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useState } from "react";

function StartGameScreen({onPickNumber}) {
    const[enteredNum, setEnteredNum] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNum(enteredText);
    }

    function resetInputHandler() {
        setEnteredNum('');
    }
    
    function confirmInputHandler() {
        const choosenNum = parseInt(enteredNum);
        if(isNaN(choosenNum) || choosenNum<=0 || choosenNum>99){
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99', 
            [{text:'Okay', style:'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(choosenNum);
    }

    return (
        <View>
            <TextInput onChangeText={numberInputHandler} value={enteredNum}  style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    textInput :{
      height: 50,
      fontSize: 32,
      borderBottomColor: '#ddb52f',
      borderBottomWidth: 2,
      color: '#72063c',
      marginVertical: 20,
      marginLeft: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      width: 80,
    //   flex:1
    },
    buttonsContainer: {
        flexDirection: 'row',
        // flex:1
    },
    buttonContainer: {
        // flex: 1,
    }
  });
  