(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,e,n){t.exports=n(42)},42:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(19),o=n.n(i),c=n(45),s=n(11),l=n(6);s.b.add(l.e,l.d,l.h,l.a,l.b);var u=n(12),f=(n(39),n(8)),h=n(22),m=n(2),p=n.n(m);var v={query:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_QUERY":return e.query;case"CLEAR_QUERY":return"";default:return t}},data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_DATA":return e.data;case"CLEAR_DATA":return{};default:return t}}},d=Object(f.c)(v);var y=function(){try{var t=localStorage.getItem("state");return null===t?void 0:JSON.parse(t)}catch(t){return}}(),b=f.d,g=Object(f.e)(d,y,b(Object(f.a)(h.a)));g.subscribe(p.a.throttle(function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(t){}}(g.getState())},1e3));var w=g,E=n(17),S=n(43),N=n(46),k=n(25),x=n(44),O=n(23),C=n.n(O),j=n(0),D=n.n(j),P=n(7),_=n(24),T=n.n(_);function A(t){return{type:"SET_DATA",data:t}}function F(t,e){return function(n){var a={value:t};return e?(a.filter_list=e,fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return t.json()}).then(function(t){return n(A(t))})):fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return t.json()}).then(function(t){return n(A(t))})}}function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t){return B(t)||I(t)||M()}function R(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function Y(t,e){return B(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||M()}function M(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function B(t){if(Array.isArray(t))return t}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function U(t,e,n){return e&&H(t.prototype,e),n&&H(t,n),t}function X(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?J(t):e}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function K(t,e,n,a){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-a,2))}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return[t[0]*e+n,t[1]*e+a]}s.b.add(l.g,l.f,l.c);var Z=function(t){function e(t){var n;return q(this,e),(n=X(this,V(e).call(this,t))).canvas=r.a.createRef(),n.circles=[],n.labels=[],n.mousedown=!1,n.mousedownStart=0,n.scale=1,n.vX=0,n.vY=0,n.prevX=0,n.prevY=0,n.handleScroll=n.handleScroll.bind(J(n)),n.handleDrag=n.handleDrag.bind(J(n)),n}return Q(e,r.a.Component),U(e,[{key:"componentDidMount",value:function(){var t=this;this.paper=C()(this.canvas.current),this.canvas.current.addEventListener("wheel",this.handleScroll),this.canvas.current.addEventListener("drag",this.handleDrag),this.canvas.current.addEventListener("mousedown",function(e){t.prevX=e.x,t.prevY=e.y,t.mousedown=!0,t.mousedownStart=e.timeStamp}),this.canvas.current.addEventListener("mouseup",function(){t.mousedown=!1}),this.canvas.current.addEventListener("click",function(e){e.timeStamp-t.mousedownStart<500&&t.props.onSelectChange([])}),this.canvas.current.addEventListener("mousemove",this.handleDrag)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.width,a=e.height,r=e.data,i=e.selected,o=e.vertexFormatter;if(a===t.height&&n===t.width||this.paper.setSize(n,a),p.a.isEmpty(r)||!n||!a||a===t.height&&n===t.width&&r===t.data&&o===t.vertexFormatter||this.draw(),r===t.data||p.a.isEmpty(r)||this.resetView(),i!==t.selected){var c=!0,s=!1,l=void 0;try{for(var u,f=this.circles.entries()[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var h=Y(u.value,2),m=h[0],v=h[1];-1!==i.indexOf(m)?v.attr("stroke","#257AFD"):v.attr("stroke","#000")}}catch(t){s=!0,l=t}finally{try{c||null==f.return||f.return()}finally{if(s)throw l}}}}},{key:"draw",value:function(){var t,e,n=this,a=this,r=this.props,i=r.height,o=r.width,c=r.data,s=r.selected,l=r.onSelectChange,u=r.vertexFormatter,f=Math.min(o,i),h=[f/2+.05*o,f/2],m=p.a.partial(G,p.a,f,.05*o);this.circles=[],this.labels=[],this.paper.clear();var v=p.a.map(c.vertices,function(t){var e=Y(t,2),n=e[0],a=e[1];return[n,m(a)]}),d=p.a.map(v,1),y=p.a.map(c.intersects,function(t){var e=Y(t,5),n=e[0],a=e[1],r=e[2],i=e[3],o=e[4];return[n,m(a),r,i*f,p.a.map(o,p.a.unary(m))]});if(2===p.a.size(d))t=K.apply(void 0,R(d[0]).concat(R(d[1])))/2,this.paper.path("\n        M ".concat(d[0][0]," ").concat(d[0][1],"\n        A ").concat(t," ").concat(t," 0 0 1 ").concat(d[1][0]," ").concat(d[1][1],"\n        A ").concat(t," ").concat(t," 0 0 1 ").concat(d[0][0]," ").concat(d[0][1],"\n      ")),e=t;else{var b=L(d),g=b[0],w=b.slice(1);t=(e=K.apply(void 0,R(g).concat(R(d[1]))))/(2*Math.tan(Math.PI/d.length)),this.paper.path("M ".concat(g[0]," ").concat(g[1],"\n")+p()([].concat(R(w),[g])).map(function(t){return"L ".concat(t[0]," ").concat(t[1])}).join("\n"))}var E=!0,S=!1,N=void 0;try{for(var k,x=function(){var t,r,i,o=Y(k.value,2),c=o[0],f=Y(o[1],2),m=f[0],d=f[1],b=(r=h,[(i=d)[0]-r[0],i[1]-r[1]]),g=K.apply(void 0,R(b).concat([0,0])),w=function(t,e){return[e[0]+t[0],e[1]+t[1]]}(G(b,(20+g)/g),h),E=(360-360/v.length*c)%360,S=(t=n.paper).text.apply(t,R(w).concat([u[m]||m.toString()])),N=S.getBBox().width;if(n.labels.push(S),E<270&&E>90?S.rotate(E-180):S.rotate(E),N>e){var x=e/N;S.scale(x,x)}S.mouseover(function(){this.attr("fill","#257AFD"),p.a.forEach(y,function(t,e){-1!==t[0].indexOf(m)&&a.circles[e].attr("fill","#257AFD").toFront()})}),S.mouseout(function(){this.attr("fill","#000"),p.a.forEach(y,function(t,e){-1!==t[0].indexOf(m)&&a.circles[e].attr("fill","#fff")})}),S.click(function(t){t.stopPropagation();var e=p()(y).map(function(t,e){if(-1!==t[0].indexOf(m))return e}).filter(p.a.negate(p.a.isUndefined)).value();t.metaKey?l(p.a.uniq([].concat(R(s),R(e)))):t.altKey?l(p.a.difference(s,e)):l(e)})},O=v.entries()[Symbol.iterator]();!(E=(k=O.next()).done);E=!0)x()}catch(t){S=!0,N=t}finally{try{E||null==O.return||O.return()}finally{if(S)throw N}}var C=p()(y).map(4).map(p.a.size).sum(),j=!0,D=!1,P=void 0;try{for(var _,T=function(){var t,e=Y(_.value,2),r=e[0],i=e[1],o=(t=n.paper).circle.apply(t,R(i[1]).concat([i[3]]));if(n.circles.push(o),o.attr({fill:"#fff","fill-opacity":1}),o.click(function(t){t.stopPropagation(),t.metaKey?-1===s.indexOf(r)?l([].concat(R(s),[r])):l(s.filter(function(t){return t!==r})):l([r])}),o.mouseover(function(){this.attr({fill:"#257AFD","fill-opacity":1});var t=!0,e=!1,n=void 0;try{for(var r,o=function(){var t=r.value;a.labels[p.a.findIndex(v,function(e){return e[0]===t})].attr("fill","#257AFD")},c=i[0][Symbol.iterator]();!(t=(r=c.next()).done);t=!0)o()}catch(t){e=!0,n=t}finally{try{t||null==c.return||c.return()}finally{if(e)throw n}}}),o.mouseout(function(){o.attr({fill:"#fff","fill-opacity":1});var t=!0,e=!1,n=void 0;try{for(var r,c=function(){var t=r.value;a.labels[p.a.findIndex(v,function(e){return e[0]===t})].attr("fill","#000")},s=i[0][Symbol.iterator]();!(t=(r=s.next()).done);t=!0)c()}catch(t){e=!0,n=t}finally{try{t||null==s.return||s.return()}finally{if(e)throw n}}}),C<600){var c=!0,u=!1,f=void 0;try{for(var h,m=i[4][Symbol.iterator]();!(c=(h=m.next()).done);c=!0){var d=h.value;n.paper.path("\n          M ".concat(i[1][0]," ").concat(i[1][1],"\n          L ").concat(d[0]," ").concat(d[1],"\n          ")).attr("arrow-end","classic")}}catch(t){u=!0,f=t}finally{try{c||null==m.return||m.return()}finally{if(u)throw f}}o.toFront()}else{var y=n.paper.set();o.mouseover(function(){o.attr("fill-opacity",1);var t=!0,e=!1,a=void 0;try{for(var r,c=i[4][Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var s=r.value,l=n.paper.path("\n            M ".concat(i[1][0]," ").concat(i[1][1],"\n            L ").concat(s[0]," ").concat(s[1],"\n            "));l.attr("arrow-end","classic"),y.push(l),o.toFront()}}catch(t){e=!0,a=t}finally{try{t||null==c.return||c.return()}finally{if(e)throw a}}}),o.mouseout(function(){o.attr("fill-opacity",0),y.remove(),y.clear()})}},A=y.entries()[Symbol.iterator]();!(j=(_=A.next()).done);j=!0)T()}catch(t){D=!0,P=t}finally{try{j||null==A.return||A.return()}finally{if(D)throw P}}}},{key:"handleScroll",value:function(t){t.preventDefault();var e=t.deltaY;e>0?this.zoomOut():e<0&&this.zoomIn()}},{key:"handleDrag",value:function(t){t.preventDefault(),this.mousedown&&(this.vX+=(this.prevX-t.x)*this.scale,this.vY+=(this.prevY-t.y)*this.scale,this.prevX=t.x,this.prevY=t.y,this.paper.setViewBox(this.vX,this.vY,this.vW,this.vH))}},{key:"resetView",value:function(){this.scale=1,this.vX=0,this.vY=0,this.paper.setViewBox(0,0,this.vW,this.vH)}},{key:"zoomIn",value:function(){this.scale*=.95,this.paper.setViewBox(this.vX,this.vY,this.vW,this.vH)}},{key:"zoomOut",value:function(){this.scale*=1.05,this.paper.setViewBox(this.vX,this.vY,this.vW,this.vH)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.width,a=t.height;return r.a.createElement("div",{style:{width:n,height:a,position:"relative"}},r.a.createElement("div",{ref:this.canvas,className:T()(e)}),r.a.createElement("div",{style:{position:"absolute",top:"10px",left:"0px"}},r.a.createElement("div",{className:"btn-group-vertical"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.resetView.bind(this)},r.a.createElement(P.a,{icon:"expand",className:"mr-1"})),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.zoomIn.bind(this)},r.a.createElement(P.a,{icon:"search-plus",className:"mr-1"})),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.zoomOut.bind(this)},r.a.createElement(P.a,{icon:"search-minus",className:"mr-1"})))))}},{key:"vW",get:function(){return this.paper.width*this.scale}},{key:"vH",get:function(){return this.paper.height*this.scale}}]),e}();Z.propTypes={className:D.a.string,width:D.a.number,height:D.a.number,data:D.a.object.isRequired,selected:D.a.array,onSelectChange:D.a.func,vertexFormatter:D.a.object},Z.defaultProps={width:1280,height:800,onSelectChange:p.a.noop,vertexFormatter:{}};var $=function(t){function e(t){var n;return q(this,e),(n=X(this,V(e).call(this,t))).canvas=r.a.createRef(),n.state={height:0,width:0,data:{},items:[],itemsCurr:[],itemsPast:[],itemsFuture:[],selected:[]},n.setSize=p.a.debounce(n.setSize.bind(J(n)),100),n}return Q(e,r.a.Component),U(e,[{key:"componentDidMount",value:function(){this.getSungear(),this.setSize(),window.addEventListener("resize",this.setSize)}},{key:"componentDidUpdate",value:function(t,e){var n=this;this.state.selected!==e.selected&&this.setState({items:p()(this.state.selected).map(function(t){return n.props.data.intersects[t][2]}).flatten().sortBy().value()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setSize)}},{key:"setSize",value:function(){var t=this.canvas.current.getBoundingClientRect(),e=t.width,n=t.top;this.setState({height:document.documentElement.clientHeight-n,width:e})}},{key:"handleSelect",value:function(t){this.setState({selected:t})}},{key:"getSungear",value:function(t){var e=this,n=this.props.query;return this.props.getSungear(n,t).then(function(){e.setState({selected:[]})})}},{key:"narrowClick",value:function(t){var e=this;if(t.preventDefault(),this.state.items.length){var n=this.state.items;this.getSungear(n).then(function(){e.setState(function(t){return{itemsPast:[].concat(R(t.itemsPast),[t.itemsCurr]),itemsCurr:n,itemsFuture:[]}})})}}},{key:"prevClick",value:function(t){var e=this;t.preventDefault();var n=this.state.itemsPast,a=n.slice(0,n.length-1),r=n[n.length-1];this.getSungear(r).then(function(){e.setState(function(t){return{itemsCurr:r,itemsPast:a,itemsFuture:[t.itemsCurr].concat(R(t.itemsFuture))}})})}},{key:"nextClick",value:function(t){var e=this;t.preventDefault();var n=L(this.state.itemsFuture),a=n[0],r=n.slice(1);this.getSungear(a).then(function(){e.setState(function(t){return{itemsCurr:a,itemsPast:[].concat(R(t.itemsPast),[t.itemsCurr]),itemsFuture:r}})})}},{key:"resetClick",value:function(){var t=this;this.getSungear().then(function(){t.setState({itemsCurr:[],itemsPast:[],itemsFuture:[]})})}},{key:"inverseSelection",value:function(){var t=this.state.selected,e=this.props.data.intersects;this.setState({selected:p.a.difference(p.a.range(p.a.size(e)),t)})}},{key:"exportSvg",value:function(){try{!function(t,e){t.setAttribute("xmlns","http://www.w3.org/2000/svg");var n=t.outerHTML,a=new Blob(['<?xml version="1.0" standalone="no"?>\r\n',n],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(a),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i)}(this.canvas.current.getElementsByTagName("svg")[0],"sungear.svg")}catch(t){}}},{key:"render",value:function(){var t=this.state,e=t.height,n=t.width,a=t.selected,i=t.items,o=this.props.data;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{ref:this.canvas,className:"col-8 w-100"},r.a.createElement(Z,{width:n,height:e,data:o,selected:a,onSelectChange:this.handleSelect.bind(this)})),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"row m-1"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group mr-1"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.narrowClick.bind(this)},r.a.createElement(P.a,{icon:"filter",className:"mr-1"}),"Narrow"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.inverseSelection.bind(this)},r.a.createElement(P.a,{icon:"object-group",className:"mr-1"}),"Inverse"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.resetClick.bind(this)},r.a.createElement(P.a,{icon:"sync",className:"mr-1"}),"Reset")))),r.a.createElement("div",{className:"row m-1"},r.a.createElement("div",{className:"col"},r.a.createElement("div",null,"Selections:"),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:!this.state.itemsPast.length,onClick:this.prevClick.bind(this)},r.a.createElement(P.a,{icon:"arrow-circle-left",className:"mr-1"}),"Previous"),r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:!this.state.itemsFuture.length,onClick:this.nextClick.bind(this)},"Next",r.a.createElement(P.a,{icon:"arrow-circle-right",className:"ml-1"}))))),r.a.createElement("div",{className:"row m-1"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("a",{className:"btn btn-primary",href:"data:text/plain,"+p.a.join(this.state.items,"\n")+"\n",download:"items.txt"},"Export Items"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.exportSvg.bind(this)},"Export Image")))),r.a.createElement("div",{className:"row m-1"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,i.length.toLocaleString()," items"),r.a.createElement("div",{className:"overflow-auto border rounded",style:{maxHeight:"50vh"}},r.a.createElement("ul",{className:"list-group-flush"},p.a.map(i,function(t,e){return r.a.createElement("li",{key:e,className:"list-group-item"},t)}))))))))}}]),e}();$.propTypes={query:D.a.string,data:D.a.object,getSungear:D.a.func};var tt=Object(u.b)(function(t){return{query:t.query,data:t.data}},{getSungear:F})($);function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function at(t,e){return!e||"object"!==et(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ot=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=at(this,rt(e).call(this,t))).state={value:""},n}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(e,r.a.Component),n=e,(a=[{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n=this.state.value;this.props.getSungear(n).then(function(){e.props.setQuery(n),e.props.history.push("/sungear")})}},{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleDrop",value:function(t){var e,n=this;if(t.preventDefault(),this.setState({dropping:!1}),t.dataTransfer.items){var a=!0,r=!1,i=void 0;try{for(var o,c=t.dataTransfer.items[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var s=o.value;if("file"===s.kind){e=s.getAsFile();break}}}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}}else e=t.dataTransfer.files[0];if(e){var l=new FileReader;l.readAsText(e,"UTF-8"),l.onload=function(t){n.setState({value:t.target.result})}}else this.setState({value:t.dataTransfer.getData("text/plain")})}},{key:"handleDragOver",value:function(t){t.preventDefault()}},{key:"clear",value:function(){this.setState({value:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"display-4"},"Sungear"),r.a.createElement("p",{className:"lead"},"Visualize Overlapping Lists!"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group",onDragOver:this.handleDragOver.bind(this),onDrop:this.handleDrop.bind(this)},r.a.createElement("textarea",{className:"form-control",placeholder:"Input Lists Here",rows:5,onChange:this.handleChange.bind(this),value:this.state.value}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:this.clear.bind(this)},"Clear"),r.a.createElement("button",{className:"btn btn-primary"},"Submit")))))))))}}])&&nt(n.prototype,a),i&&nt(n,i),e}();ot.propTypes={getSungear:D.a.func,setQuery:D.a.func,history:D.a.object};var ct=Object(u.b)(null,{getSungear:F,setQuery:function(t){return{type:"SET_QUERY",query:t}}})(ot);function st(t){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ut(t,e){return!e||"object"!==st(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var mt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),ut(this,ft(e).apply(this,arguments))}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(e,r.a.Component),n=e,(a=[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(E.a,{to:"/",className:"navbar-brand"},"Sungear"),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.a,{exact:!0,className:"nav-link",to:"/",activeClassName:"active"},"Home")))),r.a.createElement(N.a,null,r.a.createElement(k.a,{path:"/",exact:!0,component:ct}),r.a.createElement(k.a,{path:"/sungear",component:tt}),r.a.createElement(x.a,{to:"/"})))}}])&&lt(n.prototype,a),i&&lt(n,i),e}();o.a.render(r.a.createElement(u.a,{store:w},r.a.createElement(c.a,null,r.a.createElement(mt,null))),document.getElementById("app"))}},[[27,1,2]]]);