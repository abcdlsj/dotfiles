var ajaxGet = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onerror = function(e){
        callback({
            ret:-1,
            msg:"Network Error"
        });
    };
    xhr.ontimeout = function(e){
        callback({
            ret:-1,
            msg:"Request Timeout"
        });
    };
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            try {
                var resp = JSON.parse(xhr.responseText);
                callback(resp);
            } catch (e) {
                callback({
                    ret: 100,
                    msg: "Server Response Error"
                });
            }
        }
    };
    xhr.send();
};

var tabsIPMap = {};
var tabsDomainMap = {};
var ipData = {};
var dnsData = {};
var lang = navigator.language;
var renderIcon = function(info){
    var title = '';
    if (info.country.length > 0) {
        if (info.country_code == 'HK' || info.country_code == 'MO' || info.country_code == 'TW') {
            title = info.country + ' ' + info.province;
        } else {
            title = info.country;
        }
	if (lang.indexOf('CN') > -1) {
		chrome.browserAction.setTitle({title:"当前网站的IP地址为："+ title +"\n"+ "IP数据信息 Powered by IPIP.net"});
	} else {
		chrome.browserAction.setTitle({title:"The current site IP GeoLocation："+ title +"\n"+ "IP Info Powered by IPIP.net"});
	}
    }
    if (info.country_code.length == 2) {
        chrome.browserAction.setIcon({path:"icons/" + info.country_code + ".png"});
    } else {
        chrome.browserAction.setIcon({path:"Q.png"});
    }
};
var reloadTab = function(tabId){
    chrome.tabs.reload(tabId, {}, function(){});
};

var IP_REGEXP = /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
var getSelection = function(info, t){
	if (!IP_REGEXP.test(info.selectionText)) {
		alert('只支持IP查询');
		return;
	}
      chrome.tabs.create({ url: "https://www.ipip.net/ip/"+ info.selectionText +".html", selected: false }, function(tab) {
            // chrome.tabs.executeScript(tab.id, {
            //     code: "var input=document.getElementById('ip');input.value='"+info.selectionText+"';input.form.submit();"
            // })
     });
};
if  (lang.indexOf('zh') >-1) {
	chrome.contextMenus.create({
	    id: "ipip",
	    contexts: ["selection"],
	    title: "使用IPIP.NET搜索 \"%s\"",
	    onclick:getSelection
	});
} else {
	chrome.contextMenus.create({
	    id: "ipip",
	    contexts: ["selection"],
	    title: "Search \"%s\" To IPIP.net",
	    onclick:getSelection
	});
}
chrome.webRequest.onCompleted.addListener(function(e) {
    var domain = e.url.match(/:\/\/(.*?)\//)[1];
    tabsDomainMap[e.tabId] = domain;
    tabsIPMap[e.tabId] = e.ip;

    ajaxGet("https://clientapi.ipip.net/browser/chrome?ip=" + e.ip + '&l='+navigator.language+'&domain=' + domain, function(info){
        if (info.ret == 0) {
            ipData[e.ip] = info.data;
            dnsData[e.ip] = info.dns;
            renderIcon(info.data);
            chrome.browserAction.enable(e.tabId);
        }
    });
}, {
    urls: ["http://*/*", "https://*/*"],
    types: ["main_frame"]
});
chrome.tabs.onCreated.addListener(function(tab){
    chrome.browserAction.disable(tab.tabId)
    chrome.browserAction.setIcon({path:"images/icon_gray_38.png"})
    // chrome.browserAction.setIcon({path:"images/icon_38.png"});
});

chrome.tabs.onActivated.addListener(function(e){
    if (tabsIPMap[e.tabId]) {
        chrome.browserAction.setIcon({path:"images/icon_38.png"})
        chrome.browserAction.enable(e.tabId)
        if (ipData[tabsIPMap[e.tabId]]) {
            renderIcon(ipData[tabsIPMap[e.tabId]]);
        }
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setPopup({popup:"popup.html"})
    /*
    var flag = tab.url.substring(0,7);
    if (flag == "http://" || flag == "https:/") {
        chrome.browserAction.setPopup({popup:"popup22.html"})
    } else {
        chrome.browserAction.disable(tab.tabId)
        chrome.browserAction.setIcon({path:"images/icon_gray_38.png"})
        // chrome.browserAction.setTitle({title:"about:blank"})
    }
    */
});

var domainList = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    domainList = [];
    for (p in request.ds) {
        domainList.push({
            "domain" : p,
            "amount" : request.ds[p],
        });
    }
});