import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen  from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/gameScreen';

export default function App() {
  const bodyText = 'Creating Custom Buttons';

  const [currPickedNum, setCurrPickedNum] = useState();

  function pickedNumberHandler(pickedNumber) {
    setCurrPickedNum(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(currPickedNum){
    screen = <GameScreen choosenNum={currPickedNum}/>
  }

  return (
    <LinearGradient style={styles.parent} colors={['pink','white']}>
      <Text style={styles.heading}>{bodyText}</Text>
      <ImageBackground source={require('./assets/dices.jpg')} resizeMode='cover' imageStyle={styles.backgroundImage}>
        {/* <SafeAreaView style={styles.rootScreen}> */}
        {screen}
        {/* </SafeAreaView> */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  /* rootScreen: {
    flex:1
  }, */
  backgroundImage: {
    opacity: 0.20,
    flex:1
  },
  heading: {
    color: 'black',
    fontWeight: 900,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 150
  },
  parent :{
    marginVertical: 150,
    marginHorizontal: 40,
    borderRadius: 20,
    padding: 2,
    elevation: 20,
    shadowOffset: {width:0 , height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  }
});
