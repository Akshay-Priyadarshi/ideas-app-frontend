import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ReduxProvider store={store}>
				<ChakraProvider resetCSS={true}>
					<Component {...pageProps} />
				</ChakraProvider>
			</ReduxProvider>
		</>
	)
}

export default MyApp
