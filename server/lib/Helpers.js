var h = {};

// Helper functions
h.chr = function(n){return String.fromCharCode(n);}
h.empty = function(o){return o=="" || o==0 || o==undefined;}
h.href = function(href){return "<a href=\"" + href + "\">" + href + "</a>";}

module.exports = h;