import { useQuery } from 'react-query'
import { Message } from '../../Types'
import Conversations from './Conversations'
import MessageEditor from './MessageEditor'

export default function ChatRoom({ id }: Props) {
	const { data: conversations } = useQuery<Message[]>(`room-${id}`, () => Promise.resolve([]), { initialData: [] })

	return (
		<section className='flex-y grow bg-slate-100'>
			<header className='border-b-2 py-2 px-5'>{id}</header>
			{conversations && <Conversations conversations={conversations} />}
			<MessageEditor />
		</section>
	)
}

interface Props {
	id: string
}
