import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import useBearStore from './useBearStore'

export default function useSocket(id: string) {
	const uqc = useQueryClient()
	const socket = useBearStore((state) => state.socket)

	useEffect(() => {
		socket.on(id, (message) => {
			console.log('client message:', message)
			const cache = uqc.getQueryData(`room-${id}`) as []
			console.log('cache', cache)
			uqc.setQueryData(`room-${id}`, [...cache, message])
		})
		return () => {
			socket.removeListener(id)
		}
	}, [socket, id, uqc])

	return { socket }
}
