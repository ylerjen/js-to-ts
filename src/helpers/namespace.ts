declare var App;

App = {};
window.App = App;
console.log('declare namespaces');

/**
 * Namespace creation method
 */
window.setNamespace = function (ns_string, ns) {
    var parts = ns_string.split('.'),
        parent = ns || window.App;
    if (parts[0] === "App") {
        parts = parts.slice(1);
    }
    var pl = parts.length;
    for (var i = 0; i < pl; i++) {
        //create a property if it doesnt exist
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};