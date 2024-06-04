import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" options={{headerShown:  false}}/>
      <Stack.Screen name="RegisterScreen" options={{headerShown:  false}}/>
      <Stack.Screen name="HomeScreen" options={{headerShown:  false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown:  false}}/>
      <Stack.Screen name="Profile" options={{headerShown:  false}}/>
      <Stack.Screen name="Post" options={{headerShown:  false}}/>
      <Stack.Screen name="Network" options={{headerShown:  false}}/>
      <Stack.Screen name="Message" options={{headerShown:  false}}/>
    </Stack>
  );
}
