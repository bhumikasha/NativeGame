import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={props.onPress} android_ripple={{color: Colors.primary500}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8, /* Top Bottom */
        paddingHorizontal: 16, /* Left Right */
        elevation: 8 /* Shadow */
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        
    }
});