import {View, Text, StyleSheet} from 'react-native';


const HomeMenu = () => {

    return(
        <View style={styles.menuBackground}>
        <View style={styles.menuContainer}>
            <Text>
                Hola
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuBackground: {
        backgroundColor: '#EDF6F9',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
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