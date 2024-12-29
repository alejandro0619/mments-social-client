import {View, StyleSheet, Text} from 'react-native'
import Picture from '@/components/Picture';


const Notification = () => {
    return (
        <View style={styles.bar}>
           <Picture />
           <Picture />
           <Picture />
           <Picture />

        </View>

        )
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#7E9DBC',
        width: 365,
        height: 73,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

export default Notification;