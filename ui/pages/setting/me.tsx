import { User } from '@/Types'
import { FormEvent, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useBearStore } from '../../components/hooks'

const fetchConnections = () => fetch('http://localhost:5000/user/id/connections').then((res) => res.json())

export default function Me() {
	// const { setUser, profile } = useBearStore((state) => state.user);

	const { data: user } = useQuery<User>('user', fetchConnections, { initialData: { id: '' } })
	const uqc = useQueryClient()
	const [id, setID] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		uqc.setQueryData('user', { id })
	}

	return (
		<section className='center w-full p-2'>
			{user?.id && (
				<h1 className='mb-4'>
					Logged in as <b>{user.id}</b>
				</h1>
			)}
			<form onSubmit={handleSubmit}>
				<input
					value={id}
					onChange={(e) => setID(e.target.value)}
					className='block border-2 px-2 outline-none'
					placeholder='your userId'
				/>
				<button
					type='submit'
					className='mt-4 w-full shrink-0 rounded-[4px] bg-cyan-600 px-2 pt-[2px] pb-[4px] text-sm text-white duration-300 active:scale-95'
				>
					Add
				</button>
			</form>
		</section>
	)
}
