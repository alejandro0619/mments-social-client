import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeMenu = () => {
  return (
    <View style={styles.menuBackground}>
      <View style={styles.menuContainer}>
        <Pressable
          onPress={() => { /* Handle home icon press */ }}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.9 : 1.0 }] },
          ]}
        >
          <Icon name="home" size={25} color="#EDF6F9" />
        </Pressable>
        <Pressable
          onPress={() => { /* Handle plus icon press */ }}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.9 : 1.0 }] },
          ]}
        >
          <Icon name="plus" size={25} color="#EDF6F9" />
        </Pressable>
        <Pressable
          onPress={() => { /* Handle user icon press */ }}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.9 : 1.0 }] },
          ]}
        >
          <Icon name="user" size={25} color="#EDF6F9" />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
    menuBackground: {
        backgroundColor: '#EDF6F9',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    menuContainer: {
        backgroundColor: '#AEC5EB',
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '50%',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 10, // Ensure it's above the BottomSheet
    }

});

export default HomeMenu;