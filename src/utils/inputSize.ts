export const inputSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 'input-xs'
    case 'sm':
      return 'input-sm'
    case 'md':
      return 'input-md'
    case 'lg':
      return 'input-lg'

    default:
      'input-xs'
  }
}

export const inputSelectSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 'select-xs'
    case 'sm':
      return 'select-sm'
    case 'lg':
      return 'select-lg'

    default:
      'select-xs'
  }
}
