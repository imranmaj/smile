//Copyright (C) 2019 Imran Majeed

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (!changeInfo.url) {
        return;
    }
    if (tab.url.includes("www.amazon.com")) {
        console.log(tabId);
        console.log(tab.url);
        browser.tabs.update(
            tabId,
            {
                url: tab.url.replace("www.", "smile.")
            }
        );
    }
});