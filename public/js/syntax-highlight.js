
//hljs.initHighlightingOnLoad();
hljs.highlightAll();
// getSyntaxHighlight();

window.onload = function getSyntaxHighlight() {
    let body = document.querySelector('code');
    let highlightedBody = hljs.highlightAuto(body.value);
    body.value = highlightedBody.value;
}