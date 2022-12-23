export interface Message {
	by: string
	roomId: string
	message: string
}

export interface Room {
	id: string
	members: Member[]
}

export interface Member {
	id: string
	joinedAt: string
}

export interface User {
	id: string
}
