import { User } from '@/Types'
import { useRouter } from 'next/router'
import { useBearStore } from '../hooks'
import { useCallback, useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { EmojiIcon, SendIcon } from '@/components/icons'

export default function MessageEditor() {
	const uqc = useQueryClient()
	const { data: user } = useQuery<User>('user')
	const { socket } = useBearStore()
	const roomId = useRouter().query.roomId as string
	const [v, setV] = useState('')

	const sendMsgHandler = useCallback(() => {
		const message = { message: v, roomId, by: user?.id }
		const cache = uqc.getQueryData(`room-${roomId}`) as []
		uqc.setQueryData(`room-${roomId}`, [...cache, message])
		socket.emit('new_message', message)
		setV('')
		document.getElementById('message-editor')?.focus()
	}, [v, uqc, user, socket, roomId])

	return (
		<div className='m-3 h-auto rounded-md border-2 border-gray-400 focus-within:border-cyan-700'>
			<div className='flex-y h-auto bg-slate-200'>
				<textarea
					value={v}
					onChange={(e) => setV(e.target.value)}
					className='w-full resize-none bg-transparent p-1 text-sm outline-none'
					id='message-editor'
				/>
				<div className='flex-c m-1 w-fit justify-end gap-x-2 self-end rounded-md bg-cyan-600 p-1'>
					<button className='btn'>
						<EmojiIcon />
					</button>
					<button onClick={sendMsgHandler} className='btn'>
						<SendIcon />
					</button>
				</div>
			</div>
		</div>
	)
}
