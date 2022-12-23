import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { CrossIcon } from '@/components/icons'
import type { Room, User } from '@/Types'
import Connection from './Connection'

export default function Connections() {
	// prettier-ignore
	const { query: { roomId } } = useRouter()
	const { data: user } = useQuery<User | null>('rooms', () => Promise.resolve({} as User), { initialData: null })
	const { data: rooms } = useQuery<Room[]>('rooms', () => Promise.resolve([]), { enabled: !!user?.id })

	return (
		<section className='flex-y w-56 shrink-0 bg-slate-200 px-1'>
			<div className='relative h-auto p-2'>
				<h2 className='text-center font-medium text-cyan-900'>Your Network</h2>
				<button className='btn absolute top-1 right-2 p-1 [&>svg]:text-cyan-700'>
					<CrossIcon />
				</button>
			</div>
			<div className='divider-x' />
			<Link
				href='/chat/me'
				className={`btn flex-c mt-2 cursor-default py-1 px-2 ${roomId === 'me' ? 'bg-slate-300' : ''}`}
			>
				<div className='h-9 w-9 overflow-hidden rounded-lg bg-slate-800'></div>
				<p className='mr-9 grow text-center text-sm'>Waiting Room</p>
			</Link>
			<div className='mt-2 h-full overflow-y-auto'>
				<div className='flex-c h-auto gap-3 py-1 px-2 text-xs text-green-600'>
					<span>3 online</span>
					<div className='divider-x grow text-inherit' />
				</div>
				<ul>
					{rooms?.map((room) => (
						<Connection key={room.id} {...room} roomId={roomId as string} />
					))}
				</ul>
				{/* <div className='flex-c mt-2 h-auto gap-3 py-1 px-2 text-xs text-cyan-800'>
            <span>all connections</span>
            <div className='divider-x grow text-inherit' />
          </div>
          <ul>
            {all.map((connection) => (
              <Connection key={connection.username} {...connection} roomId={roomId} />
            ))}
          </ul> */}
			</div>
		</section>
	)
}
