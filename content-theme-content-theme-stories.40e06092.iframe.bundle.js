"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[5248],{"./packages/content-theme/content-theme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_block_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block/index.ts"),_content_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/content-theme/content-theme.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Content Theme"},Basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_content_theme__WEBPACK_IMPORTED_MODULE_2__.x,{darkContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_block_index__WEBPACK_IMPORTED_MODULE_1__.gO,{children:"You see only dark content! Light content is hidden!"}),lightContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_block_index__WEBPACK_IMPORTED_MODULE_1__.gO,{children:"You see only light content! Dark content is hidden!"})})});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"() => <>\n    <ContentTheme darkContent={<Block>You see only dark content! Light content is hidden!</Block>} lightContent={<Block>You see only light content! Dark content is hidden!</Block>} />\n  </>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/block/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>block_Block});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colors={foreground:styled_components_browser_esm.iv`
    background: var(--lido-color-foreground);
    color: var(--lido-color-textSecondary);
  `,background:styled_components_browser_esm.iv`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,accent:styled_components_browser_esm.iv`
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
  `},variants={flat:styled_components_browser_esm.iv`
    box-shadow: none;
  `,shadow:styled_components_browser_esm.iv`
    box-shadow: ${({theme})=>theme.boxShadows.lg}
      var(--lido-colors-shadowLight);
  `},paddings=styled_components_browser_esm.iv`
  padding: ${({theme})=>theme.spaceMap.xxl}px;

  ${({theme})=>theme.mediaQueries.md} {
    padding: ${({theme})=>theme.spaceMap.lg}px;
  }
`,BlockStyle=styled_components_browser_esm.ZP.div`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  border-radius: ${({theme})=>theme.borderRadiusesMap.xl}px;
  margin: 0;

  ${({$paddingLess})=>!$paddingLess&&paddings}

  ${({$variant})=>variants[$variant]}
  ${({$color})=>colors[$color]}
`;function Block(props,ref){const{color="foreground",variant="flat",paddingLess=!1,...rest}=props;return(0,jsx_runtime.jsx)(BlockStyle,{$color:color,$variant:variant,$paddingLess:paddingLess,ref,...rest})}const block_Block=(0,react.forwardRef)(Block)},"./packages/block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gO:()=>_Block__WEBPACK_IMPORTED_MODULE_0__.Z});var _Block__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/block/Block.tsx");__webpack_require__("./packages/block/types.tsx")},"./packages/block/types.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var BlockVariant,BlockColor;__webpack_require__.d(__webpack_exports__,{S:()=>BlockColor,p:()=>BlockVariant}),function(BlockVariant){BlockVariant[BlockVariant.flat=0]="flat",BlockVariant[BlockVariant.shadow=1]="shadow"}(BlockVariant||(BlockVariant={})),function(BlockColor){BlockColor[BlockColor.foreground=0]="foreground",BlockColor[BlockColor.background=1]="background",BlockColor[BlockColor.accent=2]="accent"}(BlockColor||(BlockColor={}))},"./packages/content-theme/content-theme.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ContentTheme});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const ContentThemeOnlyDark=styled_components_browser_esm.ZP.div`
  display: var(--lido-color-darkDisplay, contents);
`,ContentThemeOnlyLight=styled_components_browser_esm.ZP.div`
  display: var(--lido-color-lightDisplay, contents);
`,ContentTheme=props=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContentThemeOnlyDark,{children:props.darkContent}),(0,jsx_runtime.jsx)(ContentThemeOnlyLight,{children:props.lightContent})]})}}]);