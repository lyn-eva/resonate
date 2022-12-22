import produce from 'immer'
import { io } from 'socket.io-client'
import create from 'zustand'
import Chat from '../../pages/chat/[roomId]'

const socket = io('http://localhost:5000')

socket.on('connect', () => console.log('socket', socket.id, 'is connected'))

const useBearStore = create<BearState>((set) => ({
	socket,
	bears: 0,
	authUser: { id: Math.random().toFixed(3).toString().slice(1) },
	chat: {
		rooms: {
			testing: { id: 'testing', username: 'testing', connectedAt: 'testing', conversations: [] },
		},
		// addRoom: (id: string) =>
		// 	// set((state) => ({
		// 	//   chat: {
		// 	//     ...state.chat,
		// 	//     rooms: {
		// 	//       ...state.chat.rooms,
		// 	//       [id]: { id, username: id, connectedAt: new Date().toISOString(), conversations: [] },
		// 	//     },
		// 	//   },
		// 	// })),
		// 	set(produce<BearState>((draft) => {})),
		// sendMsg: (content, roomId) =>
		// 	set(
		// 		produce<BearState>((draft) => {
		// 			socket.emit('new_message', { content, roomId })
		// 			// draft.chat.rooms[roomId].conversations.push({
		// 			//   content,
		// 			//   by: 'testing',
		// 			//   at: new Date().toISOString(),
		// 			//   read: false,
		// 			// });
		// 		})
		// 	),
		// addMsg: (message, roomId) =>
		// 	set(
		// 		produce<BearState>((draft) => {
		// 			draft.chat.rooms[roomId].conversations.push({
		// 				by: 'testing',
		// 				at: new Date().toISOString(),
		// 				read: false,
		// 			})
		// 		})
		// 	),
		//   state => {
		//   // return { chat: { rooms: { [roomId]: {} } }
		//   const conversations = state.chat.rooms[roomId].conversations
		//   return {}
		// })
	},
	user: {
		profile: { userId: '' },
		setUser: (userId) =>
			set(
				produce<BearState>((draft) => {
					draft.user.profile.userId = userId
				})
			),
	},
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}))
export default useBearStore
{
}
interface BearState {
	authUser: { id: string }
	socket: typeof socket
	bears: number
	chat: {
		rooms: {
			[key: string]: Room
		}
		// addRoom: (id: string) => void
		// sendMsg: (content: string, roomId: string) => void
		// addMsg: (content: string, roomId: string) => void
	}
	user: {
		profile: {
			userId: string
		}
		setUser: (userId: string) => void
	}
	increasePopulation: () => void
}

export interface Room {
	id: string
	username: string
	connectedAt: string
	conversations: Message[]
}

export interface Message {
	message: string
	by: string
}
