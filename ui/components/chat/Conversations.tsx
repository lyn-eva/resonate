import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Message } from './ChatRoom'
import { User } from '../LeftSidebar'

export default function Conversations({ conversations: h }: Props) {
	const { data: user } = useQuery<User>('user')
	useEffect(() => {
		const ctr = document.getElementById('conversations') as HTMLDivElement
		ctr.scrollTo(0, ctr.scrollHeight)
	}, [h])

	console.log({ h })

	return (
		<div id='conversations' className='flex-y grow gap-y-3 overflow-auto p-3'>
			{h.map(({ by, message, roomId }) => (
				<div key={message} className={`flex-y h-auto ${by === user?.id ? 'self-end' : 'self-start'}`}>
					<div
						className={`relative h-auto w-fit rounded-md bg-slate-200 py-1 px-3 after:absolute after:border-[5px] after:border-b-transparent ${
							by === user?.id
								? 'mr-2 after:left-full after:border-r-transparent'
								: 'ml-2 after:right-full after:border-l-transparent'
						}`}
					>
						{message}
					</div>
					<span className={`ml-auto mr-2 block text-xs text-gray-500`}>
						{new Date(Date.now()).toLocaleTimeString()}
					</span>
				</div>
			))}
		</div>
	)
}

interface Props {
	conversations: Message[]
}
