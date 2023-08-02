"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[5901],{1306:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(9439),l=a(7313),n=a(5554),o=a(1287),i=a(5233),c=a(5200),s=a(2348),d=a(916),m=a(6417),u=o.Z.Title,p=o.Z.Paragraph,h=function(){var e=(0,n.I0)(),t=(0,n.v9)((function(e){return e.auth.username})),a=l.useState(""),o=(0,r.Z)(a,2),h=o[0],g=o[1];(0,l.useEffect)((function(){var e=s.Z.getAccessToken();if(e){var t=(0,c.Z)(e);g(t.email)}}),[]);return(0,m.jsxs)("div",{className:"profile-page",children:[(0,m.jsx)(u,{children:"Profile"}),(0,m.jsxs)(p,{children:["Username: ",t]}),(0,m.jsxs)(p,{children:["Email: ",h]}),(0,m.jsx)(i.ZP,{onClick:function(){e((0,d.kS)())},danger:!0,children:"Logout"})]})}},4367:function(e,t,a){var r=a(8130);t.Z=r.Z},8130:function(e,t,a){a.d(t,{Z:function(){return n}});var r={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},l=a(1513),n={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},r),timePickerLocale:Object.assign({},l.Z)}},6682:function(e,t,a){var r=(0,a(7313).createContext)(void 0);t.Z=r},1180:function(e,t,a){var r=a(4043),l=a(4367),n=a(8130),o=a(1513),i="${label} is not a valid ${type}",c={locale:"en",Pagination:r.Z,DatePicker:n.Z,TimePicker:o.Z,Calendar:l.Z,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};t.Z=c},1147:function(e,t,a){var r=a(7313),l=a(6682),n=a(1180);t.Z=function(e,t){var a=r.useContext(l.Z);return[r.useMemo((function(){var r,l=t||n.Z[e],o=null!==(r=null===a||void 0===a?void 0:a[e])&&void 0!==r?r:{};return Object.assign(Object.assign({},"function"===typeof l?l():l),o||{})}),[e,t,a]),r.useMemo((function(){var e=null===a||void 0===a?void 0:a.locale;return(null===a||void 0===a?void 0:a.exist)&&!e?n.Z.locale:e}),[a])]}},1513:function(e,t){t.Z={placeholder:"Select time",rangePlaceholder:["Start time","End time"]}},4043:function(e,t){t.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}}}]);