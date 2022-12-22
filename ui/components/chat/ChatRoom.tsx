import React from 'react'
import { useQuery } from 'react-query'
import { useBearStore, useSocket } from '../hooks'
import Conversations from './Conversations'
import MessageEditor from './MessageEditor'

export interface Message {
	by: string
	roomId: string
	message: string
}

export default function ChatRoom({ id }: Props) {
	// const conversations = useBearStore((state) => state.chat.rooms)[id]?.conversations;
	const { data: conversations } = useQuery<Message[]>(`room-${id}`, () => Promise.resolve([]), { initialData: [] })
	console.log(conversations)

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

const history = [
	{ msg: 'Hi, I am Jarome', id: 1, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 4, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 3, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 2, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 5, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 6, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 7, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 8, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 9, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 10, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 11, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 12, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 13, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 14, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 15, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 16, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 17, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 18, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 19, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 20, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 21, at: '2022-12-17T13:52:45.266Z' },
	{ msg: 'Hi, I am Jarome', id: 22, at: '2022-12-17T13:52:45.266Z' },
]
