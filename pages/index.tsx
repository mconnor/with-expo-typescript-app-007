// @generated: @expo/next-adapter@2.1.9
import Hello from 'component/Hello'
import { StyleSheet, Text } from 'react-native'
import { Box } from 'native-base'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
})

export default function App() {
    return (
        <Box style={styles.container}>
            <Text style={styles.text}>Welcome to Expo 42 + Next.js </Text>
            <Hello />
        </Box>
    )
}
