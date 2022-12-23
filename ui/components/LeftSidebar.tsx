import type { Room, User } from '@/Types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { QueryFunction, useQuery } from 'react-query'
import { AddContactIcon, ChatBubbleIcon, CrossIcon } from '@/components/icons'
import ProfileIcon from './icons/ProfileIcon'
import SignOutIcon from './icons/SignOutIcon'

const fetchUser: QueryFunction<User> = () =>
	fetch('http://localhost:5000/user/id/connections').then((res) => res.json())
const fetchConnections = (userId: string) =>
	fetch(`http://localhost:5000/user/${userId}/connections`).then((res) => res.json())

export default function LeftSidebar() {
	// prettier-ignore
	const { query: { roomId }, asPath: p } = useRouter();

	console.log(p, p.startsWith('/chat/add-network'))

	return (
		<aside className='flex-y gap-2 bg-cyan-700 p-2 px-1 pb-4'>
			<Link
				href='/chat/me'
				// prettier-ignore
				className={`btn p-1 ${p.startsWith('/chat') && roomId !== 'add-network' ? 'bg-white [&>svg]:text-black' : ''}`}
			>
				<ChatBubbleIcon />
			</Link>
			<div className='divider-x' />
			<Link
				href='/chat/add-network'
				className={`btn p-1 ${p.startsWith('/chat/add-networ') ? 'bg-white [&>svg]:text-black' : ''}`}
			>
				<AddContactIcon />
			</Link>
			<Link
				href='/setting/me'
				className={`btn mt-auto p-1 ${p.startsWith('/setting') ? 'bg-white [&>svg]:text-black' : ''}`}
			>
				<ProfileIcon />
			</Link>
			<Link href='/auth/signin' className='btn p-1'>
				<SignOutIcon />
			</Link>
		</aside>
	)
}
