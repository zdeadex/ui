import { ForwardedRef, forwardRef, useRef } from 'react'
import { SelectWrapperStyle } from './SelectStyles'
import { SelectArrow } from './SelectArrow'
import { useMergeRefs } from '../hooks'
import { PopupMenu } from '../popup-menu'
import { SelectProps } from './types'
import { useSelect } from './useSelect'
import { useSelectWidth } from './useSelectWidth'

export const Select = forwardRef(
  (
    {
      wrapperRef: externalWrapperRef,
      anchorRef: externalAnchorRef,
      arrow = 'default',
      variant,
      value,
      defaultValue,
      disabled,
      children,
      onClick,
      onKeyDown,
      onChange,
      ...rest
    }: SelectProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const localAnchorRef = useRef<HTMLLabelElement>(null)
    const wrapperRef = useMergeRefs([localAnchorRef, externalWrapperRef])
    const anchorRef = externalAnchorRef || localAnchorRef

    const { opened, options, title, handleClick, handleClose, handleKeyDown } =
      useSelect({
        value,
        defaultValue,
        disabled,
        onClick,
        onChange,
        onKeyDown,
        children,
      })
    const width = useSelectWidth(opened, anchorRef)

    return (
      <>
        <SelectWrapperStyle
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          active={opened}
          value={title}
          rightDecorator={
            <SelectArrow arrow={arrow} disabled={disabled} opened={opened} />
          }
          wrapperRef={wrapperRef}
          variant={variant}
          {...rest}
          ref={ref}
          readOnly
        />
        <PopupMenu
          open={opened}
          variant={variant}
          anchorRef={anchorRef}
          style={{ minWidth: width }}
          onClose={handleClose}
        >
          {options}
        </PopupMenu>
      </>
    )
  },
)
Select.displayName = 'Select'
