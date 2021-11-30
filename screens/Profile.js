import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

import { globalStyles } from "../styles/globalStyles";

const Profile = () => {
    return (  
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Perfil</Text>
            <Image 
            style={styles.person}
            source={require('../assets/person.png')} 
            />
            <View style={styles.containerText}>
                <Text style={styles.text}>Federico Ivan Leiva</Text>
                <Text style={styles.text}>21 años</Text>
                <Text style={styles.text}>fedeleiva20@gmail.com</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    person: {
        width: 200,
        height: 200,
        marginTop: 20
    },
    containerText: {

    },  
    text: {
        fontSize: 16,
        color: "#fff",
        marginTop: 20
    }
})
 
export default Profile;