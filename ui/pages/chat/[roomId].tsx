import { useRouter } from 'next/router'
import { AddNetwork, ChatRoom, LeftSidebar } from '../../components/chat'

export default function Chat() {
	const { roomId } = useRouter().query

	return roomId === 'add-network' ? <AddNetwork /> : <ChatRoom id={roomId as string} />
}
