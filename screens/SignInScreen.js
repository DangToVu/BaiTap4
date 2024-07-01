import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignIn = () => {
    // Kiểm tra số điện thoại hợp lệ
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (phoneNumberRegex.test(phoneNumber)) {
      navigation.navigate('Home');
    } else {
      alert('Số điện thoại không hợp lệ!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập số điện thoại:</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Đăng nhập" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default SignInScreen;
