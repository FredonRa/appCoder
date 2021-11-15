import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Alert, 
  Button,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback 
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';

import {
  useFonts,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';


export default function App() {
  const [ rows, setRows ] = useState([]);
  const [ completedRows, setCompletedRows ] = useState([])
  const [ textInput, setTextInput ] = useState("");
  const [ completedTasks, setCompletedTasks ] = useState(false)
  
  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  const addNewRow = () => {
    let newRow = {
      nombre: textInput,
      id: rows.length,
      completed: false
    }
    if (textInput.length){
      setRows([...rows, newRow])
      setCompletedTasks(false)
    } else {
      Alert.alert("Ocurrió un problema", "El campo de texto está vacío, por favor vuelva a intentarlo")
    }
    setTextInput("");
  }

  const removeRow = (row) => {
    let rowToDelete = rows.filter((rowFilter) => rowFilter.id != row.id)
    setRows(rowToDelete)
  }

  const markRowAsCompleted = (index) => {
    rows[index].completed = true;
    setCompletedRows(rows.filter((row) => row.completed))
    setRows(rows.filter((row) => !row.completed));
  }

  const _renderRows = rows.map((row, index) => {
    return(
      <View key={index} style={styles.containerRow}>
        <Text>{row.nombre}</Text>
        <View style={styles.containerActions}>
          <TouchableWithoutFeedback  onPress={() => markRowAsCompleted(index)}>
            <Text style={styles.action}>
              <MaterialIcons name={row.fav ? "check-circle" : "check-circle-outline"} size={24} color="black" />
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={() => removeRow(row)}>
            <Text style={styles.action}>
              <MaterialIcons name="delete-outline" size={24} color="black" />
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  })

  const _renderCompletedRows = completedRows.map((row, index) => {
    return(
      <View key={index} style={styles.containerRow}>
        <Text>{row.nombre}</Text>
        <View style={styles.containerActions}>
          <TouchableWithoutFeedback>
            <Text style={styles.action}>
              <MaterialIcons name={"check-circle"} size={24} color="black" />
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  })

  return (
    <SafeAreaView style={styles.container}>
      {
        !completedTasks?
          <>
            <Text style={styles.text}>Aloooo Coder!</Text>
            <View style={styles.containerTextInput}>
              <TextInput value={textInput} style={styles.textInput} onChangeText={(text) => setTextInput(text)} />
              <TouchableWithoutFeedback onPress={() => addNewRow()}>
                <View style={styles.containerAddRow}>
                  <Text style={styles.textAddRow}>
                    Add
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </>
        :
        <Text style={styles.text}>Tareas completadas</Text>
      }
      <View style={styles.containerButtons}>
        <Button title={rows.length + " Sin hacer"} onPress={() => setCompletedTasks(false)} />
        <Button title={completedRows.length + " Completadas"} onPress={() => setCompletedTasks(true)} />
      </View>
      <View style={styles.containerRows}>
        { 
          rows.length || completedRows.length ?
            !completedTasks? 
              rows.length ?
                _renderRows
              :
              <Text style={styles.notRows} >Todavía no hay tareas cargadas :(</Text>
            :
              completedRows.length ? 
                _renderCompletedRows
              :
              <Text style={styles.notRows} >Todavía no hay tareas completadas :(</Text>
          :
            <Text style={styles.notRows} >Todavía no hay tareas cargadas :(</Text>
        }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#700B97",
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
    paddingTop: 40
  },
  text: {
    color: "#FEE440",
    fontSize: 24,
    fontFamily: "Roboto"

  },
  containerTextInput: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
    maxHeight: 40,
    marginTop: 15
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
    color: "#fff"
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%",
    alignContent: "space-between"
  },
  containerRows: {
    height: "50%",
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    backgroundColor: "#fff"
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
    borderBottomWidth: 1
  },
  containerActions: {
    flex: 1,
    maxWidth: "25%",
    flexDirection: "row"
  },
  action: {
    marginHorizontal: 8
  },
  notRows: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto"
  }
});
