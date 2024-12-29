import 'react-native-reanimated';
import 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)', // Cambia esto si quieres que el login sea inicial
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Manrope: require('../assets/fonts/Manrope/Manrope-VariableFont_wght.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula el estado de sesión
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la verificación de la autenticación
    setTimeout(() => {
      const userSession = false; // Cambia a true para simular un usuario autenticado
      setIsLoggedIn(userSession);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace('/login'); // Redirige al login si no está autenticado
    }
  }, [loading, isLoggedIn]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <GestureHandlerRootView>
      <Stack>

        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
