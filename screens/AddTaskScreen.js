import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
} from "react-native";

import ListTasksComponent from "../components/ListTasksComponent";

import { globalStyles } from "../styles/globalStyles";
import FloatButtonComponent from "../components/FloatButtonComponent";
import AddTaskBottomSheetComponent from "../components/AddTaskBottomSheetComponent";

const ListTasksScreen = (props) => {
  const [textInput, setTextInput] = useState("");
  const [picker, setPicker] = useState("3")
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  const {rows, setRows, completedRows, setCompletedRows} = props

  const parameterGreaterThanTen = (parameter) => {
    return parameter > 9 && parameter != "00" ? parameter : '0'+parameter
  }

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = parameterGreaterThanTen(date.getMonth()+1);
    const day = parameterGreaterThanTen(date.getDate());
    const hour = parameterGreaterThanTen(date.getHours());
    const minutes = parameterGreaterThanTen(date.getMinutes());
    return `${hour}:${minutes} ${day}/${month}/${year}`
  }

  const addNewRow = () => {
    let newRow = {
      nombre: textInput,
      prioridad: picker,
      id: rows.length,
      completed: false,
      date: getDate()
    };
    if (textInput.length) {
      setRows([...rows, newRow]);
    } else {
      Alert.alert(
        "Ocurrió un problema",
        "El campo de texto está vacío, por favor vuelva a intentarlo"
      );
    }
    setTextInput("");
  };

  const removeRow = (row) => {
    setRows(rows?.filter((rowFilter) => rowFilter.id != row.id))
  };

  return (
    <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Tareas sin completar</Text>
        <ListTasksComponent rows={rows} setRows={setRows} completedRows={completedRows} setCompletedRows={setCompletedRows} removeRow={removeRow} />
        <FloatButtonComponent setShowBottomSheet={setShowBottomSheet} />
        {showBottomSheet ? (
          <AddTaskBottomSheetComponent 
            textInput={textInput} 
            setTextInput={setTextInput} 
            addNewRow={addNewRow}
            picker={picker} 
            setPicker={setPicker}
            setShowBottomSheet={setShowBottomSheet}
            addNewRow={addNewRow}
          />
        ) : (
          <Text></Text>
        )}
    </SafeAreaView>
  );
};

export default ListTasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#700B97",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 40,
  },
  text: {
    color: "#FEE440",
    fontSize: 24,
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
