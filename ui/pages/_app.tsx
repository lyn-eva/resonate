import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Connections, LeftSidebar } from '../components/chat'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: Infinity } } })

export default function App({ Component, pageProps }: AppProps) {
	const { asPath: p } = useRouter()
	const notAtAuth = !p.startsWith('/auth')

	return (
		<QueryClientProvider client={client}>
			<main className={notAtAuth ? 'flex' : 'center'}>
				{notAtAuth && (
					<>
						<LeftSidebar />
						<Connections />
					</>
				)}
				<Component {...pageProps} />
			</main>
		</QueryClientProvider>
	)
}
