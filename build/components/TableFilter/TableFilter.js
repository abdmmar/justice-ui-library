import{jsxs as t,jsx as e}from"react/jsx-runtime";import*as i from"react";import{s}from"../../style-inject.es-1f59c1d0.js";import r from"classnames";import{s as l}from"../../server-d796a789.js";import{FieldLabel as o}from"../Form/utility/FormUtility.js";import{Select as a}from"../Select/Select.js";import"../../index-dd80248b.js";import"stream";import"react-tooltip";import"../../utils/i18n/index.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"dompurify";import"../../constants/common.js";import"../../utils/typography.js";import"@atlaskit/select";import"../Select/reactSelectComponents.js";import"../../utils/dom.js";import"../../index-4bd03571.esm-89a49e92.js";s('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.table-filter{align-items:center;display:flex;font-family:Roboto,sans-serif;margin-left:auto}.table-filter .field-label{font-size:16px;margin-right:20px;padding:0;white-space:nowrap;word-break:keep-all}.table-filter .styled-atlaskit-select{height:40px;width:180px}.table-filter .styled-atlaskit-select__control{align-items:stretch;font-size:16px;height:100%;letter-spacing:.02em}.table-filter.isLarge .styled-atlaskit-select{width:280px}');const m=({currentValue:s,onFilterChange:m,label:p,tooltip:n,isLarge:c,customStyle:d,className:f,...g})=>{const u=i.isValidElement(n)?l.renderToString(n):n;return t("div",{className:r("table-filter",f,{isLarge:c}),style:d,children:[!!p&&e(o,{label:p,tooltip:u}),e(a,{isMulti:!1,name:"searchType",onChange:m,value:s,...g})]})};export{m as TableFilter};
