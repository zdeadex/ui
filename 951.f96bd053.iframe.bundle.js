"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[951],{"./packages/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,Y5:()=>useEscape,ch:()=>useInterceptFocus,F5:()=>useLockScroll,qq:()=>useMergeRefs,O3:()=>useOutsideClick,iP:()=>useWindowSize});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const useBreakpoint=breakpoint=>{const maxWidth=(0,styled_components_browser_esm.Fg)().breakpointsMap[breakpoint].width,[isBreakpoint,seIsBreakpoint]=(0,react.useState)((()=>{try{return window.matchMedia(`(max-width: ${maxWidth})`).matches}catch(error){return!1}}));return(0,react.useEffect)((()=>{try{const mql=window.matchMedia(`(max-width: ${maxWidth})`),setMobileFromQuery=({matches})=>{seIsBreakpoint(matches)};return mql.addEventListener("change",setMobileFromQuery),setMobileFromQuery(mql),()=>{mql.removeEventListener("change",setMobileFromQuery)}}catch(error){return}}),[maxWidth]),isBreakpoint},useEscape=callback=>{const handleKeyDown=(0,react.useCallback)((event=>{"Escape"===event.key&&(null==callback||callback())}),[callback]);(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown))),[handleKeyDown])},useInterceptFocus=()=>{const savedElement=(0,react.useRef)(null),restoreFocus=(0,react.useCallback)((()=>{savedElement.current instanceof HTMLElement&&savedElement.current.focus()}),[]);return[(0,react.useCallback)((node=>{savedElement.current=document.activeElement;node.contains(document.activeElement)||node.focus()}),[]),restoreFocus]},setStyleProperty=(element,property,value)=>{value?element.style.setProperty(property,value):element.style.removeProperty(property)},useLockScroll=(element=document.body)=>{const lockScroll=(0,react.useCallback)((()=>{if(!(element=>document.body===element?window.innerWidth>document.documentElement.clientWidth:element.scrollHeight>element.clientHeight)(element))return;const previousValues={paddingRight:element.style.paddingRight,overflow:element.style.overflow},paddingRight=(element=>parseInt(window.getComputedStyle(element).paddingRight,10)||0)(element)+(()=>{const tempDiv=document.createElement("div");Object.assign(tempDiv.style,{position:"absolute",left:"-9000px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(tempDiv);const scrollbarSize=tempDiv.offsetWidth-tempDiv.clientWidth;return document.body.removeChild(tempDiv),scrollbarSize})();setStyleProperty(element,"padding-right",`${paddingRight}px`),setStyleProperty(element,"overflow","hidden");return()=>{const{paddingRight,overflow}=previousValues;setStyleProperty(element,"padding-right",paddingRight),setStyleProperty(element,"overflow",overflow)}}),[element]);(0,react.useLayoutEffect)((()=>lockScroll()),[lockScroll])};var useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");const useMergeRefs=refs=>(0,useMergeRef.q)(refs.filter((ref=>!!ref))),useOutsideClick=callback=>{const ref=(0,react.useRef)(null),handleOutsideClick=(0,react.useCallback)((event=>{const popover=ref.current,{target}=event;if(!(target instanceof Element))return;!1===(null==popover?void 0:popover.contains(target))&&(null==callback||callback())}),[callback]);return(0,react.useEffect)((()=>(document.addEventListener("mousedown",handleOutsideClick),()=>document.removeEventListener("mousedown",handleOutsideClick))),[handleOutsideClick]),{ref}},getWindowSize=()=>[window.innerWidth,window.innerHeight],useWindowSize=()=>{const[size,setSize]=(0,react.useState)(getWindowSize),handleResize=(0,react.useCallback)((()=>{setSize(getWindowSize())}),[]);return(0,react.useEffect)((()=>(window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize))),[handleResize]),size};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;__webpack_require__("./packages/theme/index.ts")},"./packages/popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>popover_Popover});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./packages/popover/constants.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),utils=__webpack_require__("./packages/utils/index.ts"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts");const PopoverWrapperStyle=styled_components_browser_esm.ZP.div`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${({$backdrop})=>$backdrop?"100%":"0px"};
`,visibleCSS=styled_components_browser_esm.iv`
  opacity: 1;

  &[data-placement] {
    transform: translate(0, 0);
  }
`,hiddenCSS=styled_components_browser_esm.iv`
  opacity: 0;

  &[data-placement^='top'] {
    transform: translateY(6px);
  }
  &[data-placement^='right'] {
    transform: translateX(-6px);
  }
  &[data-placement^='bottom'] {
    transform: translateY(-6px);
  }
  &[data-placement^='left'] {
    transform: translateX(6px);
  }
`,PopoverRootStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
  transition: opacity ${({$duration})=>$duration}ms ease;
  transition-property: opacity, transform;

  ${({$transition})=>["exiting","exited"].includes($transition)?hiddenCSS:visibleCSS}
`;function PopoverRoot(props,externalRef){const{anchorRef,wrapperRef:externalWrapperRef,placement=constants.R,backdrop=!0,transitionStatus,duration,...rest}=props,{onClose}=props;(0,hooks.Y5)(onClose);const{ref:outsidePopoverRef}=(0,hooks.O3)(onClose),{popoverRef:positionPopoverRef,wrapperRef:positionWrapperRef,style}=(props=>{const{placement=constants.R,anchorRef}=props,popoverRef=(0,react.useRef)(null),wrapperRef=(0,react.useRef)(null),[popoverStyle,setPopoverStyle]=(0,react.useState)(constants._),[windowWidth,windowHeight]=(0,hooks.iP)();(0,react.useLayoutEffect)((()=>{if(!anchorRef.current||!popoverRef.current||!wrapperRef.current)return;const position=((anchorRect,popoverRect,wrapperRect,placement)=>{const position={};switch(placement){case"top":case"bottom":position.left=(anchorRect.left+anchorRect.right)/2-popoverRect.width/2;break;case"topLeft":case"bottomLeft":position.left=anchorRect.left;break;case"topRight":case"bottomRight":position.left=anchorRect.right-popoverRect.width;break;case"rightTop":case"right":case"rightBottom":position.left=anchorRect.right;break;case"leftTop":case"left":case"leftBottom":position.left=anchorRect.left-popoverRect.width}switch(placement){case"left":case"right":position.top=(anchorRect.top+anchorRect.bottom)/2-popoverRect.height/2;break;case"leftTop":case"rightTop":position.top=anchorRect.top;break;case"leftBottom":case"rightBottom":position.top=anchorRect.bottom-popoverRect.height;break;case"topLeft":case"top":case"topRight":position.top=anchorRect.top-popoverRect.height;break;case"bottomLeft":case"bottom":case"bottomRight":position.top=anchorRect.bottom}return position.top-=wrapperRect.top,position.left-=wrapperRect.left,position})(anchorRef.current.getBoundingClientRect(),popoverRef.current.getBoundingClientRect(),wrapperRef.current.getBoundingClientRect(),placement);setPopoverStyle(position)}),[anchorRef,placement,windowWidth,windowHeight]);const style={...props.style,...popoverStyle};return{popoverRef,wrapperRef,style}})(props),popoverRef=(0,hooks.qq)([positionPopoverRef,outsidePopoverRef,externalRef]),wrapperRef=(0,hooks.qq)([positionWrapperRef,externalWrapperRef]);return utils.cV?react_dom.createPortal((0,jsx_runtime.jsx)(PopoverWrapperStyle,{$backdrop:backdrop,ref:wrapperRef,children:(0,jsx_runtime.jsx)(PopoverRootStyle,{...rest,$transition:transitionStatus,$duration:duration,"data-placement":placement,style,ref:popoverRef})}),utils.cV):null}const popover_PopoverRoot=(0,transition.Y)((0,react.forwardRef)(PopoverRoot)),PopoverStyle=(0,styled_components_browser_esm.ZP)(popover_PopoverRoot)`
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  font-weight: 400;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  box-shadow: ${({theme})=>theme.boxShadows.xs}
    var(--lido-color-shadowLight);
  padding: ${({theme})=>theme.spaceMap.lg}px;
  overflow: auto;

  ${props=>{const{$offset,placement,theme}=props,offset=theme.spaceMap[$offset];return placement.startsWith("top")?`margin-top: ${-offset}px`:placement.startsWith("right")?`margin-left: ${offset}px`:placement.startsWith("bottom")?`margin-top: ${offset}px`:placement.startsWith("left")?`margin-left: ${-offset}px`:""}}
`;function Popover(props,ref){const{placement=constants.R,open=!1,offset="xs",...rest}=props;return(0,jsx_runtime.jsx)(PopoverStyle,{$offset:offset,placement,in:open,...rest,ref})}const popover_Popover=(0,react.forwardRef)(Popover)},"./packages/popover/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DEFAULT_PLACEMENT,_:()=>INITIAL_STYLE});const INITIAL_STYLE={position:"fixed",opacity:0,pointerEvents:"none"},DEFAULT_PLACEMENT="bottomLeft"},"./packages/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J2:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.Z,V0:()=>_types__WEBPACK_IMPORTED_MODULE_1__.V,m9:()=>_types__WEBPACK_IMPORTED_MODULE_1__.m});var _Popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/popover/Popover.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/popover/types.ts")},"./packages/popover/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>PopoverOffset,m:()=>PopoverPlacement});var PopoverOffset,PopoverPlacement;__webpack_require__("./node_modules/react/index.js");!function(PopoverOffset){PopoverOffset[PopoverOffset.xs=0]="xs",PopoverOffset[PopoverOffset.sm=1]="sm",PopoverOffset[PopoverOffset.md=2]="md",PopoverOffset[PopoverOffset.lg=3]="lg",PopoverOffset[PopoverOffset.xl=4]="xl"}(PopoverOffset||(PopoverOffset={})),function(PopoverPlacement){PopoverPlacement[PopoverPlacement.topLeft=0]="topLeft",PopoverPlacement[PopoverPlacement.top=1]="top",PopoverPlacement[PopoverPlacement.topRight=2]="topRight",PopoverPlacement[PopoverPlacement.rightTop=3]="rightTop",PopoverPlacement[PopoverPlacement.right=4]="right",PopoverPlacement[PopoverPlacement.rightBottom=5]="rightBottom",PopoverPlacement[PopoverPlacement.bottomLeft=6]="bottomLeft",PopoverPlacement[PopoverPlacement.bottom=7]="bottom",PopoverPlacement[PopoverPlacement.bottomRight=8]="bottomRight",PopoverPlacement[PopoverPlacement.leftTop=9]="leftTop",PopoverPlacement[PopoverPlacement.left=10]="left",PopoverPlacement[PopoverPlacement.leftBottom=11]="leftBottom"}(PopoverPlacement||(PopoverPlacement={}))},"./packages/popup-menu/PopupMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>popup_menu_PopupMenu});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),PopupMenuProvider=__webpack_require__("./packages/popup-menu/PopupMenuProvider.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),popover=__webpack_require__("./packages/popover/index.ts"),PopupMenuItemStyles=__webpack_require__("./packages/popup-menu/PopupMenuItemStyles.ts");const PopupMenuStyle=(0,styled_components_browser_esm.ZP)(popover.J2)`
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: ${({theme})=>theme.boxShadows.xs}
    var(--lido-color-shadowLight);
  padding: 0;

  ${PopupMenuItemStyles.LP}:first-child {
    border-top-left-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
    border-top-right-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
  }

  ${PopupMenuItemStyles.LP}:last-child {
    border-bottom-left-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
    border-bottom-right-radius: ${({theme})=>theme.borderRadiusesMap.lg-1}px;
  }
`,FOCUSABLE_ELEMENTS=["a[href]","button:not([disabled]):not([aria-hidden])",'[tabindex]:not([tabindex^="-"])'];function PopupMenu(props,externalRef){const{variant,children,onKeyDown,onMouseMove,...rest}=props,{ref:controlRef,handleMouseMove,handleKeyDown,handleEnter,handleExit}=(props=>{const{onMouseMove,onKeyDown}=props,ref=(0,react.useRef)(null),getFocusableNodes=(0,react.useCallback)((()=>{var ref1,ref2;const nodes=null!==(ref2=null===(ref1=ref.current)||void 0===ref1?void 0:ref1.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")))&&void 0!==ref2?ref2:[];return Array.from(nodes).filter((node=>node&&node instanceof HTMLElement&&null!==node.offsetParent))}),[]),handleFocusTo=(0,react.useCallback)(((event,offset=1)=>{const focusableNodes=getFocusableNodes();if(0===focusableNodes.length)return;const currentElement=document.activeElement,focusedItemIndex=currentElement instanceof HTMLElement?focusableNodes.indexOf(currentElement):-1,activeItemIndex=focusableNodes.findIndex((node=>"true"===node.getAttribute("aria-selected")));let nextIndex=(-1===focusedItemIndex?activeItemIndex:focusedItemIndex)+offset;nextIndex<0&&(nextIndex=focusableNodes.length-1),nextIndex>=focusableNodes.length&&(nextIndex=0),focusableNodes[nextIndex].focus(),event.preventDefault()}),[getFocusableNodes]),handleMouseMove=(0,react.useCallback)((event=>{null==onMouseMove||onMouseMove(event);const{target}=event;if(!(target instanceof HTMLElement))return;const focusableNodes=getFocusableNodes(),overed=target.closest(FOCUSABLE_ELEMENTS.join(","));if(!(overed instanceof HTMLElement))return;const isNotFocusable=!focusableNodes.includes(overed);overed===document.activeElement||isNotFocusable||overed.focus()}),[getFocusableNodes,onMouseMove]),handleKeyDown=(0,react.useCallback)((event=>{var _code;null==onKeyDown||onKeyDown(event);const code=null!==(_code=event.code)&&void 0!==_code?_code:event.key;"Tab"===code&&event.preventDefault(),"ArrowDown"===code&&handleFocusTo(event,1),"ArrowUp"===code&&handleFocusTo(event,-1)}),[handleFocusTo,onKeyDown]),[interceptFocus,restoreFocus]=(0,hooks.ch)(),handleEnter=(0,react.useCallback)((()=>{ref.current&&interceptFocus(ref.current)}),[interceptFocus]),handleExit=(0,react.useCallback)((()=>{restoreFocus()}),[restoreFocus]);return{ref,handleMouseMove,handleKeyDown,handleEnter,handleExit}})(props),popupRef=(0,hooks.qq)([controlRef,externalRef]);return(0,jsx_runtime.jsx)(PopupMenuStyle,{onMouseMove:handleMouseMove,onKeyDown:handleKeyDown,onEnter:handleEnter,onExit:handleExit,tabIndex:-1,role:"listbox",...rest,ref:popupRef,children:(0,jsx_runtime.jsx)(PopupMenuProvider.N,{variant,children})})}const popup_menu_PopupMenu=(0,react.forwardRef)(PopupMenu)},"./packages/popup-menu/PopupMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/popup-menu/PopupMenuItemStyles.ts"),_PopupMenuProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/popup-menu/PopupMenuProvider.tsx");function PopupMenuItem(props,ref){const{active=!1,leftDecorator,rightDecorator,children,...rest}=props,{variant="default"}=(0,_PopupMenuProvider__WEBPACK_IMPORTED_MODULE_3__.C)(),hasLeftDecorator=!!leftDecorator,hasRightDecorator=!!rightDecorator;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.LP,{$active:active,role:"option","aria-selected":active,...rest,ref,children:[hasLeftDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.cF,{children:leftDecorator}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.OU,{$variant:variant,children}),hasRightDecorator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupMenuItemStyles__WEBPACK_IMPORTED_MODULE_2__.KL,{children:rightDecorator})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(PopupMenuItem)},"./packages/popup-menu/PopupMenuItemStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KL:()=>PopupMenuItemRightDecoratorStyle,LP:()=>PopupMenuItemStyle,OU:()=>PopupMenuItemContentStyle,cF:()=>PopupMenuItemLeftDecoratorStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const PopupMenuItemStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button`
  text-align: left;
  display: flex;
  width: 100%;
  align-items: stretch;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  background: transparent;
  border-radius: 0;
  color: var(--lido-color-text);
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  padding: 0 15px;
  margin: 0;
  position: relative;

  &:disabled {
    cursor: default;
    color: var(--lido-color-textSecondary);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-radius: inherit;
    opacity: ${({$active})=>$active?.04:0};
    background: var(--lido-color-popupMenuItemBgActiveHover);
    transition: opacity ${({theme})=>theme.duration.fast} ease;
  }

  &:focus:not(:disabled):before {
    opacity: 0.04;
  }
`,variants={small:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    padding: 12px 0;
    font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
    line-height: 1.35em;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 800;
  `,default:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    padding: 18px 0;
    font-size: ${({theme})=>theme.fontSizesMap.xs}px;
    line-height: 1.4em;
    font-weight: 400;
  `},PopupMenuItemContentStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  position: relative;
  padding: 18px 0;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({$variant})=>variants[$variant]}
`,decoratorCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: default;
  display: flex;
  align-items: center;
`,PopupMenuItemLeftDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  ${decoratorCSS};
  padding-right: 16px;
`,PopupMenuItemRightDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  ${decoratorCSS};
  padding-left: 16px;
`},"./packages/popup-menu/PopupMenuProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>usePopupMenuContext,N:()=>PopupMenuProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Context=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({}),usePopupMenuContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context),PopupMenuProvider=props=>{const{variant,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:{variant},...rest})}},"./packages/popup-menu/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>PopupMenuVariant});var PopupMenuVariant;__webpack_require__("./node_modules/react/index.js");!function(PopupMenuVariant){PopupMenuVariant[PopupMenuVariant.small=0]="small",PopupMenuVariant[PopupMenuVariant.default=1]="default"}(PopupMenuVariant||(PopupMenuVariant={}))},"./packages/transition/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>withTransition});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js");const DEFAULT_DURATION=150;function withTransition(Component){function Wrapped(props,externalRef){const{in:state=!1,timeout=DEFAULT_DURATION,mountOnEnter=!0,unmountOnExit=!0,appear=!0,enter=!0,exit=!0,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited,...rest}=props,transitionProps={in:state,timeout,mountOnEnter,unmountOnExit,appear,enter,exit,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited},ref=(0,hooks.qq)([externalRef]);return(0,jsx_runtime.jsx)(Transition.ZP,{...transitionProps,nodeRef:ref,children:status=>(0,jsx_runtime.jsx)(Component,{...rest,duration:timeout,transitionStatus:status,ref})})}return(0,react.forwardRef)(Wrapped)}}}]);