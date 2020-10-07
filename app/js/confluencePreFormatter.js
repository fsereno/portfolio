"use strict;"

function confluencePreFormatter() {
    var node = document.getElementsByTagName('table')
    for (i = 0; i < node.length; i++) {
        node[i].replaceWith(...node[i].getElementsByTagName('pre'));
    }
}