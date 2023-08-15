import { ForwardedRef, forwardRef } from 'react'
import { DEFAULT_PLACEMENT } from './constants'
import { PopoverStyle } from './PopoverStyles'
import { PopoverProps } from './types'

function Popover(
  {
    placement = DEFAULT_PLACEMENT,
    open = false,
    offset = 'xs',
    ...rest
  }: PopoverProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <PopoverStyle
      $offset={offset}
      placement={placement}
      in={open}
      {...rest}
      ref={ref}
    />
  )
}

export default forwardRef(Popover)
