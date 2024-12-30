import {View, StyleSheet, Text} from 'react-native';


const Picture = () => {

    return (
        <View style={styles.picture}>
            <Text>Pic</Text>
        </View>
        )
}


const styles = StyleSheet.create({
        picture: {
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: '#ddd',
            justifyContent: 'center',
            alignItems: 'center',
        }
    })


export default Picture;