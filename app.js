const banner = document.querySelector("#page-banner");

console.log('#page-banner node type is',banner.nodeType);
console.log('#page-banner node name is',banner.nodeName);

console.log('#page-banner has child nodes',banner.hasChildNodes());

const clonedBanner = banner.cloneNode();
console.log(clonedBanner);
// List of Node Types
//www.w3schools.com/jsref/prop_node_nodetype.asp

//https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=1
