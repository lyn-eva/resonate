import { useState } from 'react'
import { Input } from '@/components/utils'
import { GoogleIcon } from '@/components/icons'

export default function SignIn() {
	const [email, setEmail] = useState('')

	return (
		<section className='w-[22rem] py-6 px-5 shadow-[0_0_2px_0_#00000075]'>
			<Input v={email} setV={setEmail} label='Email Address' ph='example@hoat.domain' class='input' />
			<button className='btn-primary mt-3 w-full'>Sign In with Email</button>
			<div className='flex-c my-4 h-auto gap-x-3'>
				<div className='divider-x' />
				or
				<div className='divider-x' />
			</div>
			<button className='btn-outline flex-c w-full gap-x-14 px-4'>
				<GoogleIcon /> Sign In with Google
			</button>
		</section>
	)
}
