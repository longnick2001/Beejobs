import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

const index = () => {
  const router = useRouter();

  const handleClick = () => {
    router.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/SplashLogo.png')} style={styles.image} />
      <ThemedText type="title" style={styles.title}>
        Welcome to My App
      </ThemedText>
      <ThemedText style={styles.subtitle}>Get started by logging in</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.button} onPress={handleClick}>
        Login
      </ThemedText>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: '#FFFFFF',
  },
});
