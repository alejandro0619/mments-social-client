import { useState } from 'react';
import { View, StyleSheet, Text, Modal, Pressable } from 'react-native';
import { supabase } from '@/services/supabase';
import { router } from 'expo-router';

const Picture = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false);
    }
    const logout = async () => {
        try {
          await supabase.auth.signOut(); // Sign out the user
          console.log('User logged out');
            closeModal(); // Close modal after logout
            // Redirect to login screen
            router.replace('/auth/login');
        } catch (error) {
          console.error('Error logging out', error);
        }
    };
    
    return (
        <View style={styles.container}>
            <Pressable onPress={openModal}>
                <View style={styles.picture}>
                    <Text>Pic</Text>
                </View>
            </Pressable>
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>This is a modal!</Text>
                        <Pressable onPress={logout}>
                            <Text> Log out</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        fontSize: 16,
        color: 'blue',
    },
    })


export default Picture;