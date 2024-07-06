import { Controller, useFormContext } from 'react-hook-form'
import { inputSize } from '../utils/inputSize'

type Props = {
  label: string
  placeholder?: string
  name: string
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export default function TextField({
  label,
  placeholder = '*Ketik',
  name,
  size,
}: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <input
            type="text"
            {...field}
            placeholder={placeholder}
            className={`input input-bordered ${inputSize(
              size
            )} w-full px-2 py-0`}
          />
        </label>
      )}
    />
  )
}
