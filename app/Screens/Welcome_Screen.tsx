import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';


// Định nghĩa interface Props
interface Props {
  navigation: NavigationProp<any>; //   thuộc tính tên là navigation với kiểu NavigationProp
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeTabs');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    
  }
});
