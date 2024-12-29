import React, { useEffect, useState } from 'react';
import { Slot, useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

// Simularemos un estado de autenticación con un valor de sesión.
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una verificación de autenticación (podrías usar AsyncStorage o SecureStore aquí)
    setTimeout(() => {
      const userSession = true; // Cambia esto a true para simular un usuario logueado.
      setIsLoggedIn(userSession);
      setLoading(false);
    }, 1000);
  }, []);

  return { isLoggedIn, loading };
};

export default function Layout() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace('/login'); // Redirige a la pantalla de login si no está autenticado
    }
  }, [loading, isLoggedIn]);

  if (loading) {
    // Mostrar un indicador de carga mientras se verifica la sesión
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />; // Renderiza las pantallas de la app si está autenticado
}
