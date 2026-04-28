import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [hasil, setHasil] = useState("");

  // 🔥 ES7+ async function
  const test = async () => {
    return "TES BERUBAH API";
  };

  useEffect(() => {
    const jalankan = async () => {
      const data = await test(); // ← ini bukti async/await
      setHasil(data);
    };

    jalankan();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{hasil}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});