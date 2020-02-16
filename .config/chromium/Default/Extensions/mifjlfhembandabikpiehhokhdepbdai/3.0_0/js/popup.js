var queryIp = '';
var queryDomain = '';
var refreshTimerId = 0;
var refreshCount = 0;
var maxRefresh = 3;
var activeTabId = 0;
var background = chrome.extension.getBackgroundPage();
var language = navigator.language;

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

var T = function(id) {
    return document.getElementById(id);
};
var refreshClientIP = function() {
    var year = new Date().getFullYear();
    if (year < 2019) year = 2019;
    T('since_year').innerHTML = year;
    ajaxGet('https://clientapi.ipip.net/browser/myip', function(info) {
        if (info.ret == 0) {
            T('client_ip').innerHTML = info.data.client_ip + ' ' + info.data.location;
        } else {
            T('client_ip').innerHTML = info.msg;
        }
    });
};

var load = function(ip, domain) {
    var isv6 = false;
    if (background.ipData[ip]) {
        $.each(background.dnsData[ip], function(k, v){
            if (v.ip.indexOf(':') > -1) {
                isv6 = true;
            }
            if (v.ip != ip) {
                $('#dns').append('<dd><span>' + v.ip + '<span><span class="arrows glyphicon glyphicon-triangle-right"></span></dd>')
            }
        });
        render(background.ipData[ip]);
        if (!isv6) {
            T('layoutL').style.width = '25%';
            T('layoutR').style.width = '75%';
        }
        return;
    }

    ajaxGet("https://clientapi.ipip.net/browser/chrome?ip=" + ip + '&l='+navigator.language+'&domain=' + domain, function(info) {
        if (info.ret == 0) {

            render(info.data);
        } else {
            T('load').style.display = '';
        }
    })
};

var render = function(info){

   // T('domain_dns_ip').innerHTML = info.dns_ip.join(" ");
    T('show_ip').innerHTML = info.ip;
    T('location').innerHTML = info.country + " " + info.province + " " + info.city;
    T('isp').innerHTML = info.isp;
    T('asn').innerHTML = info.asn.join("<br/>");
    T('ports').innerHTML = info.ports.join(" ");
  //  T('ipip').style.display = '';
   // T('load').style.display = 'none';
};

var refresh = function() {

    if (background.tabsIPMap[activeTabId]) {
        queryIp = background.tabsIPMap[activeTabId];
        T('browser_dns_ip').innerHTML = queryIp;
    }
    if (background.tabsDomainMap[activeTabId]) {
        queryDomain = background.tabsDomainMap[activeTabId];
        T('domain').innerHTML = queryDomain;
    }
    if (queryIp != '' && queryDomain != '') {
        clearInterval(refreshTimerId);
      //  T('site').style.display = '';
        load(queryIp, queryDomain);
    } else {
        if (refreshCount >= maxRefresh) {
            return;
        }
        chrome.tabs.query({ active: true }, function(tabs) {
            if (tabs.length > 0) {
                activeTabId = tabs[0].id;
                refreshCount++;
                background.reloadTab(activeTabId);
            } else {
               // console.log("tabs is not active");
            }
        });
    }
};

var init = function() {

    $('.ips').delegate('dd', 'click', function(){
        var ip = $(this).text();
        if (ip.indexOf('.') == -1 && ip.indexOf(':') == -1) { //domains
            $('#layoutR').hide();
            $('#layoutR2').show();
            $('.ips dd').removeClass('active');
            $(this).addClass('active');
            return;
        } else { // ips
            $('#layoutR').show();
            $('#layoutR2').hide();
        }
        if (!!background.dnsData[queryIp]) {
            $('.ips dd').removeClass('active');
            $(this).addClass('active');
            $.each(background.dnsData[queryIp], function(k, v){
                if (v.ip == ip) {
                    render(v);
                }
            })
        }
    }); 

    if (language.indexOf('CN') > -1) {
		chrome.browserAction.setTitle({title:"网站IP数据信息 Powered by IPIP.net"});
	} else {
		chrome.browserAction.setTitle({title:"WebSite IP Information query Powered by IPIP.net"});
	}

    refreshClientIP();

    chrome.tabs.query({ active: true,windowId: chrome.windows.WINDOW_ID_CURRENT }, function(tabs) {
        if (tabs.length > 0) {
            activeTabId = tabs[0].id;
            refreshTimerId = setInterval(function() {
               refresh();
            }, 500);

           refresh();
        } else {
            console.log("tabs is not active");
        }
    });

    T("to_ipip").onclick = function() {
        var fip = $('#show_ip').html();
        chrome.tabs.create({ url: "https://www.ipip.net/ip/"+fip+".html", selected: false }, function(tab) {
            // chrome.tabs.executeScript(tab.id, {
            //     code: "var input=document.getElementById('ip');input.value='" + fip + "';input.form.submit();"
            // })
        });
        return false;
    };

    $('#copyright').on('click', function(){
        chrome.tabs.create({ url: "https://www.ipip.net/ip.html", selected: true }, function(tab) {

        });
    });
    
    $('#privacy').on('click', function(){
        chrome.tabs.create({ url: this.href, selected: true }, function(tab) {

        });
    });

    new Fingerprint2().get(function(result, components){
        $.post('https://www.ipip.net/fingerprint.php', {hash:result, components:components}, function(){})
    })

    $('#domain_num').text(background.domainList.length);
    var ds = [];
    var dhtml = [];
    background.domainList.sort(function(a, b){
        return b.amount - a.amount;
    });
    background.domainList.forEach(function(v, k){
        ds.push(v.domain);

        dhtml.push('<dl class="dsl">');
        dhtml.push('<dt>'+ v.domain +'</dt>');
        dhtml.push('<dd>'+ v.amount +'</dd>');
        dhtml.push('</dl>');
    });
    $('#domains').html('<div>'+dhtml.join('')+'</div>');
    $('#copy').attr('data-clipboard-text', ds.join("\n"));
    
    c = new ClipboardJS("#copy");
};

init();