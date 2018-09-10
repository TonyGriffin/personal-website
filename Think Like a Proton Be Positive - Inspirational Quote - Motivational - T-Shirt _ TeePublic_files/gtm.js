
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"103",
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_items"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".map(function(a){return{productId:a.product_id,quantity:a.quantity,price:a.unit_price,properties:{}}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",2],8,16],")return ",["escape",["macro",2],8,16],".map(function(a){return{productId:a.parent_id,variant:a.variant_id,quantity:a.quantity,productImageUrl:a.product_image,productUrl:a.design_url,brand:\"TeePublic\",category:a.canvas_name,color:a.color,productName:a.design_title,price:a.price,properties:{designId:a.design_id,designOwnerId:a.design_owner_id,designOwnerType:a.design_owner_type,primarTag:a.design_primary_tag,onSale:a.on_sale,discountAmount:a.discount_amount,affiliateId:a.affiliate_id,\ncouponCode:a.coupon_code,campaignId:a.campaign_id,affiliateNetworkId:a.affiliate_network_id}}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"parent_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecomm_prodid:\"",["escape",["macro",4],7],"\",ecomm_pagetype:\"product\",ecomm_totalvalue:\"",["escape",["macro",5],7],"\"};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={en:\"1028314697215281\",\"en-UK\":\"446838842393673\",fr:\"2201494706748476\"};return a[",["escape",["macro",7],8,16],"]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={en:\"5667367\",\"en-UK\":\"17001538\",fr:\"17003528\"};return a[",["escape",["macro",7],8,16],"]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"controller"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gdprCookie"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"euVisitor"
    },{
      "function":"__u"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"canvas_canonical_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchCanvas"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchQuery"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","5","group",["macro",16]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",17]],["map","index","4","dimension",["macro",18]],["map","index","5","dimension",["macro",19]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39467830-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_subtotal"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_total"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_user_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cookieSetting"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountCreationType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountCreationSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_email"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"query"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_canvas_id"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"variant_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_mock_image"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"TeePublic",
      "vtp_name":"brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"canvas"
    },{
      "function":"__d",
      "vtp_elementSelector":".jsCartConfigColorName",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_primary_tag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_owner_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_owner_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_on_sale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signed_in"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"username"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"account_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_is_artist"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_coupon_code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"removedItem"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cartAddedItem"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ga_trackers"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ga_events"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"feed_sku"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_discounts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_shipping_postcode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ab"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_properties"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",45]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39467830-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewChange"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_uid"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__cid"
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"NKG6CLOO2FC75ED6R2CQCV\";adroll_pix_id=\"34KT2OXNXJBWZLO2KVUHZP\";(function(){var b=window.onload;window.onload=function(){__adroll_loaded=!0;var a=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";a.setAttribute(\"async\",\"true\");a.type=\"text\/javascript\";a.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(a);b\u0026\u0026b()}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=a.createElement(\"script\");b.src=a.location.protocol+\"\/\/bounceexchange.com\/tag\/931\/i.js\";b.async=!0;a.getElementsByTagName(\"head\")[0].appendChild(b)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",6],
      "vtp_conversionId":"981615718",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_url":["macro",15],
      "tag_id":13
    },{
      "function":"__ts",
      "once_per_event":true,
      "vtp_position":"BOTTOM_RIGHT",
      "vtp_locale":"en_US",
      "vtp_trustedStoresAccountId":"700039",
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Javascript Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["template",["macro",21]," - ",["macro",22]],
      "vtp_eventLabel":["macro",23],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_goalValue":["macro",24],
      "vtp_tagId":["macro",9],
      "vtp_uetqName":"uetq",
      "vtp_eventType":"VARIABLE_REVENUE",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"981615718",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",15],
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":37
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"981615718",
      "vtp_conversionLabel":"9MufCIjA13IQ5oiJ1AM",
      "vtp_url":["macro",15],
      "vtp_enableReadGaCookie":false,
      "tag_id":42
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"981615718",
      "vtp_conversionLabel":"7O07CKnBg3MQ5oiJ1AM",
      "vtp_url":["macro",15],
      "vtp_enableReadGaCookie":false,
      "tag_id":43
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",27],
      "vtp_orderId":["macro",28],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"981615718",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"xPcnCPe1qmAQ5oiJ1AM",
      "vtp_url":["macro",15],
      "vtp_enableReadGaCookie":false,
      "tag_id":46
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"34KT2OXNXJBWZLO2KVUHZP",
      "vtp_customerId":"NKG6CLOO2FC75ED6R2CQCV",
      "vtp_conversionValueCurrency":"USD",
      "vtp_customData":["list",["map","key","ORDER_ID","value",["macro",28]],["map","key","USER_ID","value",["macro",29]]],
      "vtp_conversionValueInDollars":["macro",27],
      "tag_id":50
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":65
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":66
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cookies Setting",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["macro",32],
      "vtp_eventLabel":["template","Eu Session: ",["macro",14]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":"Account Creation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["macro",34],
      "vtp_eventLabel":["macro",35],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__jel",
      "tag_id":73
    },{
      "function":"__cl",
      "tag_id":74
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_156",
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"\"\u003E__attentive_domain=0===location.href.indexOf(\"https:\/\/www.teepublic.com\/designs\/\")?\"teepublicdes.attn.tv\":\"teepublic.attn.tv\";\n(function(){window.__attentive={invoked:!1,show:function(){this.invoked=!0}};var c=!1,a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))return void setTimeout(a,10);if(!c)return c=!0,void setTimeout(a,50);var b=document.createElement(\"script\");b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=\"https:\/\/cdn.attn.tv\/loader.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)};window.addEventListener?\nwindow.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();window.__attentive.show();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async=\"true\" data-gtmsrc=\"https:\/\/secure.adnxs.com\/seg?add=924362\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5667367\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=",["escape",["macro",9],12],"\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"76df51868ea0493216ee508b69677d3d\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",8],8,16],");fbq(\"track\",\"PageView\");fbq(\"init\",\"748798701854552\");fbq(\"trackCustom\",\"TeePubPageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=748798701854552\u0026amp;ev=TeePubPageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1028314697215281\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar bouncex=bouncex||[];bouncex.push([\"conversion\",{order_id:\"",["escape",["macro",28],7],"\",amount:\"",["escape",["macro",24],7],"\",email:\"",["escape",["macro",36],7],"\",goal:\"purchase\"}]);\u003C\/script\u003E\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" style=\"display:none;\" src=\"\/\/api.bounceexchange.com\/capture\/convert2.gif?website_id=931\u0026amp;order_id=",["escape",["macro",28],12],"\u0026amp;amount=",["escape",["macro",24],12],"\u0026amp;email=",["escape",["macro",36],12],"\u0026amp;goal=purchase\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:773134,hjsv:6};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:[\"",["escape",["macro",4],7],"\"]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",37],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _sd=_sd||{};_sd.partnerId=\"9772e57f2ea9591fb685c8f663851474cfa1d174\";_sd.domain=\".teepublic.com\";_sd.environment=\"prod\";\n(function(b,c,e){w=window;d=document;n=\"script\";l=Array.prototype.slice;w._sd.lib=c;w.SimonData=b;w[b]||(w[b]={send:function(){(w[b].q=w[b].q||[]).push(arguments)},identify:function(){a=l.call(arguments);a.unshift(\"identify\");w[b].send.apply(null,a)},track:function(){a=l.call(arguments);a.unshift(\"track\");w[b].send.apply(null,a)}});t=d.createElement(n);t.src=c;o=d.getElementsByTagName(e)[0];o.parentNode.insertBefore(t,o)})(\"sd\",\"\/\/static.simonsignal.com\/simon-tee-min.js\",\"script\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.zE||function(a,d,e){var b=window.zE=window.zEmbed=function(){b._.push(arguments)},c=b.s=a.createElement(d);a=a.getElementsByTagName(d)[0];b.set=function(a){b.set._.push(a)};b._=[];b.set._=[];c.async=!0;c.setAttribute(\"charset\",\"utf-8\");c.src=\"https:\/\/static.zdassets.com\/ekr\/asset_composer.js?key\\x3d\"+e;b.t=+new Date;c.type=\"text\/javascript\";a.parentNode.insertBefore(c,a)}(document,\"script\",\"bda6a171-44b9-40cd-be3e-370783d2235f\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_custom_data={product_id:\"",["escape",["macro",38],7],"D",["escape",["macro",39],7],"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"49f99b82\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"product_view\",{productId:\"",["escape",["macro",4],7],"\",variant:\"",["escape",["macro",41],7],"\",productImageUrl:\"",["escape",["macro",42],7],"\",productUrl:\"",["escape",["macro",43],7],"\",brand:\"",["escape",["macro",44],7],"\",category:\"",["escape",["macro",45],7],"\",color:\"",["escape",["macro",46],7],"\",productName:\"",["escape",["macro",47],7],"\",price:",["escape",["macro",5],8,16],",properties:{primaryTag:\"",["escape",["macro",48],7],"\",designOwner:\"",["escape",["macro",49],7],"\",designOwnerId:\"",["escape",["macro",50],7],"\",designOnSale:\"",["escape",["macro",51],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.identify(\"",["escape",["macro",33],7],"\",{email:\"",["escape",["macro",53],7],"\",userId:\"",["escape",["macro",33],7],"\",username:\"",["escape",["macro",54],7],"\",properties:{accountType:\"",["escape",["macro",55],7],"\",userIsArtist:",["escape",["macro",56],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_content_ids=JSON.stringify(",["escape",["macro",0],8,16],".map(function(a){return a.parent_id})),fb_param={pixel_id:\"6014467623590\"};fb_param.value=",["escape",["macro",27],8,16],";fb_param.currency=\"USD\";(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();fbq(\"init\",",["escape",["macro",8],8,16],");\nfbq(\"track\",\"Purchase\",{value:",["escape",["macro",27],8,16],",currency:\"USD\",content_type:\"product\",content_ids:fb_content_ids});fbq(\"init\",\"748798701854552\");fbq(\"trackCustom\",\"TeePubPurchase\");\u003C\/script\u003E\n  \n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=748798701854552\u0026amp;ev=TeePubPurchase\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n  \n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6014467623590\u0026amp;value=\u0026lt;%= value_of_cart %\u0026gt;\u0026amp;currency=USD\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/shareasale.com\/sale.cfm?amount=",["escape",["macro",27],12],"\u0026amp;tracking=",["escape",["macro",28],12],"\u0026amp;transtype=sale\u0026amp;storeID=2\u0026amp;merchantID=5108\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/secure.adnxs.com\/px?id=96589\u0026amp;seg=924366\u0026amp;order_id=",["escape",["macro",28],12],"\u0026amp;value=",["escape",["macro",27],12],"\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"complete_transaction\",{transactionId:\"",["escape",["macro",28],7],"\",revenue:",["escape",["macro",27],8,16],",shipping:",["escape",["macro",57],8,16],",tax:",["escape",["macro",58],8,16],",promotion:\"",["escape",["macro",59],7],"\",cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"cart\",{cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar removedCartItem=",["escape",["macro",60],8,16],";\nsd.track(\"remove_from_cart\",{productId:removedCartItem.parent_id,variant:removedCartItem.variant_id,quantity:removedCartItem.quantity,brand:\"TeePublic\",category:removedCartItem.canvas_name,color:removedCartItem.color,productName:removedCartItem.design_title,price:removedCartItem.price,properties:{designId:removedCartItem.design_id,primaryTag:removedCartItem.design_primary_tag,designOwnerType:removedCartItem.design_owner_type,designOwnerId:removedCartItem.design_owner_id,onSale:removedCartItem.on_sale,\nsource_location:\"Dropdown\",discountAmount:removedCartItem.discount_amount,affiliateId:removedCartItem.affiliate_id,couponCode:removedCartItem.coupon_code,campaignId:removedCartItem.campaign_id,affiliateNetworkId:removedCartItem.affiliate_network_id},cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"remove_from_cart\",{productId:\"",["escape",["macro",60],7],".parent_id\",variant:\"",["escape",["macro",60],7],".variant_id\",quantity:",["escape",["macro",60],8,16],".quantity,brand:\"TeePublic\",category:\"",["escape",["macro",60],7],".canvas_name\",color:\"",["escape",["macro",60],7],".color\",productName:\"",["escape",["macro",60],7],".design_title\",price:",["escape",["macro",60],8,16],".price,properties:{designId:",["escape",["macro",60],8,16],".design_id,primaryTag:\"",["escape",["macro",60],7],".design_primary_tag\",designOwnerType:\"",["escape",["macro",60],7],".design_owner_type\",\ndesignOwnerId:\"",["escape",["macro",60],7],".design_owner_id\",onSale:\"",["escape",["macro",60],7],".on_sale\",source_location:\"Cart\",discountAmount:",["escape",["macro",60],8,16],".discount_amount,affiliateId:",["escape",["macro",60],8,16],".affiliate_id,couponCode:\"",["escape",["macro",60],7],".coupon_code\",campaignId:",["escape",["macro",60],8,16],".campaign_id,affiliateNetworkId:",["escape",["macro",60],8,16],".affiliate_network_id},cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar addedCartItem=",["escape",["macro",61],8,16],",existingCart=",["escape",["macro",3],8,16],";existingCart.splice(-1,1);\nexistingCart.push({productId:\"",["escape",["macro",4],7],"\",variant:addedCartItem.variant_id,quantity:addedCartItem.quantity,productImageUrl:addedCartItem.product_image,productUrl:",["escape",["macro",43],8,16],",brand:\"TeePublic\",category:\"",["escape",["macro",45],7],"\",color:addedCartItem.design_color,productName:\"",["escape",["macro",47],7],"\",price:addedCartItem.price,properties:{designId:",["escape",["macro",38],8,16],",primaryTag:\"",["escape",["macro",48],7],"\",designOwnerType:\"",["escape",["macro",49],7],"\",designOwnerId:",["escape",["macro",50],8,16],",onSale:",["escape",["macro",51],8,16],",\nsource_location:\"Product\"}});\nsd.track(\"add_to_cart\",{productId:\"",["escape",["macro",4],7],"\",variant:addedCartItem.variant_id,quantity:addedCartItem.quantity,productImageUrl:addedCartItem.product_image,productUrl:",["escape",["macro",43],8,16],",brand:\"TeePublic\",category:\"",["escape",["macro",45],7],"\",color:addedCartItem.design_color,productName:\"",["escape",["macro",47],7],"\",price:addedCartItem.price,properties:{designId:",["escape",["macro",38],8,16],",primaryTag:\"",["escape",["macro",48],7],"\",designOwnerType:\"",["escape",["macro",49],7],"\",designOwnerId:",["escape",["macro",50],8,16],",onSale:",["escape",["macro",51],8,16],",\nsource_location:\"Product\"},cartItems:existingCart});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",47],7],"\",content_ids:[\"",["escape",["macro",38],7],"D",["escape",["macro",39],7],"V\"],content_type:\"product\",value:\"",["escape",["macro",5],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E__adroll.record_user({product_id:\"",["escape",["macro",4],7],"\",product_action:\"AddToCart\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;",["escape",["macro",62],8,16],".forEach(function(a){ga(\"create\",a.tracking_id,\"auto\",{name:a.name});ga(a.require_msg,\"ecommerce\");var b={id:a.transaction.id,affiliation:a.transaction.affiliation,revenue:a.transaction.revenue,shipping:a.transaction.shipping};ga(a.transaction.msg,b);a.items.forEach(function(a){var b={id:a.order_id,name:a.name,price:a.price,quantity:a.quantity,category:a.category};ga(a.msg,b)});ga(a.send_msg)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",49,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;var trackers=",["escape",["macro",62],8,16],",event=",["escape",["macro",63],8,16],";if(\"undefined\"!=typeof trackers)for(var i=0;i\u003Ctrackers.length;i++){var sender=trackers[i].name+\".send\";ga(\"create\",trackers[i].tracking_id,\"auto\",trackers[i].name);\"TeePublic\"!=trackers[i].name\u0026\u0026ga(sender,\"pageview\")}\"undefined\"!=typeof event\u0026\u0026ga(\"TeePublic.send\",\"event\",event.category,event.action,event.label,{nonInteraction:!0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/www.google-analytics.com\/analytics.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ecart=",["escape",["macro",2],8,16],";num_items=subtotal=0;items=[];for(var idx=0;idx\u003C=cart.length-1;idx++)subtotal+=parseFloat(cart[idx].price),num_items+=cart[idx].quantity,items.push(cart[idx].parent_id);fbq(\"track\",\"InitiateCheckout\",{value:subtotal,currency:\"USD\",content_ids:items,num_items:num_items});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"show"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"designs"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"all"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"functional"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"orders"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"thankyou"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/t-shirt\/"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"thank_you"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"affiliates"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/referral"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"designs"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"new"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"artistRegistrationComplete"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"bx-form-759526-step-2"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(^$|((^|,)7128454_156($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"productViewChange"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cookie-setting"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"artistRegistrationComplete"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"affiliates"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"affiliateRegistrationComplete"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/manage"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"new"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"index"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/kids-t-shirt"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/phone-case"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/posters-and-art"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"stores"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/t-shirts"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"design_uploader"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"edit"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"cart"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"index"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"query="
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"page="
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"home"
    },{
      "function":"_sw",
      "arg0":["macro",10],
      "arg1":"lookup"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"sizechart"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"users"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"featured"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/designers?sort=newest"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"search"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"contacts"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"create_account"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cartRemoveItemHead"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"cart"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cartRemoveItemCartView"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cartAddItem"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"orders"
    }],
  "rules":[
    [["if",0,1,2],["add",2,29,32,33,35]],
    [["if",8],["add",3,5,8,9,0,24,25,26,31,19,20,21]],
    [["if",9],["add",4]],
    [["if",2,10,11],["add",6,27,12,13,37,38,39,40,47]],
    [["if",8,12],["add",7]],
    [["if",8,13,14],["add",10,18]],
    [["if",15,16,17,18],["add",11]],
    [["if",19,20,21],["add",14]],
    [["if",2],["add",15,22,23,1,48,49]],
    [["if",22],["add",16]],
    [["if",23],["add",17]],
    [["if",16,17,24],["add",18]],
    [["if",17,25,26],["add",18]],
    [["if",14,28,29],["add",28]],
    [["if",16,17,29],["add",28]],
    [["if",29,30,31],["add",28]],
    [["if",29,32],["add",28]],
    [["if",29,33],["add",28]],
    [["if",29,34],["add",28]],
    [["if",0,29,35],["add",28]],
    [["if",12,29],["add",28]],
    [["if",29,36],["add",28]],
    [["if",29,37,38],["add",28]],
    [["if",29,39,40],["add",28]],
    [["if",29,41],["unless",42],["add",30]],
    [["if",8,40,43],["add",32]],
    [["if",8,10,44],["add",32]],
    [["if",8,43,45],["add",32]],
    [["if",8,46,47],["add",32]],
    [["if",8,48],["add",32]],
    [["if",8,49,50],["add",32]],
    [["if",0,8,35],["add",32]],
    [["if",2,17,51],["add",32]],
    [["if",52,53],["add",34]],
    [["if",8,54],["add",36]],
    [["if",2,39,40],["add",41]],
    [["if",55],["add",42]],
    [["if",30,56,57],["add",43]],
    [["if",58],["add",44,45,46]],
    [["if",8,17,59],["add",50]],
    [["if",4,5],["unless",3],["block",2,3,6,8,10,11,12,13,14,16,0,22,23,24,25,1,26,27,28,29,30,31,33,34,35,36,37,39,40,41,42,43,44,45,46,50]],
    [["if",5,6,7],["block",2,3,6,8,10,11,12,13,14,16,0,22,23,24,25,1,26,27,28,29,30,31,33,34,35,36,37,39,40,41,42,43,44,45,46,50]],
    [["if",5,27],["block",1]]]
},
"runtime":[
[],[]
]};

var aa=this,fa=function(){if(null===ca){var a;a:{var b=aa.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&da.test(d)){a=d;break a}}a=null}ca=a||""}return ca},da=/^[\w+/_-]+[=]{0,2}$/,ca=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.cf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.A=a;this.sd=b};g.prototype.Fd=function(){return this.A};g.prototype.getType=g.prototype.Fd;g.prototype.getData=function(){return this.sd};g.prototype.getData=g.prototype.getData;var ja=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ka=function(){this.ja={};this.Ba=!1};ka.prototype.get=function(a){return this.ja["dust."+a]};ka.prototype.set=function(a,b){!this.Ba&&(this.ja["dust."+a]=b)};ka.prototype.has=function(a){return this.ja.hasOwnProperty("dust."+a)};var la=function(a){var b=[],c;for(c in a.ja)a.ja.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ka.prototype.remove=function(a){!this.Ba&&delete this.ja["dust."+a]};ka.prototype.L=function(){this.Ba=!0};var v=function(a){this.ma=new ka;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ja(b)?this.h[Number(b)]=a[Number(b)]:this.ma.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!ja(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ja(a)?this.h[Number(a)]=b:this.ma.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():ja(a)?this.h[Number(a)]:this.ma.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.T=function(){for(var a=la(this.ma),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.T;v.prototype.remove=function(a){ja(a)?delete this.h[Number(a)]:this.ma.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return ja(a)&&this.h.hasOwnProperty(a)||this.ma.has(a)};var ma=function(){function a(a,b){c[a]=b}function b(){c={};e=!1}var c={},d={},e=!1,f={add:a,Vb:function(a,b,c){d[a]||(d[a]={});d[a][b]=c},create:function(d){var f={add:a,request:function(a,b){return e?!0:c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};f.add=f.add;f.request=f.request;f.reset=f.reset;return f},sc:function(a){return d[a]?(b(),c=d[a],!0):!1},reset:b,Dc:function(a){e=a}};f.add=f.add;f.addToCache=f.Vb;f.loadFromCache=f.sc;f.reset=f.reset;f.setPermitAllRequests=f.Dc;
return f};var na=function(){function a(a,c){if(b[a]){if(b[a].Oa+c>b[a].max)throw Error("Quota exceeded");b[a].Oa+=c}}var b={},c=void 0,d=void 0,e={be:function(a){c=a},Wb:function(){c&&a(c,1)},ce:function(a){d=a},X:function(b){d&&a(d,b)},xe:function(a,c){b[a]=b[a]||{Oa:0};b[a].max=c},Ed:function(a){return b[a]&&b[a].Oa||0},reset:function(){b={}},md:a};e.onFnConsume=e.be;e.consumeFn=e.Wb;e.onStorageConsume=e.ce;e.consumeStorage=e.X;e.setMax=e.xe;e.getConsumed=e.Ed;e.reset=e.reset;e.consume=e.md;return e};var oa=function(a,b,c){this.M=a;this.K=b;this.aa=c;this.h=new ka};oa.prototype.add=function(a,b){this.h.Ba||(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};oa.prototype.add=oa.prototype.add;oa.prototype.set=function(a,b){this.h.Ba||(this.aa&&this.aa.has(a)?this.aa.set(a,b):(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};oa.prototype.set=oa.prototype.set;
oa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.aa?this.aa.get(a):void 0};oa.prototype.get=oa.prototype.get;oa.prototype.has=function(a){return!!this.h.has(a)||!(!this.aa||!this.aa.has(a))};oa.prototype.has=oa.prototype.has;oa.prototype.J=function(){return this.M};oa.prototype.L=function(){this.h.L()};var pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var w=function(a,b){ka.call(this);this.uc=a;this.Cd=b};ha(w,ka);var sa=function(a,b){for(var c,d=0;d<b.length&&!(c=ra(a,b[d]),c instanceof g);d++);return c},ra=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.uc};w.prototype.getName=function(){return this.uc};w.prototype.getName=w.prototype.getName;w.prototype.T=function(){return new v(la(this))};
w.prototype.getKeys=w.prototype.T;w.prototype.m=function(a,b){var c,d={C:function(){return a},evaluate:function(b){var c=a;return pa(b)?ra(c,b):b},xa:function(b){return sa(a,b)},J:function(){return a.J()},gc:function(){c||(c=a.K.create(d));return c}};a.J().Wb();return this.Cd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var ta=function(){ka.call(this)};ha(ta,ka);ta.prototype.T=function(){return new v(la(this))};ta.prototype.getKeys=ta.prototype.T;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var va=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,wa=function(a){if(null==a)return String(a);var b=va.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},xa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ya=function(a){if(!a||"object"!=wa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!xa(a,"constructor")&&!xa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||xa(a,b)},za=function(a,b){var c=b||("array"==wa(a)?[]:{}),d;for(d in a)if(xa(a,d)){var e=a[d];"array"==wa(e)?("array"!=wa(c[d])&&(c[d]=[]),c[d]=za(e,c[d])):ya(e)?(ya(c[d])||(c[d]={}),c[d]=za(e,c[d])):c[d]=e}return c};var Aa=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Aa(a.get(d)));return b}if(a instanceof ta){for(var e={},f=a.T(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Aa(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Ba(b[c]);var d=new oa(na(),ma());return Aa(a.m.apply(a,[d].concat(b)))}:a},Ba=function(a){if(pa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Ba(a[c]));return new v(b)}if(ya(a)){var d=
new ta,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Ba(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Aa(this.evaluate(c[d]));return Ba(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Ca={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.C(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.J().X(a.length+f.length);return new w(a,function(){return function(a){for(var b=new oa(d.M,d.K,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=sa(b,f);if(q instanceof g)return"return"===q.A?q.getData():q}}())},list:function(a){var b=this.J();b.X(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.X(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.J(),c=new ta,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.X(h);c.set(e,f)}return c},undefined:function(){}};var x=function(){this.M=na();this.K=ma();this.za=new oa(this.M,this.K)};x.prototype.V=function(a,b){var c=new w(a,b);c.L();this.za.set(a,c)};x.prototype.addInstruction=x.prototype.V;x.prototype.Ub=function(a,b){Ca.hasOwnProperty(a)&&this.V(b||a,Ca[a])};x.prototype.addNativeInstruction=x.prototype.Ub;x.prototype.J=function(){return this.M};x.prototype.getQuota=x.prototype.J;x.prototype.Ua=function(){this.M=na();this.za.M=this.M};x.prototype.resetQuota=x.prototype.Ua;
x.prototype.ue=function(){this.K=ma();this.za.K=this.K};x.prototype.resetPermissions=x.prototype.ue;x.prototype.R=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xb(c)};x.prototype.execute=x.prototype.R;x.prototype.xb=function(a){for(var b,c=0;c<arguments.length;c++){var d=ra(this.za,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof ta||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
x.prototype.run=x.prototype.xb;x.prototype.L=function(){this.za.L()};x.prototype.makeImmutable=x.prototype.L;var Da=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ea={Be:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Da(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Da(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={jc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Fa="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ga=new g("break"),Ha=new g("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=qa(Fa,b))return Ba(a[b].apply(a,Da(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Da(c);e.unshift(this.C());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=qa(Ea.Be,b))return e=Da(c),e.unshift(this.C()),Ea[b].apply(a,e)}if(a instanceof w||a instanceof ta){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Da(c),e.unshift(this.C()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Da(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.C();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return Ga};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};y["continue"]=function(){return Ha};
y.td=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[y.jc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.C().set(a,this.evaluate(f))};y.wd=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.zd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.Ad=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Dd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.C();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.xa(c);if(f instanceof g){if("break"==f.A)break;if("return"==f.A)return f}}else if(b instanceof ta||b instanceof v||b instanceof w){var h=b.T(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.xa(c),f instanceof g){if("break"==f.A)break;if("return"==f.A)return f}}};y.get=function(a){return this.C().get(this.evaluate(a))};
y.hc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof ta||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ja(b)&&(c=a[b]));return c};y.Gd=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Hd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Ld=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Md=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.xa(d);if(e instanceof g)return e};y.Ud=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.Vd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.Xd=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.Yd=function(a){return-this.evaluate(a)};y.Zd=function(a){return!this.evaluate(a)};
y.$d=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.zc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Ac=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new g("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof ta)&&a.set(b,c);return c};y.Ae=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!pa(b)||!pa(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.A;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.A||"continue"==d.A)))return d};
y.Ce=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.C(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.xa(f),e instanceof g)){if("break"==e.A)return;if("return"==e.A)return e}for(;this.evaluate(a);){e=this.xa(f);if(e instanceof g){if("break"==e.A)break;if("return"==e.A)return e}this.evaluate(b)}};var Ka=function(){this.ic=!1;this.H=new x;Ia(this);this.ic=!0};Ka.prototype.Rd=function(){return this.ic};Ka.prototype.isInitialized=Ka.prototype.Rd;Ka.prototype.R=function(a){this.H.K.sc(String(a[0]))||(this.H.K.reset(),this.H.K.Dc(!0));return this.H.xb(a)};Ka.prototype.execute=Ka.prototype.R;Ka.prototype.L=function(){this.H.L()};Ka.prototype.makeImmutable=Ka.prototype.L;
var Ia=function(a){function b(a,b){e.H.Ub(a,String(b))}function c(a,b){e.H.V(String(d[a]),b)}var d=y.jc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.td);c("DIVIDE",y.wd);c("EQUALS",y.zd);c("EXPRESSION_LIST",y.Ad);c("FOR_IN",y.Dd);c("GET",y.get);c("GET_INDEX",
y.hc);c("GET_PROPERTY",y.hc);c("GREATER_THAN",y.Gd);c("GREATER_THAN_EQUALS",y.Hd);c("IDENTITY_EQUALS",y.Ld);c("IDENTITY_NOT_EQUALS",y.Md);c("IF",y["if"]);c("LESS_THAN",y.Ud);c("LESS_THAN_EQUALS",y.Vd);c("MODULUS",y.Xd);c("MULTIPLY",y.multiply);c("NEGATE",y.Yd);c("NOT",y.Zd);c("NOT_EQUALS",y.$d);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.zc);c("POST_INCREMENT",y.zc);c("PRE_DECREMENT",y.Ac);c("PRE_INCREMENT",y.Ac);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Ae);c("SWITCH",y["switch"]);c("TERNARY",y.Ce);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};Ka.prototype.V=function(a,b){this.H.V(a,b)};Ka.prototype.addInstruction=Ka.prototype.V;Ka.prototype.J=function(){return this.H.J()};Ka.prototype.getQuota=Ka.prototype.J;Ka.prototype.Ua=function(){this.H.Ua()};Ka.prototype.resetQuota=Ka.prototype.Ua;Ka.prototype.eb=function(a,b,c){this.H.K.Vb(a,b,c)};var La=function(){this.Ra={}};La.prototype.get=function(a){return this.Ra.hasOwnProperty(a)?this.Ra[a]:void 0};La.prototype.add=function(a,b){if(this.Ra.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.L();this.Ra[a]=c};La.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var A=window,B=document,Ma=navigator,Na=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},D=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=B.getElementsByTagName("script")[0]||B.body||B.head;e.parentNode.insertBefore(d,e);return d},
Pa=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Qa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ra=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Sa=function(a,b,
c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){A.setTimeout(a,0)},Ua=function(a){var b=B.getElementById(a);if(b&&Ta(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ta(document.all[a][c],"id")==a)return document.all[a][c];return b},Ta=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Va=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=
b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Wa=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Xa=function(a){Ma.sendBeacon&&Ma.sendBeacon(a)||Qa(a)};var Ya=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Za=/:[0-9]+$/,$a=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},ab=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(A.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||A.location.hostname).replace(Za,"").toLowerCase();if(c){var l=
/^www\d*\./.exec(f);l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(Number(a.hostname?a.port:A.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=qa(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$a(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#",
"");break;default:f=a&&a.href}return f},bb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},M=function(a){var b=document.createElement("a");a&&(Ya.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Za,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var eb=function(){this.sb=new Ka;var a=new La;a.addAll(cb());db(this,function(b){return a.get(b)})},cb=function(){return{callInWindow:fb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getCurrentUrl:gb,getInWindow:jb,getReferrer:kb,getUrlComponent:lb,getUrlFragment:mb,isPlainObject:nb,loadIframe:ob,loadJavaScript:pb,removeUrlFragment:qb,replaceAll:sb,sendTrackingBeacon:tb,setInWindow:ub,queryPermission:vb}};eb.prototype.R=function(a){return this.sb.R(a)};eb.prototype.execute=eb.prototype.R;
var db=function(a,b){a.sb.V("require",b)};eb.prototype.eb=function(a,b,c){this.sb.eb(a,b,c)};function fb(a,b){for(var c=a.split("."),d=A,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==wa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Aa(arguments[f]));e.apply(d,h)}}function gb(){return A.location.href}function jb(a,b,c){for(var d=a.split("."),e=A,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Aa(b));return Ba(e[d[f]])}
function kb(){return B.referrer}function lb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return ab(M(a),b,c,f,e)}function mb(a){return ab(M(a),"fragment")}function nb(a){return a instanceof ta}function ob(a,b){var c=this.C();Pa(a,function(){b instanceof w&&b.m(c)})}var wb={};
function pb(a,b,c,d){if(this.gc().request("loadJavaScript",a)){var e=this.C(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?wb[d]?(wb[d].onSuccess.push(f),wb[d].onFailure.push(h)):(wb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=wb[d].onSuccess,b=0;b<a.length;b++)G(a[b]);a.push=function(a){G(a);return 0}},h=function(){for(var a=wb[d].onFailure,b=0;b<a.length;b++)G(a[b]);wb[d]=null},D(a,f,h)):D(a,f,h)}}function qb(a){return bb(M(a))}
function sb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function tb(a,b,c){var d=this.C();Qa(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function ub(a,b,c){for(var d=a.split("."),e=A,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Aa(b),!0):!1}function xb(){return function(){return!0}}function yb(a){var b=a.url;return function(a){return b===a}}
function vb(a,b){return this.gc().request.apply(null,Array.prototype.slice.call(arguments,0))};
var zb=[],Ab={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Bb=function(a){return Ab[a]},Cb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Gb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Hb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Lb=function(a){return Hb[a]};zb[7]=function(a){return String(a).replace(Gb,Lb)};
zb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Gb,Lb)+"'"}};var Rb=/['()]/g,Sb=function(a){return"%"+a.charCodeAt(0).toString(16)};zb[12]=function(a){var b=
encodeURIComponent(String(a));Rb.lastIndex=0;return Rb.test(b)?b.replace(Rb,Sb):b};var Tb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ub={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Vb=function(a){return Ub[a]};zb[16]=function(a){return a};var Xb,Yb=[],Zb=[],$b=[],ac=[],bc=[],cc={},dc,ec,fc,hc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!cc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?cc[b](d):Xb(b,d)},jc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ic(a[e],b,c));return d},ic=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ic(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Yb[f];if(!h||b(h))return;c[f]=!0;try{var k=jc(h,b,c);d=hc(k);fc&&(d=fc.od(d,k))}catch(t){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[ic(a[l],b,c)]=ic(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ic(a[n],b,c);ec&&(m=m||p===ec.Ia);d.push(p)}return ec&&m?ec.pd(d):d.join("");case "escape":d=ic(a[1],b,c);if(ec&&pa(a[1])&&"macro"===a[1][0]&&ec.Sd(a))return ec.he(d);d=String(d);for(var q=
2;q<a.length;q++)zb[a[q]]&&(d=zb[a[q]](d));return d;case "tag":var r=a[1];if(!ac[r])throw Error("Unable to resolve tag reference "+r+".");return d={ac:a[2],index:r};case "zb":var u=kc({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(u=!u);return u;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},kc=function(a,b,c){try{return dc(jc(a,b,c))}catch(d){JSON.stringify(a)}return null};var lc=null,oc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];lc=mc(a);for(var e=0;e<Zb.length;e++){var f=Zb[e],h=nc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<ac.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},nc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=lc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=lc(e[c]);if(null===d)return null;if(d)return!1}return!0};
var mc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=kc($b[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var rc={},sc=null;rc.o="GTM-MVDRFFD";var tc=null,uc="//www.googletagmanager.com/a?id="+rc.o+"&cv=103",vc={},wc={},xc=B.currentScript?B.currentScript.src:void 0;var yc=function(){},zc=function(a){return"function"==typeof a},Ac=function(a){return"string"==wa(a)},Bc=function(a){return"number"==wa(a)&&!isNaN(a)},Cc=function(a){return Math.round(Number(a))||0},Dc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ec=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Gc=function(a,b){if(!Bc(a)||!Bc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},Hc=function(){this.prefix="gtm.";this.values={}};Hc.prototype.set=function(a,b){this.values[this.prefix+a]=b};Hc.prototype.get=function(a){return this.values[this.prefix+a]};Hc.prototype.contains=function(a){return void 0!==this.get(a)};var Ic=function(){var a=sc.sequence||0;sc.sequence=a+1;return a},Jc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Kc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var O=function(){var a=function(a){return{toString:function(){return a}}};return{Jb:a("convert_case_to"),Kb:a("convert_false_to"),Lb:a("convert_null_to"),Mb:a("convert_true_to"),Nb:a("convert_undefined_to"),N:a("function"),Gc:a("instance_name"),Hc:a("live_only"),Ic:a("malware_disabled"),Jc:a("once_per_event"),Pb:a("once_per_load"),Qb:a("setup_tags"),Kc:a("tag_id"),Rb:a("teardown_tags")}}();var Lc=new Hc,Mc={},Pc={set:function(a,b){za(Nc(a,b),Mc)},get:function(a){return Oc(a,2)},reset:function(){Lc=new Hc;Mc={}}},Oc=function(a,b){return 2!=b?Lc.get(a):Qc(a)},Qc=function(a,b,c){var d=a.split(".");return Sc(d)},Sc=function(a){for(var b=Mc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Uc=function(a,b){Lc.set(a,b);za(Nc(a,b),Mc)},Nc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Vc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Wc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Xc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Yc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Zc=function(a){var b=Oc("gtm.whitelist");var c=b&&Yc(Ec(b),Wc),d=Oc("gtm.blacklist")||Oc("tagTypeBlacklist")||[];
Vc.test(A.location&&A.location.hostname)&&(d=Ec(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Yc(Ec(d),Xc),f={};return function(h){var k=h&&h[O.N];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=wc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>qa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>qa(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
qa(e,k)))a:{for(var u=l||[],t=new Hc,z=0;z<e.length;z++)t.set(e[z],!0);for(z=0;z<u.length;z++)if(t.get(u[z])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var bd={od:function(a,b){b[O.Jb]&&"string"===typeof a&&(a=1==b[O.Jb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(O.Lb)&&null===a&&(a=b[O.Lb]);b.hasOwnProperty(O.Nb)&&void 0===a&&(a=b[O.Nb]);b.hasOwnProperty(O.Mb)&&!0===a&&(a=b[O.Mb]);b.hasOwnProperty(O.Kb)&&!1===a&&(a=b[O.Kb]);return a}};var cd=function(a){var b=sc.zones;!b&&a&&(b=sc.zones=a());return b},dd={active:!0,isWhitelisted:function(){return!0}};var ed=!1,fd=0,gd=[];function hd(a){if(!ed){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ed=!0;for(var e=0;e<gd.length;e++)G(gd[e])}gd.push=function(){for(var a=0;a<arguments.length;a++)G(arguments[a]);return 0}}}function id(){if(!ed&&140>fd){fd++;try{B.documentElement.doScroll("left"),hd()}catch(a){A.setTimeout(id,50)}}}var jd=function(a){ed?a():gd.push(a)};var kd=!1,ld=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]};var md=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(!A[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}return A[b]},nd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ld();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var rd=function(){return"&tc="+ac.filter(function(a){return a}).length},sd="0.005000">Math.random(),td=function(){var a=0,b=0;return{Td:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},pe:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},ud="",vd=function(){ud=[uc,"&v=3&t=t","&pid="+Gc(),"&rv=8o"].join("")},wd={},xd="",yd=void 0,zd={},Ad={},Bd=void 0,Cd=null,Dd=1E3,Ed=function(){var a=yd;return void 0===a?"":[ud,
wd[a]?"":"&es=1",zd[a],rd(),xd,"&z=0"].join("")},Fd=function(){Bd&&(A.clearTimeout(Bd),Bd=void 0);void 0===yd||wd[yd]&&!xd||(Ad[yd]||Cd.Td()||0>=Dd--?Ad[yd]=!0:(Cd.pe(),Qa(Ed()),wd[yd]=!0,xd=""))},Gd=function(a,b,c){if(sd&&!Ad[a]&&b){a!==yd&&(Fd(),yd=a);var d=c+String(b[O.N]||"").replace(/_/g,"");xd=xd?xd+"."+d:"&tr="+d;Bd||(Bd=A.setTimeout(Fd,500));2022<=Ed().length&&Fd()}};function Hd(a,b,c,d,e,f){var h=ac[a],k=Id(a,b,c,d,e,f);if(!k)return null;var l=ic(h[O.Qb],f.Z,[]);if(l&&l.length){var m=l[0];k=Hd(m.index,b,k,1===m.ac?e:k,e,f)}return k}
function Id(a,b,c,d,e,f){function h(){var b=jc(k,f.Z);b.vtp_gtmOnSuccess=function(){Gd(f.id,ac[a],"5");c()};b.vtp_gtmOnFailure=function(){Gd(f.id,ac[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[O.Ic])d();else{Gd(f.id,k,"1");try{hc(b)}catch(z){Gd(f.id,
k,"7");e()}}}var k=ac[a];if(f.Z(k))return null;var l=ic(k[O.Rb],f.Z,[]);if(l&&l.length){var m=l[0],n=Hd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.ac?e:n}if(k[O.Pb]||k[O.Jc]){var p=k[O.Pb]?bc:b,q=c,r=d;if(!p[a]){h=Kc(h);var u=Jd(a,p,h);c=u.U;d=u.ka}return function(){p[a](q,r)}}return h}function Jd(a,b,c){var d=[],e=[];b[a]=Kd(d,e,c);return{U:function(){b[a]=Ld;for(var c=0;c<d.length;c++)d[c]()},ka:function(){b[a]=Md;for(var c=0;c<e.length;c++)e[c]()}}}
function Kd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ld(a){a()}function Md(a,b){b()};function Nd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Kc(function(){b++;d&&b>=c&&a()})},Vc:function(){d=!0;b>=c&&a()}}}function Od(a,b){if(!sd)return;var c=function(a){var d=b.Z(ac[a])?"3":"4",f=ic(ac[a][O.Qb],b.Z,[]);f&&f.length&&c(f[0].index);Gd(b.id,ac[a],d);var h=ic(ac[a][O.Rb],b.Z,[]);h&&h.length&&c(h[0].index)};c(a);}var Pd=!1;var Qd=function(a,b){var c={};c[O.N]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);ac.push(c);return ac.length-1};var Rd="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var Sd=/[A-Z]+/,Td=/\s/,Ud=function(a){if(Ac(a)&&(a=a.trim(),!Td.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}};var Vd=null,Wd={},Xd={},Yd;function Zd(){Vd=Vd||!sc.gtagRegistered;sc.gtagRegistered=!0;return Vd}var $d=function(a,b){var c={event:a};b&&(c.eventModel=za(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function ae(a){if(void 0===Xd[a.id]){var b;if("UA"==a.prefix)b=Qd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Qd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Qd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Qd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Qd("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Yd){var c={name:"send_to",dataLayerVersion:2},d={};d[O.N]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Yb.push(d);Yd=["macro",Yb.length-1]}var f={arg0:Yd,
arg1:a.id,ignore_case:!1};f[O.N]="_lc";$b.push(f);var h={"if":[$b.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Zb.push(h);Xd[a.id]=b}}
var ce={event:function(a){var b=a[1];if(Ac(b)&&!(3<a.length)){var c;if(2<a.length){if(!ya(a[2]))return;c=a[2]}var d=$d(b,c);return d}},set:function(a){var b;2==a.length&&ya(a[1])?
b=za(a[1],void 0):3==a.length&&Ac(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=za(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},be=Kc(function(){});var de=!1,ee=[];function fe(){if(!de){de=!0;for(var a=0;a<ee.length;a++)G(ee[a])}};var ge=[],he=!1,me=function(a){var b=a.eventCallback,c=Kc(function(){zc(b)&&G(function(){b(rc.o)})}),d=a.eventTimeout;d&&A.setTimeout(c,Number(d));return c},ne=function(){for(var a=!1;!he&&0<ge.length;){he=!0;delete Mc.eventModel;var b=ge.shift();if(zc(b))try{b.call(Pc)}catch(ie){}else if(pa(b)){var c=b;if(Ac(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Oc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(ie){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&Ac(l[0])){var m=ce[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){he=!1;continue}}var n;var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Uc(p,void 0),Uc(p,q[p]));var u=q.event;if(u){var t=q["gtm.uniqueEventId"];t||(t=Ic(),q["gtm.uniqueEventId"]=t,Uc("gtm.uniqueEventId",t));tc=u;var z;var H,E,C=q,P=C.event,F=C["gtm.uniqueEventId"],K=sc.zones;E=K?K.checkState(rc.o,F):dd;if(E.active){var I=me(C);c:{var L=
E.isWhitelisted;if("gtm.js"==P){if(Pd){H=!1;break c}Pd=!0}var N=F,ia=P;if(sd&&!Ad[N]&&yd!==N){Fd();yd=N;xd="";var J=zd,ba=N,X,Y=ia;X=0===Y.indexOf("gtm.")?encodeURIComponent(Y):"*";J[ba]="&e="+X+"&eid="+N;Bd||(Bd=A.setTimeout(Fd,500))}var Q=Zc(L),R={id:F,name:P,gd:I||yc,Z:Q,Va:oc(Q)};for(var hb,ib=R,Ib=Nd(ib.gd),$c=[],Jb=[],rb=0;rb<ac.length;rb++)if(ib.Va[rb]){var ag=ac[rb];var Kb=Ib.add();try{var je=Hd(rb,$c,Kb,Kb,Kb,ib);je?Jb.push(je):(Od(rb,ib),Kb())}catch(ie){Kb()}}Ib.Vc();for(var ad=0;ad<Jb.length;ad++)Jb[ad]();hb=0<Jb.length;if("gtm.js"===P||"gtm.sync"===P)d:{}if(hb){for(var bg={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},gc=0;gc<R.Va.length;gc++)if(R.Va[gc]){var le=ac[gc];if(le&&!bg[le[O.N]]){H=!0;break c}}H=!1}else H=hb}z=H?!0:!1}else z=!1;tc=null;n=z}else n=!1;a=n||a}he=!1}return!a},oe=function(){var a=ne();try{var b=A["dataLayer"].hide;if(b&&void 0!==b[rc.o]&&b.end){b[rc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;
break}c&&(b.end(),b.end=null)}}catch(e){}return a},pe=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};gd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ee.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(ge.push.apply(ge,b);300<this.length;)this.shift();return ne()};ge.push.apply(ge,a.slice(0));G(oe)};var qe={};qe.Ia=new String("undefined");qe.$a={};var re=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qe.Ia?b:a[d]);return c.join("")}};re.prototype.toString=function(){return this.resolve("undefined")};re.prototype.valueOf=re.prototype.toString;qe.pd=function(a){return new re(a)};var se={};qe.qe=function(a,b){var c=Ic();se[c]=[a,b];return c};qe.Xb=function(a){var b=a?0:1;return function(a){var c=se[a];if(c&&"function"===typeof c[b])c[b]();se[a]=void 0}};
qe.Sd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};qe.he=function(a){if(a===qe.Ia)return a;var b=Ic();qe.$a[b]=a;return'google_tag_manager["'+rc.o+'"].macro('+b+")"};qe.Lc=re;var te=new Hc,ue=function(a,b){function c(a){var b=M(a),c=ab(b,"protocol"),d=ab(b,"host",!0),e=ab(b,"port"),f=ab(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function ve(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=qa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=te.get(q);r||(r=new RegExp(c,p),te.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ue(b,c)}return!1};function we(a,b,c,d){return(d||"https:"==A.location.protocol?a:b)+c}function xe(a,b){for(var c=b||(a instanceof v?new v:new ta),d=a.T(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),xe(h,c.get(f))):h instanceof ta?(c.get(f)instanceof ta||c.set(f,new ta),xe(h,c.get(f))):c.set(f,h)}}return c}function ye(){return rc.o}function ze(){return(new Date).getTime()}function Ae(a,b){return Ba(Oc(a,b||2))}function Be(){return tc}
function Ce(a){return Wa('<a href="'+a+'"></a>')[0].href}function De(a){return Cc(Aa(a))}function Ee(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Fe(a,b){return Gc(a,b)}function Ge(a,b,c){if(!(a instanceof v))return null;for(var d=new ta,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof ta&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var He=function(){var a=new La;a.addAll(cb());a.addAll({buildSafeUrl:we,decodeHtmlUrl:Ce,copy:xe,generateUniqueNumber:Ic,getContainerId:ye,getCurrentTime:ze,getDataLayerValue:Ae,getEventName:Be,makeInteger:De,makeString:Ee,randomInteger:Fe,tableToMap:Ge});return function(b){return a.get(b)}},Je=function(){var a={callInWindow:xb,encodeURI:xb,encodeURIComponent:xb,getCurrentUrl:xb,getInWindow:xb,getReferrer:xb,getUrlComponent:xb,getUrlFragment:xb,isPlainObject:xb,loadIframe:xb,loadJavaScript:yb,removeUrlFragment:xb,
replaceAll:xb,sendTrackingBeacon:xb,setInWindow:xb},b={buildSafeUrl:Ie,decodeHtmlUrl:Ie,copy:Ie,generateUniqueNumber:Ie,getContainerId:Ie,getCurrentTime:Ie,getDataLayerValue:Ie,getEventName:Ie,makeInteger:Ie,makeString:Ie,randomInteger:Ie,tableToMap:Ie},c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);for(var e in b)if(b.hasOwnProperty(e)){if(c[e])throw Error("Overriding an existing permission generator is forbidden: "+e);c[e]=b[e]}return function(a,b){return c[a]?c[a](b):function(){return!0}}};
function Ie(){return function(){return!0}};var Ke,Le=function(){var a=data.runtime||[],b=data.permissions||{};Ke=new eb;Xb=function(a,b){var c=new ta,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Ba(b[d]));var e=Ke.R([a,c]);e instanceof g&&"return"===e.A&&(e=e.getData());return Aa(e)};dc=ve;db(Ke,He());for(var c=0;c<a.length;c++){var d=a[c];if(!pa(d)||3>d.length){if(0==d.length)continue;return}Ke.R(d)}var e=Je(),f;for(f in b)if(b.hasOwnProperty(f)){var h=b[f],k;for(k in h)if(h.hasOwnProperty(k)){var l=e(k,h[k]);Ke.eb(f,k,l)}}};var Me=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ne=function(a){return encodeURIComponent(a)},Oe=function(a,b){if(!a)return!1;var c=ab(M(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var S=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},Pe=function(a,b){za(a,b)},Qe=function(a){return Cc(a)},Re=function(a,b){return qa(a,b)};var Se=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ta(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Te=function(a){sc.hasOwnProperty("autoEventsSettings")||(sc.autoEventsSettings={});var b=sc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ue=function(a,b,c,d){var e=Te(a),f=Jc(e,b,d);e[b]=
c(f)},Ve=function(a,b,c){var d=Te(a);return Jc(d,b,c)};var We=/(^|\.)doubleclick\.net$/i,Xe=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ye=function(a,b,c){for(var d=String(b||B.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=Fc(h[0]);if(k&&k==a){var l=Fc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ze=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=ab(A.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=B.cookie,r=0;r<k.length;r++){var u=h,t=k[r],z=c;if(We.test(A.location.hostname)||"/"==z&&Xe.test(t))break;"none"!=k[r]&&(u+="domain="+k[r]+";");B.cookie=u;if(q!=B.cookie||0<=qa(Ye(a),b))break}};var $e=!1;if(B.querySelectorAll)try{var af=B.querySelectorAll(":root");af&&1==af.length&&af[0]==B.documentElement&&($e=!0)}catch(a){}var bf=$e;var cf=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},ff=function(a,b,c,d){var e=df(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ef(e,function(a){return a.xd},b);if(1===e.length)return e[0].id;e=ef(e,function(a){return a.ee},c);return e[0]?e[0].id:void 0}},jf=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(gf.test(document.location.hostname)||"/"===
h&&hf.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var r=q[q.length-1];if(parseInt(r,10).toString()===r){n=["none"];break a}}for(var u=q.length-2;0<=u;u--)p.push(q.slice(u).join("."));p.push("none");n=p}for(var t=n,z=0;z<t.length&&!m;z++)m=jf(a,b,c,t[z],e);return m}d&&
"none"!==d&&(l+="domain="+d+";");var H=document.cookie;document.cookie=l;return H!=document.cookie||0<=cf(a).indexOf(b)};function ef(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function df(a,b){for(var c=[],d=cf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),xd:1*k[0]||1,ee:1*k[1]||1}))}}return c}
var hf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i;var kf=window,lf=document;var mf=function(){for(var a=kf.navigator.userAgent+(lf.cookie||"")+(lf.referrer||""),b=a.length,c=kf.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Date.now()/1E3)].join(".")},pf=function(a,b,c,d){var e=nf(b);return ff(a,e,of(c),d)};
function nf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function of(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function qf(a,b){var c=""+nf(a),d=of(b);1<d&&(c+="-"+d);return c};var rf=["1"],sf={},vf=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d=tf(void 0===a?"_gcl":a);if(!sf[d]&&!uf(d,b,c)){var e,f=mf();e=["1",qf(void 0,void 0),f].join(".");jf(d,e,c,b,7776E6);uf(d,b,c)}};function uf(a,b,c){var d=pf(a,b,c,rf);d&&(sf[a]=d);return d}function tf(a){return(void 0===a?"_gcl":a)+"_au"};var wf=function(a){for(var b=[],c=B.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var xf=/^\w+$/,yf=/^[\w-]+$/,zf=/^\d+\.fls\.doubleclick\.net$/;function Af(a){return a&&"string"==typeof a&&a.match(xf)?a:"_gcl"}function Bf(a){if(a){if("string"==typeof a){var b=Af(a);return{va:b,sa:b,ya:b}}if(a&&"object"==typeof a)return{va:Af(a.dc),sa:Af(a.aw),ya:Af(a.gf)}}return{va:"_gcl",sa:"_gcl",ya:"_gcl"}}function Cf(a){var b=M(A.location.href),c=ab(b,"host",!1);if(c&&c.match(zf)){var d=ab(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Df(a){return a.filter(function(a){return yf.test(a)})}var Ff=function(a){var b=Cf("gclaw");if(b)return b.split(".");var c=Bf(a);if("_gcl"==c.sa){var d=Ef();if(d&&(null==d.I||"aw.ds"==d.I))return[d.Y]}return Df(wf(c.sa+"_aw"))},Gf=function(a){var b=Cf("gcldc");if(b)return b.split(".");var c=Bf(a);if("_gcl"==c.va){var d=Ef();if(d&&("ds"==d.I||"aw.ds"==d.I))return[d.Y]}return Df(wf(c.va+"_dc"))};
function Ef(){var a=M(A.location.href),b=ab(a,"query",!1,void 0,"gclid"),c=ab(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=ab(a,"fragment");b=b||$a(d,"gclid");c=c||$a(d,"gclsrc")}return void 0!==b&&b.match(yf)?{Y:b,I:c}:null}
var Hf=function(){var a=Cf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Bb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bb]||(h[b[k].Bb]=[]),h[b[k].Bb].push({timestamp:l[1],Y:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].Y);p=Df(p);
p.length&&m.push(n+":"+p.join(","))}return m.join(";")},If=function(a,b,c){};var Jf;a:{Jf="G"}var Kf={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:Jf},Lf=function(a){var b=rc.o.split("-"),c=b[0].toUpperCase();return(Kf[c]||"i")+"8o"+(a&&"GTM"===c?b[1]:"")};var Sf=!!A.MutationObserver,Tf=void 0,Uf=function(a){if(!Tf){var b=function(){var a=B.body;if(a)if(Sf)(new MutationObserver(function(){for(var a=0;a<Tf.length;a++)G(Tf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ra(a,"DOMNodeInserted",function(){b||(b=!0,G(function(){b=!1;for(var a=0;a<Tf.length;a++)G(Tf[a])}))})}};Tf=[];B.body?b():G(b)}Tf.push(a)};var fg="www.googletagmanager.com/gtm.js";
var gg=fg,hg=function(a,b,c,d){Ra(a,b,c,d)},ig=function(a,b){return A.setTimeout(a,b)},jg=function(a,b,c){D(a,b,c)},kg=function(){return A.location.href},lg=function(a){return ab(M(a),"fragment")},mg=function(a,b,c,d,e){return ab(a,b,c,d,e)},T=function(a,b){return Oc(a,b||2)},ng=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return A["dataLayer"].push(a)},og=function(a,b){A[a]=b},U=function(a,b,c){b&&(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},pg=function(a,b,c){var d=b,e=c,
f=Bf(a);e=e||"auto";d=d||"/";var h=Ef();if(null!=h){var k=(new Date).getTime(),l=new Date(k+7776E6),m=["GCL",Math.round(k/1E3),h.Y].join(".");h.I&&"aw.ds"!=h.I||Ze(f.sa+"_aw",m,d,e,l,!0);"aw.ds"!=h.I&&"ds"!=h.I||Ze(f.va+"_dc",m,d,e,l,!0);"gf"==h.I&&Ze(f.ya+"_gf",m,d,e,l,!0)}},qg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},V=function(a,b,c,d){var e=!d&&
"http:"==A.location.protocol;e&&(e=2!==rg());return(e?b:a)+c};
var sg=function(a){var b=0;return b},tg=function(a){},ug=function(a){var b=!1;return b},vg=function(a,b){var c;a:{if(a&&
pa(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},wg=function(a,b,c,d){Ue(a,b,c,d)},xg=function(a,b,c){return Ve(a,b,c)},yg=function(a){return!!Ve(a,"init",!1)},zg=function(a){Te(a).init=!0};
var rg=function(){var a=gg;if(xc){if(0===xc.toLowerCase().indexOf("https://"))return 2;if(0===xc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=B.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};var Cg=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":gg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));var f=V("https://","http://",d);D(f,void 0,void 0)};var Eg=function(a,b,c){a instanceof qe.Lc&&(a=a.resolve(qe.qe(b,c)),b=yc);return{kb:a,U:b}};var Fg=function(a,b,c){this.n=a;this.t=b;this.p=c},Gg=function(){this.c=1;this.e=[];this.p=null};function Hg(a){var b=sc,c=b.gss=b.gss||{};return c[a]=c[a]||new Gg}var Ig=function(a,b){Hg(a).p=b},Jg=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);Hg(a).e.push(new Fg(b,d,c))},Kg=function(a){};var Vg=window,Wg=document,Xg=function(a){var b=Vg._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vg["ga-disable-"+a])return!0;try{var c=Vg.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(m){}for(var d=[],e=Wg.cookie.split(";"),f=/^\s*AMP_TOKEN=\s*(.*?)\s*$/,h=0;h<e.length;h++){var k=e[h].match(f);k&&d.push(k[1])}for(var l=0;l<d.length;l++)if("$OPT_OUT"==decodeURIComponent(d[l]))return!0;return!1};var bh=function(a){if(1===Hg(a).c){Hg(a).c=2;var b=encodeURIComponent(a);D(("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},ch=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;jg("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=U("google_trackConversion");if(zc(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=S(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Lf(void 0)})||b()}else b()},b)})}();Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=bf?B.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=Ua(a.vtp_elementId);b&&(c=d?Ta(b,d):Va(b));return Fc(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return tc})}();Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=T("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?mg(M(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bb(M(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Se(b);d.event="gtm.click";ng(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!yg("cl")){var c=U("document");Ra(c,"click",a,!0);zg("cl");var d=Ve("cl","legacyTeardown",void 0);d&&d()}G(b.vtp_gtmOnSuccess)})}();
Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:T("gtm.url",1))||kg();var d=b[a("vtp_component")];return d&&"URL"!=d?mg(M(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):bb(M(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ts=[],function(){(function(a){Z.__ts=a;Z.__ts.b="ts";Z.__ts.g=!0})(function(a){function b(b,d){void 0!==a[d]&&c.push([b,a[d]])}var c=U("gts",[]);c.push(["id",a.vtp_trustedStoresAccountId]);b("google_base_offer_id","vtp_shoppingId");b("google_base_subaccount_id","vtp_shoppingAccountId");b("google_base_country","vtp_shoppingCountry");b("google_base_language","vtp_shoppingLanguage");b("locale","vtp_locale");var d=a.vtp_position||"";"USER_DEFINED"==d?c.push(["badge_container",a.vtp_elementId]):"BOTTOM_LEFT"!=
d&&(d="BOTTOM_RIGHT");c.push(["badge_position",d]);jg(V("https://","http://","www.googlecommerce.com/trustedstores/api/js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0})(function(a){A.adroll_adv_id=a.vtp_customerId;A.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(A.adroll_conversion_value=a.vtp_conversionValueInDollars,A.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=S(a.vtp_customData,"key","value");A.adroll_custom_data=b}a.vtp_segmentName&&(A.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&(A.adroll_email=
a.vtp_visitorEmail);A.__adroll_loaded=!0;var c=V("https://s","http://a",".adroll.com/j/roundtrip.js");D(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;Pe(S(l.vtp_fieldsToSet,"fieldName","value"),e);Pe(S(l.vtp_contentGroup,"index","group"),f);Pe(S(l.vtp_dimension,"index","dimension"),h);Pe(S(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=za(l,void 0);b=za(b,m)}Pe(S(b.vtp_fieldsToSet,"fieldName","value"),e);Pe(S(b.vtp_contentGroup,
"index","group"),f);Pe(S(b.vtp_dimension,"index","dimension"),h);Pe(S(b.vtp_metric,"index","metric"),k);var n=md(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Ic(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},z=function(a,b){return void 0===b?b:a(b)},H=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},E=function(){},C=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?Dc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},P={name:q};C(e,P,
!0);n("create",b.vtp_trackingId||c.trackingId,P);t("set","&gtm",Lf(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");H("contentGroup",f);H("dimension",h);H("metric",k);var F={};C(e,F,!1)&&t("set",F);var K;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;zc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:z(String,b.vtp_eventLabel||c.label),eventValue:z(Qe,b.vtp_eventValue||c.value)};C(K,I,!1);t("send",I);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Y="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:Y})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(Y="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:Y}));K?t("send","pageview",K):t("send","pageview");}if(!a){var Q=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(Q="internal/"+Q);a=!0;jg(V("https:","http:","//www.google-analytics.com/"+Q,e&&e.forceSSL),function(){var a=ld();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();

Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0})(function(a){if(!yg("jel")){var b=U("self"),c=b.onerror;b.onerror=function(a,b,d,k,l){c&&c(a,b,d,k,l);ng({event:"gtm.pageError","gtm.errorMessage":a,"gtm.errorUrl":b,"gtm.errorLineNumber":d});return!1};var d=Ve("jel","legacyTeardown",void 0);d&&d();zg("jel")}G(a.vtp_gtmOnSuccess)})}();Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0})(function(){return rc.o})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=T(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){var c=l(kg()),d=String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",").map(function(a){return l(a)});return!Oe(a,d.concat(c))},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return mg(M(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return T("gtm.element",1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=T("gtm.element",1),m=T("event",1),r=Number(new Date);a===l&&b===m&&c>r-250?k=d:(d=k=l?Va(l):"",a=
l,b=m);c=r;return k||e.vtp_defaultValue;case "URL":var u;a:{var t=String(T("gtm.elementUrl",1)||e.vtp_defaultValue||""),z=M(t);switch(e.vtp_component||"URL"){case "URL":u=t;break a;case "IS_OUTBOUND":u=h(t,e);break a;default:u=ab(z,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return u;case "ATTRIBUTE":var H;if(void 0===e.vtp_attribute)H=f(e);else{var E=T("gtm.element",1);H=Ta(E,e.vtp_attribute)||e.vtp_defaultValue||""}return H;default:return f(e)}})}();

Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0})(function(a){var b=za(a,void 0),c=b;c[O.N]=null;c[O.Gc]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=U("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Lf(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=
!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,D("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(a){Z.__baut=a;Z.__baut.b="baut";Z.__baut.g=!0})(function(b){var c=b.vtp_uetqName||"uetq",d=U(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(a,c){void 0!==b[a]&&(e[c]=b[a])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction","ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{jg("//bat.bing.com/bat.js",function(){var a=Me(U("UET"),{ti:b.vtp_tagId,q:d});A[c]=a;a.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){G(b.vtp_gtmOnFailure)}})}();
Z.a.fsl=[],function(){function a(){var a=U("document"),f=c(),h=HTMLFormElement.prototype.submit;hg(a,"click",function(a){var b=a.target;if(b&&(b=qg(b,["button","input"]))&&("submit"==b.type||"image"==b.type)&&b.name&&Ta(b,"value")){var c;(c=b.form?b.form.tagName?b.form:Ua(b.form):qg(b,["form"]))&&f.store(c,b)}},!1);hg(a,"submit",function(c){var e=c.target;if(!e)return c.returnValue;var k=c.defaultPrevented||!1===c.returnValue,n=!0;if(d(e,function(){if(n){var b=f.get(e),c;b&&(c=a.createElement("input"),
c.type="hidden",c.name=b.name,c.value=b.value,e.appendChild(c));h.call(e);c&&e.removeChild(c)}},k,b(e)&&!k))n=!1;else return k||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},!1);HTMLFormElement.prototype.submit=function(){var a=this,c=!0;d(a,function(){c&&h.call(a)},!1,b(a))&&(h.call(a),c=!1)}}function b(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0}function c(){var a=[],b=function(b){return vg(a,function(a){return a.form===b})};return{store:function(c,
d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(a){var c=b(a);return c?c.button:null}}}function d(a,b,c,d){var e=Ve("fsl",c?"nv.mwt":"mwt",0),f=Se(a);f.event="gtm.formSubmit";var h=a.action;h&&h.tagName&&(h=a.cloneNode(!1).action);f["gtm.elementUrl"]=h;if(c){var k=xg("fsl","nv.ids",[]).join(",");if(k)f["gtm.triggers"]=k;else return!0}else{var q=xg("fsl","ids",[]).join(",");f["gtm.triggers"]=q}if(d&&e){if(!ng(f,b,e))return!1}else ng(f,function(){},e||2E3);return!0}(function(a){Z.__fsl=
a;Z.__fsl.b="fsl";Z.__fsl.g=!0})(function(b){var c=b.vtp_waitForTags,d=b.vtp_checkValidation,e=Number(b.vtp_waitForTagsTimeout);if(!e||0>=e)e=2E3;var l=b.vtp_uniqueTriggerId||"0";if(c){var m=function(a){return Math.max(e,a)};Ue("fsl","mwt",m,0);d||Ue("fsl","nv.mwt",m,0)}var n=function(a){a.push(l);return a};wg("fsl","ids",n,[]);d||wg("fsl","nv.ids",n,[]);if(!yg("fsl")){a();zg("fsl");var p=Ve("fsl","legacyTeardown",void 0);p&&p()}G(b.vtp_gtmOnSuccess)})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){G(h)}}};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=Eg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.kb,k=f.U;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,Wa(h),k,e)()}else ig(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();




var dh={macro:function(a){if(qe.$a.hasOwnProperty(a))return qe.$a[a]}};dh.dataLayer=Pc;dh.onHtmlSuccess=qe.Xb(!0);dh.onHtmlFailure=qe.Xb(!1);dh.callback=function(a){vc.hasOwnProperty(a)&&zc(vc[a])&&vc[a]();delete vc[a]};dh.$c=function(){sc[rc.o]=dh;wc=Z.a;ec=ec||qe;fc=bd};
dh.Od=function(){sc=A.google_tag_manager=A.google_tag_manager||{};if(sc[rc.o]){var a=sc.zones;a&&a.unregisterChild(rc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Yb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ac.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)$b.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Zb.push(p)}cc=Z;Le();dh.$c();pe();ed=!1;fd=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)hd();else{Ra(B,"DOMContentLoaded",hd);Ra(B,"readystatechange",hd);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!A.frameElement}catch(t){}r&&id()}Ra(A,"load",hd)}de=!1;"complete"===B.readyState?fe():Ra(A,"load",fe);a:{
if(!sd)break a;vd();yd=void 0;zd={};wd={};Bd=void 0;Ad={};xd="";Cd=td();A.setInterval(vd,864E5);}}};dh.Od();

})()
