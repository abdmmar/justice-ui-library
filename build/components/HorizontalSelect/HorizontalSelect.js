import{jsx as o}from"react/jsx-runtime";import t from"classnames";import{s as e}from"../../style-inject.es-1f59c1d0.js";var l="horizontalSelect___R84yI",r="horizontalSelectOption___-xTK5",a="isSelected___RV2Gr";function i(e){const{options:i,className:_,onChange:n,value:c,dataQa:s}=e;return o("div",{className:t(l,_),"data-qa-id":s,children:i.map((e=>o("div",{className:t(r,{[a]:e.value===c}),onClick:()=>n(e.value),"data-qa-props":e.label,children:e.label},`${e.label}-${e.value}`)))})}e('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.horizontalSelect___R84yI{display:flex;font-family:Roboto,sans-serif}.horizontalSelect___R84yI .horizontalSelectOption___-xTK5{background-color:#fff;border:1px solid #b8bfcd;color:#687792;cursor:pointer;font-size:16px;padding:8px;text-align:center}.horizontalSelect___R84yI .horizontalSelectOption___-xTK5:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.horizontalSelect___R84yI .horizontalSelectOption___-xTK5:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.horizontalSelect___R84yI .horizontalSelectOption___-xTK5.isSelected___RV2Gr{background-color:#0b6cff;border-color:transparent;color:#fff}.horizontalSelect___R84yI .horizontalSelectOption___-xTK5:not(.isSelected___RV2Gr):hover{background-color:#eff5ff;color:#0b6cff}.horizontalSelect___R84yI .horizontalSelectOption___-xTK5:not(:first-child){border-left:none}');export{i as HorizontalSelect};
