(function(q){var k=function(){var m=[],g={},n={},k=function(a,c,b){a="string"===typeof a?[a]:a;var f=function(){return a.every(function(a){return!!h[a]})},d=function(){f()?b():m.push(d)};a.forEach(function(a){if(void 0===h[a]&&void 0===g[a]){var b=window.setTimeout(function(){n[a]||(delete g[a],l.announce(a),l.loadFile(rea.extension.getURL(a+".js"),function(){c?l.register(a,null,{}):console.log("registry: finished loading "+a+".js ")}))},0);g[a]=function(){window.clearTimeout(b);delete g[a]}}});d()},
h={},e={},p={},l={log:function(){var a,c,b=0,f=[],d={set:function(e){b=e;c=60<=b;a=30<=b;f.forEach(function(a){a(d,b)})},get:function(){return b},verbose:function(){console.debug.apply(console,arguments)},debug:function(){c&&console.debug.apply(console,arguments)},warn:function(){a&&console.warn.apply(console,arguments)},log:function(){a&&console.log.apply(console,arguments)},info:function(){a&&console.info.apply(console,arguments)},error:function(){console.error.apply(console,arguments)},addChangeListener:function(a){f.push(a)}};
Object.defineProperties(d,{D:{get:function(){return c},enumerable:!0},W:{get:function(){return a},enumerable:!0}});return d}(),init:function(){},verify:function(a){var c=[],b;for(b in e)e.hasOwnProperty(b)&&(3<e[b].length&&"###"===e[b].substr(0,3)?console.log("registry.verify: development version detected @ "+b):e[b]!==a&&(console.warn("registry.verify: expected version "+a+" and detected "+e[b]+" @ "+b),c.push({name:b,version:e[b],expected:a})));return c},announce:function(a){n[a]=!0},register:function(a,
c,b,f){if(!h[a]||f){e[a]=c;h[a]=b;delete n[a];var d;(d=g[a])&&d();a=m;for(m=[];a.length;)a.pop()()}},registerRaw:function(a,c,b,f){if(!p[a]||f)e[a]=c,p[a]=b},vendor:function(a,c){return k(a,!0,c)},require:function(a,c){return k(a,!1,c)},getRaw:function(a,c){var b;if(void 0!==(b=p[a]))c&&c(b);else{var f=rea.extension.getURL(a);try{var d=new XMLHttpRequest;if(XMLHttpRequest.onlyasync){if(!c){console.warn("registry: async xhr without a callback!");return}d.open("GET",f);d.onload=function(){c(d.responseText)};
d.onerror=function(){c()};d.send(null)}else d.open("GET",f,!1),d.send(null),(b=d.responseText)||console.warn("registry: content of "+a+" is null!"),c&&c(b)}catch(e){console.log("getRawContent "+e)}}return b},loadFile:function(a,c){a="string"===typeof a?[a]:a;var b=1;a.forEach(function(a){b++;try{rea.page.addScript(a,function(d){d||console.warn("registry: self.load "+a+" failed! ");0==--b&&c&&c()})}catch(d){console.warn("registry: self.load "+a+" failed! ",d),0==--b&&c&&c()}});0==--b&&c&&c()},isDevVersion:function(a){return e[a]&&
"###"===e[a].substr(0,3)},get:function(a){var c,b=h[a];"function"===typeof b?(c=Array.prototype.slice.call(arguments,1),c=b.apply(this,c)):b&&(c=b);return c}};return l}();window.setTimeout(k.init,1);q.Registry=k})("undefined"!==typeof rea?rea.globals:window);