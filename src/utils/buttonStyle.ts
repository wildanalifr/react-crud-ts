export const buttonVariant = (variant: string) => {
  switch (variant) {
    case 'info':
      return 'btn-info'
    case 'success':
      return 'button-sm'
    case 'warning':
      return 'btn-warning'
    case 'error':
      return 'btn-error'

    default:
      'btn-info'
  }
}

export const buttonSelectSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 'button-xs'
    case 'sm':
      return 'button-sm'
    case 'lg':
      return 'button-lg'
    case 'normal':
      return 'button'

    default:
      'button'
  }
}
