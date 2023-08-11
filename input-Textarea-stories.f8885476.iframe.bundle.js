"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[4284],{"./packages/input/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Labeled:()=>Labeled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,ref3,ref4,ref5,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Textarea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/input/Textarea.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Controls/Textarea",args:{disabled:!1,fullwidth:!1,active:!1},argTypes:{onChange:{action:"change",table:{disable:!0}}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Basic.args={placeholder:"Amount",rows:5};const Labeled=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Labeled.args={label:"Amount",rows:5},Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Textarea {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},Labeled.parameters={...Labeled.parameters,docs:{...null===(ref3=Labeled.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <Textarea {...props} />",...null===(ref4=Labeled.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}}},"./packages/input/InputStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GR:()=>InputWrapperStyle,Qz:()=>InputMessageStyle,Ty:()=>InputRightDecoratorStyle,Xe:()=>InputControlWrapperStyle,fR:()=>InputLeftDecoratorStyle,mE:()=>TextareaStyle,oT:()=>InputContentStyle,x2:()=>InputStyle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_LabelStyles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/input/LabelStyles.ts");const statesCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &:hover {
    z-index: 1;
  }

  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.fl}
    }
  }
`,activeCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &,
  &:hover,
  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.fl}
    }
  }
`,errorCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-error);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.NL}
    }
  }
`,warningCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-warning);

    ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.PN}
    }
  }
`,wrapperColors={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-controlBg);
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    ${({$disabled})=>$disabled?"background: var(--lido-color-background);":"\n          &:hover {\n            border-color: var(--lido-color-borderHover);\n          }\n    "};
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-accentControlBg);
    border-color: var(--lido-color-accentBorder);
    color: var(--lido-color-accentText);

    ${({$disabled})=>$disabled?"background: var(--lido-color-controlBg);":"\n          &:hover {\n            border-color: var(--lido-color-accentBorderHover);\n          }\n    "};
  `},decoratorCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`,InputLeftDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  ${decoratorCSS}
  padding-right: 16px;
`,InputRightDecoratorStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  ${decoratorCSS}
  padding-left: 16px;
`,InputWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.label`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  box-sizing: border-box;
  cursor: ${({$disabled})=>$disabled?"default":"text"};
  width: ${({$fullwidth})=>$fullwidth?"100%":"auto"};
`,contentVariants={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    padding-top: 17px;
    padding-bottom: 17px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      margin-top: -17px;
      margin-bottom: -17px;
    }
  `,small:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    padding-top: 9px;
    padding-bottom: 9px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      padding-top: -9px;
      padding-bottom: -9px;
    }
  `},InputContentStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  border: 1px solid;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  transition: border-color ${({theme})=>theme.duration.fast} ease;

  ${({$variant})=>contentVariants[$variant]};
  ${({$color})=>wrapperColors[$color]};
  ${({$disabled})=>$disabled?"":statesCSS};
  ${({$active})=>$active?activeCSS:""};
  ${({$warning})=>$warning?warningCSS:""};
  ${({$error})=>$error?errorCSS:""};
`,InputControlWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`,labeledCSS=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  &:not(:focus):placeholder-shown {
    & + ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.ou} {
      ${_LabelStyles__WEBPACK_IMPORTED_MODULE_0__.gS}
    }

    &::placeholder {
      opacity: 0;
    }
  }
`,inputColors={default:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    color: var(--lido-color-text);

    &:disabled {
      color: var(--lido-color-textSecondary);
    }

    &::placeholder {
      color: var(--lido-color-textSecondary);
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--lido-color-controlBg) inset !important;
      color: var(--lido-color-text) !important;
      -webkit-text-fill-color: var(--lido-color-text) !important;
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-text) !important;
      -webkit-text-fill-color: var(--lido-color-text) !important;
    }
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    color: var(--lido-color-accentText);
    opacity: 1;

    &:disabled {
      color: var(--lido-color-accentText);
      opacity: 0.5;
    }

    &::placeholder {
      color: var(--lido-color-accentText);
      opacity: 0.5;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--lido-color-accentControlBg) inset !important;
      color: var(--lido-color-accentContrast) !important;
      -webkit-text-fill-color: var(--lido-color-accentContrast) !important;
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-accentContrast) !important;
      -webkit-text-fill-color: var(--lido-color-accentContrast) !important;
    }
  `},InputStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.input`
  width: 100%;
  font-family: inherit;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.43em;
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  position: relative;
  top: ${({$labeled})=>$labeled?8:0}px;

  &::placeholder {
    transition: opacity ${({theme})=>theme.duration.fast} ease;
  }

  ${({$color})=>inputColors[$color]}
  ${({$labeled})=>$labeled?labeledCSS:""}
`,TextareaStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(InputStyle).attrs({as:"textarea"})`
  resize: none;
`,messageVariants={error:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-error);
    color: var(--lido-color-errorContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,warning:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-warning);
    color: var(--lido-color-warningContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,success:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    background: var(--lido-color-success);
    color: var(--lido-color-successContrast);
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `},InputMessageStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  margin-top: ${({$bordered})=>$bordered?5:6}px;
  left: ${({$bordered})=>$bordered?-1:0}px;
  position: absolute;
  top: 100%;
  line-height: 1.6em;
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  border-radius: ${({theme})=>theme.borderRadiusesMap.sm}px;
  padding: 6px 10px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  max-width: ${({$bordered})=>$bordered?"calc(100% + 2px)":"100%"};
  z-index: 3;

  ${({$variant})=>messageVariants[$variant]}
`},"./packages/input/LabelStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NL:()=>labelErrorCSS,PN:()=>labelWarningCSS,fl:()=>labelFocusCSS,gS:()=>labelEmptyValueCSS,ie:()=>TextareaLabelStyle,ou:()=>InputLabelStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={default:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    color: var(--lido-color-textSecondary);
  `,accent:styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    color: var(--lido-color-accentContrastSecondary);
  `},labelEmptyValueCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  ${({$color})=>colors[$color]}

  transform: scale(1);
  opacity: 0.5;
`,labelFilledValueCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  ${({$color})=>colors[$color]}

  transform: translateY(-14px) scale(0.75);
  opacity: 1;
`,labelFocusCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  color: var(--lido-color-primary);
  opacity: 1;
`,labelErrorCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  color: var(--lido-color-error);
`,labelWarningCSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  color: var(--lido-color-warning);
`,InputLabelStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span`
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 1em;
  line-height: 1.25em;
  margin: -0.625em 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: inherit;
  transform-origin: 0% 100%;
  transition: transform ${({theme})=>theme.duration.fast} ease;
  transition-property: transform, opacity, color;
  ${labelFilledValueCSS};
`,TextareaLabelStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(InputLabelStyle)`
  top: 10px;
`},"./packages/input/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_InputStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/input/InputStyles.ts"),_LabelStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/input/LabelStyles.ts");function Textarea(props,ref){const{label,error,warning,success,active=!1,fullwidth=!1,placeholder=" ",className,style,variant="default",color="default",wrapperRef,children,...rest}=props,{id,disabled=!1}=props,wrapperProps={className,style},hasLabel=!!label&&"default"===variant,hasError=!!error,hasErrorMessage=hasError&&"boolean"!=typeof error,hasWarning=!hasError&&!!warning,hasWarningMessage=hasWarning&&"boolean"!=typeof warning,hasSuccessMessage=!!success&&!error&&"boolean"!=typeof success;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.GR,{$disabled:disabled,$fullwidth:fullwidth,htmlFor:id,ref:wrapperRef,...wrapperProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.oT,{$color:color,$variant:variant,$error:hasError,$warning:hasWarning,$active:active,$disabled:disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Xe,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.mE,{$labeled:hasLabel,$color:color,placeholder,"aria-invalid":hasError,ref,...rest}),hasLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyles__WEBPACK_IMPORTED_MODULE_3__.ie,{$color:color,children:label})]})}),hasErrorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"error",$bordered:!0,children:error}),hasWarningMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"warning",$bordered:!0,children:warning}),hasSuccessMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputStyles__WEBPACK_IMPORTED_MODULE_2__.Qz,{$variant:"success",$bordered:!0,children:success})]})}const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Textarea)}}]);