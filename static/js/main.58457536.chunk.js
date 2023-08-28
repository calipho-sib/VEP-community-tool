(this["webpackJsonpvep-community-tool"]=this["webpackJsonpvep-community-tool"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),c=n.n(r),o=(n(50),n(7)),s=n(5),l=n(12),d=[{APIRef:"sequence",metadata:{name:"Sequence"}},{APIRef:"beta-strand",metadata:{name:"Beta strand",className:"betastrand",color:"#B3F0C2",type:"rect",filter:"Secondary structure"}},{APIRef:"helix",metadata:{name:"Helix",className:"helix",color:"#B3F0D1",type:"rect",filter:"Secondary structure"}},{APIRef:"turn",metadata:{name:"Turn",className:"turn",color:"#B3F0E1",type:"rect",filter:"Secondary structure"}},{APIRef:"signal-peptide",metadata:{name:"Signal peptide",className:"sign",color:"#B3B3E1",type:"rect",filter:"Processing"}},{APIRef:"propeptide",metadata:{name:"Propeptide",className:"pro",color:"#B3B3B3",type:"rect",filter:"Processing"}},{APIRef:"mature-protein",metadata:{name:"Mature protein",className:"mat",color:"#B3B3C2",type:"rect",filter:"Processing"}},{APIRef:"initiator-methionine",metadata:{name:"Initiator Met",className:"initMeth",color:"#B3B3D1",type:"unique",filter:"Processing"}},{APIRef:"peroxisome-transit-peptide",metadata:{name:"Transit peptide",className:"pero",color:"#B3B3F0",type:"rect",filter:"Processing"}},{APIRef:"mitochondrial-transit-peptide",metadata:{name:"Transit peptide",className:"mito",color:"#B3B3F0",type:"rect",filter:"Processing"}},{APIRef:"domain",metadata:{name:"Domain",className:"domain",color:"#B3C2C2",type:"rect",filter:"Region"}},{APIRef:"miscellaneous-region",metadata:{name:"Region",className:"miscregion",color:"#B3C2B3",type:"rect",filter:"Region"}},{APIRef:"repeat",metadata:{name:"Repeat",className:"repeat",color:"#98B7D5",type:"rect",filter:"Region"}},{APIRef:"calcium-binding-region",metadata:{name:"Calcium binding",className:"calcium",color:"#B3C2E1",type:"rect",filter:"Region"}},{APIRef:"zinc-finger-region",metadata:{name:"Zinc finger",className:"calcium",color:"#B3C2E1",type:"rect",filter:"Region"}},{APIRef:"dna-binding-region",metadata:{name:"DNA binding",className:"dnabind",color:"#B3C2FF",type:"rect",filter:"Region"}},{APIRef:"nucleotide-phosphate-binding-region",metadata:{name:"Nucleotide binding",className:"nucleobind",color:"#B3D1B3",type:"rect",filter:"Region"}},{APIRef:"coiled-coil-region",metadata:{name:"Coiled-coil",className:"coiledcoil",color:"#B3D1C2",type:"rect",filter:"Region"}},{APIRef:"short-sequence-motif",metadata:{name:"Sequence motif",className:"motif",color:"#B3D1D1",type:"rect",filter:"Region"}},{APIRef:"compositionally-biased-region",metadata:{name:"Composition bias",className:"biased",color:"#B3D1E1",type:"rect",filter:"Region"}},{APIRef:"interacting-region",metadata:{name:"Interacting region",className:"intReg",color:"#B3D1F0",type:"rect",filter:"Region"}},{APIRef:"interaction-mapping",metadata:{name:"Exp. interaction",className:"intregion",color:"#B3E1D1",type:"rect",filter:"Region"}},{APIRef:"topological-domain",metadata:{name:"Topological domain",className:"topodomain",color:"#A5DBA5",type:"rect",filter:"Topology"}},{APIRef:"transmembrane-region",metadata:{name:"Membrane",className:"membrane",color:"#A5DBB7",type:"rect",filter:"Topology"}},{APIRef:"intramembrane-region",metadata:{name:"Membrane",className:"intramembrane",color:"#A5DBB7",type:"rect",filter:"Topology"}},{APIRef:"disulfide-bond",metadata:{name:"Disulfide bond",className:"dsB",color:"#B3B3E1",type:"path",filter:"Modified Residue"}},{APIRef:"modified-residue",metadata:{name:"Modified residue",className:"modifRes",color:"#B3C2B3",type:"unique",filter:"Modified Residue"}},{APIRef:"cross-link",metadata:{name:"Cross-link",className:"crossLink",color:"#B3C2C2",type:"unique",filter:"Modified Residue"}},{APIRef:"glycosylation-site",metadata:{name:"Glycosylation",className:"glycoSite",color:"#74E374",type:"unique",filter:"Modified Residue"}},{APIRef:"lipidation-site",metadata:{name:"Lipidation",className:"lipidation",color:"#A3B5DB",type:"unique",filter:"Modified Residue"}},{APIRef:"selenocysteine",metadata:{name:"Non-standard AA",className:"seleno",color:"#859DE7",type:"unique",filter:"Modified Residue"}},{APIRef:"miscellaneous-site",metadata:{name:"Site",className:"site",color:"#B3F0E1",type:"unique",filter:"Site"}},{APIRef:"active-site",metadata:{name:"Active site",className:"actSite",color:"#B3F0F0",type:"unique",filter:"Site"}},{APIRef:"binding-site",metadata:{name:"Binding site",className:"bindsite",color:"#82E6FF",type:"unique",filter:"Site"}},{APIRef:"cleavage-site",metadata:{name:"Cleavage site",className:"cleavsite",color:"#B3FFB3",type:"unique",filter:"Site"}},{APIRef:"metal-binding-site",metadata:{name:"Metal binding",className:"metal",color:"#B3FFC2",type:"unique",filter:"Site"}},{APIRef:"variant",metadata:{name:"Variant",className:"variant",color:"rgba(0,255,154,0.3)",type:"unique",filter:"Variant"}},{APIRef:"mutagenesis",metadata:{name:"Mutagenesis",className:"mutagenesis",color:"#73FFE3",type:"unique",filter:"Variant"}},{APIRef:"sequence-conflict",metadata:{name:"Conflict",className:"seqconflict",color:"#6FFFFF",type:"unique",filter:"Conflict"}},{APIRef:"isoform-mapping",metadata:{name:"Isoform"}}],u=n(3);function m(e,t){var n=[];return e.map((function(e){0!==Object.keys(e).length&&Object.prototype.hasOwnProperty.call(e,t)&&n.push(Object(u.a)({},e[t]))})),n}var f=n(8),p=n.n(f),b=n(15),j=n(2),g=n(42),h=n(114),O=n(43),v=n.n(O);function y(e){var t=e.columns,n=e.data;if("csv"===e.fileType){var a=t.map((function(e){return e.exportValue})),i=v.a.unparse({fields:a,data:n});return new Blob([i],{type:"text/csv"})}}var x,P,A,N="Couldn't find entry data.",R="Please note that variants returning an error have been omitted.",I="You have exceeded the limit of 200 variants, only partial results are shown",E="Impossible to return results! Please check your variant data.",B={1:"Select a missense variant by clicking on its position in the sequence, entering the desired amino acid variation and clicking on the 'Add' button.",2:"Select multiple missense variants by clicking on the 'Add Variants' button and entering the desired variants with their positions.",3:"The selected variant(s) will be displayed in the variant effect output table.",4:"Click on the 'Get Predictions' button to view the SIFT and Polyphen-2 scores for the variant(s)."},S=n(44),C=n.n(S),w=n(1),F={header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.replace(/\W/g,"-")},beforeFirstChunk:function(e){if(!e.startsWith("nextprotPosition"))return e.split(",")[0].match("^[0-9]+ ")||(e=e.substring(e.indexOf("\n")+1,e.length)),e="nextprotPosition,originalAminoAcid,variantAminoAcid\r\n".concat(e)}},k=function(e){var t=e.callGetPredictions,n=Object(a.useState)(""),i=Object(s.a)(n,2),r=i[0],c=i[1];return Object(w.jsxs)("div",{className:"csv-button-container",children:[Object(w.jsxs)("div",{className:"csv-button",children:[Object(w.jsx)("button",{className:"btn",children:"Upload CSV and Get Predictions"}),r&&Object(w.jsx)("p",{children:r})]}),Object(w.jsx)(C.a,{cssClass:"csv-reader-input",onFileLoaded:function(e,n){t(e),c(n.name)},parserOptions:F,cssInputClass:"csv-input"})]})},D=n.p+"static/media/down_arrow_icon.4f1d5ef1.svg",T=n.p+"static/media/up_arrow_icon.6ff07499.svg",_=n.p+"static/media/sort_icon.86d67f70.svg",q=n.p+"static/media/info_icon.09c4a3bc.svg",M=n.p+"static/media/error_icon.ee07de12.svg",L=n.p+"static/media/github_corner.e1cb9ed8.svg",V=n(25),G=n.n(V),H=function(){if(Object({NODE_ENV:"production",PUBLIC_URL:"/VEP-community-tool",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"/vep-api"}).REACT_APP_DEVELOPMENT){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}},U="/vep-api";function W(e){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post("".concat(U,"/vep-results"),t).then((function(e){return e.data})).catch((function(e){H(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(U,"/mapping-isoforms/").concat(t)).then((function(e){return e.data})).catch((function(e){H(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Q(e,t){var n=e.title,i=e.titleId,r=J(e,X);return a.createElement("svg",K({id:"L5",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,x||(x=a.createElement("circle",{fill:"#166ff8",stroke:"none",cx:6,cy:50,r:6},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:.1}))),P||(P=a.createElement("circle",{fill:"#166ff8",stroke:"none",cx:30,cy:50,r:6},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:.2}))),A||(A=a.createElement("circle",{fill:"#166ff8",stroke:"none",cx:54,cy:50,r:6},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:.3}))))}var Z=a.forwardRef(Q),$=(n.p,function(e){var t=e.id;return Object(w.jsx)("div",{id:t,className:"loader",children:Object(w.jsx)(Z,{})})}),ee=function(e){var t=[],n=[];return e.map((function(e){"ERROR"===e.status&&(n.push(e),e.sift="",e.polyphen=""),t.push(e)})),{parsedData:t,errors:n}},te=function(){return Object(w.jsxs)("div",{className:"instructions-container instructions-list",children:[Object(w.jsx)("h3",{children:"CSV Format"}),Object(w.jsxs)("p",{children:["Try this example with"," ",Object(w.jsx)("a",{href:"https://www.nextprot.org/entry/NX_P13569/gh/calipho-sib/VEP-community-tool",target:"_blank",rel:"noreferrer",children:"CFTR"}),Object(w.jsx)("br",{})]}),Object(w.jsx)("p",{children:Object(w.jsx)("strong",{children:"nextprotPosition,originalAminoAcid,variantAminoAcid"})}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"44,D,G"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"110,D,H"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"170,R,H"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:Object(w.jsx)("b",{children:"Note: Maximum number of variants is 200"})})]})},ne=[{Header:"Position",accessor:"nextprotPosition"},{Header:"Original",accessor:"originalAminoAcid"},{Header:"Variant",accessor:"variantAminoAcid"},{Header:"Sift",accessor:"sift"},{Header:"Sift Prediction",accessor:"siftPrediction"},{Header:"Polyphen",accessor:"polyphen"},{Header:"Polyphen Prediction",accessor:"polyphenPrediction"},{Header:"Status",accessor:"status"}],ae=function(e){var t=e.predictionLoading,n=e.setPredictionLoading,i=e.data,r=e.setData,c=e.error,o=e.setError,l=e.isoName,d=e.fv,m=!1,f=function(e,t){return"Status"===t?e?"error-tag tag":"ok-tag tag":""},O=function(e,t,n,a){if(n)return"#fff6e8";if(a){var r={BENIGN:"benign",POSSIBLY_DAMAGING:"possibly_damaging",PROBABLY_DAMAGING:"probably_damaging"},c={DELETERIOUS:"deleterious",TOLERATED:"tolerated"},o=Number(e),s="polyphenPrediction"===t?i[o].polyphenPrediction:i[o].siftPrediction;if(!s)return"#ffffff";if(s===r.POSSIBLY_DAMAGING)return"#ffba5f";if(s===r.PROBABLY_DAMAGING||s===c.DELETERIOUS)return"#e56565";if(s===r.BENIGN||c.TOLERATED)return"#85cc64"}return"#ffffff"},v=function(e){return e.render("Cell")},x=function(){var e=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={version:ie,isoform:l,variants:t},t.length>200&&(a.variants=a.variants.slice(0,199),m=!0),n(!0),e.next=5,W(a).then((function(e){if(Array.isArray(e)&&e.length){var t=ee(e).parsedData;return t.length<a.variants.length?o(R):o(m?I:""),r(t),void n(!1)}o(E),n(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=Object(a.useMemo)((function(){return ne}),[]),A=Object(j.useTable)({columns:P,data:i,getExportFileBlob:y,getExportFileName:function(){return l},initialState:{pageIndex:0,pageSize:10}},j.useGlobalFilter,j.useSortBy,g.a,j.usePagination),N=A.getTableProps,B=A.getTableBodyProps,S=A.headerGroups,C=A.prepareRow,F=A.page,q=A.canPreviousPage,L=A.canNextPage,V=A.pageOptions,G=A.pageCount,H=A.gotoPage,U=A.nextPage,z=A.previousPage,Y=A.setPageSize,X=A.state,K=X.pageIndex,J=X.pageSize,Q=A.exportData,Z=Object(a.useState)("107"),ae=Object(s.a)(Z,2),ie=ae[0],re=ae[1];return Object(w.jsxs)("div",{className:"variant-table-container",children:[c&&Object(w.jsxs)("div",{className:"error-message",children:[Object(w.jsx)("img",{src:M,alt:"Error"}),Object(w.jsx)("p",{children:c})]}),Object(w.jsxs)("div",{className:"table-header",children:[Object(w.jsx)(k,{callGetPredictions:x}),Object(w.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(w.jsxs)("div",{style:{display:"inline",paddingRight:"15px",verticalAlign:"middle"},children:[Object(w.jsx)("span",{style:{paddingRight:"10px"},children:"Ensembl VEP Version"}),Object(w.jsxs)("select",{value:ie,onChange:function(e){re(e.target.value)},children:[Object(w.jsx)("option",{value:"107",children:"107"}),Object(w.jsx)("option",{value:"109",children:"109"})]})]}),Object(w.jsx)("button",{className:"btn get-predictions-btn",onClick:function(){var e=d.getPredictions();x(e)},children:"Get Predictions"}),Object(w.jsx)("button",{className:"btn",onClick:function(){Q("csv",!0)},children:"Export All as CSV"})]})]}),Object(w.jsx)(te,{}),Object(w.jsxs)("table",Object(u.a)(Object(u.a)({},N()),{},{className:"variant-data-table",children:[Object(w.jsx)("thead",{children:S.map((function(e){return Object(a.createElement)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{key:Object(h.a)()}),e.headers.map((function(e){return Object(a.createElement)("th",Object(u.a)(Object(u.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{key:Object(h.a)()}),e.render("Header"),Object(w.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(w.jsx)("img",{src:D,className:"icon",alt:"Down arrow icon"}):Object(w.jsx)("img",{src:T,className:"icon",alt:"Down arrow icon"}):Object(w.jsx)("img",{src:_,className:"icon",alt:"Down arrow icon"})}))})))}))}),Object(w.jsx)("tbody",Object(u.a)(Object(u.a)({},B()),{},{children:F.map((function(e){C(e);var t="ERROR"===e.values.status;return Object(a.createElement)("tr",Object(u.a)(Object(u.a)({},e.getRowProps()),{},{key:Object(h.a)()}),e.cells.map((function(e){var n="polyphenPrediction"===e.column.id||"siftPrediction"===e.column.id;return Object(a.createElement)("td",Object(u.a)(Object(u.a)({style:{backgroundColor:O(e.row.id,e.column.id,t,n)}},e.getCellProps()),{},{key:Object(h.a)()}),Object(w.jsx)("p",{className:f(t,e.column.Header),children:v(e)}))})))}))}))]})),t&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{className:"table-text",children:Object(w.jsx)("i",{children:"Fetching predictions..."})}),Object(w.jsx)($,{})]}),0!==i.length||t?Object(w.jsxs)("div",{className:"pagination",children:[Object(w.jsx)("button",{onClick:function(){return H(0)},disabled:!q,children:"<<"})," ",Object(w.jsx)("button",{onClick:function(){return z()},disabled:!q,children:"<"})," ",Object(w.jsx)("button",{onClick:function(){return U()},disabled:!L,children:">"})," ",Object(w.jsx)("button",{onClick:function(){return H(G-1)},disabled:!L,children:">>"})," ",Object(w.jsxs)("span",{children:["Page"," ",Object(w.jsxs)("strong",{children:[K+1," of ",V.length]})," "]}),Object(w.jsxs)("span",{children:["| Go to page:"," ",Object(w.jsx)("input",{type:"number",defaultValue:K+1||1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;H(t)}})]})," ",Object(w.jsx)("select",{value:J,onChange:function(e){Y(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(w.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}):Object(w.jsxs)("p",{className:"table-text",children:[Object(w.jsx)("i",{children:"No records added. Add variants and click on get predictions to get results"}),"."]})]})},ie=n(45),re=function(e){var t=e.offset,n=e.isoform;return Object(w.jsx)(w.Fragment,{children:t<0?Object(w.jsxs)("div",{className:"isoform-info",children:[n,Object(w.jsx)("img",{title:"Isoform mapping not available",src:q,className:"icon",alt:"Info Icon"})]}):n})},ce=function(e){var t=e.isoform,n=e.handleIsoformChange,i=Object(a.useState)(),r=Object(s.a)(i,2),c=r[0],o=r[1],l=Object(a.useState)(),d=Object(s.a)(l,2),u=d[0],m=d[1];return Object(a.useEffect)((function(){var e=[];t.map((function(t){var n={value:t.isoform,label:Object(w.jsx)(re,{isoform:t.isoform,offset:t.offset}),disabled:t.offset<0};e.some((function(e){return e.value===n.value}))||e.push(n)})),o(e),m(e[0])}),[t]),c?Object(w.jsxs)("div",{className:"isoform-select-wrapper",children:[Object(w.jsx)("p",{children:"Change Isoform"}),Object(w.jsx)(ie.a,{className:"isoform-select",options:c,value:u,isOptionDisabled:function(e){return e.disabled},defaultValue:u,onChange:function(e){n(e.value),m(e)}})]}):Object(w.jsx)(w.Fragment,{})},oe=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(),c=Object(s.a)(r,2),u=c[0],f=c[1],p=Object(a.useState)(),b=Object(s.a)(p,2),j=b[0],g=b[1],h=Object(a.useState)(),O=Object(s.a)(h,2),v=O[0],y=O[1],x=Object(a.useState)(),P=Object(s.a)(x,2),A=P[0],I=P[1],B=Object(a.useState)(),S=Object(s.a)(B,2),C=S[0],F=S[1],k=Object(a.useState)(!0),D=Object(s.a)(k,2),T=D[0],_=D[1],q=Object(a.useState)(!1),M=Object(s.a)(q,2),L=M[0],V=M[1],G=Object(a.useState)(),U=Object(s.a)(G,2),z=U[0],X=U[1],K=new l.Nextprot.Client("Calipho Group","VEP community tool");function J(e,t,n,a){t.forEach((function(e){if(e.uniqueName===n){var t=new l.createFeature(e.sequence,"#fv1",{showAxis:!0,showSequence:!0,brushActive:!0,toolbar:!0,bubbleHelp:!1,zoomMax:10,variant:!0});X(t),a.map((function(e){t.addFeature(e)})),t.onVariantChanged((function(e){i(Object(o.a)(e.detail))})),t.onGetPredictions((function(e){V(!0);var t={isoform:n,variants:e.detail};W(t).then((function(e){if(Array.isArray(e)&&e.length){var n=ee(e).parsedData;return n.length<t.variants.length?F(R):F(""),i(n),void V(!1)}F(E),V(!1)}))}))}}))}return Object(a.useEffect)((function(){var e,t,n=new URLSearchParams(window.location.search).get("nxentry");(function(e){return Y.apply(this,arguments)})(n).then((function(e){f(e)})),Promise.all(function(e,t,n){var a=[];for(var i in e)switch(e[i].APIRef){case"sequence":a.push(t.getProteinSequence(n));break;case"antibody":a.push(t.getAntibody(n));break;case"isoform-mapping":a.push(t.getIsoformMapping(n));break;case"variant-medical":a.push(t.getAnnotationsWithProperty(n,"variant","disease-related",!0));break;case"miscellaneous-region-interactions":a.push(t.getAnnotationsWithProperty(n,"miscellaneous-region","interaction-related",!0));break;default:a.push(t.getAnnotationsByCategory(n,e[i].APIRef))}return a}(d,K,n)).then((function(n){if(n){e=n[0];var a=function(e,t){for(var n,a=[],i=function(i){var r=l.NXUtils.convertMappingsToIsoformMap(e[i],t[i].name.replace(".",""),t[i].filter,"");n=l.NXViewerUtils.convertNXAnnotations(r,t[i],{});var c={},o={};if(e[i].annot.length>0&&("VARIANT"===e[i].annot[0].apicategory&&e[i].annot.map((function(e){var t=e;Object.keys(e.targetingIsoformsMap).forEach((function(n){n in c||(c[n]=[]);var a=e.evidences.filter((function(e){return"gnomAD"===e.assignedBy}));if(a.length>0){a=a[0];var i=Number(a.properties["allele frequency"]),r={};r.x=e.targetingIsoformsMap[n].firstPosition,r.y=i,r.id="FREQUENCY_Variant_".concat(r.x,"_").concat(r.x,"_").concat(t.uniqueName),r.category="Frequency";var s="".concat(t.variant.original," \u2192 ").concat(t.variant.variant);r.description="<span>".concat(e.targetingIsoformsMap[n].firstPosition,"<br/>").concat(s,"<br/>").concat(i,"</span>"),c[n].push(r),n in o?o[n]>i&&(o[n]=i):o[n]=i}}))})),Object.keys(c).forEach((function(e){c[e].forEach((function(t){t.y=.2-Math.log10(o[e])+Math.log10(t.y)}))})),0!==Object.keys(c).length)){var s={};Object.keys(c).forEach((function(e){var t={className:"freq",color:"#B3B3C2",name:"Frequency (Log)",type:"bar",filter:"Frequency",data:c[e]};s[e]=t})),a.push(s)}a.push(n)},r=1;r<e.length-1;r++)i(r);return a}(n,function(){var e=[];return d.map((function(t,n){e.push(d[n].metadata)})),e}());t=m(a,e[0].isoformAccession),J(0,e,e[0].isoformAccession,t),g(e),I(a),y(e[0].isoformAccession),_(!1)}else F(N)})).catch((function(e){H(e)}))}),[]),Object(w.jsxs)(w.Fragment,{children:[T&&Object(w.jsx)($,{id:"feature-loader"}),Object(w.jsxs)("div",{className:"viewer-container",children:[u&&!C&&Object(w.jsx)(ce,{isoName:v,isoform:u,handleIsoformChange:function(e){y(e),document.getElementById("fv1").innerHTML="";var t=m(A,e);J(0,j,e,t)}}),Object(w.jsx)("div",{id:"fv1"}),Object(w.jsx)(ae,{predictionLoading:L,setPredictionLoading:V,data:n,setData:i,error:C,setError:F,isoName:v,fv:z})]})]})},se=(n(108),function(){return Object(w.jsxs)("div",{className:"instructions-container",children:[Object(w.jsx)("h3",{children:"instructions"}),Object.entries(B).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(w.jsxs)("div",{className:"instructions-list",children:[Object(w.jsx)("h5",{children:n}),Object(w.jsx)("p",{children:a})]},a)}))]})}),le=function(){return Object(w.jsx)("div",{className:"header",children:Object(w.jsxs)("h1",{children:["The Variant Effect Predictor (VEP) helps scientists determine the potential impact of",Object(w.jsx)("strong",{children:" non-synonymous single amino acid variants (SAAVs) "}),"by returning the SIFT and Polyphen-2 scores."]})})},de=function(){return Object(w.jsxs)("div",{className:"footer",children:["The VEP Community Tool is being developed as open source. All the software packages are being actively maintained on"," ",Object(w.jsx)("a",{href:"https://github.com/calipho-sib/VEP-community-tool",target:"_blank",rel:"noreferrer",children:"GitHub"})," ","and we encourage organizations and individuals to contribute requirements, documentation, issues, new templates, and code.",Object(w.jsx)("img",{className:"github-corner",src:L,alt:"GitHub Icon"})]})},ue=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(le,{}),Object(w.jsx)(se,{}),Object(w.jsx)(oe,{}),Object(w.jsx)(de,{})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(ue,{})}),document.getElementById("root")),me()},50:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.58457536.chunk.js.map