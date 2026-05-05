import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View
} from 'react-native';

export default function Forgot() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (!email) {
      Alert.alert('Error', 'Email harus diisi!');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Email tidak valid!');
      return;
    }

    Alert.alert('Berhasil', 'Link reset dikirim ke ${email}');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Forgot Password</Text>

      <Text style={styles.link}>
        Enter your email to reset password.
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  link: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },

  button: {
    marginTop: 10,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});