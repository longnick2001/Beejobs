import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="SplashScreen" options={{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" options={{headerShown:  false}}/>
      <Stack.Screen name="RegisterScreen" options={{headerShown:  false}}/>
      <Stack.Screen name="HomeSceen" options={{headerShown:  false}}/>
    </Stack>
  );
}
