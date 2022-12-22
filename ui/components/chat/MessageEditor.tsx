import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useBearStore } from '../hooks'
import { EmojiIcon, SendIcon } from '../icons'
import { User } from './LeftSidebar'

export default function MessageEditor() {
	const uqc = useQueryClient()
	const { data: user } = useQuery<User>('user')
	const { socket } = useBearStore()
	const roomId = useRouter().query.roomId as string
	const [v, setV] = useState('')

	return (
		<div className='m-3 h-auto rounded-md border-2 border-gray-400 focus-within:border-cyan-700'>
			<div className='flex-y h-auto bg-slate-200'>
				<textarea
					value={v}
					onChange={(e) => setV(e.target.value)}
					className='w-full resize-none bg-transparent p-1 text-sm outline-none'
				/>
				<div className='flex-c m-1 w-fit justify-end gap-x-2 self-end rounded-md bg-cyan-600 p-1'>
					<button className='btn'>
						<EmojiIcon />
					</button>
					<button
						onClick={() => {
							const message = { message: v, roomId, by: user?.id }
							const cache = uqc.getQueryData(`room-${roomId}`) as []
							uqc.setQueryData(`room-${roomId}`, [...cache, message])
							socket.emit('new_message', message)
						}}
						className='btn'
					>
						<SendIcon />
					</button>
				</div>
			</div>
		</div>
	)
}
