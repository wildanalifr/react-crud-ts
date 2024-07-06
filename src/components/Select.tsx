import { Controller, useFormContext } from 'react-hook-form'
import { inputSelectSize } from '../utils/inputSize'

type Props = {
  label: string
  name: string
  size: 'xs' | 'sm' | 'lg'
  options: { optionValue: string; optionLabel: string }[]
}

export default function SelectField({ label, name, options, size }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field }) => (
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <select
            {...field}
            className={`select select-bordered ${inputSelectSize(size)} w-full`}
          >
            {options.map((item) => (
              <option key={item.optionValue} value={item.optionValue}>
                {item.optionLabel}
              </option>
            ))}
          </select>
        </label>
      )}
    />
  )
}
