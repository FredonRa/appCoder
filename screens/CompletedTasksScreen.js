import React from 'react';

import { View, Text, TouchableWithoutFeedback, SafeAreaView} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import ListTasksComponent from '../components/ListTasksComponent';

import { globalStyles } from "../styles/globalStyles";


const CompletedTasksScreen = (props) => {
  const removeRow = (row) => {
    props.setCompletedRows(props.completedRows?.filter((rowFilter) => rowFilter.id != row.id))
  };

    return (  
        <SafeAreaView style={globalStyles.container}>
          <Text style={globalStyles.titleText}>Tareas completadas</Text>
          <ListTasksComponent rows={props.completedRows} removeRow={removeRow} />
        </SafeAreaView>
    );
}
 
export default CompletedTasksScreen;