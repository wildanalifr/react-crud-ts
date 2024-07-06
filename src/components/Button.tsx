import { buttonSelectSize, buttonVariant } from '../utils/buttonStyle'

type Props = {
  title: string
  variant: 'info' | 'success' | 'warning' | 'error'
  size: 'xs' | 'sm' | 'lg' | 'normal'
  type: 'button' | 'reset' | 'submit'
  className?: string
}

export default function Button({
  title,
  variant,
  size,
  type,
  className,
}: Props) {
  return (
    <button
      className={`btn w-full ${className} ${buttonVariant(
        variant
      )} ${buttonSelectSize(size)}`}
      type={type}
    >
      {title}
    </button>
  )
}
