"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[800],{8462:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var r=a(1413),n=a(4165),l=a(5861),o=a(9439),c=a(2791),i=a(3263),s=a(9004),d=a(9286),u=a(7624),m="GalleryPage_gallery__HhCph",p="GalleryPage_addButton__sAXlc",h=a(7689),f=a(5671),g=a(3144),v=a(4432),x=function(){function e(){(0,f.Z)(this,e),this.axiosInstance=void 0,this.axiosInstance=v.Z.getInstance().getAxiosInstance()}return(0,g.Z)(e,[{key:"getGallery",value:function(){var e=(0,l.Z)((0,n.Z)().mark((function e(t,a){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.get("/api/".concat(t,"/page/").concat(a));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),b=new x,y=a(184),P=function(){var e=(0,h.UO)().category,t=(0,c.useState)([]),a=(0,o.Z)(t,2),f=a[0],g=a[1],v=(0,h.s0)();return(0,c.useEffect)((function(){if(e){var t=function(){var t=(0,l.Z)((0,n.Z)().mark((function t(){var a,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.getGallery(e,0);case 3:a=t.sent,Array.isArray(a)?(r=a.map((function(e){return{image:e.image||"",title:e.name,overview:e.overview,id:e.id}})),g(r)):i.ZP.error("Failed to fetch data"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i.ZP.error("Fetch data failed! Please check your internet connection.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,y.jsxs)("div",{className:m,children:[f.map((function(t,a){return(0,y.jsx)(u.Z,(0,r.Z)((0,r.Z)({},t),{},{onClick:function(){return v("/dashboard/".concat(e,"/").concat(t.id))}}),a)})),(0,y.jsx)(s.ZP,{type:"primary",shape:"circle",icon:(0,y.jsx)(d.Z,{}),size:"large",className:p,onClick:function(){return v("/dashboard/".concat(e,"/add"))}})]})}},2621:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7462),n=a(2791),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},o=a(4291),c=function(e,t){return n.createElement(o.Z,(0,r.Z)({},e,{ref:t,icon:l}))};var i=n.forwardRef(c)},5092:function(e,t,a){a.d(t,{Z:function(){return l}});var r={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},n=a(4846),l={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},r),timePickerLocale:Object.assign({},n.Z)}},2588:function(e,t,a){var r=(0,a(2791).createContext)(void 0);t.Z=r},1489:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(1771),n=a(5092),l=n.Z,o=a(4846),c="${label} is not a valid ${type}",i={locale:"en",Pagination:r.Z,DatePicker:n.Z,TimePicker:o.Z,Calendar:l,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:c,method:c,array:c,object:c,number:c,date:c,boolean:c,integer:c,float:c,regexp:c,email:c,url:c,hex:c},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}}},4846:function(e,t){t.Z={placeholder:"Select time",rangePlaceholder:["Start time","End time"]}},1771:function(e,t){t.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}}}]);
//# sourceMappingURL=800.858f54f3.chunk.js.map