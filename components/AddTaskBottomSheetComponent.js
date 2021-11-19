import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Picker, ActivityIndicator } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { colors, globalStyles } from '../styles/globalStyles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const AddTaskBottomSheet = (props) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['1%', '90%'], []);
  const [pending, setPending] = useState(false)
  const handleClosePress = () =>  {
    bottomSheetRef.current.collapse()
    setTimeout(() => {
      props.setShowBottomSheet(false)
    }, 300)
  }

  const handleSheetChanges = useCallback((index) => {
    if(index == 0) {
      handleClosePress()
    }
  }, []);

  const addNewRow = () => {
    setPending(true)
    setTimeout(() => {
      props.addNewRow()
      handleClosePress()
    }, 1500)
  }

  return (
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{marginTop: 40}}
      >
        <View style={styles.contentContainer}>
          <Text style={{...globalStyles.titleText, color: "#2e2e2e"}}>Nueva tarea</Text>
          <View style={styles.containerInput}>
            <TextInput 
              style={styles.input}
              value={props.textInput}
              onChangeText={(text) => props.setTextInput(text)}
              placeholder="Ingrese el nombre de la tarea"/>
          </View>
          <View style={styles.containerPicker}>
            <Text style={{fontSize: 18}}>Seleccione la prioridad</Text>
            <Picker
              selectedValue={props.picker}
              style={{ maxHeight: 300, width: "100%", marginTop: -20, }}
              onValueChange={(itemValue) => props.setPicker(itemValue)}
            >
              <Picker.Item label="Baja" value="1" />
              <Picker.Item label="Media" value="2" />
              <Picker.Item label="Alta" value="3" />
            </Picker>
          </View>
          <TouchableOpacity style={{marginTop: 50}} onPress={() => addNewRow()}>
            <View style={styles.addTask}>
              <Text style={styles.titleButton}>{!pending ? "Agregar tarea" : <ActivityIndicator />}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 30}} onPress={() => handleClosePress()}>
            <View style={styles.cancelTask}>
              <Text style={{fontSize: 16}}>Cancelar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    bottom: 0,
    width: "100%",
    backgroundColor: "red",
    left: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 350
  },
  containerInput: {
    width: "90%",
    alignItems: "flex-start",
    marginVertical: 20
  },  
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,

  },
  containerPicker: {
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxHeight: 170,
    marginTop: 20
  },
  addTask: {
    backgroundColor: colors.principal,
    width: 200,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 8,
  },
  titleButton: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 18
  }
});

export default AddTaskBottomSheet;
