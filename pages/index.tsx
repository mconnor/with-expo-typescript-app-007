/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @generated: @expo/next-adapter@2.1.9
import Hello from 'component/Hello'
import { StyleSheet } from 'react-native'
import { Container, Center, Heading, NativeBaseProvider } from 'native-base'

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

export function ContainerComponent() {
    return (
        <Container>
            <Heading style={styles.text}>Welcome to Expo 42 + Next.js </Heading>
            <Hello />
        </Container>
    )
}
export default function Index() {
    return (
        <NativeBaseProvider>
            <Center flex={1} backgroundColor="blue.300">
                <ContainerComponent />
            </Center>
        </NativeBaseProvider>
    )
}
