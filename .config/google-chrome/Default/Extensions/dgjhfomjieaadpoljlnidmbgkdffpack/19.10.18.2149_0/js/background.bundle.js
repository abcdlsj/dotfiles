/*! For license information please see background.bundle.js.LICENSE */
    fragment SymbolFields on Symbol {
        __typename
        name
        containerName
        url
        kind
        location {
            resource {
                path
                repository {
                    name
                }
            }
            url
        }
    }
`,ee=(e=5,u)=>{const p=new f.a;return p.pipe(Object(P.a)(),Object(I.a)(200),Object(r.a)(({query:p,handler:a})=>((e,u,p)=>p({request:O.b`
            query SearchSuggestions($query: String!, $first: Int!) {
                search(query: $query) {
                    suggestions(first: $first) {
                        ... on Repository {
                            __typename
                            name
                            url
                        }
                        ... on File {
                            __typename
                            path
                            name
                            isDirectory
                            url
                            repository {
                                name
                            }
                        }
                        ... on Symbol {
                            ...SymbolFields
                        }
                    }
                }
            }
            ${Q}
        `,variables:{query:e,first:u},mightContainPrivateInfo:!0}).pipe(Object(o.a)(O.a),Object(w.a)(({search:e})=>{if(!e||!e.suggestions)throw new Error("No search suggestions");return e.suggestions})))(p,e,u).pipe(Object(i.a)(e),Object(o.a)(X),Object(n.a)(e=>!!e),Y(),Object(o.a)(e=>({suggestions:e,suggestHandler:a})),Object(W.a)(),Object(G.a)())),function(e){return void 0===e&&(e=-1),function(u){return 0===e?Object(U.b)():e<0?u.lift(new J(-1,u)):u.lift(new J(e-1,u))}}()).subscribe(({suggestions:e,suggestHandler:u})=>u(e)),e=>p.next(e)};var ue=p(13),pe=p(118);const ae=/^https?:\/\//;class te{constructor(e){this.requestGraphQL=e,this.description="Enter a search query",this.suggestionFetcher=ee(20,this.requestGraphQL),this.prev={query:"",suggestions:[]},this.getSuggestions=e=>new Promise(u=>{this.prev.query!==e?this.suggestionFetcher({query:e,handler:async p=>{const a=await Object(ue.e)(!0).pipe(Object(i.a)(1)).toPromise(),t=p.map(({title:e,url:u,urlLabel:p})=>({content:`${a}${u}`,description:`${e} - ${p}`}));this.prev={query:e,suggestions:t},u(t)}}):u(this.prev.suggestions)}),this.action=async(e,u)=>{const p=await Object(ue.e)(!0).pipe(Object(i.a)(1)).toPromise(),a={url:ae.test(e)?e:`${p}/search?${Object(j.a)(e,pe.b.literal)}&utm_source=omnibox`};switch(u){case"newForegroundTab":await browser.tabs.create(a);break;case"newBackgroundTab":await browser.tabs.create({...a,active:!1});break;case"currentTab":default:await browser.tabs.update(a)}}}}var de=p(430),ie=p(48);var re=p(154),ne=p(405),oe=p(12),se=p(19);const le=!0;Object(ne.a)("BACKGROUND"),Object(de.a)("background");let me=[];const ce=browser.runtime.getManifest().content_scripts,fe=[];if(ce)for(const e of ce)e&&e.js&&e.matches&&fe.push(...e.matches);const ve=e=>{browser.omnibox.setDefaultSuggestion({description:`Search code on ${e}`})},he=({request:e,variables:u})=>Object(ue.e)(le).pipe(Object(i.a)(1),Object(r.a)(p=>Object(O.c)({request:e,variables:u,baseUrl:p,headers:{"X-Requested-With":`Sourcegraph - ${Object(ue.d)()} v${Object(ue.c)()}`},credentials:"include"})));!function(e){const u=new te(e);browser.omnibox.onInputChanged.addListener(async(e,p)=>{try{p(await u.getSuggestions(e))}catch(e){console.error("error getting suggestions",e)}}),browser.omnibox.onInputEntered.addListener(async(e,p)=>{await u.action(e,p)})}(he),async function(){Object(oe.a)("managed","sourcegraphURL").pipe(Object(n.a)(se.a)).subscribe(async e=>{await oe.b.sync.set({sourcegraphURL:e})}),Object(ue.e)(le).subscribe(e=>{ve(e)});const e=await browser.permissions.getAll();if(!e.origins)return void(me=[]);me=t()(e.origins,...fe),browser.permissions.onAdded&&browser.permissions.onAdded.addListener(e=>{if(!e.origins)return;const u=t()(e.origins,...fe);me.push(...u)}),browser.permissions.onRemoved&&browser.permissions.onRemoved.addListener(e=>{if(!e.origins)return;me=t()(me,...e.origins);const u=[];for(const p of e.origins)u.push(p.replace("/*",""))}),browser.tabs.onUpdated.addListener(async(e,u,p)=>{"complete"===u.status&&me.some(e=>"<all_urls>"===e||!!p.url&&p.url.startsWith(e.replace("/*","")))&&await browser.tabs.executeScript(e,{file:"js/inject.bundle.js",runAt:"document_end"})});const u={async openOptionsPage(){await browser.runtime.openOptionsPage()},createBlobURL:async e=>await async function(e){const{origin:u,hostname:p}=new URL(e),a=u!==ue.a&&"localhost"!==p,t=await fetch(e,{credentials:a?"include":"omit"});Object(ie.a)(t);const d=await t.blob();return window.URL.createObjectURL(d)}(e),requestGraphQL:async({request:e,variables:u})=>await he({request:e,variables:u}).toPromise()};browser.runtime.onMessage.addListener(async e=>{const p=e.type;if(!u[p])throw new Error(`Invalid RPC call for "${p}"`);return await u[p](e.payload)}),await browser.runtime.setUninstallURL("https://about.sourcegraph.com/uninstall/"),browser.browserAction.onClicked.addListener(d.a),browser.browserAction.setBadgeText({text:""}),browser.browserAction.setPopup({popup:"options.html?popup=true"}),x();const p=/^(proxy|expose)-/,a=e=>{const u=e.name.match(p);return u&&u[1]};var i,r,s,l;Object(re.a)(browser.runtime.onConnect).pipe(Object(o.a)(([e])=>e),(i=e=>(e.name||"other").replace(p,""),r=e=>e,s=e=>e.pipe(Object(b.a)(2)),function(e){return e.lift(new v(i,r,s,l))}),Object(n.a)(e=>"other"!==e.key),Object(w.a)(e=>e.pipe(Object(b.a)(2),Object(o.a)(e=>{const u=e.find(e=>"proxy"===a(e));if(!u)throw new Error("No proxy port");const p=e.find(e=>"expose"===a(e));if(!p)throw new Error("No expose port");return{proxy:u,expose:p}})))).subscribe(({proxy:e,expose:u})=>{console.log("Extension host client connected");const{worker:p,clientEndpoints:a}=V({wrapEndpoints:!0}),t=(e,u)=>{u.start(),e.onMessage.addListener(e=>{u.postMessage(e)}),u.addEventListener("message",({data:u})=>{e.postMessage(u)})};t(e,a.proxy),t(u,a.expose),e.onDisconnect.addListener(()=>p.terminate()),u.onDisconnect.addListener(()=>p.terminate())},e=>{console.error("Error handling extension host client connection",e)}),console.log("Sourcegraph background page initialized")}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYmFja2dyb3VuZC5idW5kbGUuanMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvMzdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpCQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9