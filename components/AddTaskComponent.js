import React from 'react';

import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native';


const AddTaskComponent = (props) => {
    return ( 
        <>
            <View style={styles.containerTextInput}>
                <TextInput
                    value={props.textInput}
                    style={styles.textInput}
                    onChangeText={(text) => props.setTextInput(text)}
                />
                <TouchableWithoutFeedback onPress={() => props.addNewRow()}>
                    <View style={styles.containerAddRow}>
                    <Text style={styles.textAddRow}>Add</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </>
     );
}
 
export default AddTaskComponent;

const styles = StyleSheet.create({
    containerTextInput: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "row",
      width: "90%",
      borderRadius: 10,
      overflow: "hidden",
      maxHeight: 40,
      marginTop: 15,
    },
    textInput: {
      backgroundColor: "#fff",
      width: "80%",
      paddingHorizontal: 10,
    },
    containerAddRow: {
      width: "10%",
      backgroundColor: "#2FDD92",
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
    },
    textAddRow: {
      textAlign: "center",
      fontWeight: "700",
      color: "#fff",
    },
    containerButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: "90%",
      alignContent: "space-between",
    },
    containerRows: {
      height: "50%",
      marginTop: 20,
      borderRadius: 10,
      paddingHorizontal: 10,
      width: "90%",
      backgroundColor: "#fff",
    },
    containerRow: {
      width: "100%",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      maxHeight: 60,
      padding: 15,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
    },
    containerActions: {
      flex: 1,
      maxWidth: "25%",
      flexDirection: "row",
    },
    action: {
      marginHorizontal: 8,
    },
    notRows: {
      alignSelf: "center",
      marginTop: 40,
      fontSize: 18,
      fontWeight: "700",
    },
  });