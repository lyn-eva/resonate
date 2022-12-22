import { PrismaClient } from '@prisma/client'
import type { Handler } from 'express'

const room = new PrismaClient().room

export const getUserConnections: Handler = async (req, res) => {
	const { userId } = req.params
	const connections = await room.findMany({ where: { members: { some: { id: userId } } } })
	return res.json(connections).end()
}

export const createRoom: Handler = async (req, res) => {
	// prettier-ignore
	const members = req.body.userIds.map((id: string) => ({ id }))
	// prettier-ignore
	const createdRoom = await room.create({ data: { members }})
	res.json(createdRoom).end()
}
// 507f1f77bcf86cd799439011
// 507f191e810c19729de860ea
// 00000020f51bb4362eee2a4d
