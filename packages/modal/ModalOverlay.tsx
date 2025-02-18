import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { useMergeRefs, useEscape, useLockScroll } from '../hooks'
import { withTransition } from '../transition'
import { modalRoot } from '../utils'
import { ModalOverlayInnerProps } from './types'
import {
  ModalPortalStyle,
  ModalOverflowStyle,
  ModalContentStyle,
} from './ModalOverlayStyles'
import { useModalFocus } from './useModalFocus'
import { useModalClose } from './useModalClose'

export const ModalOverlay = withTransition(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        onClose,
        onBack,
        duration,
        transitionStatus,
        ...rest
      }: ModalOverlayInnerProps,
      externalRef?: ForwardedRef<HTMLDivElement>,
    ) => {
      const closable = !!onClose

      useEscape(onClose)
      useLockScroll()

      const controlRef = useModalFocus()
      const { ref: closeRef, handleClick } = useModalClose(onClose)

      const mergedRef = useMergeRefs([controlRef, closeRef, externalRef])

      if (!modalRoot) return null

      return ReactDOM.createPortal(
        <ModalPortalStyle
          $closable={closable}
          $duration={duration}
          $transition={transitionStatus}
          onClick={handleClick}
        >
          <ModalOverflowStyle>
            <ModalContentStyle
              tabIndex={-1}
              role='dialog'
              aria-modal='true'
              ref={mergedRef}
              $transition={transitionStatus}
              $duration={duration}
              {...rest}
            />
          </ModalOverflowStyle>
        </ModalPortalStyle>,
        modalRoot,
      )
    },
  ),
)
ModalOverlay.displayName = 'ModalOverlay'
