import { StyleSheet } from 'react-native';

export default Image = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.03)'
    },
    loader: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
    },
    thumb: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0
    },
    large: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0
    }
})