import React from 'react';

import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const FloatButtonComponent = (props) => {
    return (  
        <TouchableOpacity
        onPress={() => props.setShowBottomSheet(true)}
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          position: 'absolute',
          bottom: 20,
          right: 20,
          height: 60,
          backgroundColor: '#fff',
          borderRadius: 100,
        }}
      >
        <MaterialIcons name='add' size={30} color='#01a699' />
      </TouchableOpacity>
    );
}
 
export default FloatButtonComponent;