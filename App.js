import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';
import { ArrowRight, BedBlack24Dp, MicBlack24Dp, MicBlack48Dp, SearchBlack24Dp } from './src/components/icons/index'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>DcSelek</Text>
        <Text style={styles.hText}>FirstApp</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Şimdi sen aşağıdaki düğmeye basarsan bir Alert çıkacak falan</Text>
        <Button
          style={styles.FirstButton}
          title="ALERT"
          onPress={() => Alert.alert('Çıktı!')}
          color="#822e5f"
        />
        {/* 
          ##Svg Denemesi##
          package.json native için 'svgr' komutu düzenlendi. Önceki versiyonda width / height hatası giderildi. ✔✔
        */}
        <View flexDirection='row' alignItems='center'>
          <ArrowRight stroke='black' width={36} height={36}></ArrowRight>
          <BedBlack24Dp fill='white' width={60} height={60} />
        </View>
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
    backgroundColor: '#FDBE01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
  },
});
