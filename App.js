import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

export default function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const ciudades = [
    { id: '1', nombre: '- Ciudad de mexico' },
    { id: '2', nombre: '- Guadalajara' },
    { id: '3', nombre: '- Puerto Vallarta' },
    { id: '4', nombre: '- Monterrey' },
    { id: '5', nombre: '- Michoacan' },
    { id: '6', nombre: '- Cancun' },
    { id: '7', nombre: '- Guanajuato' },
  ];

  const clientes = [
    { id: '1', nombre: '- Jorge' },
    { id: '2', nombre: '- Emmanuel' },
    { id: '3', nombre: '- Martin' },
    { id: '4', nombre: '- Mario' },
    { id: '5', nombre: '- Jose' },
    { id: '6', nombre: '- Daniel' },
    { id: '7', nombre: '- Diana' },
    { id: '8', nombre: '- Luis' },
    { id: '9', nombre: '- Miguel' },
    { id: '10', nombre: '- Elena' },
    { id: '11', nombre: '- Edgar' },
    { id: '12', nombre: '- abraham' },
  ];

  const manejoCiudadButtonPress = () => {
    setSelectedButton('ciudades');
  };

  const manejoClientesButtonPress = () => {
    setSelectedButton('clientes');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mostrar listado de clientes y ciudad</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ciudades"
          onPress={manejoCiudadButtonPress}
          color={selectedButton === 'ciudades' ? 'green' : 'gray'}
        />
        <Button
          title="Clientes"
          onPress={manejoClientesButtonPress}
          color={selectedButton === 'clientes' ? 'green' : 'gray'}
        />
      </View>
      {selectedButton === 'ciudades' && (
        <FlatList
          data={ciudades}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.nombre}</Text>
            </View>
          )}
        />
      )}
      {selectedButton === 'clientes' && (
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.nombre}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightgreen',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})