chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleRTL
  });

  // Toggle icon to indicate current state
  chrome.storage.local.get(['rtlEnabled'], function(result) {
    let rtlEnabled = !result.rtlEnabled;
    chrome.storage.local.set({rtlEnabled: rtlEnabled});
    
    chrome.action.setIcon({
      path: rtlEnabled ? "icon.png" : "icon-rtl.png",
      tabId: tab.id
    });
  });
});

function toggleRTL() {
  const styleId = 'rtl-style';
  let existingStyle = document.getElementById(styleId);
  
  if (existingStyle) {
    existingStyle.remove();
  } else {
    let style = document.createElement('style');
    style.id = styleId;
    style.textContent = '*{direction:rtl}';
    document.head.appendChild(style);
  }
}