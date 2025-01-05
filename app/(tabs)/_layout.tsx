import React, { useEffect, useState } from 'react';
import { Slot, useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { supabase } from '@/services/supabase'; // Importamos el cliente de Supabase

// Hook para manejar la autenticación
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Comprobamos la sesión con Supabase
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsLoggedIn(true); // Usuario autenticado
      } else {
        setIsLoggedIn(false); // Usuario no autenticado
      }
      setLoading(false); // Termina la carga
    };

    checkSession();

    // Listener para cambios de sesión
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    // Cleanup del listener cuando el componente se desmonte
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { isLoggedIn, loading };
};

export default function Layout() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace('/auth/login'); // Redirige a la pantalla de login si no está autenticado
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
