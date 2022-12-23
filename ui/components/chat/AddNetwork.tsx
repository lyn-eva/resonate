import { FormEvent, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import type { User } from '@/Types'

const addRoomFn = (body: { userIds: string[] }) =>
	fetch('http://localhost:5000/room/create', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' },
	})

export default function AddNetwork() {
	// const { addRoom } = useBearStore((state) => state.chat);
	const { data: user } = useQuery<User>('user')
	const mutation = useMutation(addRoomFn)
	const uqc = useQueryClient()
	const [v, setV] = useState('')

	const handleAddRoom = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		mutation.mutate({ userIds: [user?.id as string, v] })
	}

	return (
		<div className='flex-y grow bg-slate-100 p-3'>
			<div className='mt-12 text-center'>
				<h1 className='text-2xl'>Expand your network</h1>
				<p className='mt-2 text-cyan-900'>Here, you can find people with their user code.</p>
				<form
					onSubmit={handleAddRoom}
					className='mx-auto mt-8 flex h-auto max-w-[25rem] gap-x-1 rounded-md border-2 border-gray-400 p-1 focus-within:border-cyan-600'
				>
					<div className='grow'>
						<input
							value={v}
							onChange={(e) => setV(e.target.value)}
							className='w-full bg-transparent text-cyan-900 outline-none'
							autoFocus
						/>
					</div>
					<button className='shrink-0 rounded-[4px] bg-cyan-600 px-2 pt-[2px] pb-[4px] text-sm text-white duration-300 active:scale-95'>
						Send request
					</button>
				</form>
			</div>
		</div>
	)
}
