import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	useEffect(() => {}, [])

	return (
		<main className='grid h-screen place-items-center bg-gray-300'>
			<div className='artboard phone-1 bg-white'>
				{/* <button onClick={() => socket.emit('message', 'client message')}>Emit</button>; */}
				<div className='chat chat-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img src='https://placeimg.com/192/192/people' />
						</div>
					</div>
					<div className='chat-header'>
						Obi-Wan Kenobi
						<time className='text-xs opacity-50'>12:45</time>
					</div>
					<div className='chat-bubble'>You were the Chosen One!</div>
					<div className='chat-footer opacity-50'>Delivered</div>
				</div>
				<div className='chat chat-end'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img src='https://placeimg.com/192/192/people' />
						</div>
					</div>
					<div className='chat-header'>
						Anakin
						<time className='text-xs opacity-50'>12:46</time>
					</div>
					<div className='chat-bubble'>I hate you!</div>
					<div className='chat-footer opacity-50'>Seen at 12:46</div>
				</div>
			</div>
		</main>
	)
}
