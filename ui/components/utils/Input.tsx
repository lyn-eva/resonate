import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react'

export default function Input(props: Props) {
	const { v, setV, label, ph, ..._props } = props

	return (
		<div className='h-auto'>
			{label && (
				<label htmlFor={ph} className='text-sm text-cyan-900'>
					{label}
				</label>
			)}
			<input id={ph} value={v} onChange={(e) => setV(e.target.value)} placeholder={ph} {..._props} />
		</div>
	)
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'placeholder' | 'className'> {
	ph?: string
	label?: string
	class?: string
	setV: Dispatch<SetStateAction<string>>
	v: string
}
