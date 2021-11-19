import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from '../styles/globalStyles';

const setPrioridad = (tipoPrioridad) => {
  let nombre;
  let styles;
  if(tipoPrioridad == "1"){
    nombre = "Baja",
    styles = colors.prioridad[0]
  } else if (tipoPrioridad == "2") {
    nombre = "Media",
    styles = colors.prioridad[1]
  } else {
    nombre = "Alta",
    styles = colors.prioridad[2]
  }

  return {
    nombre: nombre,
    styles: styles
  }
}

const ListTasksComponent = (props) => {

  const markRowAsCompleted = (index) => {
    props.rows[index].completed = true;
    let completerRows = [
      ...props.completedRows,
      ...props.rows.filter((row) => row.completed)
    ]
    props.setCompletedRows(completerRows);
    props.setRows(props.rows.filter((row) => !row.completed));
  };

  const _renderRows = props.rows.map((row, index) => {
    const prioridad = setPrioridad(row.prioridad).nombre;
    return (
      <View key={index} style={styles.containerRow}>
        <View>
          <Text>{row.date}</Text>
          <Text style={styles.name}>{row.nombre}</Text>
        </View>
        <View>
          <Text style={{...setPrioridad(row.prioridad).styles, width: 60, textAlign: "center", padding: 5, borderRadius: 10, overflow: "hidden"}}>{prioridad}</Text>
        </View>
        <View style={styles.containerActions}>
          {!row.completed ? (
            <TouchableWithoutFeedback onPress={() => markRowAsCompleted(index)}>
              <Text style={styles.action}>
                <MaterialIcons name="check-circle-outline" size={24} color="black" />
              </Text>
            </TouchableWithoutFeedback>
            
          ) : (
            <Text></Text>
          )}
          <TouchableWithoutFeedback onPress={() => props.removeRow(row)}>
            <Text style={styles.action}>
              <MaterialIcons name="delete-outline" size={24} color="black" />
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  });

    return ( 
      <SafeAreaView style={styles.containerRows}>
        <ScrollView>
          {props.rows.length ? (
            _renderRows
          ) : (
            <Text style={styles.notRows}>Todavía no hay tareas cargadas :(</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}
 
export default ListTasksComponent;

const styles = StyleSheet.create({
  containerRows: {
    height: "65%",
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    backgroundColor: "#fff",
  },
  containerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 60,
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  notRows: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 18,
    fontWeight: "700",
  },
  containerActions: {
    flex: 1,
    maxWidth: "25%",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  action: {
    marginHorizontal: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600"
  }
});