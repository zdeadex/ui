import { ForwardedRef, forwardRef } from 'react'
import { MainMenuItemProps } from './types'
import { NavLink } from './MainMenuItemStyles'

export const MainMenuItem = forwardRef(
  (
    { icon, children, active, ...restProps }: MainMenuItemProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <NavLink ref={ref} active={Boolean(active)} {...restProps}>
        {icon}
        <span>{children}</span>
      </NavLink>
    )
  },
)
MainMenuItem.displayName = 'MainMenuItem'
