import { LidoComponentProps } from '@lidofinance/utils'
import {
  TransitionWrapperProps,
  TransitionInnerProps,
} from '@lidofinance/transition'
import { ButtonProps } from '@lidofinance/button'
import { ReactElement, ReactNode } from 'react'

export type ModalOverlayOwnProps = LidoComponentProps<
  'div',
  {
    onClose?: () => void
    onBack?: () => void
  }
>

export type ModalOverlayProps = ModalOverlayOwnProps & TransitionWrapperProps
export type ModalOverlayInnerProps = ModalOverlayOwnProps & TransitionInnerProps

export type ModalProps = {
  title?: ReactNode
  titleIcon?: ReactNode
  subtitle?: ReactNode
  extra?: ReactNode
  center?: boolean
  open?: boolean
} & Omit<ModalOverlayProps, 'title' | 'in'>

export type ModalExtraProps = LidoComponentProps<'div'>

export type ModalButtonIconProps = {
  icon: ReactElement
} & ButtonProps
