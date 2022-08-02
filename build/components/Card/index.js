import{jsxs as t,jsx as e,Fragment as i}from"react/jsx-runtime";import*as a from"react";import{c as o}from"../../index-6ea95111.js";import{ButtonWithIcon as r}from"../ButtonWithIcon/index.js";import{s as d,R as l}from"../../server-ce56d26a.js";import{s as n}from"../../style-inject.es-1f59c1d0.js";import{NoResultTip as s}from"../NoResultTip/index.js";import{translation as c}from"../../utils/i18n/index.js";import"../../fa_icons-e535ff8d.js";import{p}from"../../purify.es-49746c08.js";import"../Button/index.js";import"styled-components";import"../../objectWithoutProperties-90b89624.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../index-0b909155.js";import"../../index-dd80248b.js";import"../../_commonjsHelpers-6e998e78.js";import"../../objectSpread-31108fba.js";import"stream";import"../../utils/typography.js";import"../../nonIterableRest-e93b6547.js";import"../../utils/i18n/loadLanguages.js";n('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.card{background-color:#fff;border:0;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.25);font-family:Roboto,sans-serif;margin:20px 30px}.card.w-620{margin-left:auto;margin-right:auto;max-width:620px}.card.small-card .card-title-wrap{border-bottom:none;color:#4c576b;font-size:14px;min-height:45px;padding:0 20px}.card.small-card .card-title-wrap button span{font-size:11px!important}.card.small-card .card-content{padding:10px 20px}.card.small-card .card-footer{border-top:none;color:#4c576b;font-size:12px;height:32px;padding:0;padding-top:9px!important;text-align:center}.card.small-card .justice-search-no-result p{font-size:14px}.card .card-info{color:#687792;font-size:14px}.card .card-title-wrap{align-items:center;border-bottom:1px solid #e1e4e9;box-sizing:border-box;color:#232831;display:flex;font-size:18px;font-weight:500;justify-content:space-between;line-height:24px;min-height:60px;padding:10px 25px}.card .card-title-wrap .card-sub-title{color:#687792;font-size:12px;font-weight:500;line-height:16px;margin-left:8px;padding-bottom:12px}.card .card-title-wrap>div{align-items:center;display:flex;flex:1;justify-content:space-between}.card .card-title-wrap>div>span{align-items:center;display:flex;justify-content:flex-start}.card .card-title-wrap>div>span>i{margin-left:7px}.card .card-title-wrap button{font-size:16px;font-weight:400}.card .card-title-wrap span[role=menuitem]{font-weight:400}.card .card-content{flex:1;padding:16px 32px}.card .card-content .table{padding-top:10px}.card .card-content .table table{width:100%}.card .card-content .table table th,.card .card-content .table table thead{border-bottom:1px solid #e1e4e9;border-top:0}.card .card-content .table table td{border-top:1px solid #e1e4e9}.card .card-content .table table tbody{border-bottom:1px solid #e1e4e9}.card .card-content .table table .sc-jqCOkK.gcbJoU,.card .card-content .table table .sc-uJMKN.xfBlv{font-size:16px;letter-spacing:normal;line-height:normal;text-align:left}.card .card-content .table table .sc-jqCOkK.gcbJoU{color:#687792;font-weight:600}.card .card-content .table table .sc-uJMKN.xfBlv{color:#232831}.card .styled-information-message{color:#687792}.card .styled-information-table{margin-bottom:30px}.card .styled-information-table .row{align-items:center;display:flex;margin:0;min-height:45px}.card .styled-information-table .row.multi-line-row{height:auto!important;min-height:50px}.card .styled-information-table .row.label-hidden .cell-2{padding-left:0}.card .styled-information-table .row .cell-1{align-self:flex-start;color:#687792;font-size:14px;line-height:24px;min-width:110px;padding-top:11px;text-align:right;width:20%}.card .styled-information-table .row .cell-1 i{font-size:15px;position:relative}.card .styled-information-table .row .cell-1.left{text-align:left}.card .styled-information-table .row .cell-1.left i.icon-info[data-tip]{font-size:20px;position:relative}.card .styled-information-table .row .cell-1.left i.icon-info[data-tip]:before{position:absolute;top:3px}.card .styled-information-table .row .cell-1.center{text-align:center}.card .styled-information-table .row .cell-1.right{text-align:right}.card .styled-information-table .row .cell-2{color:#232831;flex:1;font-family:Roboto,sans-serif;font-size:16px;padding-left:30px;word-break:break-word}.card .styled-information-table .row .styled-atlaskit-select{border-color:#b8bfcd;font-size:16px;margin-left:-8px}.card .styled-information-table .row .styled-atlaskit-select .react-select__control{background-color:#fff}.card .styled-information-table .row .styled-atlaskit-select .react-select__control:hover{background-color:#f5f6f8}.card .styled-information-table .row .styled-atlaskit-select .react-select__menu{background-color:#fff;z-index:602}.card .styled-information-table .row .styled-atlaskit-select .react-select__value-container{overflow:hidden}.card .styled-information-table .row .styled-atlaskit-select .react-select__value-container.react-select__value-container--hasValue .react-select__single-value{color:#b8bfcd}.card .styled-information-table .row .styled-atlaskit-select>div{margin:0}.card .styled-information-table .row .styled-atlaskit-select>div>div:first-child{display:none}.card .styled-information-table .row .styled-atlaskit-select>div>div>div{display:inline-block;min-width:120px;width:auto}.card .styled-information-table .row .styled-atlaskit-select>div>div>div>div>div>div>div>div>div:hover{background-color:#f5f6f8}.card .styled-information-table .row .styled-atlaskit-select .styled-select-read-view{align-items:center;cursor:pointer;display:flex;font-size:16px;padding:0 4px}.card .styled-information-table .row .styled-atlaskit-select .styled-select-read-view>.text-value{display:block;max-width:155px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card .styled-information-table .row .styled-atlaskit-select .styled-select-read-view>.icon{color:#687792;display:block;margin-left:10px}.card .styled-information-table .row .styled-atlaskit-select .react-select__option{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card .styled-information-table .row .styled-atlaskit-date-picker{border-color:#b8bfcd;font-size:16px;margin-left:-8px}.card .styled-information-table .row .styled-atlaskit-date-picker>div{margin:0}.card .styled-information-table .row .styled-atlaskit-date-picker>div>div:first-child{display:none}.card .styled-information-table .row .styled-atlaskit-date-picker>div>div>div{display:inline-block;width:100%}.card .styled-information-table .row .styled-atlaskit-date-picker>div tr>th.dow{font-size:.8em;white-space:nowrap}.card .styled-information-table .row .styled-atlaskit-date-picker>div tr>td{font-size:14px}.card .styled-information-table .row .styled-atlaskit-date-picker .styled-date-picker-read-view{font-size:16px;max-width:260px;overflow:hidden;padding:0 4px;text-overflow:ellipsis;white-space:nowrap}.card .styled-information-table .row .styled-atlaskit-date-picker .styled-date-picker-read-view .icon{color:#687792;display:inline;margin-left:10px}.card .styled-information-table .row .field-text{margin-bottom:10px;margin-top:10px}.card .styled-information-table .row .field-error-message{color:#e32626;display:block;font-size:14px;margin-bottom:10px;word-break:break-word}.card .styled-information-table .row .styled-atlaskit-button{height:30px}.card .styled-information-table .row .styled-atlaskit-button span{font-size:14px}.card .styled-information-table .row .styled-atlaskit-button-enable button{background-color:#fff;border:1px solid #008940;border-radius:4px;color:#00642e!important;height:30px;justify-content:center;width:80px}.card .styled-information-table .row .styled-atlaskit-button-enable span{font-family:Roboto,sans-serif;font-size:14px;line-height:30px}.card .styled-information-table .row .styled-atlaskit-button-disable button{border-radius:4px;height:30px;justify-content:center;width:80px}.card .styled-information-table .row .styled-atlaskit-button-disable span{font-family:Roboto,sans-serif;font-size:14px;line-height:30px}.card .styled-information-table .row .styled-atlaskit-inline-edit>div{font-size:14px!important;margin-top:-14px;padding-right:20px}.card .styled-information-table .row .styled-atlaskit-inline-edit>div .editable-field-text-value,.card .styled-information-table .row .styled-atlaskit-inline-edit>div input,.card .styled-information-table .row .styled-atlaskit-inline-edit>div textarea{color:#232831;font-size:16px}.card .styled-information-table .row .styled-atlaskit-inline-edit>div .input-footer-info{color:#4c576b;font-size:12px;word-break:break-word}.card .styled-information-table .row .styled-atlaskit-inline-edit>div .editable-field-text{cursor:pointer}.card .styled-information-table .row .styled-atlaskit-inline-edit>div>div>div>div>div>div>div>div>div.bZkwxw,.card .styled-information-table .row .styled-atlaskit-inline-edit>div>div>div>div>div>div>div>div>div.drSQCl{background-color:#fff}.card .styled-information-table .row .styled-atlaskit-inline-edit>div>div>div>div>div>div>div>div>div.bZkwxw:hover,.card .styled-information-table .row .styled-atlaskit-inline-edit>div>div>div>div>div>div>div>div>div.drSQCl:hover{background-color:#f5f6f8}.card .styled-information-table .row .styled-atlaskit-inline-edit>div>div>div>div>div>div>div>div>div span.editable-field-text-icon{color:#687792;display:inline;margin-left:10px}.card .styled-information-table .row .styled-atlaskit-inline-edit>div>div>div>div>div>div>div>div>div:hover{background-color:#f5f6f8}.card .styled-information-table .row .styled-datetime-picker{margin-left:-8px;max-width:280px}.card .styled-information-table .row .styled-datetime-picker>div>div>div{background-color:#fff;border:none}.card .styled-information-table .row .styled-datetime-picker>div>div>div:hover{background-color:#f5f6f8}.card .styled-information-table .tips{margin-bottom:20px;margin-top:0!important}.card .styled-information-table .tips .link{color:#0b6cff;cursor:pointer;font-family:Roboto,sans-serif;font-size:12px;line-height:14px;margin-left:10px}.card.no-padding>.card-content{padding:0}.card.no-horizontal-margin{margin-left:0;margin-right:0}.card.no-title .card-title-wrap{display:none}');const f=({cardTitle:n,cardInfo:f,cardDataQa:m,className:b,customHeader:y,customFooter:x,buttonOnClick:v,buttonText:w,buttonIcon:h,buttonDataQa:g,buttonDisabled:u=!1,buttonAppearance:k="primary",noPadding:z=!1,noHorizontalMargin:j=!1,noTitle:_=!1,titleTip:N,children:T,isAuthorized:I=!0,Tips:R,smallCard:C=!1,cardSubTitle:S,customStyleTitleWrapper:q,noResultText:B=c("unauthorized.message")})=>{const D=a.isValidElement(R)?d.renderToString(R):R;return a.useEffect((()=>{const t=setTimeout((()=>{l.rebuild()}),100);return()=>{clearTimeout(t)}}),[]),t("div",{className:o("card",b,{"no-padding":z,"no-horizontal-margin":j,"no-title":_,"small-card":C}),"data-qa-id":m,children:[!_&&t("div",{className:o("card-title-wrap",q),children:[n&&!v&&!f&&e("div",{children:t("span",{children:[e("span",{children:n}),S&&e("small",{className:"card-sub-title",children:S}),R&&t(i,{children:[e("i",{className:"icon-info","data-for":"cardInfo__tooltip","data-tip":D?p.sanitize(D):"","data-html":!0}),e(l,{effect:"solid",id:"cardInfo__tooltip"})]}),N]})}),n&&v&&t("div",{children:[t("span",{children:[e("span",{children:n}),S&&e("small",{className:"card-sub-title",children:S}),R&&t(i,{children:[e("i",{className:"icon-info","data-for":"cardInfo__tooltip","data-tip":D?p.sanitize(D):"","data-html":!0}),e(l,{effect:"solid",id:"cardInfo__tooltip"})]}),N]}),e("div",{className:o("styled-atlaskit-button",{[`${k}`]:!u}),"data-qa-id":g,children:e(r,{appearance:C?"link":k,buttonIcon:h,onClick:v,isDisabled:u,children:w})})]}),n&&f&&t("div",{children:[t("span",{children:[e("span",{children:n}),S&&e("small",{className:"card-sub-title",children:S}),R&&t(i,{children:[e("i",{className:"icon-info","data-for":"cardInfo__tooltip","data-tip":D?p.sanitize(D):"","data-html":!0}),e(l,{effect:"solid",id:"cardInfo__tooltip"})]}),N]}),e("div",{className:"card-info",children:f})]}),y&&y]}),I?e("div",{className:"card-content",children:T}):e(s,{primaryText:B,boxShadow:!1}),x]})};export{f as Card};
