//Copyright (C) 2019 Imran Majeed

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.tabs.get(tabId, function(tab){
        if (tab.url.includes("www.amazon.com")) {
            chrome.tabs.update(
                tabId,
                {
                    url: tab.url.replace("www.", "smile.")
                }
            );
        }
    });    
});