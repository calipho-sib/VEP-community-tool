(this["webpackJsonpvep-community-tool"]=this["webpackJsonpvep-community-tool"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=a.n(r),o=(a(50),a(7)),s=a(5),l=a(12),d=[{APIRef:"sequence",metadata:{name:"Sequence"}},{APIRef:"beta-strand",metadata:{name:"Beta strand",className:"betastrand",color:"#B3F0C2",type:"rect",filter:"Secondary structure"}},{APIRef:"helix",metadata:{name:"Helix",className:"helix",color:"#B3F0D1",type:"rect",filter:"Secondary structure"}},{APIRef:"turn",metadata:{name:"Turn",className:"turn",color:"#B3F0E1",type:"rect",filter:"Secondary structure"}},{APIRef:"signal-peptide",metadata:{name:"Signal peptide",className:"sign",color:"#B3B3E1",type:"rect",filter:"Processing"}},{APIRef:"propeptide",metadata:{name:"Propeptide",className:"pro",color:"#B3B3B3",type:"rect",filter:"Processing"}},{APIRef:"mature-protein",metadata:{name:"Mature protein",className:"mat",color:"#B3B3C2",type:"rect",filter:"Processing"}},{APIRef:"initiator-methionine",metadata:{name:"Initiator Met",className:"initMeth",color:"#B3B3D1",type:"unique",filter:"Processing"}},{APIRef:"peroxisome-transit-peptide",metadata:{name:"Transit peptide",className:"pero",color:"#B3B3F0",type:"rect",filter:"Processing"}},{APIRef:"mitochondrial-transit-peptide",metadata:{name:"Transit peptide",className:"mito",color:"#B3B3F0",type:"rect",filter:"Processing"}},{APIRef:"domain",metadata:{name:"Domain",className:"domain",color:"#B3C2C2",type:"rect",filter:"Region"}},{APIRef:"miscellaneous-region",metadata:{name:"Region",className:"miscregion",color:"#B3C2B3",type:"rect",filter:"Region"}},{APIRef:"repeat",metadata:{name:"Repeat",className:"repeat",color:"#98B7D5",type:"rect",filter:"Region"}},{APIRef:"calcium-binding-region",metadata:{name:"Calcium binding",className:"calcium",color:"#B3C2E1",type:"rect",filter:"Region"}},{APIRef:"zinc-finger-region",metadata:{name:"Zinc finger",className:"calcium",color:"#B3C2E1",type:"rect",filter:"Region"}},{APIRef:"dna-binding-region",metadata:{name:"DNA binding",className:"dnabind",color:"#B3C2FF",type:"rect",filter:"Region"}},{APIRef:"nucleotide-phosphate-binding-region",metadata:{name:"Nucleotide binding",className:"nucleobind",color:"#B3D1B3",type:"rect",filter:"Region"}},{APIRef:"coiled-coil-region",metadata:{name:"Coiled-coil",className:"coiledcoil",color:"#B3D1C2",type:"rect",filter:"Region"}},{APIRef:"short-sequence-motif",metadata:{name:"Sequence motif",className:"motif",color:"#B3D1D1",type:"rect",filter:"Region"}},{APIRef:"compositionally-biased-region",metadata:{name:"Composition bias",className:"biased",color:"#B3D1E1",type:"rect",filter:"Region"}},{APIRef:"interacting-region",metadata:{name:"Interacting region",className:"intReg",color:"#B3D1F0",type:"rect",filter:"Region"}},{APIRef:"interaction-mapping",metadata:{name:"Exp. interaction",className:"intregion",color:"#B3E1D1",type:"rect",filter:"Region"}},{APIRef:"topological-domain",metadata:{name:"Topological domain",className:"topodomain",color:"#A5DBA5",type:"rect",filter:"Topology"}},{APIRef:"transmembrane-region",metadata:{name:"Membrane",className:"membrane",color:"#A5DBB7",type:"rect",filter:"Topology"}},{APIRef:"intramembrane-region",metadata:{name:"Membrane",className:"intramembrane",color:"#A5DBB7",type:"rect",filter:"Topology"}},{APIRef:"disulfide-bond",metadata:{name:"Disulfide bond",className:"dsB",color:"#B3B3E1",type:"path",filter:"Modified Residue"}},{APIRef:"modified-residue",metadata:{name:"Modified residue",className:"modifRes",color:"#B3C2B3",type:"unique",filter:"Modified Residue"}},{APIRef:"cross-link",metadata:{name:"Cross-link",className:"crossLink",color:"#B3C2C2",type:"unique",filter:"Modified Residue"}},{APIRef:"glycosylation-site",metadata:{name:"Glycosylation",className:"glycoSite",color:"#74E374",type:"unique",filter:"Modified Residue"}},{APIRef:"lipidation-site",metadata:{name:"Lipidation",className:"lipidation",color:"#A3B5DB",type:"unique",filter:"Modified Residue"}},{APIRef:"selenocysteine",metadata:{name:"Non-standard AA",className:"seleno",color:"#859DE7",type:"unique",filter:"Modified Residue"}},{APIRef:"miscellaneous-site",metadata:{name:"Site",className:"site",color:"#B3F0E1",type:"unique",filter:"Site"}},{APIRef:"active-site",metadata:{name:"Active site",className:"actSite",color:"#B3F0F0",type:"unique",filter:"Site"}},{APIRef:"binding-site",metadata:{name:"Binding site",className:"bindsite",color:"#82E6FF",type:"unique",filter:"Site"}},{APIRef:"cleavage-site",metadata:{name:"Cleavage site",className:"cleavsite",color:"#B3FFB3",type:"unique",filter:"Site"}},{APIRef:"metal-binding-site",metadata:{name:"Metal binding",className:"metal",color:"#B3FFC2",type:"unique",filter:"Site"}},{APIRef:"variant",metadata:{name:"Variant",className:"variant",color:"rgba(0,255,154,0.3)",type:"unique",filter:"Variant"}},{APIRef:"mutagenesis",metadata:{name:"Mutagenesis",className:"mutagenesis",color:"#73FFE3",type:"unique",filter:"Variant"}},{APIRef:"sequence-conflict",metadata:{name:"Conflict",className:"seqconflict",color:"#6FFFFF",type:"unique",filter:"Conflict"}},{APIRef:"isoform-mapping",metadata:{name:"Isoform"}}],u=a(3);function m(e,t){var a=[];return e.map((function(e){0!==Object.keys(e).length&&Object.prototype.hasOwnProperty.call(e,t)&&a.push(Object(u.a)({},e[t]))})),a}var f=a(8),p=a.n(f),b=a(15),j=a(2),g=a(42),h=a(114),O=a(43),v=a.n(O);function x(e){var t=e.columns,a=e.data;if("csv"===e.fileType){var n=t.map((function(e){return e.exportValue})),i=v.a.unparse({fields:n,data:a});return new Blob([i],{type:"text/csv"})}}var y,P,A,N="Couldn't find entry data.",R="Please note that variants returning an error have been omitted.",I="You have exceeded the limit of 200 variants, only partial results are shown",E="Impossible to return results! Please check your variant data.",B={1:"Select a missense variant by clicking on its position in the sequence, entering the desired amino acid variation and clicking on the 'Add' button.",2:"Select multiple missense variants by clicking on the 'Add Variants' button and entering the desired variants with their positions.",3:"The selected variant(s) will be displayed in the variant effect output table.",4:"Click on the 'Get Predictions' button to view the SIFT and Polyphen-2 scores for the variant(s)."},S=a(44),C=a.n(S),w=a(1),F={header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.replace(/\W/g,"-")},beforeFirstChunk:function(e){if(!e.startsWith("nextprotPosition"))return e.split(",")[0].match("^[0-9]+ ")||(e=e.substring(e.indexOf("\n")+1,e.length)),e="nextprotPosition,originalAminoAcid,variantAminoAcid\r\n".concat(e)}},D=function(e){var t=e.callGetPredictions,a=Object(n.useState)(""),i=Object(s.a)(a,2),r=i[0],c=i[1];return Object(w.jsxs)("div",{className:"csv-button-container",children:[Object(w.jsxs)("div",{className:"csv-button",children:[Object(w.jsx)("button",{className:"btn",children:"Upload CSV and Get Predictions"}),r&&Object(w.jsx)("p",{children:r})]}),Object(w.jsx)(C.a,{cssClass:"csv-reader-input",onFileLoaded:function(e,a){t(e),c(a.name)},parserOptions:F,cssInputClass:"csv-input"})]})},k=a.p+"static/media/down_arrow_icon.4f1d5ef1.svg",T=a.p+"static/media/up_arrow_icon.6ff07499.svg",_=a.p+"static/media/sort_icon.86d67f70.svg",q=a.p+"static/media/info_icon.09c4a3bc.svg",M=a.p+"static/media/error_icon.ee07de12.svg",L=a.p+"static/media/github_corner.e1cb9ed8.svg",G=a(25),H=a.n(G),V=function(){if(Object({NODE_ENV:"production",PUBLIC_URL:"/VEP-community-tool",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.nextprot.org/vep-api"}).REACT_APP_DEVELOPMENT){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t)}},U="https://api.nextprot.org/vep-api";function W(e){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.post("".concat(U,"/vep-results"),t).then((function(e){return e.data})).catch((function(e){V(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("".concat(U,"/mapping-isoforms/").concat(t)).then((function(e){return e.data})).catch((function(e){V(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function Z(e,t){var a=e.title,i=e.titleId,r=J(e,Y);return n.createElement("svg",K({id:"L5",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",ref:t,"aria-labelledby":i},r),a?n.createElement("title",{id:i},a):null,y||(y=n.createElement("circle",{fill:"#166ff8",stroke:"none",cx:6,cy:50,r:6},n.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:.1}))),P||(P=n.createElement("circle",{fill:"#166ff8",stroke:"none",cx:30,cy:50,r:6},n.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:.2}))),A||(A=n.createElement("circle",{fill:"#166ff8",stroke:"none",cx:54,cy:50,r:6},n.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:.3}))))}var Q=n.forwardRef(Z),$=(a.p,function(e){var t=e.id;return Object(w.jsx)("div",{id:t,className:"loader",children:Object(w.jsx)(Q,{})})}),ee=function(e){var t=[],a=[];return e.map((function(e){"ERROR"===e.status&&(a.push(e),e.sift="",e.polyphen=""),t.push(e)})),{parsedData:t,errors:a}},te=function(){return Object(w.jsxs)("div",{className:"instructions-container instructions-list",children:[Object(w.jsx)("h3",{children:"CSV Format"}),Object(w.jsxs)("p",{children:["Try this example with"," ",Object(w.jsx)("a",{href:"https://www.nextprot.org/entry/NX_P13569/gh/calipho-sib/VEP-community-tool",target:"_blank",rel:"noreferrer",children:"CFTR"}),Object(w.jsx)("br",{})]}),Object(w.jsx)("p",{children:Object(w.jsx)("strong",{children:"nextprotPosition,originalAminoAcid,variantAminoAcid"})}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"44,D,G"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"110,D,H"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"170,R,H"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:Object(w.jsx)("b",{children:"Note: Maximum number of variants is 200"})})]})},ae=[{Header:"Position",accessor:"nextprotPosition"},{Header:"Original",accessor:"originalAminoAcid"},{Header:"Variant",accessor:"variantAminoAcid"},{Header:"Sift",accessor:"sift"},{Header:"Sift Prediction",accessor:"siftPrediction"},{Header:"Polyphen",accessor:"polyphen"},{Header:"Polyphen Prediction",accessor:"polyphenPrediction"},{Header:"Status",accessor:"status"}],ne=function(e){var t=e.predictionLoading,a=e.setPredictionLoading,i=e.data,r=e.setData,c=e.error,o=e.setError,s=e.isoName,l=e.fv,d=!1,m=function(e,t){return"Status"===t?e?"error-tag tag":"ok-tag tag":""},f=function(e,t,a,n){if(a)return"#fff6e8";if(n){var r={BENIGN:"benign",POSSIBLY_DAMAGING:"possibly_damaging",PROBABLY_DAMAGING:"probably_damaging"},c={DELETERIOUS:"deleterious",TOLERATED:"tolerated"},o=Number(e),s="polyphenPrediction"===t?i[o].polyphenPrediction:i[o].siftPrediction;if(s===r.POSSIBLY_DAMAGING)return"#ffba5f";if(s===r.PROBABLY_DAMAGING||s===c.DELETERIOUS)return"#e56565";if(s===r.BENIGN||c.TOLERATED)return"#85cc64"}return"#ffffff"},O=function(e){return e.render("Cell")},v=function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={isoform:s,variants:t},t.length>200&&(n.variants=n.variants.slice(0,199),d=!0),a(!0),e.next=5,W(n).then((function(e){if(Array.isArray(e)&&e.length){var t=ee(e).parsedData;return t.length<n.variants.length?o(R):o(d?I:""),r(t),void a(!1)}o(E),a(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(n.useMemo)((function(){return ae}),[]),P=Object(j.useTable)({columns:y,data:i,getExportFileBlob:x,getExportFileName:function(){return s},initialState:{pageIndex:0,pageSize:10}},j.useGlobalFilter,j.useSortBy,g.a,j.usePagination),A=P.getTableProps,N=P.getTableBodyProps,B=P.headerGroups,S=P.prepareRow,C=P.page,F=P.canPreviousPage,q=P.canNextPage,L=P.pageOptions,G=P.pageCount,H=P.gotoPage,V=P.nextPage,U=P.previousPage,z=P.setPageSize,X=P.state,Y=X.pageIndex,K=X.pageSize,J=P.exportData;return Object(w.jsxs)("div",{className:"variant-table-container",children:[c&&Object(w.jsxs)("div",{className:"error-message",children:[Object(w.jsx)("img",{src:M,alt:"Error"}),Object(w.jsx)("p",{children:c})]}),Object(w.jsxs)("div",{className:"table-header",children:[Object(w.jsx)(D,{callGetPredictions:v}),Object(w.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(w.jsx)("button",{className:"btn get-predictions-btn",onClick:function(){var e=l.getPredictions();v(e)},children:"Get Predictions"}),Object(w.jsx)("button",{className:"btn",onClick:function(){J("csv",!0)},children:"Export All as CSV"})]})]}),Object(w.jsx)(te,{}),Object(w.jsxs)("table",Object(u.a)(Object(u.a)({},A()),{},{className:"variant-data-table",children:[Object(w.jsx)("thead",{children:B.map((function(e){return Object(n.createElement)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{key:Object(h.a)()}),e.headers.map((function(e){return Object(n.createElement)("th",Object(u.a)(Object(u.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{key:Object(h.a)()}),e.render("Header"),Object(w.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(w.jsx)("img",{src:k,className:"icon",alt:"Down arrow icon"}):Object(w.jsx)("img",{src:T,className:"icon",alt:"Down arrow icon"}):Object(w.jsx)("img",{src:_,className:"icon",alt:"Down arrow icon"})}))})))}))}),Object(w.jsx)("tbody",Object(u.a)(Object(u.a)({},N()),{},{children:C.map((function(e){S(e);var t="ERROR"===e.values.status;return Object(n.createElement)("tr",Object(u.a)(Object(u.a)({},e.getRowProps()),{},{key:Object(h.a)()}),e.cells.map((function(e){var a="polyphenPrediction"===e.column.id||"siftPrediction"===e.column.id;return Object(n.createElement)("td",Object(u.a)(Object(u.a)({style:{backgroundColor:f(e.row.id,e.column.id,t,a)}},e.getCellProps()),{},{key:Object(h.a)()}),Object(w.jsx)("p",{className:m(t,e.column.Header),children:O(e)}))})))}))}))]})),t&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{className:"table-text",children:Object(w.jsx)("i",{children:"Fetching predictions..."})}),Object(w.jsx)($,{})]}),0!==i.length||t?Object(w.jsxs)("div",{className:"pagination",children:[Object(w.jsx)("button",{onClick:function(){return H(0)},disabled:!F,children:"<<"})," ",Object(w.jsx)("button",{onClick:function(){return U()},disabled:!F,children:"<"})," ",Object(w.jsx)("button",{onClick:function(){return V()},disabled:!q,children:">"})," ",Object(w.jsx)("button",{onClick:function(){return H(G-1)},disabled:!q,children:">>"})," ",Object(w.jsxs)("span",{children:["Page"," ",Object(w.jsxs)("strong",{children:[Y+1," of ",L.length]})," "]}),Object(w.jsxs)("span",{children:["| Go to page:"," ",Object(w.jsx)("input",{type:"number",defaultValue:Y+1||1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;H(t)}})]})," ",Object(w.jsx)("select",{value:K,onChange:function(e){z(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(w.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}):Object(w.jsxs)("p",{className:"table-text",children:[Object(w.jsx)("i",{children:"No records added. Add variants and click on get predictions to get results"}),"."]})]})},ie=a(45),re=function(e){var t=e.offset,a=e.isoform;return Object(w.jsx)(w.Fragment,{children:t<0?Object(w.jsxs)("div",{className:"isoform-info",children:[a,Object(w.jsx)("img",{title:"Isoform mapping not available",src:q,className:"icon",alt:"Info Icon"})]}):a})},ce=function(e){var t=e.isoform,a=e.handleIsoformChange,i=Object(n.useState)(),r=Object(s.a)(i,2),c=r[0],o=r[1],l=Object(n.useState)(),d=Object(s.a)(l,2),u=d[0],m=d[1];return Object(n.useEffect)((function(){var e=[];t.map((function(t){var a={value:t.isoform,label:Object(w.jsx)(re,{isoform:t.isoform,offset:t.offset}),disabled:t.offset<0};e.push(a)})),o(e),m(e[0])}),[t]),c?Object(w.jsxs)("div",{className:"isoform-select-wrapper",children:[Object(w.jsx)("p",{children:"Change Isoform"}),Object(w.jsx)(ie.a,{className:"isoform-select",options:c,value:u,isOptionDisabled:function(e){return e.disabled},defaultValue:u,onChange:function(e){a(e.value),m(e)}})]}):Object(w.jsx)(w.Fragment,{})},oe=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(),c=Object(s.a)(r,2),u=c[0],f=c[1],p=Object(n.useState)(),b=Object(s.a)(p,2),j=b[0],g=b[1],h=Object(n.useState)(),O=Object(s.a)(h,2),v=O[0],x=O[1],y=Object(n.useState)(),P=Object(s.a)(y,2),A=P[0],I=P[1],B=Object(n.useState)(),S=Object(s.a)(B,2),C=S[0],F=S[1],D=Object(n.useState)(!0),k=Object(s.a)(D,2),T=k[0],_=k[1],q=Object(n.useState)(!1),M=Object(s.a)(q,2),L=M[0],G=M[1],H=Object(n.useState)(),U=Object(s.a)(H,2),z=U[0],Y=U[1],K=new l.Nextprot.Client("Calipho Group","VEP community tool");function J(e,t,a,n){t.forEach((function(e){if(e.uniqueName===a){var t=new l.createFeature(e.sequence,"#fv1",{showAxis:!0,showSequence:!0,brushActive:!0,toolbar:!0,bubbleHelp:!1,zoomMax:10,variant:!0});Y(t),n.map((function(e){t.addFeature(e)})),t.onVariantChanged((function(e){i(Object(o.a)(e.detail))})),t.onGetPredictions((function(e){G(!0);var t={isoform:a,variants:e.detail};W(t).then((function(e){if(Array.isArray(e)&&e.length){var a=ee(e).parsedData;return a.length<t.variants.length?F(R):F(""),i(a),void G(!1)}F(E),G(!1)}))}))}}))}return Object(n.useEffect)((function(){var e,t,a=new URLSearchParams(window.location.search).get("nxentry");(function(e){return X.apply(this,arguments)})(a).then((function(e){f(e)})),Promise.all(function(e,t,a){var n=[];for(var i in e)switch(e[i].APIRef){case"sequence":n.push(t.getProteinSequence(a));break;case"antibody":n.push(t.getAntibody(a));break;case"isoform-mapping":n.push(t.getIsoformMapping(a));break;case"variant-medical":n.push(t.getAnnotationsWithProperty(a,"variant","disease-related",!0));break;case"miscellaneous-region-interactions":n.push(t.getAnnotationsWithProperty(a,"miscellaneous-region","interaction-related",!0));break;default:n.push(t.getAnnotationsByCategory(a,e[i].APIRef))}return n}(d,K,a)).then((function(a){if(a){e=a[0];var n=function(e,t){for(var a,n=[],i=1;i<e.length-1;i++){var r=l.NXUtils.convertMappingsToIsoformMap(e[i],t[i].name.replace(".",""),t[i].filter,"");a=l.NXViewerUtils.convertNXAnnotations(r,t[i],{}),n.push(a)}return n}(a,function(){var e=[];return d.map((function(t,a){e.push(d[a].metadata)})),e}());t=m(n,e[0].isoformAccession),J(0,e,e[0].isoformAccession,t),g(e),I(n),x(e[0].isoformAccession),_(!1)}else F(N)})).catch((function(e){V(e)}))}),[]),Object(w.jsxs)(w.Fragment,{children:[T&&Object(w.jsx)($,{id:"feature-loader"}),Object(w.jsxs)("div",{className:"viewer-container",children:[u&&!C&&Object(w.jsx)(ce,{isoName:v,isoform:u,handleIsoformChange:function(e){x(e),document.getElementById("fv1").innerHTML="";var t=m(A,e);J(0,j,e,t)}}),Object(w.jsx)("div",{id:"fv1"}),Object(w.jsx)(ne,{predictionLoading:L,setPredictionLoading:G,data:a,setData:i,error:C,setError:F,isoName:v,fv:z})]})]})},se=(a(108),function(){return Object(w.jsxs)("div",{className:"instructions-container",children:[Object(w.jsx)("h3",{children:"instructions"}),Object.entries(B).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(w.jsxs)("div",{className:"instructions-list",children:[Object(w.jsx)("h5",{children:a}),Object(w.jsx)("p",{children:n})]},n)}))]})}),le=function(){return Object(w.jsx)("div",{className:"header",children:Object(w.jsxs)("h1",{children:["The Variant Effect Predictor (VEP) helps scientists determine the potential impact of",Object(w.jsx)("strong",{children:" non-synonymous single amino acid variants (SAAVs) "}),"by returning the SIFT and Polyphen-2 scores."]})})},de=function(){return Object(w.jsxs)("div",{className:"footer",children:["The VEP Community Tool is being developed as open source. All the software packages are being actively maintained on"," ",Object(w.jsx)("a",{href:"https://github.com/calipho-sib/VEP-community-tool",target:"_blank",rel:"noreferrer",children:"GitHub"})," ","and we encourage organizations and individuals to contribute requirements, documentation, issues, new templates, and code.",Object(w.jsx)("img",{className:"github-corner",src:L,alt:"GitHub Icon"})]})},ue=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(le,{}),Object(w.jsx)(se,{}),Object(w.jsx)(oe,{}),Object(w.jsx)(de,{})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(ue,{})}),document.getElementById("root")),me()},50:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.ccbfb0da.chunk.js.map