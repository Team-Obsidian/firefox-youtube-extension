function logURL(requestDetails) {
  if (requestDetails.url.includes("i.ytimg.com/vi")) {
    console.log('https://www.youtube.com/watch?v=' + requestDetails.url.split("/")[4]);
    //console.log(`Loading: ${requestDetails.url}`);
  } 
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});