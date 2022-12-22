import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LeftSidebar } from '../components/chat'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: Infinity } } })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={client}>
			<main className='flex h-full'>
				<LeftSidebar />
				<Component {...pageProps} />
			</main>
		</QueryClientProvider>
	)
}
