var n=function(n,e,t,o,i){document.querySelector("body").insertAdjacentHTML("beforeend",'\n      <div\n        class="notification '.concat(i,'"\n        style="\n          top: ').concat(n,"px;\n          right: ").concat(e,'px;\n        "\n      >\n        <h2 class="title">').concat(t,"</h2>\n\n        <p>").concat(o,"</p>\n      </div>\n    "))};setTimeout(function(){document.querySelectorAll(".notification").forEach(function(n){return n.remove()})},2e3),n(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),n(160,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),n(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.02529a77.js.map
