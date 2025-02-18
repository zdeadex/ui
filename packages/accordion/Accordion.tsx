import { ForwardedRef, forwardRef } from 'react'
import { AccordionProps } from './types'
import {
  AccordionStyle,
  AccordionSummaryStyle,
  AccordionTitleStyle,
  AccordionArrowStyle,
  AccordionContentStyle,
} from './AccordionStyles'
import { useExpanded } from './useExpanded'

export const Accordion = forwardRef(
  (
    { defaultExpanded, summary, children, ...rest }: AccordionProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleProps, collapseProps, isExpanded } = useExpanded({
      defaultExpanded,
    })

    return (
      <AccordionStyle {...rest} ref={ref}>
        <AccordionSummaryStyle {...toggleProps}>
          <AccordionTitleStyle>{summary}</AccordionTitleStyle>
          <AccordionArrowStyle $expanded={isExpanded} />
        </AccordionSummaryStyle>
        <div {...collapseProps}>
          <AccordionContentStyle>{children}</AccordionContentStyle>
        </div>
      </AccordionStyle>
    )
  },
)
Accordion.displayName = 'Accordion'
