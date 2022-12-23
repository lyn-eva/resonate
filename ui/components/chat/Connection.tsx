import Image from 'next/image'
import Link from 'next/link'
import { useSocket } from '@/components/hooks'
import type { Room } from '@/Types'

export default function Connection({ id, roomId }: Props) {
	const { socket } = useSocket(roomId)

	return (
		<li className='mb-1'>
			<Link href={`/chat/${id}`} className={`btn flex cursor-default py-1 px-2 ${roomId === id ? 'bg-gray-300' : ''}`}>
				<div className='h-9 w-9 overflow-hidden rounded-lg'>
					{/* {src && <Image width={36} height={36} src={src} alt={u} />} */}
				</div>
				<div className='ml-2'>
					<p className='leading-2 text-sm'>{id}</p>
					<p className='text-xs text-gray-600'>{'a message'}</p>
				</div>
			</Link>
		</li>
	)
}

interface Props extends Room {
	roomId: string
}
