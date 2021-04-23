import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>DcSelek</Text>
        <Text style={styles.hText}>FirstApp</Text>
      </View>
      <View style={styles.content}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#822e5f',
  },
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FDBE01'
  },
  hText: {
    color: '#FDBE01',
  },
  content: {
    flex: 1,
    backgroundColor: '#FDBE01'
  }
});
