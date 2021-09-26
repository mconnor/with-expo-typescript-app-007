import { NativeBaseProvider } from 'native-base'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NativeBaseProvider>
            <Component {...pageProps} />
        </NativeBaseProvider>
    )
}
