
//hljs.initHighlightingOnLoad();
hljs.highlightAll();
getSyntaxHighlight();

function getSyntaxHighlight() {
    let body = document.querySelector('code');
    let highlightedBody = hljs.highlightAuto(body.value);
    body.value = highlightedBody.value;
}