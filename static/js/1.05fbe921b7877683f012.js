webpackJsonp([1,6],{49:function(t,s,e){s=t.exports=e(5)(),s.push([t.id,"",""])},64:function(t,s,e){var o=e(49);"string"==typeof o&&(o=[[t.id,o,""]]);e(6)(o,{});o.locals&&(t.exports=o.locals)},76:function(t,s,e){var o,n;e(64),o=e(164);var r=e(92);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=o},92:function(t,s){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"view-profile container"},[t._h("div",{staticClass:"col-sm-4 col-sm-offset-4"},[t._h("img",{staticClass:"img-responsive img-cycle",attrs:{src:t.src,alt:""}})," ",t._h("Uploader",{attrs:{url:t.url},on:{success:t.onUploadSuccess,error:t.onUploadError}},[t._h("button",{staticClass:"btn btn-default"},["上传"])])])])},staticRenderFns:[]}},164:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{url:"/api/files",src:e(29)}},methods:{onUploadSuccess:function(t){this.src="/api/files/entity/"+t._id},onUploadError:function(t){console.log(t)}}}}});