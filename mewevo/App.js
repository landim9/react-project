import { useState } from 'react';
import { ImageBackground, StyleSheet, View, Switch, Image } from 'react-native';

const icon = require('./assets/logo.png');
const image = require('./assets/forest.jpg');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Switch
        value={habilitado}
        onValueChange={habilitar}
        style={styles.switch}
      />

      <Image
        source={{
          uri: (habilitado)
            ? "assets/MewTwo.png"
            : "assets/Mew.png"
        }}
        style={styles.lampada}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#0d3b66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '380px',
    height: '150px',
    display: 'none',
  },
  lampada: {
    width: '500px',
    height: '500px',
    margin: '60px',
    resizeMode: 'contain',
    position: 'fixed',
    top: '20rem',
    left: 'auto'
  },
  image: {
    width: '100%',
    height: '100vh',
    resizeMode: 'cover',

  }, 
  style: {
    position: 'fixed',
    top: 0,
    left: 'auto',
  },

  switch: {
    position: 'fixed',
    top: '20rem',
    right: 'auto',
  }
});