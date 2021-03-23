//Copyright (C) 2021 Imran Majeed

chrome.tabs.onUpdated.addListener((tabId) => {
    chrome.tabs.get(tabId, (tab) => {
        if (tab.url.includes("www.amazon.com")) {
            // get timestamp of visit to www.amazon.com ...
            chrome.history.search({ text: "www.amazon.com" }, (results) => {
                // ...then delete the www.amazon.com entry from history
                // so that pressing the back button will not go back to www.amazon.com
                // (that would  cause a redirect back to smile.amazon.com, creating a loop)
                chrome.history.deleteRange({
                    startTime: results[0].lastVisitTime - 0.001,
                    endTime: results[0].lastVisitTime + 0.001,
                }, () => {
                    chrome.tabs.update(
                        tabId,
                        {
                            url: tab.url.replace("www.", "smile.")
                        }
                    );
                });
            });
        }
    });
});