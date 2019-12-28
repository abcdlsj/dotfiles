var domains = {};

$('img').each(function(k, v){

    var match = v.src.match(/:?\/\/(.*?)\//);
    if (match) {
        if (psl.isValid(match[1])) {
            if (domains[match[1]]) {
                domains[match[1]] += 1;
            } else {
                domains[match[1]] = 1;
            }
        }
    }
});

$('a').each(function(k, v){
    var match = v.href.match(/:?\/\/(.*?)\//);
    if (match) {
        if (psl.isValid(match[1])) {
            if (domains[match[1]]) {
                domains[match[1]] += 1;
            } else {
                domains[match[1]] = 1;
            }
        }
    }
});

$('script').each(function(k, v){
    var match = v.src.match(/:?\/\/(.*?)\//);
    if (match) {
        if (psl.isValid(match[1])) {
            if (domains[match[1]]) {
                domains[match[1]] += 1;
            } else {
                domains[match[1]] = 1;
            }
        }
    }
});

$('link').each(function(k, v){
    var match = v.href.match(/:?\/\/(.*?)\//);
    if (match) {
        if (psl.isValid(match[1])) {
            if (domains[match[1]]) {
                domains[match[1]] += 1;
            } else {
                domains[match[1]] = 1;
            }
        }
    }
});

console.log(domains);

chrome.runtime.sendMessage({ds:domains}, function(response) {
    // console.log('收到来自后台的回复：' + response);
 });