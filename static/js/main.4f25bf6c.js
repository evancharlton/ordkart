/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	module.exports = {
	
	  /* Allowed flush values; see deflate() and inflate() below for details */
	  Z_NO_FLUSH:         0,
	  Z_PARTIAL_FLUSH:    1,
	  Z_SYNC_FLUSH:       2,
	  Z_FULL_FLUSH:       3,
	  Z_FINISH:           4,
	  Z_BLOCK:            5,
	  Z_TREES:            6,
	
	  /* Return codes for the compression/decompression functions. Negative values
	  * are errors, positive values are used for special but normal events.
	  */
	  Z_OK:               0,
	  Z_STREAM_END:       1,
	  Z_NEED_DICT:        2,
	  Z_ERRNO:           -1,
	  Z_STREAM_ERROR:    -2,
	  Z_DATA_ERROR:      -3,
	  Z_MEM_ERROR:       -4,
	  Z_BUF_ERROR:       -5,
	  //Z_VERSION_ERROR: -6,
	
	  /* compression levels */
	  Z_NO_COMPRESSION:         0,
	  Z_BEST_SPEED:             1,
	  Z_BEST_COMPRESSION:       9,
	  Z_DEFAULT_COMPRESSION:   -1,
	
	
	  Z_FILTERED:               1,
	  Z_HUFFMAN_ONLY:           2,
	  Z_RLE:                    3,
	  Z_FIXED:                  4,
	  Z_DEFAULT_STRATEGY:       0,
	
	  /* Possible values of the data_type field (though see inflate()) */
	  Z_BINARY:                 0,
	  Z_TEXT:                   1,
	  //Z_ASCII:                1, // = Z_TEXT (deprecated)
	  Z_UNKNOWN:                2,
	
	  /* The deflate compression method */
	  Z_DEFLATED:               8
	  //Z_NULL:                 null // Use -1 or null inline, depending on var type
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	module.exports = {
	  2:      'need dictionary',     /* Z_NEED_DICT       2  */
	  1:      'stream end',          /* Z_STREAM_END      1  */
	  0:      '',                    /* Z_OK              0  */
	  '-1':   'file error',          /* Z_ERRNO         (-1) */
	  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
	  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
	  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
	  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
	  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) if (void 0 !== props[i]) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj, offset) {
	        return [].slice.call(obj, offset);
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function empty(x) {
	        return void 0 === x || null === x;
	    }
	    function falsey(value) {
	        return value === !1 || empty(value);
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function h(nodeName, attributes, firstChild) {
	        var children, arr, lastSimple, len = arguments.length;
	        if (len > 2) {
	            var type = typeof firstChild;
	            if (3 === len && 'object' !== type && 'function' !== type) {
	                if (!falsey(firstChild)) children = [ String(firstChild) ];
	            } else {
	                children = [];
	                for (var i = 2; i < len; i++) {
	                    var _p = arguments[i];
	                    if (!falsey(_p)) {
	                        if (_p.join) arr = _p; else (arr = SHARED_TEMP_ARRAY)[0] = _p;
	                        for (var j = 0; j < arr.length; j++) {
	                            var child = arr[j], simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
	                            if (simple && !isString(child)) child = String(child);
	                            if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) {
	                                children.push(child);
	                                lastSimple = simple;
	                            }
	                        }
	                    } else ;
	                }
	            }
	        } else if (attributes && attributes.children) return h(nodeName, attributes, attributes.children);
	        if (attributes) {
	            if (attributes.children) delete attributes.children;
	            if (!isFunction(nodeName)) {
	                if ('className' in attributes) {
	                    attributes.class = attributes.className;
	                    delete attributes.className;
	                }
	                lastSimple = attributes.class;
	                if (lastSimple && !isString(lastSimple)) attributes.class = hashToClassName(lastSimple);
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? toArray(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0];
	        return function(e) {
	            var _component$setState;
	            var v, i, t = e && e.currentTarget || this, s = component.state, obj = s;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = t.nodeName ? (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value : e;
	            if (isFunction(v)) v = v.call(t);
	            if (path.length > 1) {
	                for (i = 0; i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var p, currentItems = items;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            while (p = currentItems.pop()) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function ensureNodeData(node, data) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
	    }
	    function getNodeType(node) {
	        if (node instanceof Text) return 3;
	        if (node instanceof Element) return 1; else return 0;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, value, old, isSvg) {
	        ensureNodeData(node)[name] = value;
	        if ('key' !== name && 'children' !== name && 'innerHTML' !== name) if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if (name.match(/^on/i)) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy);
	            } else if (l[name]) node.removeEventListener(name, eventProxy);
	            l[name] = value;
	        } else if ('type' !== name && !isSvg && name in node) {
	            setProperty(node, name, empty(value) ? '' : value);
	            if (falsey(value)) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (falsey(value)) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function getRawNodeAttributes(node) {
	        var attrs = {};
	        for (var i = node.attributes.length; i--; ) attrs[node.attributes[i].name] = node.attributes[i].value;
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return 3 === getNodeType(node);
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var defaultProps = vnode.nodeName.defaultProps, props = clone(defaultProps || vnode.attributes);
	        if (defaultProps) extend(props, vnode.attributes);
	        if (vnode.children) props.children = vnode.children;
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = toLowerCase(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        ensureNodeData(node);
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (1 === getNodeType(node)) {
	            ensureNodeData(node, getRawNodeAttributes(node));
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) if (c.componentDidMount) c.componentDidMount();
	    }
	    function diff(dom, vnode, context, mountAll, parent, rootComponent, nextSibling) {
	        diffLevel++;
	        var ret = idiff(dom, vnode, context, mountAll, rootComponent);
	        if (parent && ret.parentNode !== parent) parent.insertBefore(ret, nextSibling || null);
	        if (!--diffLevel) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, rootComponent) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (empty(vnode)) {
	            vnode = '';
	            if (rootComponent) {
	                if (dom) {
	                    if (8 === dom.nodeType) return dom;
	                    collectNode(dom);
	                }
	                return document.createComment(vnode);
	            }
	        }
	        if (isString(vnode)) {
	            if (dom) {
	                if (3 === getNodeType(dom) && dom.parentNode) {
	                    dom.nodeValue = vnode;
	                    return dom;
	                }
	                collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var svgMode, out = dom, nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        svgMode = 'svg' === toLowerCase(nodeName);
	        if (svgMode) isSvgMode = !0;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vnode.children && 1 === vnode.children.length && 'string' == typeof vnode.children[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) out.firstChild.nodeValue = vnode.children[0]; else if (vnode.children || out.firstChild) innerDiffNode(out, vnode.children, context, mountAll);
	        diffAttributes(out, vnode.attributes);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        if (svgMode) isSvgMode = !1;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            if (keyedLen && vchild.attributes) {
	                var key = vchild.key;
	                if (!empty(key) && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            }
	            if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs) {
	        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
	        for (var _name in old) if (!(attrs && _name in attrs)) setAccessor(dom, _name, null, old[_name], isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!(_name2 in old) || attrs[_name2] != old[_name2] || ('value' === _name2 || 'checked' === _name2) && attrs[_name2] != dom[_name2]) setAccessor(dom, _name2, attrs[_name2], old[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        inst.props = props;
	        inst.context = context;
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        var b = component.base;
	        if (!component._disableRendering) {
	            component._disableRendering = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (empty(b) || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disableRendering = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !b) renderComponent(component, 1, mountAll); else triggerComponentRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll) {
	        if (!component._disableRendering) {
	            var skip, rendered, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase, baseParent = initialBase && initialBase.parentNode, initialComponent = initialBase && initialBase._component, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = initialChildComponent, childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1);
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, baseParent, !0, initialBase && initialBase.nextSibling);
	                    }
	                }
	                if (initialBase && base !== initialBase) if (!toUnmount && initialComponent === component && !initialChildComponent && initialBase.parentNode) {
	                    initialBase._component = null;
	                    recollectNodeTree(initialBase);
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) {
	                mounts.unshift(component);
	                if (!diffLevel) flushMounts();
	            } else if (!skip && component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) c.nextBase = dom;
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        var base = component.base;
	        component._disableRendering = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context;
	        this.props = props;
	        this.state = this.getInitialState && this.getInitialState() || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var options = {
	        vnode: empty
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var items = [];
	    var itemsOffline = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + eventPath;
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	
	const _has = (obj, key) => {
	  return Object.prototype.hasOwnProperty.call(obj, key);
	};
	
	module.exports.assign = function (obj /*from1, from2, from3, ...*/) {
	  const sources = Array.prototype.slice.call(arguments, 1);
	  while (sources.length) {
	    const source = sources.shift();
	    if (!source) { continue; }
	
	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be non-object');
	    }
	
	    for (const p in source) {
	      if (_has(source, p)) {
	        obj[p] = source[p];
	      }
	    }
	  }
	
	  return obj;
	};
	
	
	// Join array of chunks to single array.
	module.exports.flattenChunks = (chunks) => {
	  // calculate data length
	  let len = 0;
	
	  for (let i = 0, l = chunks.length; i < l; i++) {
	    len += chunks[i].length;
	  }
	
	  // join chunks
	  const result = new Uint8Array(len);
	
	  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
	    let chunk = chunks[i];
	    result.set(chunk, pos);
	    pos += chunk.length;
	  }
	
	  return result;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	// String encode/decode helpers
	'use strict';
	
	
	// Quick check if we can use fast array to bin string conversion
	//
	// - apply(Array) can fail on Android 2.2
	// - apply(Uint8Array) can fail on iOS 5.1 Safari
	//
	let STR_APPLY_UIA_OK = true;
	
	try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }
	
	
	// Table with utf8 lengths (calculated by first byte of sequence)
	// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
	// because max possible codepoint is 0x10ffff
	const _utf8len = new Uint8Array(256);
	for (let q = 0; q < 256; q++) {
	  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
	}
	_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
	
	
	// convert string to array (typed, when possible)
	module.exports.string2buf = (str) => {
	  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
	    return new TextEncoder().encode(str);
	  }
	
	  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
	
	  // count binary size
	  for (m_pos = 0; m_pos < str_len; m_pos++) {
	    c = str.charCodeAt(m_pos);
	    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
	      c2 = str.charCodeAt(m_pos + 1);
	      if ((c2 & 0xfc00) === 0xdc00) {
	        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
	        m_pos++;
	      }
	    }
	    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
	  }
	
	  // allocate buffer
	  buf = new Uint8Array(buf_len);
	
	  // convert
	  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
	    c = str.charCodeAt(m_pos);
	    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
	      c2 = str.charCodeAt(m_pos + 1);
	      if ((c2 & 0xfc00) === 0xdc00) {
	        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
	        m_pos++;
	      }
	    }
	    if (c < 0x80) {
	      /* one byte */
	      buf[i++] = c;
	    } else if (c < 0x800) {
	      /* two bytes */
	      buf[i++] = 0xC0 | (c >>> 6);
	      buf[i++] = 0x80 | (c & 0x3f);
	    } else if (c < 0x10000) {
	      /* three bytes */
	      buf[i++] = 0xE0 | (c >>> 12);
	      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
	      buf[i++] = 0x80 | (c & 0x3f);
	    } else {
	      /* four bytes */
	      buf[i++] = 0xf0 | (c >>> 18);
	      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
	      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
	      buf[i++] = 0x80 | (c & 0x3f);
	    }
	  }
	
	  return buf;
	};
	
	// Helper
	const buf2binstring = (buf, len) => {
	  // On Chrome, the arguments in a function call that are allowed is `65534`.
	  // If the length of the buffer is smaller than that, we can use this optimization,
	  // otherwise we will take a slower path.
	  if (len < 65534) {
	    if (buf.subarray && STR_APPLY_UIA_OK) {
	      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
	    }
	  }
	
	  let result = '';
	  for (let i = 0; i < len; i++) {
	    result += String.fromCharCode(buf[i]);
	  }
	  return result;
	};
	
	
	// convert array to string
	module.exports.buf2string = (buf, max) => {
	  const len = max || buf.length;
	
	  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
	    return new TextDecoder().decode(buf.subarray(0, max));
	  }
	
	  let i, out;
	
	  // Reserve max possible length (2 words per char)
	  // NB: by unknown reasons, Array is significantly faster for
	  //     String.fromCharCode.apply than Uint16Array.
	  const utf16buf = new Array(len * 2);
	
	  for (out = 0, i = 0; i < len;) {
	    let c = buf[i++];
	    // quick process ascii
	    if (c < 0x80) { utf16buf[out++] = c; continue; }
	
	    let c_len = _utf8len[c];
	    // skip 5 & 6 byte codes
	    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }
	
	    // apply mask on first byte
	    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
	    // join the rest
	    while (c_len > 1 && i < len) {
	      c = (c << 6) | (buf[i++] & 0x3f);
	      c_len--;
	    }
	
	    // terminated by end of string?
	    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }
	
	    if (c < 0x10000) {
	      utf16buf[out++] = c;
	    } else {
	      c -= 0x10000;
	      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
	      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
	    }
	  }
	
	  return buf2binstring(utf16buf, out);
	};
	
	
	// Calculate max possible position in utf8 buffer,
	// that will not break sequence. If that's not possible
	// - (very small limits) return max size as is.
	//
	// buf[] - utf8 bytes array
	// max   - length limit (mandatory);
	module.exports.utf8border = (buf, max) => {
	
	  max = max || buf.length;
	  if (max > buf.length) { max = buf.length; }
	
	  // go back from last position, until start of sequence found
	  let pos = max - 1;
	  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }
	
	  // Very small and broken sequence,
	  // return max, because we should return something anyway.
	  if (pos < 0) { return max; }
	
	  // If we came to start of buffer - that means buffer is too small,
	  // return max too.
	  if (pos === 0) { return max; }
	
	  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	// Note: adler32 takes 12% for level 0 and 2% for level 6.
	// It isn't worth it to make additional optimizations as in original.
	// Small size is preferable.
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	const adler32 = (adler, buf, len, pos) => {
	  let s1 = (adler & 0xffff) |0,
	      s2 = ((adler >>> 16) & 0xffff) |0,
	      n = 0;
	
	  while (len !== 0) {
	    // Set limit ~ twice less than 5552, to keep
	    // s2 in 31-bits, because we force signed ints.
	    // in other case %= will fail.
	    n = len > 2000 ? 2000 : len;
	    len -= n;
	
	    do {
	      s1 = (s1 + buf[pos++]) |0;
	      s2 = (s2 + s1) |0;
	    } while (--n);
	
	    s1 %= 65521;
	    s2 %= 65521;
	  }
	
	  return (s1 | (s2 << 16)) |0;
	};
	
	
	module.exports = adler32;


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	// Note: we can't get significant speed boost here.
	// So write code to minimize size - no pregenerated tables
	// and array tools dependencies.
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	// Use ordinary array, since untyped makes no boost here
	const makeTable = () => {
	  let c, table = [];
	
	  for (var n = 0; n < 256; n++) {
	    c = n;
	    for (var k = 0; k < 8; k++) {
	      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
	    }
	    table[n] = c;
	  }
	
	  return table;
	};
	
	// Create table on load. Just 255 signed longs. Not a problem.
	const crcTable = new Uint32Array(makeTable());
	
	
	const crc32 = (crc, buf, len, pos) => {
	  const t = crcTable;
	  const end = pos + len;
	
	  crc ^= -1;
	
	  for (let i = pos; i < end; i++) {
	    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
	  }
	
	  return (crc ^ (-1)); // >>> 0;
	};
	
	
	module.exports = crc32;


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	function ZStream() {
	  /* next input byte */
	  this.input = null; // JS specific, because we have no pointers
	  this.next_in = 0;
	  /* number of bytes available at input */
	  this.avail_in = 0;
	  /* total number of input bytes read so far */
	  this.total_in = 0;
	  /* next output byte should be put there */
	  this.output = null; // JS specific, because we have no pointers
	  this.next_out = 0;
	  /* remaining free space at output */
	  this.avail_out = 0;
	  /* total number of bytes output so far */
	  this.total_out = 0;
	  /* last error message, NULL if no error */
	  this.msg = ''/*Z_NULL*/;
	  /* not visible by applications */
	  this.state = null;
	  /* best guess about the data type: binary or text */
	  this.data_type = 2/*Z_UNKNOWN*/;
	  /* adler32 value of the uncompressed data */
	  this.adler = 0;
	}
	
	module.exports = ZStream;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(10);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _preact = __webpack_require__(3);
	
	var _Card = __webpack_require__(12);
	
	var _pako = __webpack_require__(17);
	
	var _pako2 = _interopRequireDefault(_pako);
	
	__webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ALPHABET = "abcdefghijklmnopqrstuvwxyzæøå".split("");
	
	var _ref2 = (0, _preact.h)(
	  "div",
	  null,
	  "loading"
	);
	
	var _ref3 = (0, _preact.h)(
	  "h1",
	  null,
	  "Error"
	);
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
	
	    _this.componentDidMount = function () {
	      fetch("/nb.json.gz").then(function (res) {
	        return res.arrayBuffer();
	      }).then(function (arrayBuffer) {
	        return _pako2.default.inflate(arrayBuffer, { to: "string" });
	      }).then(function (str) {
	        return JSON.parse(str);
	      }).then(function (json) {
	        _this.trie = json;
	        _this.setState({
	          status: "loaded",
	          letters: [],
	          path: []
	        });
	      });
	
	      _this.keypress = function (e) {
	        var letter = e.key.toLowerCase();
	        _this.push(letter);
	      };
	
	      _this.keydown = function (e) {
	        if (e.key === "Backspace") {
	          _this.pop();
	        }
	      };
	
	      window.addEventListener("keypress", _this.keypress);
	      window.addEventListener("keydown", _this.keydown);
	    };
	
	    _this.componentWillUnmount = function () {
	      window.removeEventListener("keypress", _this.keypress);
	    };
	
	    _this.push = function (letter) {
	      var node = _this.currentNode();
	      var next = node[letter];
	
	      if (!next) {
	        return;
	      }
	
	      _this.setState({
	        letters: [].concat(_toConsumableArray(_this.state.letters), [letter]),
	        path: [].concat(_toConsumableArray(_this.state.path), [next])
	      });
	    };
	
	    _this.pop = function () {
	      if (_this.state.path.length === 0) {
	        return;
	      }
	
	      _this.setState({
	        letters: _this.state.letters.slice(0, -1),
	        path: _this.state.path.length > 0 ? _this.state.path.slice(0, -1) : []
	      });
	    };
	
	    _this.currentNode = function () {
	      var path = _this.state.path;
	
	      return path.length > 0 ? path[path.length - 1] : _this.trie;
	    };
	
	    _this.render = function (_, _ref) {
	      var status = _ref.status,
	          path = _ref.path,
	          letters = _ref.letters;
	
	      var node = _this.currentNode();
	      switch (status) {
	        case "loading":
	          {
	            return _ref2;
	          }
	        case "loaded":
	          {
	            var info = node.info;
	
	            var buttons = ALPHABET.map(function (letter) {
	              return (0, _preact.h)(
	                "button",
	                {
	                  disabled: !node[letter],
	                  onClick: function onClick() {
	                    return _this.push(letter);
	                  },
	                  key: letter
	                },
	                letter
	              );
	            });
	            return (0, _preact.h)(
	              "div",
	              { "class": "container" },
	              (0, _preact.h)(
	                "h1",
	                null,
	                letters.join("") || String.fromCharCode(160)
	              ),
	              (0, _preact.h)(
	                "div",
	                { "class": "info-container" },
	                info && info.map(function (i) {
	                  return (0, _preact.h)(_Card.Card, _extends({ key: (0, _Card.getKey)(i) }, i));
	                })
	              ),
	              (0, _preact.h)(
	                "div",
	                { "class": "buttons-container" },
	                buttons,
	                (0, _preact.h)(
	                  "button",
	                  { disabled: path.length === 0, onClick: function onClick() {
	                      return _this.pop();
	                    } },
	                  "<"
	                )
	              )
	            );
	          }
	        case "error":
	          {
	            return _ref3;
	          }
	        default:
	          {
	            return (0, _preact.h)(
	              "h1",
	              null,
	              JSON.stringify(status)
	            );
	          }
	      }
	    };
	
	    _this.trie = {};
	    _this.state = {
	      status: "loading",
	      letters: [],
	      path: []
	    };
	    return _this;
	  }
	
	  return App;
	}(_preact.Component);
	
	exports.default = App;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getKey = exports.Card = undefined;
	
	var _preact = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = exports.Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Card);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.render = function (_ref2) {
	      var fraDato = _ref2.fraDato,
	          tilDato = _ref2.tilDato,
	          oppslag = _ref2.oppslag;
	
	      return (0, _preact.h)(
	        "div",
	        { "class": "card" },
	        (0, _preact.h)(
	          "span",
	          null,
	          fraDato,
	          "\u2013",
	          tilDato
	        ),
	        (0, _preact.h)(
	          "p",
	          null,
	          oppslag
	        )
	      );
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  return Card;
	}(_preact.Component);
	
	var getKey = exports.getKey = function getKey(_ref3) {
	  var fraDato = _ref3.fraDato,
	      tilDato = _ref3.tilDato,
	      oppslag = _ref3.oppslag;
	  return [fraDato, tilDato, oppslag].join("/");
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _preact = __webpack_require__(3);
	
	var _App = __webpack_require__(11);
	
	var _App2 = _interopRequireDefault(_App);
	
	__webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _preact.render)((0, _preact.h)(_App2.default, null), document.getElementById('root'));

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
14,
/* 16 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Top level file is just a mixin of submodules & constants
	'use strict';
	
	const { Deflate, deflate, deflateRaw, gzip } = __webpack_require__(18);
	
	const { Inflate, inflate, inflateRaw, ungzip } = __webpack_require__(19);
	
	const constants = __webpack_require__(1);
	
	module.exports.Deflate = Deflate;
	module.exports.deflate = deflate;
	module.exports.deflateRaw = deflateRaw;
	module.exports.gzip = gzip;
	module.exports.Inflate = Inflate;
	module.exports.inflate = inflate;
	module.exports.inflateRaw = inflateRaw;
	module.exports.ungzip = ungzip;
	module.exports.constants = constants;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	const zlib_deflate = __webpack_require__(20);
	const utils        = __webpack_require__(4);
	const strings      = __webpack_require__(5);
	const msg          = __webpack_require__(2);
	const ZStream      = __webpack_require__(8);
	
	const toString = Object.prototype.toString;
	
	/* Public constants ==========================================================*/
	/* ===========================================================================*/
	
	const {
	  Z_NO_FLUSH, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH,
	  Z_OK, Z_STREAM_END,
	  Z_DEFAULT_COMPRESSION,
	  Z_DEFAULT_STRATEGY,
	  Z_DEFLATED
	} = __webpack_require__(1);
	
	/* ===========================================================================*/
	
	
	/**
	 * class Deflate
	 *
	 * Generic JS-style wrapper for zlib calls. If you don't need
	 * streaming behaviour - use more simple functions: [[deflate]],
	 * [[deflateRaw]] and [[gzip]].
	 **/
	
	/* internal
	 * Deflate.chunks -> Array
	 *
	 * Chunks of output data, if [[Deflate#onData]] not overridden.
	 **/
	
	/**
	 * Deflate.result -> Uint8Array
	 *
	 * Compressed result, generated by default [[Deflate#onData]]
	 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
	 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
	 **/
	
	/**
	 * Deflate.err -> Number
	 *
	 * Error code after deflate finished. 0 (Z_OK) on success.
	 * You will not need it in real life, because deflate errors
	 * are possible only on wrong options or bad `onData` / `onEnd`
	 * custom handlers.
	 **/
	
	/**
	 * Deflate.msg -> String
	 *
	 * Error message, if [[Deflate.err]] != 0
	 **/
	
	
	/**
	 * new Deflate(options)
	 * - options (Object): zlib deflate options.
	 *
	 * Creates new deflator instance with specified params. Throws exception
	 * on bad params. Supported options:
	 *
	 * - `level`
	 * - `windowBits`
	 * - `memLevel`
	 * - `strategy`
	 * - `dictionary`
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information on these.
	 *
	 * Additional options, for internal needs:
	 *
	 * - `chunkSize` - size of generated data chunks (16K by default)
	 * - `raw` (Boolean) - do raw deflate
	 * - `gzip` (Boolean) - create gzip wrapper
	 * - `header` (Object) - custom header for gzip
	 *   - `text` (Boolean) - true if compressed data believed to be text
	 *   - `time` (Number) - modification time, unix timestamp
	 *   - `os` (Number) - operation system code
	 *   - `extra` (Array) - array of bytes with extra data (max 65536)
	 *   - `name` (String) - file name (binary string)
	 *   - `comment` (String) - comment (binary string)
	 *   - `hcrc` (Boolean) - true if header crc should be added
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * const pako = require('pako')
	 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
	 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
	 *
	 * const deflate = new pako.Deflate({ level: 3});
	 *
	 * deflate.push(chunk1, false);
	 * deflate.push(chunk2, true);  // true -> last chunk
	 *
	 * if (deflate.err) { throw new Error(deflate.err); }
	 *
	 * console.log(deflate.result);
	 * ```
	 **/
	function Deflate(options) {
	  this.options = utils.assign({
	    level: Z_DEFAULT_COMPRESSION,
	    method: Z_DEFLATED,
	    chunkSize: 16384,
	    windowBits: 15,
	    memLevel: 8,
	    strategy: Z_DEFAULT_STRATEGY
	  }, options || {});
	
	  let opt = this.options;
	
	  if (opt.raw && (opt.windowBits > 0)) {
	    opt.windowBits = -opt.windowBits;
	  }
	
	  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
	    opt.windowBits += 16;
	  }
	
	  this.err    = 0;      // error code, if happens (0 = Z_OK)
	  this.msg    = '';     // error message
	  this.ended  = false;  // used to avoid multiple onEnd() calls
	  this.chunks = [];     // chunks of compressed data
	
	  this.strm = new ZStream();
	  this.strm.avail_out = 0;
	
	  let status = zlib_deflate.deflateInit2(
	    this.strm,
	    opt.level,
	    opt.method,
	    opt.windowBits,
	    opt.memLevel,
	    opt.strategy
	  );
	
	  if (status !== Z_OK) {
	    throw new Error(msg[status]);
	  }
	
	  if (opt.header) {
	    zlib_deflate.deflateSetHeader(this.strm, opt.header);
	  }
	
	  if (opt.dictionary) {
	    let dict;
	    // Convert data if needed
	    if (typeof opt.dictionary === 'string') {
	      // If we need to compress text, change encoding to utf8.
	      dict = strings.string2buf(opt.dictionary);
	    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
	      dict = new Uint8Array(opt.dictionary);
	    } else {
	      dict = opt.dictionary;
	    }
	
	    status = zlib_deflate.deflateSetDictionary(this.strm, dict);
	
	    if (status !== Z_OK) {
	      throw new Error(msg[status]);
	    }
	
	    this._dict_set = true;
	  }
	}
	
	/**
	 * Deflate#push(data[, flush_mode]) -> Boolean
	 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
	 *   converted to utf8 byte sequence.
	 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
	 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
	 *
	 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
	 * new compressed chunks. Returns `true` on success. The last data block must
	 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
	 * buffers and call [[Deflate#onEnd]].
	 *
	 * On fail call [[Deflate#onEnd]] with error code and return false.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * push(chunk, false); // push one of data chunks
	 * ...
	 * push(chunk, true);  // push last chunk
	 * ```
	 **/
	Deflate.prototype.push = function (data, flush_mode) {
	  const strm = this.strm;
	  const chunkSize = this.options.chunkSize;
	  let status, _flush_mode;
	
	  if (this.ended) { return false; }
	
	  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
	  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
	
	  // Convert data if needed
	  if (typeof data === 'string') {
	    // If we need to compress text, change encoding to utf8.
	    strm.input = strings.string2buf(data);
	  } else if (toString.call(data) === '[object ArrayBuffer]') {
	    strm.input = new Uint8Array(data);
	  } else {
	    strm.input = data;
	  }
	
	  strm.next_in = 0;
	  strm.avail_in = strm.input.length;
	
	  for (;;) {
	    if (strm.avail_out === 0) {
	      strm.output = new Uint8Array(chunkSize);
	      strm.next_out = 0;
	      strm.avail_out = chunkSize;
	    }
	
	    // Make sure avail_out > 6 to avoid repeating markers
	    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
	      this.onData(strm.output.subarray(0, strm.next_out));
	      strm.avail_out = 0;
	      continue;
	    }
	
	    status = zlib_deflate.deflate(strm, _flush_mode);
	
	    // Ended => flush and finish
	    if (status === Z_STREAM_END) {
	      if (strm.next_out > 0) {
	        this.onData(strm.output.subarray(0, strm.next_out));
	      }
	      status = zlib_deflate.deflateEnd(this.strm);
	      this.onEnd(status);
	      this.ended = true;
	      return status === Z_OK;
	    }
	
	    // Flush if out buffer full
	    if (strm.avail_out === 0) {
	      this.onData(strm.output);
	      continue;
	    }
	
	    // Flush if requested and has data
	    if (_flush_mode > 0 && strm.next_out > 0) {
	      this.onData(strm.output.subarray(0, strm.next_out));
	      strm.avail_out = 0;
	      continue;
	    }
	
	    if (strm.avail_in === 0) break;
	  }
	
	  return true;
	};
	
	
	/**
	 * Deflate#onData(chunk) -> Void
	 * - chunk (Uint8Array): output data.
	 *
	 * By default, stores data blocks in `chunks[]` property and glue
	 * those in `onEnd`. Override this handler, if you need another behaviour.
	 **/
	Deflate.prototype.onData = function (chunk) {
	  this.chunks.push(chunk);
	};
	
	
	/**
	 * Deflate#onEnd(status) -> Void
	 * - status (Number): deflate status. 0 (Z_OK) on success,
	 *   other if not.
	 *
	 * Called once after you tell deflate that the input stream is
	 * complete (Z_FINISH). By default - join collected chunks,
	 * free memory and fill `results` / `err` properties.
	 **/
	Deflate.prototype.onEnd = function (status) {
	  // On success - join
	  if (status === Z_OK) {
	    this.result = utils.flattenChunks(this.chunks);
	  }
	  this.chunks = [];
	  this.err = status;
	  this.msg = this.strm.msg;
	};
	
	
	/**
	 * deflate(data[, options]) -> Uint8Array
	 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
	 * - options (Object): zlib deflate options.
	 *
	 * Compress `data` with deflate algorithm and `options`.
	 *
	 * Supported options are:
	 *
	 * - level
	 * - windowBits
	 * - memLevel
	 * - strategy
	 * - dictionary
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information on these.
	 *
	 * Sugar (options):
	 *
	 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
	 *   negative windowBits implicitly.
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * const pako = require('pako')
	 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
	 *
	 * console.log(pako.deflate(data));
	 * ```
	 **/
	function deflate(input, options) {
	  const deflator = new Deflate(options);
	
	  deflator.push(input, true);
	
	  // That will never happens, if you don't cheat with options :)
	  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }
	
	  return deflator.result;
	}
	
	
	/**
	 * deflateRaw(data[, options]) -> Uint8Array
	 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
	 * - options (Object): zlib deflate options.
	 *
	 * The same as [[deflate]], but creates raw data, without wrapper
	 * (header and adler32 crc).
	 **/
	function deflateRaw(input, options) {
	  options = options || {};
	  options.raw = true;
	  return deflate(input, options);
	}
	
	
	/**
	 * gzip(data[, options]) -> Uint8Array
	 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
	 * - options (Object): zlib deflate options.
	 *
	 * The same as [[deflate]], but create gzip wrapper instead of
	 * deflate one.
	 **/
	function gzip(input, options) {
	  options = options || {};
	  options.gzip = true;
	  return deflate(input, options);
	}
	
	
	module.exports.Deflate = Deflate;
	module.exports.deflate = deflate;
	module.exports.deflateRaw = deflateRaw;
	module.exports.gzip = gzip;
	module.exports.constants = __webpack_require__(1);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	const zlib_inflate = __webpack_require__(23);
	const utils        = __webpack_require__(4);
	const strings      = __webpack_require__(5);
	const msg          = __webpack_require__(2);
	const ZStream      = __webpack_require__(8);
	const GZheader     = __webpack_require__(21);
	
	const toString = Object.prototype.toString;
	
	/* Public constants ==========================================================*/
	/* ===========================================================================*/
	
	const {
	  Z_NO_FLUSH, Z_FINISH,
	  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
	} = __webpack_require__(1);
	
	/* ===========================================================================*/
	
	
	/**
	 * class Inflate
	 *
	 * Generic JS-style wrapper for zlib calls. If you don't need
	 * streaming behaviour - use more simple functions: [[inflate]]
	 * and [[inflateRaw]].
	 **/
	
	/* internal
	 * inflate.chunks -> Array
	 *
	 * Chunks of output data, if [[Inflate#onData]] not overridden.
	 **/
	
	/**
	 * Inflate.result -> Uint8Array|String
	 *
	 * Uncompressed result, generated by default [[Inflate#onData]]
	 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
	 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
	 **/
	
	/**
	 * Inflate.err -> Number
	 *
	 * Error code after inflate finished. 0 (Z_OK) on success.
	 * Should be checked if broken data possible.
	 **/
	
	/**
	 * Inflate.msg -> String
	 *
	 * Error message, if [[Inflate.err]] != 0
	 **/
	
	
	/**
	 * new Inflate(options)
	 * - options (Object): zlib inflate options.
	 *
	 * Creates new inflator instance with specified params. Throws exception
	 * on bad params. Supported options:
	 *
	 * - `windowBits`
	 * - `dictionary`
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information on these.
	 *
	 * Additional options, for internal needs:
	 *
	 * - `chunkSize` - size of generated data chunks (16K by default)
	 * - `raw` (Boolean) - do raw inflate
	 * - `to` (String) - if equal to 'string', then result will be converted
	 *   from utf8 to utf16 (javascript) string. When string output requested,
	 *   chunk length can differ from `chunkSize`, depending on content.
	 *
	 * By default, when no options set, autodetect deflate/gzip data format via
	 * wrapper header.
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * const pako = require('pako')
	 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
	 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
	 *
	 * const inflate = new pako.Inflate({ level: 3});
	 *
	 * inflate.push(chunk1, false);
	 * inflate.push(chunk2, true);  // true -> last chunk
	 *
	 * if (inflate.err) { throw new Error(inflate.err); }
	 *
	 * console.log(inflate.result);
	 * ```
	 **/
	function Inflate(options) {
	  this.options = utils.assign({
	    chunkSize: 1024 * 64,
	    windowBits: 15,
	    to: ''
	  }, options || {});
	
	  const opt = this.options;
	
	  // Force window size for `raw` data, if not set directly,
	  // because we have no header for autodetect.
	  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
	    opt.windowBits = -opt.windowBits;
	    if (opt.windowBits === 0) { opt.windowBits = -15; }
	  }
	
	  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
	  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
	      !(options && options.windowBits)) {
	    opt.windowBits += 32;
	  }
	
	  // Gzip header has no info about windows size, we can do autodetect only
	  // for deflate. So, if window size not set, force it to max when gzip possible
	  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
	    // bit 3 (16) -> gzipped data
	    // bit 4 (32) -> autodetect gzip/deflate
	    if ((opt.windowBits & 15) === 0) {
	      opt.windowBits |= 15;
	    }
	  }
	
	  this.err    = 0;      // error code, if happens (0 = Z_OK)
	  this.msg    = '';     // error message
	  this.ended  = false;  // used to avoid multiple onEnd() calls
	  this.chunks = [];     // chunks of compressed data
	
	  this.strm   = new ZStream();
	  this.strm.avail_out = 0;
	
	  let status  = zlib_inflate.inflateInit2(
	    this.strm,
	    opt.windowBits
	  );
	
	  if (status !== Z_OK) {
	    throw new Error(msg[status]);
	  }
	
	  this.header = new GZheader();
	
	  zlib_inflate.inflateGetHeader(this.strm, this.header);
	
	  // Setup dictionary
	  if (opt.dictionary) {
	    // Convert data if needed
	    if (typeof opt.dictionary === 'string') {
	      opt.dictionary = strings.string2buf(opt.dictionary);
	    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
	      opt.dictionary = new Uint8Array(opt.dictionary);
	    }
	    if (opt.raw) { //In raw mode we need to set the dictionary early
	      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
	      if (status !== Z_OK) {
	        throw new Error(msg[status]);
	      }
	    }
	  }
	}
	
	/**
	 * Inflate#push(data[, flush_mode]) -> Boolean
	 * - data (Uint8Array|ArrayBuffer): input data
	 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
	 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
	 *   `true` means Z_FINISH.
	 *
	 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
	 * new output chunks. Returns `true` on success. If end of stream detected,
	 * [[Inflate#onEnd]] will be called.
	 *
	 * `flush_mode` is not needed for normal operation, because end of stream
	 * detected automatically. You may try to use it for advanced things, but
	 * this functionality was not tested.
	 *
	 * On fail call [[Inflate#onEnd]] with error code and return false.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * push(chunk, false); // push one of data chunks
	 * ...
	 * push(chunk, true);  // push last chunk
	 * ```
	 **/
	Inflate.prototype.push = function (data, flush_mode) {
	  const strm = this.strm;
	  const chunkSize = this.options.chunkSize;
	  const dictionary = this.options.dictionary;
	  let status, _flush_mode, last_avail_out;
	
	  if (this.ended) return false;
	
	  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
	  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
	
	  // Convert data if needed
	  if (toString.call(data) === '[object ArrayBuffer]') {
	    strm.input = new Uint8Array(data);
	  } else {
	    strm.input = data;
	  }
	
	  strm.next_in = 0;
	  strm.avail_in = strm.input.length;
	
	  for (;;) {
	    if (strm.avail_out === 0) {
	      strm.output = new Uint8Array(chunkSize);
	      strm.next_out = 0;
	      strm.avail_out = chunkSize;
	    }
	
	    status = zlib_inflate.inflate(strm, _flush_mode);
	
	    if (status === Z_NEED_DICT && dictionary) {
	      status = zlib_inflate.inflateSetDictionary(strm, dictionary);
	
	      if (status === Z_OK) {
	        status = zlib_inflate.inflate(strm, _flush_mode);
	      } else if (status === Z_DATA_ERROR) {
	        // Replace code with more verbose
	        status = Z_NEED_DICT;
	      }
	    }
	
	    // Skip snyc markers if more data follows and not raw mode
	    while (strm.avail_in > 0 &&
	           status === Z_STREAM_END &&
	           strm.state.wrap > 0 &&
	           data[strm.next_in] !== 0)
	    {
	      zlib_inflate.inflateReset(strm);
	      status = zlib_inflate.inflate(strm, _flush_mode);
	    }
	
	    switch (status) {
	      case Z_STREAM_ERROR:
	      case Z_DATA_ERROR:
	      case Z_NEED_DICT:
	      case Z_MEM_ERROR:
	        this.onEnd(status);
	        this.ended = true;
	        return false;
	    }
	
	    // Remember real `avail_out` value, because we may patch out buffer content
	    // to align utf8 strings boundaries.
	    last_avail_out = strm.avail_out;
	
	    if (strm.next_out) {
	      if (strm.avail_out === 0 || status === Z_STREAM_END) {
	
	        if (this.options.to === 'string') {
	
	          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
	
	          let tail = strm.next_out - next_out_utf8;
	          let utf8str = strings.buf2string(strm.output, next_out_utf8);
	
	          // move tail & realign counters
	          strm.next_out = tail;
	          strm.avail_out = chunkSize - tail;
	          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
	
	          this.onData(utf8str);
	
	        } else {
	          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
	        }
	      }
	    }
	
	    // Must repeat iteration if out buffer is full
	    if (status === Z_OK && last_avail_out === 0) continue;
	
	    // Finalize if end of stream reached.
	    if (status === Z_STREAM_END) {
	      status = zlib_inflate.inflateEnd(this.strm);
	      this.onEnd(status);
	      this.ended = true;
	      return true;
	    }
	
	    if (strm.avail_in === 0) break;
	  }
	
	  return true;
	};
	
	
	/**
	 * Inflate#onData(chunk) -> Void
	 * - chunk (Uint8Array|String): output data. When string output requested,
	 *   each chunk will be string.
	 *
	 * By default, stores data blocks in `chunks[]` property and glue
	 * those in `onEnd`. Override this handler, if you need another behaviour.
	 **/
	Inflate.prototype.onData = function (chunk) {
	  this.chunks.push(chunk);
	};
	
	
	/**
	 * Inflate#onEnd(status) -> Void
	 * - status (Number): inflate status. 0 (Z_OK) on success,
	 *   other if not.
	 *
	 * Called either after you tell inflate that the input stream is
	 * complete (Z_FINISH). By default - join collected chunks,
	 * free memory and fill `results` / `err` properties.
	 **/
	Inflate.prototype.onEnd = function (status) {
	  // On success - join
	  if (status === Z_OK) {
	    if (this.options.to === 'string') {
	      this.result = this.chunks.join('');
	    } else {
	      this.result = utils.flattenChunks(this.chunks);
	    }
	  }
	  this.chunks = [];
	  this.err = status;
	  this.msg = this.strm.msg;
	};
	
	
	/**
	 * inflate(data[, options]) -> Uint8Array|String
	 * - data (Uint8Array|ArrayBuffer): input data to decompress.
	 * - options (Object): zlib inflate options.
	 *
	 * Decompress `data` with inflate/ungzip and `options`. Autodetect
	 * format via wrapper header by default. That's why we don't provide
	 * separate `ungzip` method.
	 *
	 * Supported options are:
	 *
	 * - windowBits
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information.
	 *
	 * Sugar (options):
	 *
	 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
	 *   negative windowBits implicitly.
	 * - `to` (String) - if equal to 'string', then result will be converted
	 *   from utf8 to utf16 (javascript) string. When string output requested,
	 *   chunk length can differ from `chunkSize`, depending on content.
	 *
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * const pako = require('pako');
	 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
	 * let output;
	 *
	 * try {
	 *   output = pako.inflate(input);
	 * } catch (err) {
	 *   console.log(err);
	 * }
	 * ```
	 **/
	function inflate(input, options) {
	  const inflator = new Inflate(options);
	
	  inflator.push(input);
	
	  // That will never happens, if you don't cheat with options :)
	  if (inflator.err) throw inflator.msg || msg[inflator.err];
	
	  return inflator.result;
	}
	
	
	/**
	 * inflateRaw(data[, options]) -> Uint8Array|String
	 * - data (Uint8Array|ArrayBuffer): input data to decompress.
	 * - options (Object): zlib inflate options.
	 *
	 * The same as [[inflate]], but creates raw data, without wrapper
	 * (header and adler32 crc).
	 **/
	function inflateRaw(input, options) {
	  options = options || {};
	  options.raw = true;
	  return inflate(input, options);
	}
	
	
	/**
	 * ungzip(data[, options]) -> Uint8Array|String
	 * - data (Uint8Array|ArrayBuffer): input data to decompress.
	 * - options (Object): zlib inflate options.
	 *
	 * Just shortcut to [[inflate]], because it autodetects format
	 * by header.content. Done for convenience.
	 **/
	
	
	module.exports.Inflate = Inflate;
	module.exports.inflate = inflate;
	module.exports.inflateRaw = inflateRaw;
	module.exports.ungzip = inflate;
	module.exports.constants = __webpack_require__(1);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = __webpack_require__(25);
	const adler32 = __webpack_require__(6);
	const crc32   = __webpack_require__(7);
	const msg     = __webpack_require__(2);
	
	/* Public constants ==========================================================*/
	/* ===========================================================================*/
	
	const {
	  Z_NO_FLUSH, Z_PARTIAL_FLUSH, Z_FULL_FLUSH, Z_FINISH, Z_BLOCK,
	  Z_OK, Z_STREAM_END, Z_STREAM_ERROR, Z_DATA_ERROR, Z_BUF_ERROR,
	  Z_DEFAULT_COMPRESSION,
	  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY,
	  Z_UNKNOWN,
	  Z_DEFLATED
	} = __webpack_require__(1);
	
	/*============================================================================*/
	
	
	const MAX_MEM_LEVEL = 9;
	/* Maximum value for memLevel in deflateInit2 */
	const MAX_WBITS = 15;
	/* 32K LZ77 window */
	const DEF_MEM_LEVEL = 8;
	
	
	const LENGTH_CODES  = 29;
	/* number of length codes, not counting the special END_BLOCK code */
	const LITERALS      = 256;
	/* number of literal bytes 0..255 */
	const L_CODES       = LITERALS + 1 + LENGTH_CODES;
	/* number of Literal or Length codes, including the END_BLOCK code */
	const D_CODES       = 30;
	/* number of distance codes */
	const BL_CODES      = 19;
	/* number of codes used to transfer the bit lengths */
	const HEAP_SIZE     = 2 * L_CODES + 1;
	/* maximum heap size */
	const MAX_BITS  = 15;
	/* All codes must not exceed MAX_BITS bits */
	
	const MIN_MATCH = 3;
	const MAX_MATCH = 258;
	const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);
	
	const PRESET_DICT = 0x20;
	
	const INIT_STATE    =  42;    /* zlib header -> BUSY_STATE */
	//#ifdef GZIP
	const GZIP_STATE    =  57;    /* gzip header -> BUSY_STATE | EXTRA_STATE */
	//#endif
	const EXTRA_STATE   =  69;    /* gzip extra block -> NAME_STATE */
	const NAME_STATE    =  73;    /* gzip file name -> COMMENT_STATE */
	const COMMENT_STATE =  91;    /* gzip comment -> HCRC_STATE */
	const HCRC_STATE    = 103;    /* gzip header CRC -> BUSY_STATE */
	const BUSY_STATE    = 113;    /* deflate -> FINISH_STATE */
	const FINISH_STATE  = 666;    /* stream complete */
	
	const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
	const BS_BLOCK_DONE     = 2; /* block flush performed */
	const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
	const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */
	
	const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
	
	const err = (strm, errorCode) => {
	  strm.msg = msg[errorCode];
	  return errorCode;
	};
	
	const rank = (f) => {
	  return ((f) * 2) - ((f) > 4 ? 9 : 0);
	};
	
	const zero = (buf) => {
	  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
	};
	
	/* ===========================================================================
	 * Slide the hash table when sliding the window down (could be avoided with 32
	 * bit values at the expense of memory usage). We slide even when level == 0 to
	 * keep the hash table consistent if we switch back to level > 0 later.
	 */
	const slide_hash = (s) => {
	  let n, m;
	  let p;
	  let wsize = s.w_size;
	
	  n = s.hash_size;
	  p = n;
	  do {
	    m = s.head[--p];
	    s.head[p] = (m >= wsize ? m - wsize : 0);
	  } while (--n);
	  n = wsize;
	//#ifndef FASTEST
	  p = n;
	  do {
	    m = s.prev[--p];
	    s.prev[p] = (m >= wsize ? m - wsize : 0);
	    /* If n is not on any hash chain, prev[n] is garbage but
	     * its value will never be used.
	     */
	  } while (--n);
	//#endif
	};
	
	/* eslint-disable new-cap */
	let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
	// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
	// But breaks binary compatibility
	//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
	let HASH = HASH_ZLIB;
	
	
	/* =========================================================================
	 * Flush as much pending output as possible. All deflate() output, except for
	 * some deflate_stored() output, goes through this function so some
	 * applications may wish to modify it to avoid allocating a large
	 * strm->next_out buffer and copying into it. (See also read_buf()).
	 */
	const flush_pending = (strm) => {
	  const s = strm.state;
	
	  //_tr_flush_bits(s);
	  let len = s.pending;
	  if (len > strm.avail_out) {
	    len = strm.avail_out;
	  }
	  if (len === 0) { return; }
	
	  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
	  strm.next_out  += len;
	  s.pending_out  += len;
	  strm.total_out += len;
	  strm.avail_out -= len;
	  s.pending      -= len;
	  if (s.pending === 0) {
	    s.pending_out = 0;
	  }
	};
	
	
	const flush_block_only = (s, last) => {
	  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
	  s.block_start = s.strstart;
	  flush_pending(s.strm);
	};
	
	
	const put_byte = (s, b) => {
	  s.pending_buf[s.pending++] = b;
	};
	
	
	/* =========================================================================
	 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
	 * IN assertion: the stream state is correct and there is enough room in
	 * pending_buf.
	 */
	const putShortMSB = (s, b) => {
	
	  //  put_byte(s, (Byte)(b >> 8));
	//  put_byte(s, (Byte)(b & 0xff));
	  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
	  s.pending_buf[s.pending++] = b & 0xff;
	};
	
	
	/* ===========================================================================
	 * Read a new buffer from the current input stream, update the adler32
	 * and total number of bytes read.  All deflate() input goes through
	 * this function so some applications may wish to modify it to avoid
	 * allocating a large strm->input buffer and copying from it.
	 * (See also flush_pending()).
	 */
	const read_buf = (strm, buf, start, size) => {
	
	  let len = strm.avail_in;
	
	  if (len > size) { len = size; }
	  if (len === 0) { return 0; }
	
	  strm.avail_in -= len;
	
	  // zmemcpy(buf, strm->next_in, len);
	  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
	  if (strm.state.wrap === 1) {
	    strm.adler = adler32(strm.adler, buf, len, start);
	  }
	
	  else if (strm.state.wrap === 2) {
	    strm.adler = crc32(strm.adler, buf, len, start);
	  }
	
	  strm.next_in += len;
	  strm.total_in += len;
	
	  return len;
	};
	
	
	/* ===========================================================================
	 * Set match_start to the longest match starting at the given string and
	 * return its length. Matches shorter or equal to prev_length are discarded,
	 * in which case the result is equal to prev_length and match_start is
	 * garbage.
	 * IN assertions: cur_match is the head of the hash chain for the current
	 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
	 * OUT assertion: the match length is not greater than s->lookahead.
	 */
	const longest_match = (s, cur_match) => {
	
	  let chain_length = s.max_chain_length;      /* max hash chain length */
	  let scan = s.strstart; /* current string */
	  let match;                       /* matched string */
	  let len;                           /* length of current match */
	  let best_len = s.prev_length;              /* best match length so far */
	  let nice_match = s.nice_match;             /* stop if match long enough */
	  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
	      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;
	
	  const _win = s.window; // shortcut
	
	  const wmask = s.w_mask;
	  const prev  = s.prev;
	
	  /* Stop when cur_match becomes <= limit. To simplify the code,
	   * we prevent matches with the string of window index 0.
	   */
	
	  const strend = s.strstart + MAX_MATCH;
	  let scan_end1  = _win[scan + best_len - 1];
	  let scan_end   = _win[scan + best_len];
	
	  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
	   * It is easy to get rid of this optimization if necessary.
	   */
	  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
	
	  /* Do not waste too much time if we already have a good match: */
	  if (s.prev_length >= s.good_match) {
	    chain_length >>= 2;
	  }
	  /* Do not look for matches beyond the end of the input. This is necessary
	   * to make deflate deterministic.
	   */
	  if (nice_match > s.lookahead) { nice_match = s.lookahead; }
	
	  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
	
	  do {
	    // Assert(cur_match < s->strstart, "no future");
	    match = cur_match;
	
	    /* Skip to next match if the match length cannot increase
	     * or if the match length is less than 2.  Note that the checks below
	     * for insufficient lookahead only occur occasionally for performance
	     * reasons.  Therefore uninitialized memory will be accessed, and
	     * conditional jumps will be made that depend on those values.
	     * However the length of the match is limited to the lookahead, so
	     * the output of deflate is not affected by the uninitialized values.
	     */
	
	    if (_win[match + best_len]     !== scan_end  ||
	        _win[match + best_len - 1] !== scan_end1 ||
	        _win[match]                !== _win[scan] ||
	        _win[++match]              !== _win[scan + 1]) {
	      continue;
	    }
	
	    /* The check at best_len-1 can be removed because it will be made
	     * again later. (This heuristic is not always a win.)
	     * It is not necessary to compare scan[2] and match[2] since they
	     * are always equal when the other bytes match, given that
	     * the hash keys are equal and that HASH_BITS >= 8.
	     */
	    scan += 2;
	    match++;
	    // Assert(*scan == *match, "match[2]?");
	
	    /* We check for insufficient lookahead only every 8th comparison;
	     * the 256th check will be made at strstart+258.
	     */
	    do {
	      /*jshint noempty:false*/
	    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             scan < strend);
	
	    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
	
	    len = MAX_MATCH - (strend - scan);
	    scan = strend - MAX_MATCH;
	
	    if (len > best_len) {
	      s.match_start = cur_match;
	      best_len = len;
	      if (len >= nice_match) {
	        break;
	      }
	      scan_end1  = _win[scan + best_len - 1];
	      scan_end   = _win[scan + best_len];
	    }
	  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
	
	  if (best_len <= s.lookahead) {
	    return best_len;
	  }
	  return s.lookahead;
	};
	
	
	/* ===========================================================================
	 * Fill the window when the lookahead becomes insufficient.
	 * Updates strstart and lookahead.
	 *
	 * IN assertion: lookahead < MIN_LOOKAHEAD
	 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
	 *    At least one byte has been read, or avail_in == 0; reads are
	 *    performed for at least two bytes (required for the zip translate_eol
	 *    option -- not supported here).
	 */
	const fill_window = (s) => {
	
	  const _w_size = s.w_size;
	  let n, more, str;
	
	  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
	
	  do {
	    more = s.window_size - s.lookahead - s.strstart;
	
	    // JS ints have 32 bit, block below not needed
	    /* Deal with !@#$% 64K limit: */
	    //if (sizeof(int) <= 2) {
	    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
	    //        more = wsize;
	    //
	    //  } else if (more == (unsigned)(-1)) {
	    //        /* Very unlikely, but possible on 16 bit machine if
	    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
	    //         */
	    //        more--;
	    //    }
	    //}
	
	
	    /* If the window is almost full and there is insufficient lookahead,
	     * move the upper half to the lower one to make room in the upper half.
	     */
	    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
	
	      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
	      s.match_start -= _w_size;
	      s.strstart -= _w_size;
	      /* we now have strstart >= MAX_DIST */
	      s.block_start -= _w_size;
	      if (s.insert > s.strstart) {
	        s.insert = s.strstart;
	      }
	      slide_hash(s);
	      more += _w_size;
	    }
	    if (s.strm.avail_in === 0) {
	      break;
	    }
	
	    /* If there was no sliding:
	     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
	     *    more == window_size - lookahead - strstart
	     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
	     * => more >= window_size - 2*WSIZE + 2
	     * In the BIG_MEM or MMAP case (not yet supported),
	     *   window_size == input_size + MIN_LOOKAHEAD  &&
	     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
	     * Otherwise, window_size == 2*WSIZE so more >= 2.
	     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
	     */
	    //Assert(more >= 2, "more < 2");
	    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
	    s.lookahead += n;
	
	    /* Initialize the hash value now that we have some input: */
	    if (s.lookahead + s.insert >= MIN_MATCH) {
	      str = s.strstart - s.insert;
	      s.ins_h = s.window[str];
	
	      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
	      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
	//#if MIN_MATCH != 3
	//        Call update_hash() MIN_MATCH-3 more times
	//#endif
	      while (s.insert) {
	        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
	        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
	
	        s.prev[str & s.w_mask] = s.head[s.ins_h];
	        s.head[s.ins_h] = str;
	        str++;
	        s.insert--;
	        if (s.lookahead + s.insert < MIN_MATCH) {
	          break;
	        }
	      }
	    }
	    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
	     * but this is not important since only literal bytes will be emitted.
	     */
	
	  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
	
	  /* If the WIN_INIT bytes after the end of the current data have never been
	   * written, then zero those bytes in order to avoid memory check reports of
	   * the use of uninitialized (or uninitialised as Julian writes) bytes by
	   * the longest match routines.  Update the high water mark for the next
	   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
	   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
	   */
	//  if (s.high_water < s.window_size) {
	//    const curr = s.strstart + s.lookahead;
	//    let init = 0;
	//
	//    if (s.high_water < curr) {
	//      /* Previous high water mark below current data -- zero WIN_INIT
	//       * bytes or up to end of window, whichever is less.
	//       */
	//      init = s.window_size - curr;
	//      if (init > WIN_INIT)
	//        init = WIN_INIT;
	//      zmemzero(s->window + curr, (unsigned)init);
	//      s->high_water = curr + init;
	//    }
	//    else if (s->high_water < (ulg)curr + WIN_INIT) {
	//      /* High water mark at or above current data, but below current data
	//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
	//       * to end of window, whichever is less.
	//       */
	//      init = (ulg)curr + WIN_INIT - s->high_water;
	//      if (init > s->window_size - s->high_water)
	//        init = s->window_size - s->high_water;
	//      zmemzero(s->window + s->high_water, (unsigned)init);
	//      s->high_water += init;
	//    }
	//  }
	//
	//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
	//    "not enough room for search");
	};
	
	/* ===========================================================================
	 * Copy without compression as much as possible from the input stream, return
	 * the current block state.
	 *
	 * In case deflateParams() is used to later switch to a non-zero compression
	 * level, s->matches (otherwise unused when storing) keeps track of the number
	 * of hash table slides to perform. If s->matches is 1, then one hash table
	 * slide will be done when switching. If s->matches is 2, the maximum value
	 * allowed here, then the hash table will be cleared, since two or more slides
	 * is the same as a clear.
	 *
	 * deflate_stored() is written to minimize the number of times an input byte is
	 * copied. It is most efficient with large input and output buffers, which
	 * maximizes the opportunites to have a single copy from next_in to next_out.
	 */
	const deflate_stored = (s, flush) => {
	
	  /* Smallest worthy block size when not flushing or finishing. By default
	   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
	   * large input and output buffers, the stored block size will be larger.
	   */
	  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
	
	  /* Copy as many min_block or larger stored blocks directly to next_out as
	   * possible. If flushing, copy the remaining available input to next_out as
	   * stored blocks, if there is enough space.
	   */
	  let len, left, have, last = 0;
	  let used = s.strm.avail_in;
	  do {
	    /* Set len to the maximum size block that we can copy directly with the
	     * available input data and output space. Set left to how much of that
	     * would be copied from what's left in the window.
	     */
	    len = 65535/* MAX_STORED */;     /* maximum deflate stored block length */
	    have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
	    if (s.strm.avail_out < have) {         /* need room for header */
	      break;
	    }
	      /* maximum stored block length that will fit in avail_out: */
	    have = s.strm.avail_out - have;
	    left = s.strstart - s.block_start;  /* bytes left in window */
	    if (len > left + s.strm.avail_in) {
	      len = left + s.strm.avail_in;   /* limit len to the input */
	    }
	    if (len > have) {
	      len = have;             /* limit len to the output */
	    }
	
	    /* If the stored block would be less than min_block in length, or if
	     * unable to copy all of the available input when flushing, then try
	     * copying to the window and the pending buffer instead. Also don't
	     * write an empty block when flushing -- deflate() does that.
	     */
	    if (len < min_block && ((len === 0 && flush !== Z_FINISH) ||
	                        flush === Z_NO_FLUSH ||
	                        len !== left + s.strm.avail_in)) {
	      break;
	    }
	
	    /* Make a dummy stored block in pending to get the header bytes,
	     * including any pending bits. This also updates the debugging counts.
	     */
	    last = flush === Z_FINISH && len === left + s.strm.avail_in ? 1 : 0;
	    _tr_stored_block(s, 0, 0, last);
	
	    /* Replace the lengths in the dummy stored block with len. */
	    s.pending_buf[s.pending - 4] = len;
	    s.pending_buf[s.pending - 3] = len >> 8;
	    s.pending_buf[s.pending - 2] = ~len;
	    s.pending_buf[s.pending - 1] = ~len >> 8;
	
	    /* Write the stored block header bytes. */
	    flush_pending(s.strm);
	
	//#ifdef ZLIB_DEBUG
	//    /* Update debugging counts for the data about to be copied. */
	//    s->compressed_len += len << 3;
	//    s->bits_sent += len << 3;
	//#endif
	
	    /* Copy uncompressed bytes from the window to next_out. */
	    if (left) {
	      if (left > len) {
	        left = len;
	      }
	      //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
	      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
	      s.strm.next_out += left;
	      s.strm.avail_out -= left;
	      s.strm.total_out += left;
	      s.block_start += left;
	      len -= left;
	    }
	
	    /* Copy uncompressed bytes directly from next_in to next_out, updating
	     * the check value.
	     */
	    if (len) {
	      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
	      s.strm.next_out += len;
	      s.strm.avail_out -= len;
	      s.strm.total_out += len;
	    }
	  } while (last === 0);
	
	  /* Update the sliding window with the last s->w_size bytes of the copied
	   * data, or append all of the copied data to the existing window if less
	   * than s->w_size bytes were copied. Also update the number of bytes to
	   * insert in the hash tables, in the event that deflateParams() switches to
	   * a non-zero compression level.
	   */
	  used -= s.strm.avail_in;    /* number of input bytes directly copied */
	  if (used) {
	    /* If any input was used, then no unused input remains in the window,
	     * therefore s->block_start == s->strstart.
	     */
	    if (used >= s.w_size) {  /* supplant the previous history */
	      s.matches = 2;     /* clear hash */
	      //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
	      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
	      s.strstart = s.w_size;
	      s.insert = s.strstart;
	    }
	    else {
	      if (s.window_size - s.strstart <= used) {
	        /* Slide the window down. */
	        s.strstart -= s.w_size;
	        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
	        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
	        if (s.matches < 2) {
	          s.matches++;   /* add a pending slide_hash() */
	        }
	        if (s.insert > s.strstart) {
	          s.insert = s.strstart;
	        }
	      }
	      //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
	      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
	      s.strstart += used;
	      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
	    }
	    s.block_start = s.strstart;
	  }
	  if (s.high_water < s.strstart) {
	    s.high_water = s.strstart;
	  }
	
	  /* If the last block was written to next_out, then done. */
	  if (last) {
	    return BS_FINISH_DONE;
	  }
	
	  /* If flushing and all input has been consumed, then done. */
	  if (flush !== Z_NO_FLUSH && flush !== Z_FINISH &&
	    s.strm.avail_in === 0 && s.strstart === s.block_start) {
	    return BS_BLOCK_DONE;
	  }
	
	  /* Fill the window with any remaining input. */
	  have = s.window_size - s.strstart;
	  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
	    /* Slide the window down. */
	    s.block_start -= s.w_size;
	    s.strstart -= s.w_size;
	    //zmemcpy(s->window, s->window + s->w_size, s->strstart);
	    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
	    if (s.matches < 2) {
	      s.matches++;       /* add a pending slide_hash() */
	    }
	    have += s.w_size;      /* more space now */
	    if (s.insert > s.strstart) {
	      s.insert = s.strstart;
	    }
	  }
	  if (have > s.strm.avail_in) {
	    have = s.strm.avail_in;
	  }
	  if (have) {
	    read_buf(s.strm, s.window, s.strstart, have);
	    s.strstart += have;
	    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
	  }
	  if (s.high_water < s.strstart) {
	    s.high_water = s.strstart;
	  }
	
	  /* There was not enough avail_out to write a complete worthy or flushed
	   * stored block to next_out. Write a stored block to pending instead, if we
	   * have enough input for a worthy block, or if flushing and there is enough
	   * room for the remaining input as a stored block in the pending buffer.
	   */
	  have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
	    /* maximum stored block length that will fit in pending: */
	  have = s.pending_buf_size - have > 65535/* MAX_STORED */ ? 65535/* MAX_STORED */ : s.pending_buf_size - have;
	  min_block = have > s.w_size ? s.w_size : have;
	  left = s.strstart - s.block_start;
	  if (left >= min_block ||
	     ((left || flush === Z_FINISH) && flush !== Z_NO_FLUSH &&
	     s.strm.avail_in === 0 && left <= have)) {
	    len = left > have ? have : left;
	    last = flush === Z_FINISH && s.strm.avail_in === 0 &&
	         len === left ? 1 : 0;
	    _tr_stored_block(s, s.block_start, len, last);
	    s.block_start += len;
	    flush_pending(s.strm);
	  }
	
	  /* We've done all we can with the available input and output. */
	  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
	};
	
	
	/* ===========================================================================
	 * Compress as much as possible from the input stream, return the current
	 * block state.
	 * This function does not perform lazy evaluation of matches and inserts
	 * new strings in the dictionary only for unmatched strings or for short
	 * matches. It is used only for the fast compression options.
	 */
	const deflate_fast = (s, flush) => {
	
	  let hash_head;        /* head of the hash chain */
	  let bflush;           /* set if current block must be flushed */
	
	  for (;;) {
	    /* Make sure that we always have enough lookahead, except
	     * at the end of the input file. We need MAX_MATCH bytes
	     * for the next match, plus MIN_MATCH bytes to insert the
	     * string following the next match.
	     */
	    if (s.lookahead < MIN_LOOKAHEAD) {
	      fill_window(s);
	      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }
	      if (s.lookahead === 0) {
	        break; /* flush the current block */
	      }
	    }
	
	    /* Insert the string window[strstart .. strstart+2] in the
	     * dictionary, and set hash_head to the head of the hash chain:
	     */
	    hash_head = 0/*NIL*/;
	    if (s.lookahead >= MIN_MATCH) {
	      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
	      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	      s.head[s.ins_h] = s.strstart;
	      /***/
	    }
	
	    /* Find the longest match, discarding those <= prev_length.
	     * At this point we have always match_length < MIN_MATCH
	     */
	    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
	      /* To simplify the code, we prevent matches with the string
	       * of window index 0 (in particular we have to avoid a match
	       * of the string with itself at the start of the input file).
	       */
	      s.match_length = longest_match(s, hash_head);
	      /* longest_match() sets match_start */
	    }
	    if (s.match_length >= MIN_MATCH) {
	      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
	
	      /*** _tr_tally_dist(s, s.strstart - s.match_start,
	                     s.match_length - MIN_MATCH, bflush); ***/
	      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
	
	      s.lookahead -= s.match_length;
	
	      /* Insert new strings in the hash table only if the match length
	       * is not too large. This saves time but degrades compression.
	       */
	      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
	        s.match_length--; /* string at strstart already in table */
	        do {
	          s.strstart++;
	          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
	          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	          s.head[s.ins_h] = s.strstart;
	          /***/
	          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
	           * always MIN_MATCH bytes ahead.
	           */
	        } while (--s.match_length !== 0);
	        s.strstart++;
	      } else
	      {
	        s.strstart += s.match_length;
	        s.match_length = 0;
	        s.ins_h = s.window[s.strstart];
	        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
	        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
	
	//#if MIN_MATCH != 3
	//                Call UPDATE_HASH() MIN_MATCH-3 more times
	//#endif
	        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
	         * matter since it will be recomputed at next deflate call.
	         */
	      }
	    } else {
	      /* No match, output a literal byte */
	      //Tracevv((stderr,"%c", s.window[s.strstart]));
	      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
	      bflush = _tr_tally(s, 0, s.window[s.strstart]);
	
	      s.lookahead--;
	      s.strstart++;
	    }
	    if (bflush) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }
	  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.sym_next) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	  return BS_BLOCK_DONE;
	};
	
	/* ===========================================================================
	 * Same as above, but achieves better compression. We use a lazy
	 * evaluation for matches: a match is finally adopted only if there is
	 * no better match at the next window position.
	 */
	const deflate_slow = (s, flush) => {
	
	  let hash_head;          /* head of hash chain */
	  let bflush;              /* set if current block must be flushed */
	
	  let max_insert;
	
	  /* Process the input block. */
	  for (;;) {
	    /* Make sure that we always have enough lookahead, except
	     * at the end of the input file. We need MAX_MATCH bytes
	     * for the next match, plus MIN_MATCH bytes to insert the
	     * string following the next match.
	     */
	    if (s.lookahead < MIN_LOOKAHEAD) {
	      fill_window(s);
	      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }
	      if (s.lookahead === 0) { break; } /* flush the current block */
	    }
	
	    /* Insert the string window[strstart .. strstart+2] in the
	     * dictionary, and set hash_head to the head of the hash chain:
	     */
	    hash_head = 0/*NIL*/;
	    if (s.lookahead >= MIN_MATCH) {
	      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
	      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	      s.head[s.ins_h] = s.strstart;
	      /***/
	    }
	
	    /* Find the longest match, discarding those <= prev_length.
	     */
	    s.prev_length = s.match_length;
	    s.prev_match = s.match_start;
	    s.match_length = MIN_MATCH - 1;
	
	    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
	        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
	      /* To simplify the code, we prevent matches with the string
	       * of window index 0 (in particular we have to avoid a match
	       * of the string with itself at the start of the input file).
	       */
	      s.match_length = longest_match(s, hash_head);
	      /* longest_match() sets match_start */
	
	      if (s.match_length <= 5 &&
	         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {
	
	        /* If prev_match is also MIN_MATCH, match_start is garbage
	         * but we will ignore the current match anyway.
	         */
	        s.match_length = MIN_MATCH - 1;
	      }
	    }
	    /* If there was a match at the previous step and the current
	     * match is not better, output the previous match:
	     */
	    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
	      max_insert = s.strstart + s.lookahead - MIN_MATCH;
	      /* Do not insert strings in hash table beyond this. */
	
	      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
	
	      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
	                     s.prev_length - MIN_MATCH, bflush);***/
	      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
	      /* Insert in hash table all strings up to the end of the match.
	       * strstart-1 and strstart are already inserted. If there is not
	       * enough lookahead, the last two strings are not inserted in
	       * the hash table.
	       */
	      s.lookahead -= s.prev_length - 1;
	      s.prev_length -= 2;
	      do {
	        if (++s.strstart <= max_insert) {
	          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
	          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	          s.head[s.ins_h] = s.strstart;
	          /***/
	        }
	      } while (--s.prev_length !== 0);
	      s.match_available = 0;
	      s.match_length = MIN_MATCH - 1;
	      s.strstart++;
	
	      if (bflush) {
	        /*** FLUSH_BLOCK(s, 0); ***/
	        flush_block_only(s, false);
	        if (s.strm.avail_out === 0) {
	          return BS_NEED_MORE;
	        }
	        /***/
	      }
	
	    } else if (s.match_available) {
	      /* If there was no match at the previous position, output a
	       * single literal. If there was a match but the current match
	       * is longer, truncate the previous match to a single literal.
	       */
	      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
	      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
	      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
	
	      if (bflush) {
	        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
	        flush_block_only(s, false);
	        /***/
	      }
	      s.strstart++;
	      s.lookahead--;
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	    } else {
	      /* There is no previous match to compare with, wait for
	       * the next step to decide.
	       */
	      s.match_available = 1;
	      s.strstart++;
	      s.lookahead--;
	    }
	  }
	  //Assert (flush != Z_NO_FLUSH, "no flush?");
	  if (s.match_available) {
	    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
	    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
	    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
	
	    s.match_available = 0;
	  }
	  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.sym_next) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	
	  return BS_BLOCK_DONE;
	};
	
	
	/* ===========================================================================
	 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
	 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
	 * deflate switches away from Z_RLE.)
	 */
	const deflate_rle = (s, flush) => {
	
	  let bflush;            /* set if current block must be flushed */
	  let prev;              /* byte at distance one to match */
	  let scan, strend;      /* scan goes up to strend for length of run */
	
	  const _win = s.window;
	
	  for (;;) {
	    /* Make sure that we always have enough lookahead, except
	     * at the end of the input file. We need MAX_MATCH bytes
	     * for the longest run, plus one for the unrolled loop.
	     */
	    if (s.lookahead <= MAX_MATCH) {
	      fill_window(s);
	      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }
	      if (s.lookahead === 0) { break; } /* flush the current block */
	    }
	
	    /* See how many times the previous byte repeats */
	    s.match_length = 0;
	    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
	      scan = s.strstart - 1;
	      prev = _win[scan];
	      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
	        strend = s.strstart + MAX_MATCH;
	        do {
	          /*jshint noempty:false*/
	        } while (prev === _win[++scan] && prev === _win[++scan] &&
	                 prev === _win[++scan] && prev === _win[++scan] &&
	                 prev === _win[++scan] && prev === _win[++scan] &&
	                 prev === _win[++scan] && prev === _win[++scan] &&
	                 scan < strend);
	        s.match_length = MAX_MATCH - (strend - scan);
	        if (s.match_length > s.lookahead) {
	          s.match_length = s.lookahead;
	        }
	      }
	      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
	    }
	
	    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
	    if (s.match_length >= MIN_MATCH) {
	      //check_match(s, s.strstart, s.strstart - 1, s.match_length);
	
	      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
	      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
	
	      s.lookahead -= s.match_length;
	      s.strstart += s.match_length;
	      s.match_length = 0;
	    } else {
	      /* No match, output a literal byte */
	      //Tracevv((stderr,"%c", s->window[s->strstart]));
	      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
	      bflush = _tr_tally(s, 0, s.window[s.strstart]);
	
	      s.lookahead--;
	      s.strstart++;
	    }
	    if (bflush) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }
	  s.insert = 0;
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.sym_next) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	  return BS_BLOCK_DONE;
	};
	
	/* ===========================================================================
	 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
	 * (It will be regenerated if this run of deflate switches away from Huffman.)
	 */
	const deflate_huff = (s, flush) => {
	
	  let bflush;             /* set if current block must be flushed */
	
	  for (;;) {
	    /* Make sure that we have a literal to write. */
	    if (s.lookahead === 0) {
	      fill_window(s);
	      if (s.lookahead === 0) {
	        if (flush === Z_NO_FLUSH) {
	          return BS_NEED_MORE;
	        }
	        break;      /* flush the current block */
	      }
	    }
	
	    /* Output a literal byte */
	    s.match_length = 0;
	    //Tracevv((stderr,"%c", s->window[s->strstart]));
	    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
	    bflush = _tr_tally(s, 0, s.window[s.strstart]);
	    s.lookahead--;
	    s.strstart++;
	    if (bflush) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }
	  s.insert = 0;
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.sym_next) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	  return BS_BLOCK_DONE;
	};
	
	/* Values for max_lazy_match, good_match and max_chain_length, depending on
	 * the desired pack level (0..9). The values given below have been tuned to
	 * exclude worst case performance for pathological files. Better values may be
	 * found for specific files.
	 */
	function Config(good_length, max_lazy, nice_length, max_chain, func) {
	
	  this.good_length = good_length;
	  this.max_lazy = max_lazy;
	  this.nice_length = nice_length;
	  this.max_chain = max_chain;
	  this.func = func;
	}
	
	const configuration_table = [
	  /*      good lazy nice chain */
	  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
	  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
	  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
	  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */
	
	  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
	  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
	  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
	  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
	  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
	  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
	];
	
	
	/* ===========================================================================
	 * Initialize the "longest match" routines for a new zlib stream
	 */
	const lm_init = (s) => {
	
	  s.window_size = 2 * s.w_size;
	
	  /*** CLEAR_HASH(s); ***/
	  zero(s.head); // Fill with NIL (= 0);
	
	  /* Set the default configuration parameters:
	   */
	  s.max_lazy_match = configuration_table[s.level].max_lazy;
	  s.good_match = configuration_table[s.level].good_length;
	  s.nice_match = configuration_table[s.level].nice_length;
	  s.max_chain_length = configuration_table[s.level].max_chain;
	
	  s.strstart = 0;
	  s.block_start = 0;
	  s.lookahead = 0;
	  s.insert = 0;
	  s.match_length = s.prev_length = MIN_MATCH - 1;
	  s.match_available = 0;
	  s.ins_h = 0;
	};
	
	
	function DeflateState() {
	  this.strm = null;            /* pointer back to this zlib stream */
	  this.status = 0;            /* as the name implies */
	  this.pending_buf = null;      /* output still pending */
	  this.pending_buf_size = 0;  /* size of pending_buf */
	  this.pending_out = 0;       /* next pending byte to output to the stream */
	  this.pending = 0;           /* nb of bytes in the pending buffer */
	  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
	  this.gzhead = null;         /* gzip header information to write */
	  this.gzindex = 0;           /* where in extra, name, or comment */
	  this.method = Z_DEFLATED; /* can only be DEFLATED */
	  this.last_flush = -1;   /* value of flush param for previous deflate call */
	
	  this.w_size = 0;  /* LZ77 window size (32K by default) */
	  this.w_bits = 0;  /* log2(w_size)  (8..16) */
	  this.w_mask = 0;  /* w_size - 1 */
	
	  this.window = null;
	  /* Sliding window. Input bytes are read into the second half of the window,
	   * and move to the first half later to keep a dictionary of at least wSize
	   * bytes. With this organization, matches are limited to a distance of
	   * wSize-MAX_MATCH bytes, but this ensures that IO is always
	   * performed with a length multiple of the block size.
	   */
	
	  this.window_size = 0;
	  /* Actual size of window: 2*wSize, except when the user input buffer
	   * is directly used as sliding window.
	   */
	
	  this.prev = null;
	  /* Link to older string with same hash index. To limit the size of this
	   * array to 64K, this link is maintained only for the last 32K strings.
	   * An index in this array is thus a window index modulo 32K.
	   */
	
	  this.head = null;   /* Heads of the hash chains or NIL. */
	
	  this.ins_h = 0;       /* hash index of string to be inserted */
	  this.hash_size = 0;   /* number of elements in hash table */
	  this.hash_bits = 0;   /* log2(hash_size) */
	  this.hash_mask = 0;   /* hash_size-1 */
	
	  this.hash_shift = 0;
	  /* Number of bits by which ins_h must be shifted at each input
	   * step. It must be such that after MIN_MATCH steps, the oldest
	   * byte no longer takes part in the hash key, that is:
	   *   hash_shift * MIN_MATCH >= hash_bits
	   */
	
	  this.block_start = 0;
	  /* Window position at the beginning of the current output block. Gets
	   * negative when the window is moved backwards.
	   */
	
	  this.match_length = 0;      /* length of best match */
	  this.prev_match = 0;        /* previous match */
	  this.match_available = 0;   /* set if previous match exists */
	  this.strstart = 0;          /* start of string to insert */
	  this.match_start = 0;       /* start of matching string */
	  this.lookahead = 0;         /* number of valid bytes ahead in window */
	
	  this.prev_length = 0;
	  /* Length of the best match at previous step. Matches not greater than this
	   * are discarded. This is used in the lazy match evaluation.
	   */
	
	  this.max_chain_length = 0;
	  /* To speed up deflation, hash chains are never searched beyond this
	   * length.  A higher limit improves compression ratio but degrades the
	   * speed.
	   */
	
	  this.max_lazy_match = 0;
	  /* Attempt to find a better match only when the current match is strictly
	   * smaller than this value. This mechanism is used only for compression
	   * levels >= 4.
	   */
	  // That's alias to max_lazy_match, don't use directly
	  //this.max_insert_length = 0;
	  /* Insert new strings in the hash table only if the match length is not
	   * greater than this length. This saves time but degrades compression.
	   * max_insert_length is used only for compression levels <= 3.
	   */
	
	  this.level = 0;     /* compression level (1..9) */
	  this.strategy = 0;  /* favor or force Huffman coding*/
	
	  this.good_match = 0;
	  /* Use a faster search when the previous match is longer than this */
	
	  this.nice_match = 0; /* Stop searching when current match exceeds this */
	
	              /* used by trees.c: */
	
	  /* Didn't use ct_data typedef below to suppress compiler warning */
	
	  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
	  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
	  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
	
	  // Use flat array of DOUBLE size, with interleaved fata,
	  // because JS does not support effective
	  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
	  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
	  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
	  zero(this.dyn_ltree);
	  zero(this.dyn_dtree);
	  zero(this.bl_tree);
	
	  this.l_desc   = null;         /* desc. for literal tree */
	  this.d_desc   = null;         /* desc. for distance tree */
	  this.bl_desc  = null;         /* desc. for bit length tree */
	
	  //ush bl_count[MAX_BITS+1];
	  this.bl_count = new Uint16Array(MAX_BITS + 1);
	  /* number of codes at each bit length for an optimal tree */
	
	  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
	  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
	  zero(this.heap);
	
	  this.heap_len = 0;               /* number of elements in the heap */
	  this.heap_max = 0;               /* element of largest frequency */
	  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
	   * The same heap array is used to build all trees.
	   */
	
	  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
	  zero(this.depth);
	  /* Depth of each subtree used as tie breaker for trees of equal frequency
	   */
	
	  this.sym_buf = 0;        /* buffer for distances and literals/lengths */
	
	  this.lit_bufsize = 0;
	  /* Size of match buffer for literals/lengths.  There are 4 reasons for
	   * limiting lit_bufsize to 64K:
	   *   - frequencies can be kept in 16 bit counters
	   *   - if compression is not successful for the first block, all input
	   *     data is still in the window so we can still emit a stored block even
	   *     when input comes from standard input.  (This can also be done for
	   *     all blocks if lit_bufsize is not greater than 32K.)
	   *   - if compression is not successful for a file smaller than 64K, we can
	   *     even emit a stored file instead of a stored block (saving 5 bytes).
	   *     This is applicable only for zip (not gzip or zlib).
	   *   - creating new Huffman trees less frequently may not provide fast
	   *     adaptation to changes in the input data statistics. (Take for
	   *     example a binary file with poorly compressible code followed by
	   *     a highly compressible string table.) Smaller buffer sizes give
	   *     fast adaptation but have of course the overhead of transmitting
	   *     trees more frequently.
	   *   - I can't count above 4
	   */
	
	  this.sym_next = 0;      /* running index in sym_buf */
	  this.sym_end = 0;       /* symbol table full when sym_next reaches this */
	
	  this.opt_len = 0;       /* bit length of current block with optimal trees */
	  this.static_len = 0;    /* bit length of current block with static trees */
	  this.matches = 0;       /* number of string matches in current block */
	  this.insert = 0;        /* bytes at end of window left to insert */
	
	
	  this.bi_buf = 0;
	  /* Output buffer. bits are inserted starting at the bottom (least
	   * significant bits).
	   */
	  this.bi_valid = 0;
	  /* Number of valid bits in bi_buf.  All bits above the last valid bit
	   * are always zero.
	   */
	
	  // Used for window memory init. We safely ignore it for JS. That makes
	  // sense only for pointers and memory check tools.
	  //this.high_water = 0;
	  /* High water mark offset in window for initialized bytes -- bytes above
	   * this are set to zero in order to avoid memory check warnings when
	   * longest match routines access bytes past the input.  This is then
	   * updated to the new high water mark.
	   */
	}
	
	
	/* =========================================================================
	 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
	 */
	const deflateStateCheck = (strm) => {
	
	  if (!strm) {
	    return 1;
	  }
	  const s = strm.state;
	  if (!s || s.strm !== strm || (s.status !== INIT_STATE &&
	//#ifdef GZIP
	                                s.status !== GZIP_STATE &&
	//#endif
	                                s.status !== EXTRA_STATE &&
	                                s.status !== NAME_STATE &&
	                                s.status !== COMMENT_STATE &&
	                                s.status !== HCRC_STATE &&
	                                s.status !== BUSY_STATE &&
	                                s.status !== FINISH_STATE)) {
	    return 1;
	  }
	  return 0;
	};
	
	
	const deflateResetKeep = (strm) => {
	
	  if (deflateStateCheck(strm)) {
	    return err(strm, Z_STREAM_ERROR);
	  }
	
	  strm.total_in = strm.total_out = 0;
	  strm.data_type = Z_UNKNOWN;
	
	  const s = strm.state;
	  s.pending = 0;
	  s.pending_out = 0;
	
	  if (s.wrap < 0) {
	    s.wrap = -s.wrap;
	    /* was made negative by deflate(..., Z_FINISH); */
	  }
	  s.status =
	//#ifdef GZIP
	    s.wrap === 2 ? GZIP_STATE :
	//#endif
	    s.wrap ? INIT_STATE : BUSY_STATE;
	  strm.adler = (s.wrap === 2) ?
	    0  // crc32(0, Z_NULL, 0)
	  :
	    1; // adler32(0, Z_NULL, 0)
	  s.last_flush = -2;
	  _tr_init(s);
	  return Z_OK;
	};
	
	
	const deflateReset = (strm) => {
	
	  const ret = deflateResetKeep(strm);
	  if (ret === Z_OK) {
	    lm_init(strm.state);
	  }
	  return ret;
	};
	
	
	const deflateSetHeader = (strm, head) => {
	
	  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
	    return Z_STREAM_ERROR;
	  }
	  strm.state.gzhead = head;
	  return Z_OK;
	};
	
	
	const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
	
	  if (!strm) { // === Z_NULL
	    return Z_STREAM_ERROR;
	  }
	  let wrap = 1;
	
	  if (level === Z_DEFAULT_COMPRESSION) {
	    level = 6;
	  }
	
	  if (windowBits < 0) { /* suppress zlib wrapper */
	    wrap = 0;
	    windowBits = -windowBits;
	  }
	
	  else if (windowBits > 15) {
	    wrap = 2;           /* write gzip wrapper instead */
	    windowBits -= 16;
	  }
	
	
	  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
	    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
	    strategy < 0 || strategy > Z_FIXED || (windowBits === 8 && wrap !== 1)) {
	    return err(strm, Z_STREAM_ERROR);
	  }
	
	
	  if (windowBits === 8) {
	    windowBits = 9;
	  }
	  /* until 256-byte window bug fixed */
	
	  const s = new DeflateState();
	
	  strm.state = s;
	  s.strm = strm;
	  s.status = INIT_STATE;     /* to pass state test in deflateReset() */
	
	  s.wrap = wrap;
	  s.gzhead = null;
	  s.w_bits = windowBits;
	  s.w_size = 1 << s.w_bits;
	  s.w_mask = s.w_size - 1;
	
	  s.hash_bits = memLevel + 7;
	  s.hash_size = 1 << s.hash_bits;
	  s.hash_mask = s.hash_size - 1;
	  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
	
	  s.window = new Uint8Array(s.w_size * 2);
	  s.head = new Uint16Array(s.hash_size);
	  s.prev = new Uint16Array(s.w_size);
	
	  // Don't need mem init magic for JS.
	  //s.high_water = 0;  /* nothing written to s->window yet */
	
	  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */
	
	  /* We overlay pending_buf and sym_buf. This works since the average size
	   * for length/distance pairs over any compressed block is assured to be 31
	   * bits or less.
	   *
	   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
	   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
	   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
	   * possible fixed-codes length/distance pair is then 31 bits total.
	   *
	   * sym_buf starts one-fourth of the way into pending_buf. So there are
	   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
	   * in sym_buf is three bytes -- two for the distance and one for the
	   * literal/length. As each symbol is consumed, the pointer to the next
	   * sym_buf value to read moves forward three bytes. From that symbol, up to
	   * 31 bits are written to pending_buf. The closest the written pending_buf
	   * bits gets to the next sym_buf symbol to read is just before the last
	   * code is written. At that time, 31*(n-2) bits have been written, just
	   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
	   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
	   * symbols are written.) The closest the writing gets to what is unread is
	   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
	   * can range from 128 to 32768.
	   *
	   * Therefore, at a minimum, there are 142 bits of space between what is
	   * written and what is read in the overlain buffers, so the symbols cannot
	   * be overwritten by the compressed data. That space is actually 139 bits,
	   * due to the three-bit fixed-code block header.
	   *
	   * That covers the case where either Z_FIXED is specified, forcing fixed
	   * codes, or when the use of fixed codes is chosen, because that choice
	   * results in a smaller compressed block than dynamic codes. That latter
	   * condition then assures that the above analysis also covers all dynamic
	   * blocks. A dynamic-code block will only be chosen to be emitted if it has
	   * fewer bits than a fixed-code block would for the same set of symbols.
	   * Therefore its average symbol length is assured to be less than 31. So
	   * the compressed data for a dynamic block also cannot overwrite the
	   * symbols from which it is being constructed.
	   */
	
	  s.pending_buf_size = s.lit_bufsize * 4;
	  s.pending_buf = new Uint8Array(s.pending_buf_size);
	
	  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
	  //s->sym_buf = s->pending_buf + s->lit_bufsize;
	  s.sym_buf = s.lit_bufsize;
	
	  //s->sym_end = (s->lit_bufsize - 1) * 3;
	  s.sym_end = (s.lit_bufsize - 1) * 3;
	  /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
	   * on 16 bit machines and because stored blocks are restricted to
	   * 64K-1 bytes.
	   */
	
	  s.level = level;
	  s.strategy = strategy;
	  s.method = method;
	
	  return deflateReset(strm);
	};
	
	const deflateInit = (strm, level) => {
	
	  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
	};
	
	
	/* ========================================================================= */
	const deflate = (strm, flush) => {
	
	  if (deflateStateCheck(strm) || flush > Z_BLOCK || flush < 0) {
	    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
	  }
	
	  const s = strm.state;
	
	  if (!strm.output ||
	      (strm.avail_in !== 0 && !strm.input) ||
	      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
	    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
	  }
	
	  const old_flush = s.last_flush;
	  s.last_flush = flush;
	
	  /* Flush as much pending output as possible */
	  if (s.pending !== 0) {
	    flush_pending(strm);
	    if (strm.avail_out === 0) {
	      /* Since avail_out is 0, deflate will be called again with
	       * more output space, but possibly with both pending and
	       * avail_in equal to zero. There won't be anything to do,
	       * but this is not an error situation so make sure we
	       * return OK instead of BUF_ERROR at next call of deflate:
	       */
	      s.last_flush = -1;
	      return Z_OK;
	    }
	
	    /* Make sure there is something to do and avoid duplicate consecutive
	     * flushes. For repeated and useless calls with Z_FINISH, we keep
	     * returning Z_STREAM_END instead of Z_BUF_ERROR.
	     */
	  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
	    flush !== Z_FINISH) {
	    return err(strm, Z_BUF_ERROR);
	  }
	
	  /* User must not provide more input after the first FINISH: */
	  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
	    return err(strm, Z_BUF_ERROR);
	  }
	
	  /* Write the header */
	  if (s.status === INIT_STATE && s.wrap === 0) {
	    s.status = BUSY_STATE;
	  }
	  if (s.status === INIT_STATE) {
	    /* zlib header */
	    let header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
	    let level_flags = -1;
	
	    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
	      level_flags = 0;
	    } else if (s.level < 6) {
	      level_flags = 1;
	    } else if (s.level === 6) {
	      level_flags = 2;
	    } else {
	      level_flags = 3;
	    }
	    header |= (level_flags << 6);
	    if (s.strstart !== 0) { header |= PRESET_DICT; }
	    header += 31 - (header % 31);
	
	    putShortMSB(s, header);
	
	    /* Save the adler32 of the preset dictionary: */
	    if (s.strstart !== 0) {
	      putShortMSB(s, strm.adler >>> 16);
	      putShortMSB(s, strm.adler & 0xffff);
	    }
	    strm.adler = 1; // adler32(0L, Z_NULL, 0);
	    s.status = BUSY_STATE;
	
	    /* Compression must start with an empty pending buffer */
	    flush_pending(strm);
	    if (s.pending !== 0) {
	      s.last_flush = -1;
	      return Z_OK;
	    }
	  }
	//#ifdef GZIP
	  if (s.status === GZIP_STATE) {
	    /* gzip header */
	    strm.adler = 0;  //crc32(0L, Z_NULL, 0);
	    put_byte(s, 31);
	    put_byte(s, 139);
	    put_byte(s, 8);
	    if (!s.gzhead) { // s->gzhead == Z_NULL
	      put_byte(s, 0);
	      put_byte(s, 0);
	      put_byte(s, 0);
	      put_byte(s, 0);
	      put_byte(s, 0);
	      put_byte(s, s.level === 9 ? 2 :
	                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
	                   4 : 0));
	      put_byte(s, OS_CODE);
	      s.status = BUSY_STATE;
	
	      /* Compression must start with an empty pending buffer */
	      flush_pending(strm);
	      if (s.pending !== 0) {
	        s.last_flush = -1;
	        return Z_OK;
	      }
	    }
	    else {
	      put_byte(s, (s.gzhead.text ? 1 : 0) +
	                  (s.gzhead.hcrc ? 2 : 0) +
	                  (!s.gzhead.extra ? 0 : 4) +
	                  (!s.gzhead.name ? 0 : 8) +
	                  (!s.gzhead.comment ? 0 : 16)
	      );
	      put_byte(s, s.gzhead.time & 0xff);
	      put_byte(s, (s.gzhead.time >> 8) & 0xff);
	      put_byte(s, (s.gzhead.time >> 16) & 0xff);
	      put_byte(s, (s.gzhead.time >> 24) & 0xff);
	      put_byte(s, s.level === 9 ? 2 :
	                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
	                   4 : 0));
	      put_byte(s, s.gzhead.os & 0xff);
	      if (s.gzhead.extra && s.gzhead.extra.length) {
	        put_byte(s, s.gzhead.extra.length & 0xff);
	        put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
	      }
	      if (s.gzhead.hcrc) {
	        strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
	      }
	      s.gzindex = 0;
	      s.status = EXTRA_STATE;
	    }
	  }
	  if (s.status === EXTRA_STATE) {
	    if (s.gzhead.extra/* != Z_NULL*/) {
	      let beg = s.pending;   /* start of bytes to update crc */
	      let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
	      while (s.pending + left > s.pending_buf_size) {
	        let copy = s.pending_buf_size - s.pending;
	        // zmemcpy(s.pending_buf + s.pending,
	        //    s.gzhead.extra + s.gzindex, copy);
	        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
	        s.pending = s.pending_buf_size;
	        //--- HCRC_UPDATE(beg) ---//
	        if (s.gzhead.hcrc && s.pending > beg) {
	          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
	        }
	        //---//
	        s.gzindex += copy;
	        flush_pending(strm);
	        if (s.pending !== 0) {
	          s.last_flush = -1;
	          return Z_OK;
	        }
	        beg = 0;
	        left -= copy;
	      }
	      // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
	      //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
	      let gzhead_extra = new Uint8Array(s.gzhead.extra);
	      // zmemcpy(s->pending_buf + s->pending,
	      //     s->gzhead->extra + s->gzindex, left);
	      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
	      s.pending += left;
	      //--- HCRC_UPDATE(beg) ---//
	      if (s.gzhead.hcrc && s.pending > beg) {
	        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
	      }
	      //---//
	      s.gzindex = 0;
	    }
	    s.status = NAME_STATE;
	  }
	  if (s.status === NAME_STATE) {
	    if (s.gzhead.name/* != Z_NULL*/) {
	      let beg = s.pending;   /* start of bytes to update crc */
	      let val;
	      do {
	        if (s.pending === s.pending_buf_size) {
	          //--- HCRC_UPDATE(beg) ---//
	          if (s.gzhead.hcrc && s.pending > beg) {
	            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
	          }
	          //---//
	          flush_pending(strm);
	          if (s.pending !== 0) {
	            s.last_flush = -1;
	            return Z_OK;
	          }
	          beg = 0;
	        }
	        // JS specific: little magic to add zero terminator to end of string
	        if (s.gzindex < s.gzhead.name.length) {
	          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
	        } else {
	          val = 0;
	        }
	        put_byte(s, val);
	      } while (val !== 0);
	      //--- HCRC_UPDATE(beg) ---//
	      if (s.gzhead.hcrc && s.pending > beg) {
	        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
	      }
	      //---//
	      s.gzindex = 0;
	    }
	    s.status = COMMENT_STATE;
	  }
	  if (s.status === COMMENT_STATE) {
	    if (s.gzhead.comment/* != Z_NULL*/) {
	      let beg = s.pending;   /* start of bytes to update crc */
	      let val;
	      do {
	        if (s.pending === s.pending_buf_size) {
	          //--- HCRC_UPDATE(beg) ---//
	          if (s.gzhead.hcrc && s.pending > beg) {
	            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
	          }
	          //---//
	          flush_pending(strm);
	          if (s.pending !== 0) {
	            s.last_flush = -1;
	            return Z_OK;
	          }
	          beg = 0;
	        }
	        // JS specific: little magic to add zero terminator to end of string
	        if (s.gzindex < s.gzhead.comment.length) {
	          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
	        } else {
	          val = 0;
	        }
	        put_byte(s, val);
	      } while (val !== 0);
	      //--- HCRC_UPDATE(beg) ---//
	      if (s.gzhead.hcrc && s.pending > beg) {
	        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
	      }
	      //---//
	    }
	    s.status = HCRC_STATE;
	  }
	  if (s.status === HCRC_STATE) {
	    if (s.gzhead.hcrc) {
	      if (s.pending + 2 > s.pending_buf_size) {
	        flush_pending(strm);
	        if (s.pending !== 0) {
	          s.last_flush = -1;
	          return Z_OK;
	        }
	      }
	      put_byte(s, strm.adler & 0xff);
	      put_byte(s, (strm.adler >> 8) & 0xff);
	      strm.adler = 0; //crc32(0L, Z_NULL, 0);
	    }
	    s.status = BUSY_STATE;
	
	    /* Compression must start with an empty pending buffer */
	    flush_pending(strm);
	    if (s.pending !== 0) {
	      s.last_flush = -1;
	      return Z_OK;
	    }
	  }
	//#endif
	
	  /* Start a new block or continue the current one.
	   */
	  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
	    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
	    let bstate = s.level === 0 ? deflate_stored(s, flush) :
	                 s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) :
	                 s.strategy === Z_RLE ? deflate_rle(s, flush) :
	                 configuration_table[s.level].func(s, flush);
	
	    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
	      s.status = FINISH_STATE;
	    }
	    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
	      if (strm.avail_out === 0) {
	        s.last_flush = -1;
	        /* avoid BUF_ERROR next call, see above */
	      }
	      return Z_OK;
	      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
	       * of deflate should use the same flush parameter to make sure
	       * that the flush is complete. So we don't have to output an
	       * empty block here, this will be done at next call. This also
	       * ensures that for a very small output buffer, we emit at most
	       * one empty block.
	       */
	    }
	    if (bstate === BS_BLOCK_DONE) {
	      if (flush === Z_PARTIAL_FLUSH) {
	        _tr_align(s);
	      }
	      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */
	
	        _tr_stored_block(s, 0, 0, false);
	        /* For a full flush, this empty block will be recognized
	         * as a special marker by inflate_sync().
	         */
	        if (flush === Z_FULL_FLUSH) {
	          /*** CLEAR_HASH(s); ***/             /* forget history */
	          zero(s.head); // Fill with NIL (= 0);
	
	          if (s.lookahead === 0) {
	            s.strstart = 0;
	            s.block_start = 0;
	            s.insert = 0;
	          }
	        }
	      }
	      flush_pending(strm);
	      if (strm.avail_out === 0) {
	        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
	        return Z_OK;
	      }
	    }
	  }
	
	  if (flush !== Z_FINISH) { return Z_OK; }
	  if (s.wrap <= 0) { return Z_STREAM_END; }
	
	  /* Write the trailer */
	  if (s.wrap === 2) {
	    put_byte(s, strm.adler & 0xff);
	    put_byte(s, (strm.adler >> 8) & 0xff);
	    put_byte(s, (strm.adler >> 16) & 0xff);
	    put_byte(s, (strm.adler >> 24) & 0xff);
	    put_byte(s, strm.total_in & 0xff);
	    put_byte(s, (strm.total_in >> 8) & 0xff);
	    put_byte(s, (strm.total_in >> 16) & 0xff);
	    put_byte(s, (strm.total_in >> 24) & 0xff);
	  }
	  else
	  {
	    putShortMSB(s, strm.adler >>> 16);
	    putShortMSB(s, strm.adler & 0xffff);
	  }
	
	  flush_pending(strm);
	  /* If avail_out is zero, the application will call deflate again
	   * to flush the rest.
	   */
	  if (s.wrap > 0) { s.wrap = -s.wrap; }
	  /* write the trailer only once! */
	  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
	};
	
	
	const deflateEnd = (strm) => {
	
	  if (deflateStateCheck(strm)) {
	    return Z_STREAM_ERROR;
	  }
	
	  const status = strm.state.status;
	
	  strm.state = null;
	
	  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
	};
	
	
	/* =========================================================================
	 * Initializes the compression dictionary from the given byte
	 * sequence without producing any compressed output.
	 */
	const deflateSetDictionary = (strm, dictionary) => {
	
	  let dictLength = dictionary.length;
	
	  if (deflateStateCheck(strm)) {
	    return Z_STREAM_ERROR;
	  }
	
	  const s = strm.state;
	  const wrap = s.wrap;
	
	  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
	    return Z_STREAM_ERROR;
	  }
	
	  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
	  if (wrap === 1) {
	    /* adler32(strm->adler, dictionary, dictLength); */
	    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
	  }
	
	  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */
	
	  /* if dictionary would fill window, just replace the history */
	  if (dictLength >= s.w_size) {
	    if (wrap === 0) {            /* already empty otherwise */
	      /*** CLEAR_HASH(s); ***/
	      zero(s.head); // Fill with NIL (= 0);
	      s.strstart = 0;
	      s.block_start = 0;
	      s.insert = 0;
	    }
	    /* use the tail */
	    // dictionary = dictionary.slice(dictLength - s.w_size);
	    let tmpDict = new Uint8Array(s.w_size);
	    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
	    dictionary = tmpDict;
	    dictLength = s.w_size;
	  }
	  /* insert dictionary into window and hash */
	  const avail = strm.avail_in;
	  const next = strm.next_in;
	  const input = strm.input;
	  strm.avail_in = dictLength;
	  strm.next_in = 0;
	  strm.input = dictionary;
	  fill_window(s);
	  while (s.lookahead >= MIN_MATCH) {
	    let str = s.strstart;
	    let n = s.lookahead - (MIN_MATCH - 1);
	    do {
	      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
	      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
	
	      s.prev[str & s.w_mask] = s.head[s.ins_h];
	
	      s.head[s.ins_h] = str;
	      str++;
	    } while (--n);
	    s.strstart = str;
	    s.lookahead = MIN_MATCH - 1;
	    fill_window(s);
	  }
	  s.strstart += s.lookahead;
	  s.block_start = s.strstart;
	  s.insert = s.lookahead;
	  s.lookahead = 0;
	  s.match_length = s.prev_length = MIN_MATCH - 1;
	  s.match_available = 0;
	  strm.next_in = next;
	  strm.input = input;
	  strm.avail_in = avail;
	  s.wrap = wrap;
	  return Z_OK;
	};
	
	
	module.exports.deflateInit = deflateInit;
	module.exports.deflateInit2 = deflateInit2;
	module.exports.deflateReset = deflateReset;
	module.exports.deflateResetKeep = deflateResetKeep;
	module.exports.deflateSetHeader = deflateSetHeader;
	module.exports.deflate = deflate;
	module.exports.deflateEnd = deflateEnd;
	module.exports.deflateSetDictionary = deflateSetDictionary;
	module.exports.deflateInfo = 'pako deflate (from Nodeca project)';
	
	/* Not implemented
	module.exports.deflateBound = deflateBound;
	module.exports.deflateCopy = deflateCopy;
	module.exports.deflateGetDictionary = deflateGetDictionary;
	module.exports.deflateParams = deflateParams;
	module.exports.deflatePending = deflatePending;
	module.exports.deflatePrime = deflatePrime;
	module.exports.deflateTune = deflateTune;
	*/


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	function GZheader() {
	  /* true if compressed data believed to be text */
	  this.text       = 0;
	  /* modification time */
	  this.time       = 0;
	  /* extra flags (not used when writing a gzip file) */
	  this.xflags     = 0;
	  /* operating system */
	  this.os         = 0;
	  /* pointer to extra field or Z_NULL if none */
	  this.extra      = null;
	  /* extra field length (valid if extra != Z_NULL) */
	  this.extra_len  = 0; // Actually, we don't need it in JS,
	                       // but leave for few code modifications
	
	  //
	  // Setup limits is not necessary because in js we should not preallocate memory
	  // for inflate use constant limit in 65536 bytes
	  //
	
	  /* space at extra (only when reading header) */
	  // this.extra_max  = 0;
	  /* pointer to zero-terminated file name or Z_NULL */
	  this.name       = '';
	  /* space at name (only when reading header) */
	  // this.name_max   = 0;
	  /* pointer to zero-terminated comment or Z_NULL */
	  this.comment    = '';
	  /* space at comment (only when reading header) */
	  // this.comm_max   = 0;
	  /* true if there was or will be a header crc */
	  this.hcrc       = 0;
	  /* true when done reading gzip header (not used when writing a gzip file) */
	  this.done       = false;
	}
	
	module.exports = GZheader;


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	// See state defs from inflate.js
	const BAD = 16209;       /* got a data error -- remain here until reset */
	const TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */
	
	/*
	   Decode literal, length, and distance codes and write out the resulting
	   literal and match bytes until either not enough input or output is
	   available, an end-of-block is encountered, or a data error is encountered.
	   When large enough input and output buffers are supplied to inflate(), for
	   example, a 16K input buffer and a 64K output buffer, more than 95% of the
	   inflate execution time is spent in this routine.
	
	   Entry assumptions:
	
	        state.mode === LEN
	        strm.avail_in >= 6
	        strm.avail_out >= 258
	        start >= strm.avail_out
	        state.bits < 8
	
	   On return, state.mode is one of:
	
	        LEN -- ran out of enough output space or enough available input
	        TYPE -- reached end of block code, inflate() to interpret next block
	        BAD -- error in block data
	
	   Notes:
	
	    - The maximum input bits used by a length/distance pair is 15 bits for the
	      length code, 5 bits for the length extra, 15 bits for the distance code,
	      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
	      Therefore if strm.avail_in >= 6, then there is enough input to avoid
	      checking for available input while decoding.
	
	    - The maximum bytes that a single length/distance pair can output is 258
	      bytes, which is the maximum length that can be coded.  inflate_fast()
	      requires strm.avail_out >= 258 for each loop to avoid checking for
	      output space.
	 */
	module.exports = function inflate_fast(strm, start) {
	  let _in;                    /* local strm.input */
	  let last;                   /* have enough input while in < last */
	  let _out;                   /* local strm.output */
	  let beg;                    /* inflate()'s initial strm.output */
	  let end;                    /* while out < end, enough space available */
	//#ifdef INFLATE_STRICT
	  let dmax;                   /* maximum distance from zlib header */
	//#endif
	  let wsize;                  /* window size or zero if not using window */
	  let whave;                  /* valid bytes in the window */
	  let wnext;                  /* window write index */
	  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
	  let s_window;               /* allocated sliding window, if wsize != 0 */
	  let hold;                   /* local strm.hold */
	  let bits;                   /* local strm.bits */
	  let lcode;                  /* local strm.lencode */
	  let dcode;                  /* local strm.distcode */
	  let lmask;                  /* mask for first level of length codes */
	  let dmask;                  /* mask for first level of distance codes */
	  let here;                   /* retrieved table entry */
	  let op;                     /* code bits, operation, extra bits, or */
	                              /*  window position, window bytes to copy */
	  let len;                    /* match length, unused bytes */
	  let dist;                   /* match distance */
	  let from;                   /* where to copy match from */
	  let from_source;
	
	
	  let input, output; // JS specific, because we have no pointers
	
	  /* copy state to local variables */
	  const state = strm.state;
	  //here = state.here;
	  _in = strm.next_in;
	  input = strm.input;
	  last = _in + (strm.avail_in - 5);
	  _out = strm.next_out;
	  output = strm.output;
	  beg = _out - (start - strm.avail_out);
	  end = _out + (strm.avail_out - 257);
	//#ifdef INFLATE_STRICT
	  dmax = state.dmax;
	//#endif
	  wsize = state.wsize;
	  whave = state.whave;
	  wnext = state.wnext;
	  s_window = state.window;
	  hold = state.hold;
	  bits = state.bits;
	  lcode = state.lencode;
	  dcode = state.distcode;
	  lmask = (1 << state.lenbits) - 1;
	  dmask = (1 << state.distbits) - 1;
	
	
	  /* decode literals and length/distances until end-of-block or not enough
	     input data or output space */
	
	  top:
	  do {
	    if (bits < 15) {
	      hold += input[_in++] << bits;
	      bits += 8;
	      hold += input[_in++] << bits;
	      bits += 8;
	    }
	
	    here = lcode[hold & lmask];
	
	    dolen:
	    for (;;) { // Goto emulation
	      op = here >>> 24/*here.bits*/;
	      hold >>>= op;
	      bits -= op;
	      op = (here >>> 16) & 0xff/*here.op*/;
	      if (op === 0) {                          /* literal */
	        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
	        //        "inflate:         literal '%c'\n" :
	        //        "inflate:         literal 0x%02x\n", here.val));
	        output[_out++] = here & 0xffff/*here.val*/;
	      }
	      else if (op & 16) {                     /* length base */
	        len = here & 0xffff/*here.val*/;
	        op &= 15;                           /* number of extra bits */
	        if (op) {
	          if (bits < op) {
	            hold += input[_in++] << bits;
	            bits += 8;
	          }
	          len += hold & ((1 << op) - 1);
	          hold >>>= op;
	          bits -= op;
	        }
	        //Tracevv((stderr, "inflate:         length %u\n", len));
	        if (bits < 15) {
	          hold += input[_in++] << bits;
	          bits += 8;
	          hold += input[_in++] << bits;
	          bits += 8;
	        }
	        here = dcode[hold & dmask];
	
	        dodist:
	        for (;;) { // goto emulation
	          op = here >>> 24/*here.bits*/;
	          hold >>>= op;
	          bits -= op;
	          op = (here >>> 16) & 0xff/*here.op*/;
	
	          if (op & 16) {                      /* distance base */
	            dist = here & 0xffff/*here.val*/;
	            op &= 15;                       /* number of extra bits */
	            if (bits < op) {
	              hold += input[_in++] << bits;
	              bits += 8;
	              if (bits < op) {
	                hold += input[_in++] << bits;
	                bits += 8;
	              }
	            }
	            dist += hold & ((1 << op) - 1);
	//#ifdef INFLATE_STRICT
	            if (dist > dmax) {
	              strm.msg = 'invalid distance too far back';
	              state.mode = BAD;
	              break top;
	            }
	//#endif
	            hold >>>= op;
	            bits -= op;
	            //Tracevv((stderr, "inflate:         distance %u\n", dist));
	            op = _out - beg;                /* max distance in output */
	            if (dist > op) {                /* see if copy from window */
	              op = dist - op;               /* distance back in window */
	              if (op > whave) {
	                if (state.sane) {
	                  strm.msg = 'invalid distance too far back';
	                  state.mode = BAD;
	                  break top;
	                }
	
	// (!) This block is disabled in zlib defaults,
	// don't enable it for binary compatibility
	//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
	//                if (len <= op - whave) {
	//                  do {
	//                    output[_out++] = 0;
	//                  } while (--len);
	//                  continue top;
	//                }
	//                len -= op - whave;
	//                do {
	//                  output[_out++] = 0;
	//                } while (--op > whave);
	//                if (op === 0) {
	//                  from = _out - dist;
	//                  do {
	//                    output[_out++] = output[from++];
	//                  } while (--len);
	//                  continue top;
	//                }
	//#endif
	              }
	              from = 0; // window index
	              from_source = s_window;
	              if (wnext === 0) {           /* very common case */
	                from += wsize - op;
	                if (op < len) {         /* some from window */
	                  len -= op;
	                  do {
	                    output[_out++] = s_window[from++];
	                  } while (--op);
	                  from = _out - dist;  /* rest from output */
	                  from_source = output;
	                }
	              }
	              else if (wnext < op) {      /* wrap around window */
	                from += wsize + wnext - op;
	                op -= wnext;
	                if (op < len) {         /* some from end of window */
	                  len -= op;
	                  do {
	                    output[_out++] = s_window[from++];
	                  } while (--op);
	                  from = 0;
	                  if (wnext < len) {  /* some from start of window */
	                    op = wnext;
	                    len -= op;
	                    do {
	                      output[_out++] = s_window[from++];
	                    } while (--op);
	                    from = _out - dist;      /* rest from output */
	                    from_source = output;
	                  }
	                }
	              }
	              else {                      /* contiguous in window */
	                from += wnext - op;
	                if (op < len) {         /* some from window */
	                  len -= op;
	                  do {
	                    output[_out++] = s_window[from++];
	                  } while (--op);
	                  from = _out - dist;  /* rest from output */
	                  from_source = output;
	                }
	              }
	              while (len > 2) {
	                output[_out++] = from_source[from++];
	                output[_out++] = from_source[from++];
	                output[_out++] = from_source[from++];
	                len -= 3;
	              }
	              if (len) {
	                output[_out++] = from_source[from++];
	                if (len > 1) {
	                  output[_out++] = from_source[from++];
	                }
	              }
	            }
	            else {
	              from = _out - dist;          /* copy direct from output */
	              do {                        /* minimum length is three */
	                output[_out++] = output[from++];
	                output[_out++] = output[from++];
	                output[_out++] = output[from++];
	                len -= 3;
	              } while (len > 2);
	              if (len) {
	                output[_out++] = output[from++];
	                if (len > 1) {
	                  output[_out++] = output[from++];
	                }
	              }
	            }
	          }
	          else if ((op & 64) === 0) {          /* 2nd level distance code */
	            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
	            continue dodist;
	          }
	          else {
	            strm.msg = 'invalid distance code';
	            state.mode = BAD;
	            break top;
	          }
	
	          break; // need to emulate goto via "continue"
	        }
	      }
	      else if ((op & 64) === 0) {              /* 2nd level length code */
	        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
	        continue dolen;
	      }
	      else if (op & 32) {                     /* end-of-block */
	        //Tracevv((stderr, "inflate:         end of block\n"));
	        state.mode = TYPE;
	        break top;
	      }
	      else {
	        strm.msg = 'invalid literal/length code';
	        state.mode = BAD;
	        break top;
	      }
	
	      break; // need to emulate goto via "continue"
	    }
	  } while (_in < last && _out < end);
	
	  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
	  len = bits >> 3;
	  _in -= len;
	  bits -= len << 3;
	  hold &= (1 << bits) - 1;
	
	  /* update state and return */
	  strm.next_in = _in;
	  strm.next_out = _out;
	  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
	  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
	  state.hold = hold;
	  state.bits = bits;
	  return;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	const adler32       = __webpack_require__(6);
	const crc32         = __webpack_require__(7);
	const inflate_fast  = __webpack_require__(22);
	const inflate_table = __webpack_require__(24);
	
	const CODES = 0;
	const LENS = 1;
	const DISTS = 2;
	
	/* Public constants ==========================================================*/
	/* ===========================================================================*/
	
	const {
	  Z_FINISH, Z_BLOCK, Z_TREES,
	  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR, Z_BUF_ERROR,
	  Z_DEFLATED
	} = __webpack_require__(1);
	
	
	/* STATES ====================================================================*/
	/* ===========================================================================*/
	
	
	const    HEAD = 16180;       /* i: waiting for magic header */
	const    FLAGS = 16181;      /* i: waiting for method and flags (gzip) */
	const    TIME = 16182;       /* i: waiting for modification time (gzip) */
	const    OS = 16183;         /* i: waiting for extra flags and operating system (gzip) */
	const    EXLEN = 16184;      /* i: waiting for extra length (gzip) */
	const    EXTRA = 16185;      /* i: waiting for extra bytes (gzip) */
	const    NAME = 16186;       /* i: waiting for end of file name (gzip) */
	const    COMMENT = 16187;    /* i: waiting for end of comment (gzip) */
	const    HCRC = 16188;       /* i: waiting for header crc (gzip) */
	const    DICTID = 16189;    /* i: waiting for dictionary check value */
	const    DICT = 16190;      /* waiting for inflateSetDictionary() call */
	const        TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */
	const        TYPEDO = 16192;    /* i: same, but skip check to exit inflate on new block */
	const        STORED = 16193;    /* i: waiting for stored size (length and complement) */
	const        COPY_ = 16194;     /* i/o: same as COPY below, but only first time in */
	const        COPY = 16195;      /* i/o: waiting for input or output to copy stored block */
	const        TABLE = 16196;     /* i: waiting for dynamic block table lengths */
	const        LENLENS = 16197;   /* i: waiting for code length code lengths */
	const        CODELENS = 16198;  /* i: waiting for length/lit and distance code lengths */
	const            LEN_ = 16199;      /* i: same as LEN below, but only first time in */
	const            LEN = 16200;       /* i: waiting for length/lit/eob code */
	const            LENEXT = 16201;    /* i: waiting for length extra bits */
	const            DIST = 16202;      /* i: waiting for distance code */
	const            DISTEXT = 16203;   /* i: waiting for distance extra bits */
	const            MATCH = 16204;     /* o: waiting for output space to copy string */
	const            LIT = 16205;       /* o: waiting for output space to write literal */
	const    CHECK = 16206;     /* i: waiting for 32-bit check value */
	const    LENGTH = 16207;    /* i: waiting for 32-bit length (gzip) */
	const    DONE = 16208;      /* finished check, done -- remain here until reset */
	const    BAD = 16209;       /* got a data error -- remain here until reset */
	const    MEM = 16210;       /* got an inflate() memory error -- remain here until reset */
	const    SYNC = 16211;      /* looking for synchronization bytes to restart inflate() */
	
	/* ===========================================================================*/
	
	
	
	const ENOUGH_LENS = 852;
	const ENOUGH_DISTS = 592;
	//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
	
	const MAX_WBITS = 15;
	/* 32K LZ77 window */
	const DEF_WBITS = MAX_WBITS;
	
	
	const zswap32 = (q) => {
	
	  return  (((q >>> 24) & 0xff) +
	          ((q >>> 8) & 0xff00) +
	          ((q & 0xff00) << 8) +
	          ((q & 0xff) << 24));
	};
	
	
	function InflateState() {
	  this.strm = null;           /* pointer back to this zlib stream */
	  this.mode = 0;              /* current inflate mode */
	  this.last = false;          /* true if processing last block */
	  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip,
	                                 bit 2 true to validate check value */
	  this.havedict = false;      /* true if dictionary provided */
	  this.flags = 0;             /* gzip header method and flags (0 if zlib), or
	                                 -1 if raw or no header yet */
	  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
	  this.check = 0;             /* protected copy of check value */
	  this.total = 0;             /* protected copy of output count */
	  // TODO: may be {}
	  this.head = null;           /* where to save gzip header information */
	
	  /* sliding window */
	  this.wbits = 0;             /* log base 2 of requested window size */
	  this.wsize = 0;             /* window size or zero if not using window */
	  this.whave = 0;             /* valid bytes in the window */
	  this.wnext = 0;             /* window write index */
	  this.window = null;         /* allocated sliding window, if needed */
	
	  /* bit accumulator */
	  this.hold = 0;              /* input bit accumulator */
	  this.bits = 0;              /* number of bits in "in" */
	
	  /* for string and stored block copying */
	  this.length = 0;            /* literal or length of data to copy */
	  this.offset = 0;            /* distance back to copy string from */
	
	  /* for table and code decoding */
	  this.extra = 0;             /* extra bits needed */
	
	  /* fixed and dynamic code tables */
	  this.lencode = null;          /* starting table for length/literal codes */
	  this.distcode = null;         /* starting table for distance codes */
	  this.lenbits = 0;           /* index bits for lencode */
	  this.distbits = 0;          /* index bits for distcode */
	
	  /* dynamic table building */
	  this.ncode = 0;             /* number of code length code lengths */
	  this.nlen = 0;              /* number of length code lengths */
	  this.ndist = 0;             /* number of distance code lengths */
	  this.have = 0;              /* number of code lengths in lens[] */
	  this.next = null;              /* next available space in codes[] */
	
	  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
	  this.work = new Uint16Array(288); /* work area for code table building */
	
	  /*
	   because we don't have pointers in js, we use lencode and distcode directly
	   as buffers so we don't need codes
	  */
	  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
	  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
	  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
	  this.sane = 0;                   /* if false, allow invalid distance too far */
	  this.back = 0;                   /* bits back of last unprocessed length/lit */
	  this.was = 0;                    /* initial length of match */
	}
	
	
	const inflateStateCheck = (strm) => {
	
	  if (!strm) {
	    return 1;
	  }
	  const state = strm.state;
	  if (!state || state.strm !== strm ||
	    state.mode < HEAD || state.mode > SYNC) {
	    return 1;
	  }
	  return 0;
	};
	
	
	const inflateResetKeep = (strm) => {
	
	  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
	  const state = strm.state;
	  strm.total_in = strm.total_out = state.total = 0;
	  strm.msg = ''; /*Z_NULL*/
	  if (state.wrap) {       /* to support ill-conceived Java test suite */
	    strm.adler = state.wrap & 1;
	  }
	  state.mode = HEAD;
	  state.last = 0;
	  state.havedict = 0;
	  state.flags = -1;
	  state.dmax = 32768;
	  state.head = null/*Z_NULL*/;
	  state.hold = 0;
	  state.bits = 0;
	  //state.lencode = state.distcode = state.next = state.codes;
	  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
	  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
	
	  state.sane = 1;
	  state.back = -1;
	  //Tracev((stderr, "inflate: reset\n"));
	  return Z_OK;
	};
	
	
	const inflateReset = (strm) => {
	
	  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
	  const state = strm.state;
	  state.wsize = 0;
	  state.whave = 0;
	  state.wnext = 0;
	  return inflateResetKeep(strm);
	
	};
	
	
	const inflateReset2 = (strm, windowBits) => {
	  let wrap;
	
	  /* get the state */
	  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
	  const state = strm.state;
	
	  /* extract wrap request from windowBits parameter */
	  if (windowBits < 0) {
	    wrap = 0;
	    windowBits = -windowBits;
	  }
	  else {
	    wrap = (windowBits >> 4) + 5;
	    if (windowBits < 48) {
	      windowBits &= 15;
	    }
	  }
	
	  /* set number of window bits, free window if different */
	  if (windowBits && (windowBits < 8 || windowBits > 15)) {
	    return Z_STREAM_ERROR;
	  }
	  if (state.window !== null && state.wbits !== windowBits) {
	    state.window = null;
	  }
	
	  /* update state and reset the rest of it */
	  state.wrap = wrap;
	  state.wbits = windowBits;
	  return inflateReset(strm);
	};
	
	
	const inflateInit2 = (strm, windowBits) => {
	
	  if (!strm) { return Z_STREAM_ERROR; }
	  //strm.msg = Z_NULL;                 /* in case we return an error */
	
	  const state = new InflateState();
	
	  //if (state === Z_NULL) return Z_MEM_ERROR;
	  //Tracev((stderr, "inflate: allocated\n"));
	  strm.state = state;
	  state.strm = strm;
	  state.window = null/*Z_NULL*/;
	  state.mode = HEAD;     /* to pass state test in inflateReset2() */
	  const ret = inflateReset2(strm, windowBits);
	  if (ret !== Z_OK) {
	    strm.state = null/*Z_NULL*/;
	  }
	  return ret;
	};
	
	
	const inflateInit = (strm) => {
	
	  return inflateInit2(strm, DEF_WBITS);
	};
	
	
	/*
	 Return state with length and distance decoding tables and index sizes set to
	 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
	 If BUILDFIXED is defined, then instead this routine builds the tables the
	 first time it's called, and returns those tables the first time and
	 thereafter.  This reduces the size of the code by about 2K bytes, in
	 exchange for a little execution time.  However, BUILDFIXED should not be
	 used for threaded applications, since the rewriting of the tables and virgin
	 may not be thread-safe.
	 */
	let virgin = true;
	
	let lenfix, distfix; // We have no pointers in JS, so keep tables separate
	
	
	const fixedtables = (state) => {
	
	  /* build fixed huffman tables if first call (may not be thread safe) */
	  if (virgin) {
	    lenfix = new Int32Array(512);
	    distfix = new Int32Array(32);
	
	    /* literal/length table */
	    let sym = 0;
	    while (sym < 144) { state.lens[sym++] = 8; }
	    while (sym < 256) { state.lens[sym++] = 9; }
	    while (sym < 280) { state.lens[sym++] = 7; }
	    while (sym < 288) { state.lens[sym++] = 8; }
	
	    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });
	
	    /* distance table */
	    sym = 0;
	    while (sym < 32) { state.lens[sym++] = 5; }
	
	    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });
	
	    /* do this just once */
	    virgin = false;
	  }
	
	  state.lencode = lenfix;
	  state.lenbits = 9;
	  state.distcode = distfix;
	  state.distbits = 5;
	};
	
	
	/*
	 Update the window with the last wsize (normally 32K) bytes written before
	 returning.  If window does not exist yet, create it.  This is only called
	 when a window is already in use, or when output has been written during this
	 inflate call, but the end of the deflate stream has not been reached yet.
	 It is also called to create a window for dictionary data when a dictionary
	 is loaded.
	
	 Providing output buffers larger than 32K to inflate() should provide a speed
	 advantage, since only the last 32K of output is copied to the sliding window
	 upon return from inflate(), and since all distances after the first 32K of
	 output will fall in the output data, making match copies simpler and faster.
	 The advantage may be dependent on the size of the processor's data caches.
	 */
	const updatewindow = (strm, src, end, copy) => {
	
	  let dist;
	  const state = strm.state;
	
	  /* if it hasn't been done already, allocate space for the window */
	  if (state.window === null) {
	    state.wsize = 1 << state.wbits;
	    state.wnext = 0;
	    state.whave = 0;
	
	    state.window = new Uint8Array(state.wsize);
	  }
	
	  /* copy state->wsize or less output bytes into the circular window */
	  if (copy >= state.wsize) {
	    state.window.set(src.subarray(end - state.wsize, end), 0);
	    state.wnext = 0;
	    state.whave = state.wsize;
	  }
	  else {
	    dist = state.wsize - state.wnext;
	    if (dist > copy) {
	      dist = copy;
	    }
	    //zmemcpy(state->window + state->wnext, end - copy, dist);
	    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
	    copy -= dist;
	    if (copy) {
	      //zmemcpy(state->window, end - copy, copy);
	      state.window.set(src.subarray(end - copy, end), 0);
	      state.wnext = copy;
	      state.whave = state.wsize;
	    }
	    else {
	      state.wnext += dist;
	      if (state.wnext === state.wsize) { state.wnext = 0; }
	      if (state.whave < state.wsize) { state.whave += dist; }
	    }
	  }
	  return 0;
	};
	
	
	const inflate = (strm, flush) => {
	
	  let state;
	  let input, output;          // input/output buffers
	  let next;                   /* next input INDEX */
	  let put;                    /* next output INDEX */
	  let have, left;             /* available input and output */
	  let hold;                   /* bit buffer */
	  let bits;                   /* bits in bit buffer */
	  let _in, _out;              /* save starting available input and output */
	  let copy;                   /* number of stored or match bytes to copy */
	  let from;                   /* where to copy match bytes from */
	  let from_source;
	  let here = 0;               /* current decoding table entry */
	  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
	  //let last;                   /* parent table entry */
	  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
	  let len;                    /* length to copy for repeats, bits to drop */
	  let ret;                    /* return code */
	  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
	  let opts;
	
	  let n; // temporary variable for NEED_BITS
	
	  const order = /* permutation of code lengths */
	    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);
	
	
	  if (inflateStateCheck(strm) || !strm.output ||
	      (!strm.input && strm.avail_in !== 0)) {
	    return Z_STREAM_ERROR;
	  }
	
	  state = strm.state;
	  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */
	
	
	  //--- LOAD() ---
	  put = strm.next_out;
	  output = strm.output;
	  left = strm.avail_out;
	  next = strm.next_in;
	  input = strm.input;
	  have = strm.avail_in;
	  hold = state.hold;
	  bits = state.bits;
	  //---
	
	  _in = have;
	  _out = left;
	  ret = Z_OK;
	
	  inf_leave: // goto emulation
	  for (;;) {
	    switch (state.mode) {
	      case HEAD:
	        if (state.wrap === 0) {
	          state.mode = TYPEDO;
	          break;
	        }
	        //=== NEEDBITS(16);
	        while (bits < 16) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
	          if (state.wbits === 0) {
	            state.wbits = 15;
	          }
	          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
	          //=== CRC2(state.check, hold);
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          state.check = crc32(state.check, hbuf, 2, 0);
	          //===//
	
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	          state.mode = FLAGS;
	          break;
	        }
	        if (state.head) {
	          state.head.done = false;
	        }
	        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
	          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
	          strm.msg = 'incorrect header check';
	          state.mode = BAD;
	          break;
	        }
	        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
	          strm.msg = 'unknown compression method';
	          state.mode = BAD;
	          break;
	        }
	        //--- DROPBITS(4) ---//
	        hold >>>= 4;
	        bits -= 4;
	        //---//
	        len = (hold & 0x0f)/*BITS(4)*/ + 8;
	        if (state.wbits === 0) {
	          state.wbits = len;
	        }
	        if (len > 15 || len > state.wbits) {
	          strm.msg = 'invalid window size';
	          state.mode = BAD;
	          break;
	        }
	
	        // !!! pako patch. Force use `options.windowBits` if passed.
	        // Required to always use max window size by default.
	        state.dmax = 1 << state.wbits;
	        //state.dmax = 1 << len;
	
	        state.flags = 0;               /* indicate zlib header */
	        //Tracev((stderr, "inflate:   zlib header ok\n"));
	        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
	        state.mode = hold & 0x200 ? DICTID : TYPE;
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        break;
	      case FLAGS:
	        //=== NEEDBITS(16); */
	        while (bits < 16) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        state.flags = hold;
	        if ((state.flags & 0xff) !== Z_DEFLATED) {
	          strm.msg = 'unknown compression method';
	          state.mode = BAD;
	          break;
	        }
	        if (state.flags & 0xe000) {
	          strm.msg = 'unknown header flags set';
	          state.mode = BAD;
	          break;
	        }
	        if (state.head) {
	          state.head.text = ((hold >> 8) & 1);
	        }
	        if ((state.flags & 0x0200) && (state.wrap & 4)) {
	          //=== CRC2(state.check, hold);
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          state.check = crc32(state.check, hbuf, 2, 0);
	          //===//
	        }
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = TIME;
	        /* falls through */
	      case TIME:
	        //=== NEEDBITS(32); */
	        while (bits < 32) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if (state.head) {
	          state.head.time = hold;
	        }
	        if ((state.flags & 0x0200) && (state.wrap & 4)) {
	          //=== CRC4(state.check, hold)
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          hbuf[2] = (hold >>> 16) & 0xff;
	          hbuf[3] = (hold >>> 24) & 0xff;
	          state.check = crc32(state.check, hbuf, 4, 0);
	          //===
	        }
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = OS;
	        /* falls through */
	      case OS:
	        //=== NEEDBITS(16); */
	        while (bits < 16) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if (state.head) {
	          state.head.xflags = (hold & 0xff);
	          state.head.os = (hold >> 8);
	        }
	        if ((state.flags & 0x0200) && (state.wrap & 4)) {
	          //=== CRC2(state.check, hold);
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          state.check = crc32(state.check, hbuf, 2, 0);
	          //===//
	        }
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = EXLEN;
	        /* falls through */
	      case EXLEN:
	        if (state.flags & 0x0400) {
	          //=== NEEDBITS(16); */
	          while (bits < 16) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.length = hold;
	          if (state.head) {
	            state.head.extra_len = hold;
	          }
	          if ((state.flags & 0x0200) && (state.wrap & 4)) {
	            //=== CRC2(state.check, hold);
	            hbuf[0] = hold & 0xff;
	            hbuf[1] = (hold >>> 8) & 0xff;
	            state.check = crc32(state.check, hbuf, 2, 0);
	            //===//
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	        }
	        else if (state.head) {
	          state.head.extra = null/*Z_NULL*/;
	        }
	        state.mode = EXTRA;
	        /* falls through */
	      case EXTRA:
	        if (state.flags & 0x0400) {
	          copy = state.length;
	          if (copy > have) { copy = have; }
	          if (copy) {
	            if (state.head) {
	              len = state.head.extra_len - state.length;
	              if (!state.head.extra) {
	                // Use untyped array for more convenient processing later
	                state.head.extra = new Uint8Array(state.head.extra_len);
	              }
	              state.head.extra.set(
	                input.subarray(
	                  next,
	                  // extra field is limited to 65536 bytes
	                  // - no need for additional size check
	                  next + copy
	                ),
	                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
	                len
	              );
	              //zmemcpy(state.head.extra + len, next,
	              //        len + copy > state.head.extra_max ?
	              //        state.head.extra_max - len : copy);
	            }
	            if ((state.flags & 0x0200) && (state.wrap & 4)) {
	              state.check = crc32(state.check, input, copy, next);
	            }
	            have -= copy;
	            next += copy;
	            state.length -= copy;
	          }
	          if (state.length) { break inf_leave; }
	        }
	        state.length = 0;
	        state.mode = NAME;
	        /* falls through */
	      case NAME:
	        if (state.flags & 0x0800) {
	          if (have === 0) { break inf_leave; }
	          copy = 0;
	          do {
	            // TODO: 2 or 1 bytes?
	            len = input[next + copy++];
	            /* use constant limit because in js we should not preallocate memory */
	            if (state.head && len &&
	                (state.length < 65536 /*state.head.name_max*/)) {
	              state.head.name += String.fromCharCode(len);
	            }
	          } while (len && copy < have);
	
	          if ((state.flags & 0x0200) && (state.wrap & 4)) {
	            state.check = crc32(state.check, input, copy, next);
	          }
	          have -= copy;
	          next += copy;
	          if (len) { break inf_leave; }
	        }
	        else if (state.head) {
	          state.head.name = null;
	        }
	        state.length = 0;
	        state.mode = COMMENT;
	        /* falls through */
	      case COMMENT:
	        if (state.flags & 0x1000) {
	          if (have === 0) { break inf_leave; }
	          copy = 0;
	          do {
	            len = input[next + copy++];
	            /* use constant limit because in js we should not preallocate memory */
	            if (state.head && len &&
	                (state.length < 65536 /*state.head.comm_max*/)) {
	              state.head.comment += String.fromCharCode(len);
	            }
	          } while (len && copy < have);
	          if ((state.flags & 0x0200) && (state.wrap & 4)) {
	            state.check = crc32(state.check, input, copy, next);
	          }
	          have -= copy;
	          next += copy;
	          if (len) { break inf_leave; }
	        }
	        else if (state.head) {
	          state.head.comment = null;
	        }
	        state.mode = HCRC;
	        /* falls through */
	      case HCRC:
	        if (state.flags & 0x0200) {
	          //=== NEEDBITS(16); */
	          while (bits < 16) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          if ((state.wrap & 4) && hold !== (state.check & 0xffff)) {
	            strm.msg = 'header crc mismatch';
	            state.mode = BAD;
	            break;
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	        }
	        if (state.head) {
	          state.head.hcrc = ((state.flags >> 9) & 1);
	          state.head.done = true;
	        }
	        strm.adler = state.check = 0;
	        state.mode = TYPE;
	        break;
	      case DICTID:
	        //=== NEEDBITS(32); */
	        while (bits < 32) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        strm.adler = state.check = zswap32(hold);
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = DICT;
	        /* falls through */
	      case DICT:
	        if (state.havedict === 0) {
	          //--- RESTORE() ---
	          strm.next_out = put;
	          strm.avail_out = left;
	          strm.next_in = next;
	          strm.avail_in = have;
	          state.hold = hold;
	          state.bits = bits;
	          //---
	          return Z_NEED_DICT;
	        }
	        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
	        state.mode = TYPE;
	        /* falls through */
	      case TYPE:
	        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
	        /* falls through */
	      case TYPEDO:
	        if (state.last) {
	          //--- BYTEBITS() ---//
	          hold >>>= bits & 7;
	          bits -= bits & 7;
	          //---//
	          state.mode = CHECK;
	          break;
	        }
	        //=== NEEDBITS(3); */
	        while (bits < 3) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        state.last = (hold & 0x01)/*BITS(1)*/;
	        //--- DROPBITS(1) ---//
	        hold >>>= 1;
	        bits -= 1;
	        //---//
	
	        switch ((hold & 0x03)/*BITS(2)*/) {
	          case 0:                             /* stored block */
	            //Tracev((stderr, "inflate:     stored block%s\n",
	            //        state.last ? " (last)" : ""));
	            state.mode = STORED;
	            break;
	          case 1:                             /* fixed block */
	            fixedtables(state);
	            //Tracev((stderr, "inflate:     fixed codes block%s\n",
	            //        state.last ? " (last)" : ""));
	            state.mode = LEN_;             /* decode codes */
	            if (flush === Z_TREES) {
	              //--- DROPBITS(2) ---//
	              hold >>>= 2;
	              bits -= 2;
	              //---//
	              break inf_leave;
	            }
	            break;
	          case 2:                             /* dynamic block */
	            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
	            //        state.last ? " (last)" : ""));
	            state.mode = TABLE;
	            break;
	          case 3:
	            strm.msg = 'invalid block type';
	            state.mode = BAD;
	        }
	        //--- DROPBITS(2) ---//
	        hold >>>= 2;
	        bits -= 2;
	        //---//
	        break;
	      case STORED:
	        //--- BYTEBITS() ---// /* go to byte boundary */
	        hold >>>= bits & 7;
	        bits -= bits & 7;
	        //---//
	        //=== NEEDBITS(32); */
	        while (bits < 32) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
	          strm.msg = 'invalid stored block lengths';
	          state.mode = BAD;
	          break;
	        }
	        state.length = hold & 0xffff;
	        //Tracev((stderr, "inflate:       stored length %u\n",
	        //        state.length));
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = COPY_;
	        if (flush === Z_TREES) { break inf_leave; }
	        /* falls through */
	      case COPY_:
	        state.mode = COPY;
	        /* falls through */
	      case COPY:
	        copy = state.length;
	        if (copy) {
	          if (copy > have) { copy = have; }
	          if (copy > left) { copy = left; }
	          if (copy === 0) { break inf_leave; }
	          //--- zmemcpy(put, next, copy); ---
	          output.set(input.subarray(next, next + copy), put);
	          //---//
	          have -= copy;
	          next += copy;
	          left -= copy;
	          put += copy;
	          state.length -= copy;
	          break;
	        }
	        //Tracev((stderr, "inflate:       stored end\n"));
	        state.mode = TYPE;
	        break;
	      case TABLE:
	        //=== NEEDBITS(14); */
	        while (bits < 14) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
	        //--- DROPBITS(5) ---//
	        hold >>>= 5;
	        bits -= 5;
	        //---//
	        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
	        //--- DROPBITS(5) ---//
	        hold >>>= 5;
	        bits -= 5;
	        //---//
	        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
	        //--- DROPBITS(4) ---//
	        hold >>>= 4;
	        bits -= 4;
	        //---//
	//#ifndef PKZIP_BUG_WORKAROUND
	        if (state.nlen > 286 || state.ndist > 30) {
	          strm.msg = 'too many length or distance symbols';
	          state.mode = BAD;
	          break;
	        }
	//#endif
	        //Tracev((stderr, "inflate:       table sizes ok\n"));
	        state.have = 0;
	        state.mode = LENLENS;
	        /* falls through */
	      case LENLENS:
	        while (state.have < state.ncode) {
	          //=== NEEDBITS(3);
	          while (bits < 3) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
	          //--- DROPBITS(3) ---//
	          hold >>>= 3;
	          bits -= 3;
	          //---//
	        }
	        while (state.have < 19) {
	          state.lens[order[state.have++]] = 0;
	        }
	        // We have separate tables & no pointers. 2 commented lines below not needed.
	        //state.next = state.codes;
	        //state.lencode = state.next;
	        // Switch to use dynamic table
	        state.lencode = state.lendyn;
	        state.lenbits = 7;
	
	        opts = { bits: state.lenbits };
	        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
	        state.lenbits = opts.bits;
	
	        if (ret) {
	          strm.msg = 'invalid code lengths set';
	          state.mode = BAD;
	          break;
	        }
	        //Tracev((stderr, "inflate:       code lengths ok\n"));
	        state.have = 0;
	        state.mode = CODELENS;
	        /* falls through */
	      case CODELENS:
	        while (state.have < state.nlen + state.ndist) {
	          for (;;) {
	            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
	            here_bits = here >>> 24;
	            here_op = (here >>> 16) & 0xff;
	            here_val = here & 0xffff;
	
	            if ((here_bits) <= bits) { break; }
	            //--- PULLBYTE() ---//
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	            //---//
	          }
	          if (here_val < 16) {
	            //--- DROPBITS(here.bits) ---//
	            hold >>>= here_bits;
	            bits -= here_bits;
	            //---//
	            state.lens[state.have++] = here_val;
	          }
	          else {
	            if (here_val === 16) {
	              //=== NEEDBITS(here.bits + 2);
	              n = here_bits + 2;
	              while (bits < n) {
	                if (have === 0) { break inf_leave; }
	                have--;
	                hold += input[next++] << bits;
	                bits += 8;
	              }
	              //===//
	              //--- DROPBITS(here.bits) ---//
	              hold >>>= here_bits;
	              bits -= here_bits;
	              //---//
	              if (state.have === 0) {
	                strm.msg = 'invalid bit length repeat';
	                state.mode = BAD;
	                break;
	              }
	              len = state.lens[state.have - 1];
	              copy = 3 + (hold & 0x03);//BITS(2);
	              //--- DROPBITS(2) ---//
	              hold >>>= 2;
	              bits -= 2;
	              //---//
	            }
	            else if (here_val === 17) {
	              //=== NEEDBITS(here.bits + 3);
	              n = here_bits + 3;
	              while (bits < n) {
	                if (have === 0) { break inf_leave; }
	                have--;
	                hold += input[next++] << bits;
	                bits += 8;
	              }
	              //===//
	              //--- DROPBITS(here.bits) ---//
	              hold >>>= here_bits;
	              bits -= here_bits;
	              //---//
	              len = 0;
	              copy = 3 + (hold & 0x07);//BITS(3);
	              //--- DROPBITS(3) ---//
	              hold >>>= 3;
	              bits -= 3;
	              //---//
	            }
	            else {
	              //=== NEEDBITS(here.bits + 7);
	              n = here_bits + 7;
	              while (bits < n) {
	                if (have === 0) { break inf_leave; }
	                have--;
	                hold += input[next++] << bits;
	                bits += 8;
	              }
	              //===//
	              //--- DROPBITS(here.bits) ---//
	              hold >>>= here_bits;
	              bits -= here_bits;
	              //---//
	              len = 0;
	              copy = 11 + (hold & 0x7f);//BITS(7);
	              //--- DROPBITS(7) ---//
	              hold >>>= 7;
	              bits -= 7;
	              //---//
	            }
	            if (state.have + copy > state.nlen + state.ndist) {
	              strm.msg = 'invalid bit length repeat';
	              state.mode = BAD;
	              break;
	            }
	            while (copy--) {
	              state.lens[state.have++] = len;
	            }
	          }
	        }
	
	        /* handle error breaks in while */
	        if (state.mode === BAD) { break; }
	
	        /* check for end-of-block code (better have one) */
	        if (state.lens[256] === 0) {
	          strm.msg = 'invalid code -- missing end-of-block';
	          state.mode = BAD;
	          break;
	        }
	
	        /* build code tables -- note: do not change the lenbits or distbits
	           values here (9 and 6) without reading the comments in inftrees.h
	           concerning the ENOUGH constants, which depend on those values */
	        state.lenbits = 9;
	
	        opts = { bits: state.lenbits };
	        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
	        // We have separate tables & no pointers. 2 commented lines below not needed.
	        // state.next_index = opts.table_index;
	        state.lenbits = opts.bits;
	        // state.lencode = state.next;
	
	        if (ret) {
	          strm.msg = 'invalid literal/lengths set';
	          state.mode = BAD;
	          break;
	        }
	
	        state.distbits = 6;
	        //state.distcode.copy(state.codes);
	        // Switch to use dynamic table
	        state.distcode = state.distdyn;
	        opts = { bits: state.distbits };
	        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
	        // We have separate tables & no pointers. 2 commented lines below not needed.
	        // state.next_index = opts.table_index;
	        state.distbits = opts.bits;
	        // state.distcode = state.next;
	
	        if (ret) {
	          strm.msg = 'invalid distances set';
	          state.mode = BAD;
	          break;
	        }
	        //Tracev((stderr, 'inflate:       codes ok\n'));
	        state.mode = LEN_;
	        if (flush === Z_TREES) { break inf_leave; }
	        /* falls through */
	      case LEN_:
	        state.mode = LEN;
	        /* falls through */
	      case LEN:
	        if (have >= 6 && left >= 258) {
	          //--- RESTORE() ---
	          strm.next_out = put;
	          strm.avail_out = left;
	          strm.next_in = next;
	          strm.avail_in = have;
	          state.hold = hold;
	          state.bits = bits;
	          //---
	          inflate_fast(strm, _out);
	          //--- LOAD() ---
	          put = strm.next_out;
	          output = strm.output;
	          left = strm.avail_out;
	          next = strm.next_in;
	          input = strm.input;
	          have = strm.avail_in;
	          hold = state.hold;
	          bits = state.bits;
	          //---
	
	          if (state.mode === TYPE) {
	            state.back = -1;
	          }
	          break;
	        }
	        state.back = 0;
	        for (;;) {
	          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
	          here_bits = here >>> 24;
	          here_op = (here >>> 16) & 0xff;
	          here_val = here & 0xffff;
	
	          if (here_bits <= bits) { break; }
	          //--- PULLBYTE() ---//
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	          //---//
	        }
	        if (here_op && (here_op & 0xf0) === 0) {
	          last_bits = here_bits;
	          last_op = here_op;
	          last_val = here_val;
	          for (;;) {
	            here = state.lencode[last_val +
	                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
	            here_bits = here >>> 24;
	            here_op = (here >>> 16) & 0xff;
	            here_val = here & 0xffff;
	
	            if ((last_bits + here_bits) <= bits) { break; }
	            //--- PULLBYTE() ---//
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	            //---//
	          }
	          //--- DROPBITS(last.bits) ---//
	          hold >>>= last_bits;
	          bits -= last_bits;
	          //---//
	          state.back += last_bits;
	        }
	        //--- DROPBITS(here.bits) ---//
	        hold >>>= here_bits;
	        bits -= here_bits;
	        //---//
	        state.back += here_bits;
	        state.length = here_val;
	        if (here_op === 0) {
	          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
	          //        "inflate:         literal '%c'\n" :
	          //        "inflate:         literal 0x%02x\n", here.val));
	          state.mode = LIT;
	          break;
	        }
	        if (here_op & 32) {
	          //Tracevv((stderr, "inflate:         end of block\n"));
	          state.back = -1;
	          state.mode = TYPE;
	          break;
	        }
	        if (here_op & 64) {
	          strm.msg = 'invalid literal/length code';
	          state.mode = BAD;
	          break;
	        }
	        state.extra = here_op & 15;
	        state.mode = LENEXT;
	        /* falls through */
	      case LENEXT:
	        if (state.extra) {
	          //=== NEEDBITS(state.extra);
	          n = state.extra;
	          while (bits < n) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
	          //--- DROPBITS(state.extra) ---//
	          hold >>>= state.extra;
	          bits -= state.extra;
	          //---//
	          state.back += state.extra;
	        }
	        //Tracevv((stderr, "inflate:         length %u\n", state.length));
	        state.was = state.length;
	        state.mode = DIST;
	        /* falls through */
	      case DIST:
	        for (;;) {
	          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
	          here_bits = here >>> 24;
	          here_op = (here >>> 16) & 0xff;
	          here_val = here & 0xffff;
	
	          if ((here_bits) <= bits) { break; }
	          //--- PULLBYTE() ---//
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	          //---//
	        }
	        if ((here_op & 0xf0) === 0) {
	          last_bits = here_bits;
	          last_op = here_op;
	          last_val = here_val;
	          for (;;) {
	            here = state.distcode[last_val +
	                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
	            here_bits = here >>> 24;
	            here_op = (here >>> 16) & 0xff;
	            here_val = here & 0xffff;
	
	            if ((last_bits + here_bits) <= bits) { break; }
	            //--- PULLBYTE() ---//
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	            //---//
	          }
	          //--- DROPBITS(last.bits) ---//
	          hold >>>= last_bits;
	          bits -= last_bits;
	          //---//
	          state.back += last_bits;
	        }
	        //--- DROPBITS(here.bits) ---//
	        hold >>>= here_bits;
	        bits -= here_bits;
	        //---//
	        state.back += here_bits;
	        if (here_op & 64) {
	          strm.msg = 'invalid distance code';
	          state.mode = BAD;
	          break;
	        }
	        state.offset = here_val;
	        state.extra = (here_op) & 15;
	        state.mode = DISTEXT;
	        /* falls through */
	      case DISTEXT:
	        if (state.extra) {
	          //=== NEEDBITS(state.extra);
	          n = state.extra;
	          while (bits < n) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
	          //--- DROPBITS(state.extra) ---//
	          hold >>>= state.extra;
	          bits -= state.extra;
	          //---//
	          state.back += state.extra;
	        }
	//#ifdef INFLATE_STRICT
	        if (state.offset > state.dmax) {
	          strm.msg = 'invalid distance too far back';
	          state.mode = BAD;
	          break;
	        }
	//#endif
	        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
	        state.mode = MATCH;
	        /* falls through */
	      case MATCH:
	        if (left === 0) { break inf_leave; }
	        copy = _out - left;
	        if (state.offset > copy) {         /* copy from window */
	          copy = state.offset - copy;
	          if (copy > state.whave) {
	            if (state.sane) {
	              strm.msg = 'invalid distance too far back';
	              state.mode = BAD;
	              break;
	            }
	// (!) This block is disabled in zlib defaults,
	// don't enable it for binary compatibility
	//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
	//          Trace((stderr, "inflate.c too far\n"));
	//          copy -= state.whave;
	//          if (copy > state.length) { copy = state.length; }
	//          if (copy > left) { copy = left; }
	//          left -= copy;
	//          state.length -= copy;
	//          do {
	//            output[put++] = 0;
	//          } while (--copy);
	//          if (state.length === 0) { state.mode = LEN; }
	//          break;
	//#endif
	          }
	          if (copy > state.wnext) {
	            copy -= state.wnext;
	            from = state.wsize - copy;
	          }
	          else {
	            from = state.wnext - copy;
	          }
	          if (copy > state.length) { copy = state.length; }
	          from_source = state.window;
	        }
	        else {                              /* copy from output */
	          from_source = output;
	          from = put - state.offset;
	          copy = state.length;
	        }
	        if (copy > left) { copy = left; }
	        left -= copy;
	        state.length -= copy;
	        do {
	          output[put++] = from_source[from++];
	        } while (--copy);
	        if (state.length === 0) { state.mode = LEN; }
	        break;
	      case LIT:
	        if (left === 0) { break inf_leave; }
	        output[put++] = state.length;
	        left--;
	        state.mode = LEN;
	        break;
	      case CHECK:
	        if (state.wrap) {
	          //=== NEEDBITS(32);
	          while (bits < 32) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            // Use '|' instead of '+' to make sure that result is signed
	            hold |= input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          _out -= left;
	          strm.total_out += _out;
	          state.total += _out;
	          if ((state.wrap & 4) && _out) {
	            strm.adler = state.check =
	                /*UPDATE_CHECK(state.check, put - _out, _out);*/
	                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));
	
	          }
	          _out = left;
	          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
	          if ((state.wrap & 4) && (state.flags ? hold : zswap32(hold)) !== state.check) {
	            strm.msg = 'incorrect data check';
	            state.mode = BAD;
	            break;
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	          //Tracev((stderr, "inflate:   check matches trailer\n"));
	        }
	        state.mode = LENGTH;
	        /* falls through */
	      case LENGTH:
	        if (state.wrap && state.flags) {
	          //=== NEEDBITS(32);
	          while (bits < 32) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          if ((state.wrap & 4) && hold !== (state.total & 0xffffffff)) {
	            strm.msg = 'incorrect length check';
	            state.mode = BAD;
	            break;
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	          //Tracev((stderr, "inflate:   length matches trailer\n"));
	        }
	        state.mode = DONE;
	        /* falls through */
	      case DONE:
	        ret = Z_STREAM_END;
	        break inf_leave;
	      case BAD:
	        ret = Z_DATA_ERROR;
	        break inf_leave;
	      case MEM:
	        return Z_MEM_ERROR;
	      case SYNC:
	        /* falls through */
	      default:
	        return Z_STREAM_ERROR;
	    }
	  }
	
	  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
	
	  /*
	     Return from inflate(), updating the total counts and the check value.
	     If there was no progress during the inflate() call, return a buffer
	     error.  Call updatewindow() to create and/or update the window state.
	     Note: a memory error from inflate() is non-recoverable.
	   */
	
	  //--- RESTORE() ---
	  strm.next_out = put;
	  strm.avail_out = left;
	  strm.next_in = next;
	  strm.avail_in = have;
	  state.hold = hold;
	  state.bits = bits;
	  //---
	
	  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
	                      (state.mode < CHECK || flush !== Z_FINISH))) {
	    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
	      state.mode = MEM;
	      return Z_MEM_ERROR;
	    }
	  }
	  _in -= strm.avail_in;
	  _out -= strm.avail_out;
	  strm.total_in += _in;
	  strm.total_out += _out;
	  state.total += _out;
	  if ((state.wrap & 4) && _out) {
	    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
	      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
	  }
	  strm.data_type = state.bits + (state.last ? 64 : 0) +
	                    (state.mode === TYPE ? 128 : 0) +
	                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
	  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
	    ret = Z_BUF_ERROR;
	  }
	  return ret;
	};
	
	
	const inflateEnd = (strm) => {
	
	  if (inflateStateCheck(strm)) {
	    return Z_STREAM_ERROR;
	  }
	
	  let state = strm.state;
	  if (state.window) {
	    state.window = null;
	  }
	  strm.state = null;
	  return Z_OK;
	};
	
	
	const inflateGetHeader = (strm, head) => {
	
	  /* check state */
	  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
	  const state = strm.state;
	  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }
	
	  /* save header structure */
	  state.head = head;
	  head.done = false;
	  return Z_OK;
	};
	
	
	const inflateSetDictionary = (strm, dictionary) => {
	  const dictLength = dictionary.length;
	
	  let state;
	  let dictid;
	  let ret;
	
	  /* check state */
	  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR; }
	  state = strm.state;
	
	  if (state.wrap !== 0 && state.mode !== DICT) {
	    return Z_STREAM_ERROR;
	  }
	
	  /* check for correct dictionary identifier */
	  if (state.mode === DICT) {
	    dictid = 1; /* adler32(0, null, 0)*/
	    /* dictid = adler32(dictid, dictionary, dictLength); */
	    dictid = adler32(dictid, dictionary, dictLength, 0);
	    if (dictid !== state.check) {
	      return Z_DATA_ERROR;
	    }
	  }
	  /* copy dictionary to window using updatewindow(), which will amend the
	   existing dictionary if appropriate */
	  ret = updatewindow(strm, dictionary, dictLength, dictLength);
	  if (ret) {
	    state.mode = MEM;
	    return Z_MEM_ERROR;
	  }
	  state.havedict = 1;
	  // Tracev((stderr, "inflate:   dictionary set\n"));
	  return Z_OK;
	};
	
	
	module.exports.inflateReset = inflateReset;
	module.exports.inflateReset2 = inflateReset2;
	module.exports.inflateResetKeep = inflateResetKeep;
	module.exports.inflateInit = inflateInit;
	module.exports.inflateInit2 = inflateInit2;
	module.exports.inflate = inflate;
	module.exports.inflateEnd = inflateEnd;
	module.exports.inflateGetHeader = inflateGetHeader;
	module.exports.inflateSetDictionary = inflateSetDictionary;
	module.exports.inflateInfo = 'pako inflate (from Nodeca project)';
	
	/* Not implemented
	module.exports.inflateCodesUsed = inflateCodesUsed;
	module.exports.inflateCopy = inflateCopy;
	module.exports.inflateGetDictionary = inflateGetDictionary;
	module.exports.inflateMark = inflateMark;
	module.exports.inflatePrime = inflatePrime;
	module.exports.inflateSync = inflateSync;
	module.exports.inflateSyncPoint = inflateSyncPoint;
	module.exports.inflateUndermine = inflateUndermine;
	module.exports.inflateValidate = inflateValidate;
	*/


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	const MAXBITS = 15;
	const ENOUGH_LENS = 852;
	const ENOUGH_DISTS = 592;
	//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
	
	const CODES = 0;
	const LENS = 1;
	const DISTS = 2;
	
	const lbase = new Uint16Array([ /* Length codes 257..285 base */
	  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
	  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
	]);
	
	const lext = new Uint8Array([ /* Length codes 257..285 extra */
	  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
	  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
	]);
	
	const dbase = new Uint16Array([ /* Distance codes 0..29 base */
	  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
	  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
	  8193, 12289, 16385, 24577, 0, 0
	]);
	
	const dext = new Uint8Array([ /* Distance codes 0..29 extra */
	  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
	  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
	  28, 28, 29, 29, 64, 64
	]);
	
	const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
	{
	  const bits = opts.bits;
	      //here = opts.here; /* table entry for duplication */
	
	  let len = 0;               /* a code's length in bits */
	  let sym = 0;               /* index of code symbols */
	  let min = 0, max = 0;          /* minimum and maximum code lengths */
	  let root = 0;              /* number of index bits for root table */
	  let curr = 0;              /* number of index bits for current table */
	  let drop = 0;              /* code bits to drop for sub-table */
	  let left = 0;                   /* number of prefix codes available */
	  let used = 0;              /* code entries in table used */
	  let huff = 0;              /* Huffman code */
	  let incr;              /* for incrementing code, index */
	  let fill;              /* index for replicating entries */
	  let low;               /* low bits for current root entry */
	  let mask;              /* mask for low root bits */
	  let next;             /* next available space in table */
	  let base = null;     /* base value table to use */
	//  let shoextra;    /* extra bits table to use */
	  let match;                  /* use base and extra for symbol >= match */
	  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
	  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
	  let extra = null;
	
	  let here_bits, here_op, here_val;
	
	  /*
	   Process a set of code lengths to create a canonical Huffman code.  The
	   code lengths are lens[0..codes-1].  Each length corresponds to the
	   symbols 0..codes-1.  The Huffman code is generated by first sorting the
	   symbols by length from short to long, and retaining the symbol order
	   for codes with equal lengths.  Then the code starts with all zero bits
	   for the first code of the shortest length, and the codes are integer
	   increments for the same length, and zeros are appended as the length
	   increases.  For the deflate format, these bits are stored backwards
	   from their more natural integer increment ordering, and so when the
	   decoding tables are built in the large loop below, the integer codes
	   are incremented backwards.
	
	   This routine assumes, but does not check, that all of the entries in
	   lens[] are in the range 0..MAXBITS.  The caller must assure this.
	   1..MAXBITS is interpreted as that code length.  zero means that that
	   symbol does not occur in this code.
	
	   The codes are sorted by computing a count of codes for each length,
	   creating from that a table of starting indices for each length in the
	   sorted table, and then entering the symbols in order in the sorted
	   table.  The sorted table is work[], with that space being provided by
	   the caller.
	
	   The length counts are used for other purposes as well, i.e. finding
	   the minimum and maximum length codes, determining if there are any
	   codes at all, checking for a valid set of lengths, and looking ahead
	   at length counts to determine sub-table sizes when building the
	   decoding tables.
	   */
	
	  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
	  for (len = 0; len <= MAXBITS; len++) {
	    count[len] = 0;
	  }
	  for (sym = 0; sym < codes; sym++) {
	    count[lens[lens_index + sym]]++;
	  }
	
	  /* bound code lengths, force root to be within code lengths */
	  root = bits;
	  for (max = MAXBITS; max >= 1; max--) {
	    if (count[max] !== 0) { break; }
	  }
	  if (root > max) {
	    root = max;
	  }
	  if (max === 0) {                     /* no symbols to code at all */
	    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
	    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
	    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
	    table[table_index++] = (1 << 24) | (64 << 16) | 0;
	
	
	    //table.op[opts.table_index] = 64;
	    //table.bits[opts.table_index] = 1;
	    //table.val[opts.table_index++] = 0;
	    table[table_index++] = (1 << 24) | (64 << 16) | 0;
	
	    opts.bits = 1;
	    return 0;     /* no symbols, but wait for decoding to report error */
	  }
	  for (min = 1; min < max; min++) {
	    if (count[min] !== 0) { break; }
	  }
	  if (root < min) {
	    root = min;
	  }
	
	  /* check for an over-subscribed or incomplete set of lengths */
	  left = 1;
	  for (len = 1; len <= MAXBITS; len++) {
	    left <<= 1;
	    left -= count[len];
	    if (left < 0) {
	      return -1;
	    }        /* over-subscribed */
	  }
	  if (left > 0 && (type === CODES || max !== 1)) {
	    return -1;                      /* incomplete set */
	  }
	
	  /* generate offsets into symbol table for each length for sorting */
	  offs[1] = 0;
	  for (len = 1; len < MAXBITS; len++) {
	    offs[len + 1] = offs[len] + count[len];
	  }
	
	  /* sort symbols by length, by symbol order within each length */
	  for (sym = 0; sym < codes; sym++) {
	    if (lens[lens_index + sym] !== 0) {
	      work[offs[lens[lens_index + sym]]++] = sym;
	    }
	  }
	
	  /*
	   Create and fill in decoding tables.  In this loop, the table being
	   filled is at next and has curr index bits.  The code being used is huff
	   with length len.  That code is converted to an index by dropping drop
	   bits off of the bottom.  For codes where len is less than drop + curr,
	   those top drop + curr - len bits are incremented through all values to
	   fill the table with replicated entries.
	
	   root is the number of index bits for the root table.  When len exceeds
	   root, sub-tables are created pointed to by the root entry with an index
	   of the low root bits of huff.  This is saved in low to check for when a
	   new sub-table should be started.  drop is zero when the root table is
	   being filled, and drop is root when sub-tables are being filled.
	
	   When a new sub-table is needed, it is necessary to look ahead in the
	   code lengths to determine what size sub-table is needed.  The length
	   counts are used for this, and so count[] is decremented as codes are
	   entered in the tables.
	
	   used keeps track of how many table entries have been allocated from the
	   provided *table space.  It is checked for LENS and DIST tables against
	   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
	   the initial root table size constants.  See the comments in inftrees.h
	   for more information.
	
	   sym increments through all symbols, and the loop terminates when
	   all codes of length max, i.e. all codes, have been processed.  This
	   routine permits incomplete codes, so another loop after this one fills
	   in the rest of the decoding tables with invalid code markers.
	   */
	
	  /* set up for code type */
	  // poor man optimization - use if-else instead of switch,
	  // to avoid deopts in old v8
	  if (type === CODES) {
	    base = extra = work;    /* dummy value--not used */
	    match = 20;
	
	  } else if (type === LENS) {
	    base = lbase;
	    extra = lext;
	    match = 257;
	
	  } else {                    /* DISTS */
	    base = dbase;
	    extra = dext;
	    match = 0;
	  }
	
	  /* initialize opts for loop */
	  huff = 0;                   /* starting code */
	  sym = 0;                    /* starting code symbol */
	  len = min;                  /* starting code length */
	  next = table_index;              /* current table to fill in */
	  curr = root;                /* current table index bits */
	  drop = 0;                   /* current bits to drop from code for index */
	  low = -1;                   /* trigger new sub-table when len > root */
	  used = 1 << root;          /* use root table entries */
	  mask = used - 1;            /* mask for comparing low */
	
	  /* check available table space */
	  if ((type === LENS && used > ENOUGH_LENS) ||
	    (type === DISTS && used > ENOUGH_DISTS)) {
	    return 1;
	  }
	
	  /* process all codes and make table entries */
	  for (;;) {
	    /* create table entry */
	    here_bits = len - drop;
	    if (work[sym] + 1 < match) {
	      here_op = 0;
	      here_val = work[sym];
	    }
	    else if (work[sym] >= match) {
	      here_op = extra[work[sym] - match];
	      here_val = base[work[sym] - match];
	    }
	    else {
	      here_op = 32 + 64;         /* end of block */
	      here_val = 0;
	    }
	
	    /* replicate for those indices with low len bits equal to huff */
	    incr = 1 << (len - drop);
	    fill = 1 << curr;
	    min = fill;                 /* save offset to next table */
	    do {
	      fill -= incr;
	      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
	    } while (fill !== 0);
	
	    /* backwards increment the len-bit code huff */
	    incr = 1 << (len - 1);
	    while (huff & incr) {
	      incr >>= 1;
	    }
	    if (incr !== 0) {
	      huff &= incr - 1;
	      huff += incr;
	    } else {
	      huff = 0;
	    }
	
	    /* go to next symbol, update count, len */
	    sym++;
	    if (--count[len] === 0) {
	      if (len === max) { break; }
	      len = lens[lens_index + work[sym]];
	    }
	
	    /* create new sub-table if needed */
	    if (len > root && (huff & mask) !== low) {
	      /* if first time, transition to sub-tables */
	      if (drop === 0) {
	        drop = root;
	      }
	
	      /* increment past last table */
	      next += min;            /* here min is 1 << curr */
	
	      /* determine length of next table */
	      curr = len - drop;
	      left = 1 << curr;
	      while (curr + drop < max) {
	        left -= count[curr + drop];
	        if (left <= 0) { break; }
	        curr++;
	        left <<= 1;
	      }
	
	      /* check for enough space */
	      used += 1 << curr;
	      if ((type === LENS && used > ENOUGH_LENS) ||
	        (type === DISTS && used > ENOUGH_DISTS)) {
	        return 1;
	      }
	
	      /* point entry in root table to sub-table */
	      low = huff & mask;
	      /*table.op[low] = curr;
	      table.bits[low] = root;
	      table.val[low] = next - opts.table_index;*/
	      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
	    }
	  }
	
	  /* fill in remaining table entry if code is incomplete (guaranteed to have
	   at most one remaining entry, since if the code is incomplete, the
	   maximum code length that was allowed to get this far is one bit) */
	  if (huff !== 0) {
	    //table.op[next + huff] = 64;            /* invalid code marker */
	    //table.bits[next + huff] = len - drop;
	    //table.val[next + huff] = 0;
	    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
	  }
	
	  /* set return parameters */
	  //opts.table_index += used;
	  opts.bits = root;
	  return 0;
	};
	
	
	module.exports = inflate_table;


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.
	
	/* eslint-disable space-unary-ops */
	
	/* Public constants ==========================================================*/
	/* ===========================================================================*/
	
	
	//const Z_FILTERED          = 1;
	//const Z_HUFFMAN_ONLY      = 2;
	//const Z_RLE               = 3;
	const Z_FIXED               = 4;
	//const Z_DEFAULT_STRATEGY  = 0;
	
	/* Possible values of the data_type field (though see inflate()) */
	const Z_BINARY              = 0;
	const Z_TEXT                = 1;
	//const Z_ASCII             = 1; // = Z_TEXT
	const Z_UNKNOWN             = 2;
	
	/*============================================================================*/
	
	
	function zero(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }
	
	// From zutil.h
	
	const STORED_BLOCK = 0;
	const STATIC_TREES = 1;
	const DYN_TREES    = 2;
	/* The three kinds of block type */
	
	const MIN_MATCH    = 3;
	const MAX_MATCH    = 258;
	/* The minimum and maximum match lengths */
	
	// From deflate.h
	/* ===========================================================================
	 * Internal compression state.
	 */
	
	const LENGTH_CODES  = 29;
	/* number of length codes, not counting the special END_BLOCK code */
	
	const LITERALS      = 256;
	/* number of literal bytes 0..255 */
	
	const L_CODES       = LITERALS + 1 + LENGTH_CODES;
	/* number of Literal or Length codes, including the END_BLOCK code */
	
	const D_CODES       = 30;
	/* number of distance codes */
	
	const BL_CODES      = 19;
	/* number of codes used to transfer the bit lengths */
	
	const HEAP_SIZE     = 2 * L_CODES + 1;
	/* maximum heap size */
	
	const MAX_BITS      = 15;
	/* All codes must not exceed MAX_BITS bits */
	
	const Buf_size      = 16;
	/* size of bit buffer in bi_buf */
	
	
	/* ===========================================================================
	 * Constants
	 */
	
	const MAX_BL_BITS = 7;
	/* Bit length codes must not exceed MAX_BL_BITS bits */
	
	const END_BLOCK   = 256;
	/* end of block literal code */
	
	const REP_3_6     = 16;
	/* repeat previous bit length 3-6 times (2 bits of repeat count) */
	
	const REPZ_3_10   = 17;
	/* repeat a zero length 3-10 times  (3 bits of repeat count) */
	
	const REPZ_11_138 = 18;
	/* repeat a zero length 11-138 times  (7 bits of repeat count) */
	
	/* eslint-disable comma-spacing,array-bracket-spacing */
	const extra_lbits =   /* extra bits for each length code */
	  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);
	
	const extra_dbits =   /* extra bits for each distance code */
	  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);
	
	const extra_blbits =  /* extra bits for each bit length code */
	  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);
	
	const bl_order =
	  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
	/* eslint-enable comma-spacing,array-bracket-spacing */
	
	/* The lengths of the bit length codes are sent in order of decreasing
	 * probability, to avoid transmitting the lengths for unused bit length codes.
	 */
	
	/* ===========================================================================
	 * Local data. These are initialized only once.
	 */
	
	// We pre-fill arrays with 0 to avoid uninitialized gaps
	
	const DIST_CODE_LEN = 512; /* see definition of array dist_code below */
	
	// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
	const static_ltree  = new Array((L_CODES + 2) * 2);
	zero(static_ltree);
	/* The static literal tree. Since the bit lengths are imposed, there is no
	 * need for the L_CODES extra codes used during heap construction. However
	 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
	 * below).
	 */
	
	const static_dtree  = new Array(D_CODES * 2);
	zero(static_dtree);
	/* The static distance tree. (Actually a trivial tree since all codes use
	 * 5 bits.)
	 */
	
	const _dist_code    = new Array(DIST_CODE_LEN);
	zero(_dist_code);
	/* Distance codes. The first 256 values correspond to the distances
	 * 3 .. 258, the last 256 values correspond to the top 8 bits of
	 * the 15 bit distances.
	 */
	
	const _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
	zero(_length_code);
	/* length code for each normalized match length (0 == MIN_MATCH) */
	
	const base_length   = new Array(LENGTH_CODES);
	zero(base_length);
	/* First normalized length for each code (0 = MIN_MATCH) */
	
	const base_dist     = new Array(D_CODES);
	zero(base_dist);
	/* First normalized distance for each code (0 = distance of 1) */
	
	
	function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
	
	  this.static_tree  = static_tree;  /* static tree or NULL */
	  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
	  this.extra_base   = extra_base;   /* base index for extra_bits */
	  this.elems        = elems;        /* max number of elements in the tree */
	  this.max_length   = max_length;   /* max bit length for the codes */
	
	  // show if `static_tree` has data or dummy - needed for monomorphic objects
	  this.has_stree    = static_tree && static_tree.length;
	}
	
	
	let static_l_desc;
	let static_d_desc;
	let static_bl_desc;
	
	
	function TreeDesc(dyn_tree, stat_desc) {
	  this.dyn_tree = dyn_tree;     /* the dynamic tree */
	  this.max_code = 0;            /* largest code with non zero frequency */
	  this.stat_desc = stat_desc;   /* the corresponding static tree */
	}
	
	
	
	const d_code = (dist) => {
	
	  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
	};
	
	
	/* ===========================================================================
	 * Output a short LSB first on the stream.
	 * IN assertion: there is enough room in pendingBuf.
	 */
	const put_short = (s, w) => {
	//    put_byte(s, (uch)((w) & 0xff));
	//    put_byte(s, (uch)((ush)(w) >> 8));
	  s.pending_buf[s.pending++] = (w) & 0xff;
	  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
	};
	
	
	/* ===========================================================================
	 * Send a value on a given number of bits.
	 * IN assertion: length <= 16 and value fits in length bits.
	 */
	const send_bits = (s, value, length) => {
	
	  if (s.bi_valid > (Buf_size - length)) {
	    s.bi_buf |= (value << s.bi_valid) & 0xffff;
	    put_short(s, s.bi_buf);
	    s.bi_buf = value >> (Buf_size - s.bi_valid);
	    s.bi_valid += length - Buf_size;
	  } else {
	    s.bi_buf |= (value << s.bi_valid) & 0xffff;
	    s.bi_valid += length;
	  }
	};
	
	
	const send_code = (s, c, tree) => {
	
	  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
	};
	
	
	/* ===========================================================================
	 * Reverse the first len bits of a code, using straightforward code (a faster
	 * method would use a table)
	 * IN assertion: 1 <= len <= 15
	 */
	const bi_reverse = (code, len) => {
	
	  let res = 0;
	  do {
	    res |= code & 1;
	    code >>>= 1;
	    res <<= 1;
	  } while (--len > 0);
	  return res >>> 1;
	};
	
	
	/* ===========================================================================
	 * Flush the bit buffer, keeping at most 7 bits in it.
	 */
	const bi_flush = (s) => {
	
	  if (s.bi_valid === 16) {
	    put_short(s, s.bi_buf);
	    s.bi_buf = 0;
	    s.bi_valid = 0;
	
	  } else if (s.bi_valid >= 8) {
	    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
	    s.bi_buf >>= 8;
	    s.bi_valid -= 8;
	  }
	};
	
	
	/* ===========================================================================
	 * Compute the optimal bit lengths for a tree and update the total bit length
	 * for the current block.
	 * IN assertion: the fields freq and dad are set, heap[heap_max] and
	 *    above are the tree nodes sorted by increasing frequency.
	 * OUT assertions: the field len is set to the optimal bit length, the
	 *     array bl_count contains the frequencies for each bit length.
	 *     The length opt_len is updated; static_len is also updated if stree is
	 *     not null.
	 */
	const gen_bitlen = (s, desc) => {
	//    deflate_state *s;
	//    tree_desc *desc;    /* the tree descriptor */
	
	  const tree            = desc.dyn_tree;
	  const max_code        = desc.max_code;
	  const stree           = desc.stat_desc.static_tree;
	  const has_stree       = desc.stat_desc.has_stree;
	  const extra           = desc.stat_desc.extra_bits;
	  const base            = desc.stat_desc.extra_base;
	  const max_length      = desc.stat_desc.max_length;
	  let h;              /* heap index */
	  let n, m;           /* iterate over the tree elements */
	  let bits;           /* bit length */
	  let xbits;          /* extra bits */
	  let f;              /* frequency */
	  let overflow = 0;   /* number of elements with bit length too large */
	
	  for (bits = 0; bits <= MAX_BITS; bits++) {
	    s.bl_count[bits] = 0;
	  }
	
	  /* In a first pass, compute the optimal bit lengths (which may
	   * overflow in the case of the bit length tree).
	   */
	  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */
	
	  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
	    n = s.heap[h];
	    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
	    if (bits > max_length) {
	      bits = max_length;
	      overflow++;
	    }
	    tree[n * 2 + 1]/*.Len*/ = bits;
	    /* We overwrite tree[n].Dad which is no longer needed */
	
	    if (n > max_code) { continue; } /* not a leaf node */
	
	    s.bl_count[bits]++;
	    xbits = 0;
	    if (n >= base) {
	      xbits = extra[n - base];
	    }
	    f = tree[n * 2]/*.Freq*/;
	    s.opt_len += f * (bits + xbits);
	    if (has_stree) {
	      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
	    }
	  }
	  if (overflow === 0) { return; }
	
	  // Tracev((stderr,"\nbit length overflow\n"));
	  /* This happens for example on obj2 and pic of the Calgary corpus */
	
	  /* Find the first bit length which could increase: */
	  do {
	    bits = max_length - 1;
	    while (s.bl_count[bits] === 0) { bits--; }
	    s.bl_count[bits]--;      /* move one leaf down the tree */
	    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
	    s.bl_count[max_length]--;
	    /* The brother of the overflow item also moves one step up,
	     * but this does not affect bl_count[max_length]
	     */
	    overflow -= 2;
	  } while (overflow > 0);
	
	  /* Now recompute all bit lengths, scanning in increasing frequency.
	   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
	   * lengths instead of fixing only the wrong ones. This idea is taken
	   * from 'ar' written by Haruhiko Okumura.)
	   */
	  for (bits = max_length; bits !== 0; bits--) {
	    n = s.bl_count[bits];
	    while (n !== 0) {
	      m = s.heap[--h];
	      if (m > max_code) { continue; }
	      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
	        // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
	        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
	        tree[m * 2 + 1]/*.Len*/ = bits;
	      }
	      n--;
	    }
	  }
	};
	
	
	/* ===========================================================================
	 * Generate the codes for a given tree and bit counts (which need not be
	 * optimal).
	 * IN assertion: the array bl_count contains the bit length statistics for
	 * the given tree and the field len is set for all tree elements.
	 * OUT assertion: the field code is set for all tree elements of non
	 *     zero code length.
	 */
	const gen_codes = (tree, max_code, bl_count) => {
	//    ct_data *tree;             /* the tree to decorate */
	//    int max_code;              /* largest code with non zero frequency */
	//    ushf *bl_count;            /* number of codes at each bit length */
	
	  const next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
	  let code = 0;              /* running code value */
	  let bits;                  /* bit index */
	  let n;                     /* code index */
	
	  /* The distribution counts are first used to generate the code values
	   * without bit reversal.
	   */
	  for (bits = 1; bits <= MAX_BITS; bits++) {
	    code = (code + bl_count[bits - 1]) << 1;
	    next_code[bits] = code;
	  }
	  /* Check that the bit counts in bl_count are consistent. The last code
	   * must be all ones.
	   */
	  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
	  //        "inconsistent bit counts");
	  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
	
	  for (n = 0;  n <= max_code; n++) {
	    let len = tree[n * 2 + 1]/*.Len*/;
	    if (len === 0) { continue; }
	    /* Now reverse the bits */
	    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);
	
	    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
	    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
	  }
	};
	
	
	/* ===========================================================================
	 * Initialize the various 'constant' tables.
	 */
	const tr_static_init = () => {
	
	  let n;        /* iterates over tree elements */
	  let bits;     /* bit counter */
	  let length;   /* length value */
	  let code;     /* code value */
	  let dist;     /* distance index */
	  const bl_count = new Array(MAX_BITS + 1);
	  /* number of codes at each bit length for an optimal tree */
	
	  // do check in _tr_init()
	  //if (static_init_done) return;
	
	  /* For some embedded targets, global variables are not initialized: */
	/*#ifdef NO_INIT_GLOBAL_POINTERS
	  static_l_desc.static_tree = static_ltree;
	  static_l_desc.extra_bits = extra_lbits;
	  static_d_desc.static_tree = static_dtree;
	  static_d_desc.extra_bits = extra_dbits;
	  static_bl_desc.extra_bits = extra_blbits;
	#endif*/
	
	  /* Initialize the mapping length (0..255) -> length code (0..28) */
	  length = 0;
	  for (code = 0; code < LENGTH_CODES - 1; code++) {
	    base_length[code] = length;
	    for (n = 0; n < (1 << extra_lbits[code]); n++) {
	      _length_code[length++] = code;
	    }
	  }
	  //Assert (length == 256, "tr_static_init: length != 256");
	  /* Note that the length 255 (match length 258) can be represented
	   * in two different ways: code 284 + 5 bits or code 285, so we
	   * overwrite length_code[255] to use the best encoding:
	   */
	  _length_code[length - 1] = code;
	
	  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
	  dist = 0;
	  for (code = 0; code < 16; code++) {
	    base_dist[code] = dist;
	    for (n = 0; n < (1 << extra_dbits[code]); n++) {
	      _dist_code[dist++] = code;
	    }
	  }
	  //Assert (dist == 256, "tr_static_init: dist != 256");
	  dist >>= 7; /* from now on, all distances are divided by 128 */
	  for (; code < D_CODES; code++) {
	    base_dist[code] = dist << 7;
	    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
	      _dist_code[256 + dist++] = code;
	    }
	  }
	  //Assert (dist == 256, "tr_static_init: 256+dist != 512");
	
	  /* Construct the codes of the static literal tree */
	  for (bits = 0; bits <= MAX_BITS; bits++) {
	    bl_count[bits] = 0;
	  }
	
	  n = 0;
	  while (n <= 143) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 8;
	    n++;
	    bl_count[8]++;
	  }
	  while (n <= 255) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 9;
	    n++;
	    bl_count[9]++;
	  }
	  while (n <= 279) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 7;
	    n++;
	    bl_count[7]++;
	  }
	  while (n <= 287) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 8;
	    n++;
	    bl_count[8]++;
	  }
	  /* Codes 286 and 287 do not exist, but we must include them in the
	   * tree construction to get a canonical Huffman tree (longest code
	   * all ones)
	   */
	  gen_codes(static_ltree, L_CODES + 1, bl_count);
	
	  /* The static distance tree is trivial: */
	  for (n = 0; n < D_CODES; n++) {
	    static_dtree[n * 2 + 1]/*.Len*/ = 5;
	    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
	  }
	
	  // Now data ready and we can init static trees
	  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
	  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
	  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);
	
	  //static_init_done = true;
	};
	
	
	/* ===========================================================================
	 * Initialize a new block.
	 */
	const init_block = (s) => {
	
	  let n; /* iterates over tree elements */
	
	  /* Initialize the trees. */
	  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
	  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
	  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }
	
	  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
	  s.opt_len = s.static_len = 0;
	  s.sym_next = s.matches = 0;
	};
	
	
	/* ===========================================================================
	 * Flush the bit buffer and align the output on a byte boundary
	 */
	const bi_windup = (s) =>
	{
	  if (s.bi_valid > 8) {
	    put_short(s, s.bi_buf);
	  } else if (s.bi_valid > 0) {
	    //put_byte(s, (Byte)s->bi_buf);
	    s.pending_buf[s.pending++] = s.bi_buf;
	  }
	  s.bi_buf = 0;
	  s.bi_valid = 0;
	};
	
	/* ===========================================================================
	 * Compares to subtrees, using the tree depth as tie breaker when
	 * the subtrees have equal frequency. This minimizes the worst case length.
	 */
	const smaller = (tree, n, m, depth) => {
	
	  const _n2 = n * 2;
	  const _m2 = m * 2;
	  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
	         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
	};
	
	/* ===========================================================================
	 * Restore the heap property by moving down the tree starting at node k,
	 * exchanging a node with the smallest of its two sons if necessary, stopping
	 * when the heap property is re-established (each father smaller than its
	 * two sons).
	 */
	const pqdownheap = (s, tree, k) => {
	//    deflate_state *s;
	//    ct_data *tree;  /* the tree to restore */
	//    int k;               /* node to move down */
	
	  const v = s.heap[k];
	  let j = k << 1;  /* left son of k */
	  while (j <= s.heap_len) {
	    /* Set j to the smallest of the two sons: */
	    if (j < s.heap_len &&
	      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
	      j++;
	    }
	    /* Exit if v is smaller than both sons */
	    if (smaller(tree, v, s.heap[j], s.depth)) { break; }
	
	    /* Exchange v with the smallest son */
	    s.heap[k] = s.heap[j];
	    k = j;
	
	    /* And continue down the tree, setting j to the left son of k */
	    j <<= 1;
	  }
	  s.heap[k] = v;
	};
	
	
	// inlined manually
	// const SMALLEST = 1;
	
	/* ===========================================================================
	 * Send the block data compressed using the given Huffman trees
	 */
	const compress_block = (s, ltree, dtree) => {
	//    deflate_state *s;
	//    const ct_data *ltree; /* literal tree */
	//    const ct_data *dtree; /* distance tree */
	
	  let dist;           /* distance of matched string */
	  let lc;             /* match length or unmatched char (if dist == 0) */
	  let sx = 0;         /* running index in sym_buf */
	  let code;           /* the code to send */
	  let extra;          /* number of extra bits to send */
	
	  if (s.sym_next !== 0) {
	    do {
	      dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
	      dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
	      lc = s.pending_buf[s.sym_buf + sx++];
	      if (dist === 0) {
	        send_code(s, lc, ltree); /* send a literal byte */
	        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
	      } else {
	        /* Here, lc is the match length - MIN_MATCH */
	        code = _length_code[lc];
	        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
	        extra = extra_lbits[code];
	        if (extra !== 0) {
	          lc -= base_length[code];
	          send_bits(s, lc, extra);       /* send the extra length bits */
	        }
	        dist--; /* dist is now the match distance - 1 */
	        code = d_code(dist);
	        //Assert (code < D_CODES, "bad d_code");
	
	        send_code(s, code, dtree);       /* send the distance code */
	        extra = extra_dbits[code];
	        if (extra !== 0) {
	          dist -= base_dist[code];
	          send_bits(s, dist, extra);   /* send the extra distance bits */
	        }
	      } /* literal or match pair ? */
	
	      /* Check that the overlay between pending_buf and sym_buf is ok: */
	      //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
	
	    } while (sx < s.sym_next);
	  }
	
	  send_code(s, END_BLOCK, ltree);
	};
	
	
	/* ===========================================================================
	 * Construct one Huffman tree and assigns the code bit strings and lengths.
	 * Update the total bit length for the current block.
	 * IN assertion: the field freq is set for all tree elements.
	 * OUT assertions: the fields len and code are set to the optimal bit length
	 *     and corresponding code. The length opt_len is updated; static_len is
	 *     also updated if stree is not null. The field max_code is set.
	 */
	const build_tree = (s, desc) => {
	//    deflate_state *s;
	//    tree_desc *desc; /* the tree descriptor */
	
	  const tree     = desc.dyn_tree;
	  const stree    = desc.stat_desc.static_tree;
	  const has_stree = desc.stat_desc.has_stree;
	  const elems    = desc.stat_desc.elems;
	  let n, m;          /* iterate over heap elements */
	  let max_code = -1; /* largest code with non zero frequency */
	  let node;          /* new node being created */
	
	  /* Construct the initial heap, with least frequent element in
	   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
	   * heap[0] is not used.
	   */
	  s.heap_len = 0;
	  s.heap_max = HEAP_SIZE;
	
	  for (n = 0; n < elems; n++) {
	    if (tree[n * 2]/*.Freq*/ !== 0) {
	      s.heap[++s.heap_len] = max_code = n;
	      s.depth[n] = 0;
	
	    } else {
	      tree[n * 2 + 1]/*.Len*/ = 0;
	    }
	  }
	
	  /* The pkzip format requires that at least one distance code exists,
	   * and that at least one bit should be sent even if there is only one
	   * possible code. So to avoid special checks later on we force at least
	   * two codes of non zero frequency.
	   */
	  while (s.heap_len < 2) {
	    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
	    tree[node * 2]/*.Freq*/ = 1;
	    s.depth[node] = 0;
	    s.opt_len--;
	
	    if (has_stree) {
	      s.static_len -= stree[node * 2 + 1]/*.Len*/;
	    }
	    /* node is 0 or 1 so it does not have extra bits */
	  }
	  desc.max_code = max_code;
	
	  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
	   * establish sub-heaps of increasing lengths:
	   */
	  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }
	
	  /* Construct the Huffman tree by repeatedly combining the least two
	   * frequent nodes.
	   */
	  node = elems;              /* next internal node of the tree */
	  do {
	    //pqremove(s, tree, n);  /* n = node of least frequency */
	    /*** pqremove ***/
	    n = s.heap[1/*SMALLEST*/];
	    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
	    pqdownheap(s, tree, 1/*SMALLEST*/);
	    /***/
	
	    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */
	
	    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
	    s.heap[--s.heap_max] = m;
	
	    /* Create a new node father of n and m */
	    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
	    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
	    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;
	
	    /* and insert the new node in the heap */
	    s.heap[1/*SMALLEST*/] = node++;
	    pqdownheap(s, tree, 1/*SMALLEST*/);
	
	  } while (s.heap_len >= 2);
	
	  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];
	
	  /* At this point, the fields freq and dad are set. We can now
	   * generate the bit lengths.
	   */
	  gen_bitlen(s, desc);
	
	  /* The field len is now set, we can generate the bit codes */
	  gen_codes(tree, max_code, s.bl_count);
	};
	
	
	/* ===========================================================================
	 * Scan a literal or distance tree to determine the frequencies of the codes
	 * in the bit length tree.
	 */
	const scan_tree = (s, tree, max_code) => {
	//    deflate_state *s;
	//    ct_data *tree;   /* the tree to be scanned */
	//    int max_code;    /* and its largest code of non zero frequency */
	
	  let n;                     /* iterates over all tree elements */
	  let prevlen = -1;          /* last emitted length */
	  let curlen;                /* length of current code */
	
	  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */
	
	  let count = 0;             /* repeat count of the current code */
	  let max_count = 7;         /* max repeat count */
	  let min_count = 4;         /* min repeat count */
	
	  if (nextlen === 0) {
	    max_count = 138;
	    min_count = 3;
	  }
	  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */
	
	  for (n = 0; n <= max_code; n++) {
	    curlen = nextlen;
	    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;
	
	    if (++count < max_count && curlen === nextlen) {
	      continue;
	
	    } else if (count < min_count) {
	      s.bl_tree[curlen * 2]/*.Freq*/ += count;
	
	    } else if (curlen !== 0) {
	
	      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
	      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;
	
	    } else if (count <= 10) {
	      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;
	
	    } else {
	      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
	    }
	
	    count = 0;
	    prevlen = curlen;
	
	    if (nextlen === 0) {
	      max_count = 138;
	      min_count = 3;
	
	    } else if (curlen === nextlen) {
	      max_count = 6;
	      min_count = 3;
	
	    } else {
	      max_count = 7;
	      min_count = 4;
	    }
	  }
	};
	
	
	/* ===========================================================================
	 * Send a literal or distance tree in compressed form, using the codes in
	 * bl_tree.
	 */
	const send_tree = (s, tree, max_code) => {
	//    deflate_state *s;
	//    ct_data *tree; /* the tree to be scanned */
	//    int max_code;       /* and its largest code of non zero frequency */
	
	  let n;                     /* iterates over all tree elements */
	  let prevlen = -1;          /* last emitted length */
	  let curlen;                /* length of current code */
	
	  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */
	
	  let count = 0;             /* repeat count of the current code */
	  let max_count = 7;         /* max repeat count */
	  let min_count = 4;         /* min repeat count */
	
	  /* tree[max_code+1].Len = -1; */  /* guard already set */
	  if (nextlen === 0) {
	    max_count = 138;
	    min_count = 3;
	  }
	
	  for (n = 0; n <= max_code; n++) {
	    curlen = nextlen;
	    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;
	
	    if (++count < max_count && curlen === nextlen) {
	      continue;
	
	    } else if (count < min_count) {
	      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);
	
	    } else if (curlen !== 0) {
	      if (curlen !== prevlen) {
	        send_code(s, curlen, s.bl_tree);
	        count--;
	      }
	      //Assert(count >= 3 && count <= 6, " 3_6?");
	      send_code(s, REP_3_6, s.bl_tree);
	      send_bits(s, count - 3, 2);
	
	    } else if (count <= 10) {
	      send_code(s, REPZ_3_10, s.bl_tree);
	      send_bits(s, count - 3, 3);
	
	    } else {
	      send_code(s, REPZ_11_138, s.bl_tree);
	      send_bits(s, count - 11, 7);
	    }
	
	    count = 0;
	    prevlen = curlen;
	    if (nextlen === 0) {
	      max_count = 138;
	      min_count = 3;
	
	    } else if (curlen === nextlen) {
	      max_count = 6;
	      min_count = 3;
	
	    } else {
	      max_count = 7;
	      min_count = 4;
	    }
	  }
	};
	
	
	/* ===========================================================================
	 * Construct the Huffman tree for the bit lengths and return the index in
	 * bl_order of the last bit length code to send.
	 */
	const build_bl_tree = (s) => {
	
	  let max_blindex;  /* index of last bit length code of non zero freq */
	
	  /* Determine the bit length frequencies for literal and distance trees */
	  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
	  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
	
	  /* Build the bit length tree: */
	  build_tree(s, s.bl_desc);
	  /* opt_len now includes the length of the tree representations, except
	   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
	   */
	
	  /* Determine the number of bit length codes to send. The pkzip format
	   * requires that at least 4 bit length codes be sent. (appnote.txt says
	   * 3 but the actual value used is 4.)
	   */
	  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
	    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
	      break;
	    }
	  }
	  /* Update opt_len to include the bit length tree and counts */
	  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
	  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
	  //        s->opt_len, s->static_len));
	
	  return max_blindex;
	};
	
	
	/* ===========================================================================
	 * Send the header for a block using dynamic Huffman trees: the counts, the
	 * lengths of the bit length codes, the literal tree and the distance tree.
	 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
	 */
	const send_all_trees = (s, lcodes, dcodes, blcodes) => {
	//    deflate_state *s;
	//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
	
	  let rank;                    /* index in bl_order */
	
	  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
	  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
	  //        "too many codes");
	  //Tracev((stderr, "\nbl counts: "));
	  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
	  send_bits(s, dcodes - 1,   5);
	  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
	  for (rank = 0; rank < blcodes; rank++) {
	    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
	    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
	  }
	  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
	
	  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
	  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
	
	  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
	  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
	};
	
	
	/* ===========================================================================
	 * Check if the data type is TEXT or BINARY, using the following algorithm:
	 * - TEXT if the two conditions below are satisfied:
	 *    a) There are no non-portable control characters belonging to the
	 *       "block list" (0..6, 14..25, 28..31).
	 *    b) There is at least one printable character belonging to the
	 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
	 * - BINARY otherwise.
	 * - The following partially-portable control characters form a
	 *   "gray list" that is ignored in this detection algorithm:
	 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
	 * IN assertion: the fields Freq of dyn_ltree are set.
	 */
	const detect_data_type = (s) => {
	  /* block_mask is the bit mask of block-listed bytes
	   * set bits 0..6, 14..25, and 28..31
	   * 0xf3ffc07f = binary 11110011111111111100000001111111
	   */
	  let block_mask = 0xf3ffc07f;
	  let n;
	
	  /* Check for non-textual ("block-listed") bytes. */
	  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
	    if ((block_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
	      return Z_BINARY;
	    }
	  }
	
	  /* Check for textual ("allow-listed") bytes. */
	  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
	      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
	    return Z_TEXT;
	  }
	  for (n = 32; n < LITERALS; n++) {
	    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
	      return Z_TEXT;
	    }
	  }
	
	  /* There are no "block-listed" or "allow-listed" bytes:
	   * this stream either is empty or has tolerated ("gray-listed") bytes only.
	   */
	  return Z_BINARY;
	};
	
	
	let static_init_done = false;
	
	/* ===========================================================================
	 * Initialize the tree data structures for a new zlib stream.
	 */
	const _tr_init = (s) =>
	{
	
	  if (!static_init_done) {
	    tr_static_init();
	    static_init_done = true;
	  }
	
	  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
	  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
	  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
	
	  s.bi_buf = 0;
	  s.bi_valid = 0;
	
	  /* Initialize the first block of the first file: */
	  init_block(s);
	};
	
	
	/* ===========================================================================
	 * Send a stored block
	 */
	const _tr_stored_block = (s, buf, stored_len, last) => {
	//DeflateState *s;
	//charf *buf;       /* input block */
	//ulg stored_len;   /* length of input block */
	//int last;         /* one if this is the last block for a file */
	
	  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
	  bi_windup(s);        /* align on byte boundary */
	  put_short(s, stored_len);
	  put_short(s, ~stored_len);
	  if (stored_len) {
	    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
	  }
	  s.pending += stored_len;
	};
	
	
	/* ===========================================================================
	 * Send one empty static block to give enough lookahead for inflate.
	 * This takes 10 bits, of which 7 may remain in the bit buffer.
	 */
	const _tr_align = (s) => {
	  send_bits(s, STATIC_TREES << 1, 3);
	  send_code(s, END_BLOCK, static_ltree);
	  bi_flush(s);
	};
	
	
	/* ===========================================================================
	 * Determine the best encoding for the current block: dynamic trees, static
	 * trees or store, and write out the encoded block.
	 */
	const _tr_flush_block = (s, buf, stored_len, last) => {
	//DeflateState *s;
	//charf *buf;       /* input block, or NULL if too old */
	//ulg stored_len;   /* length of input block */
	//int last;         /* one if this is the last block for a file */
	
	  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
	  let max_blindex = 0;        /* index of last bit length code of non zero freq */
	
	  /* Build the Huffman trees unless a stored block is forced */
	  if (s.level > 0) {
	
	    /* Check if the file is binary or text */
	    if (s.strm.data_type === Z_UNKNOWN) {
	      s.strm.data_type = detect_data_type(s);
	    }
	
	    /* Construct the literal and distance trees */
	    build_tree(s, s.l_desc);
	    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
	    //        s->static_len));
	
	    build_tree(s, s.d_desc);
	    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
	    //        s->static_len));
	    /* At this point, opt_len and static_len are the total bit lengths of
	     * the compressed block data, excluding the tree representations.
	     */
	
	    /* Build the bit length tree for the above two trees, and get the index
	     * in bl_order of the last bit length code to send.
	     */
	    max_blindex = build_bl_tree(s);
	
	    /* Determine the best encoding. Compute the block lengths in bytes. */
	    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
	    static_lenb = (s.static_len + 3 + 7) >>> 3;
	
	    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
	    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
	    //        s->sym_next / 3));
	
	    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }
	
	  } else {
	    // Assert(buf != (char*)0, "lost buf");
	    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
	  }
	
	  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
	    /* 4: two words for the lengths */
	
	    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
	     * Otherwise we can't have processed more than WSIZE input bytes since
	     * the last block flush, because compression would have been
	     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
	     * transform a block into a stored block.
	     */
	    _tr_stored_block(s, buf, stored_len, last);
	
	  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
	
	    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
	    compress_block(s, static_ltree, static_dtree);
	
	  } else {
	    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
	    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
	    compress_block(s, s.dyn_ltree, s.dyn_dtree);
	  }
	  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
	  /* The above check is made mod 2^32, for files larger than 512 MB
	   * and uLong implemented on 32 bits.
	   */
	  init_block(s);
	
	  if (last) {
	    bi_windup(s);
	  }
	  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
	  //       s->compressed_len-7*last));
	};
	
	/* ===========================================================================
	 * Save the match info and tally the frequency counts. Return true if
	 * the current block must be flushed.
	 */
	const _tr_tally = (s, dist, lc) => {
	//    deflate_state *s;
	//    unsigned dist;  /* distance of matched string */
	//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
	
	  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
	  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
	  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
	  if (dist === 0) {
	    /* lc is the unmatched char */
	    s.dyn_ltree[lc * 2]/*.Freq*/++;
	  } else {
	    s.matches++;
	    /* Here, lc is the match length - MIN_MATCH */
	    dist--;             /* dist = match distance - 1 */
	    //Assert((ush)dist < (ush)MAX_DIST(s) &&
	    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
	    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
	
	    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
	    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
	  }
	
	  return (s.sym_next === s.sym_end);
	};
	
	module.exports._tr_init  = _tr_init;
	module.exports._tr_stored_block = _tr_stored_block;
	module.exports._tr_flush_block  = _tr_flush_block;
	module.exports._tr_tally = _tr_tally;
	module.exports._tr_align = _tr_align;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	if (typeof Promise === 'undefined') {
	  // Rejection tracking prevents a common issue where React gets into an
	  // inconsistent state due to an error, but it gets swallowed by a Promise,
	  // and the user has no idea what causes React's erratic future behavior.
	  __webpack_require__(28).enable();
	  window.Promise = __webpack_require__(27);
	}
	
	// fetch() polyfill for making API calls.
	__webpack_require__(29);
	
	// Object.assign() is commonly used with React.
	// It will use the native implementation if it's present and isn't buggy.
	Object.assign = __webpack_require__(16);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(9);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(9);
	
	var DEFAULT_WHITELIST = [
	  ReferenceError,
	  TypeError,
	  RangeError
	];
	
	var enabled = false;
	exports.disable = disable;
	function disable() {
	  enabled = false;
	  Promise._10 = null;
	  Promise._97 = null;
	}
	
	exports.enable = enable;
	function enable(options) {
	  options = options || {};
	  if (enabled) disable();
	  enabled = true;
	  var id = 0;
	  var displayId = 0;
	  var rejections = {};
	  Promise._10 = function (promise) {
	    if (
	      promise._81 === 2 && // IS REJECTED
	      rejections[promise._72]
	    ) {
	      if (rejections[promise._72].logged) {
	        onHandled(promise._72);
	      } else {
	        clearTimeout(rejections[promise._72].timeout);
	      }
	      delete rejections[promise._72];
	    }
	  };
	  Promise._97 = function (promise, err) {
	    if (promise._45 === 0) { // not yet handled
	      promise._72 = id++;
	      rejections[promise._72] = {
	        displayId: null,
	        error: err,
	        timeout: setTimeout(
	          onUnhandled.bind(null, promise._72),
	          // For reference errors and type errors, this almost always
	          // means the programmer made a mistake, so log them after just
	          // 100ms
	          // otherwise, wait 2 seconds to see if they get handled
	          matchWhitelist(err, DEFAULT_WHITELIST)
	            ? 100
	            : 2000
	        ),
	        logged: false
	      };
	    }
	  };
	  function onUnhandled(id) {
	    if (
	      options.allRejections ||
	      matchWhitelist(
	        rejections[id].error,
	        options.whitelist || DEFAULT_WHITELIST
	      )
	    ) {
	      rejections[id].displayId = displayId++;
	      if (options.onUnhandled) {
	        rejections[id].logged = true;
	        options.onUnhandled(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      } else {
	        rejections[id].logged = true;
	        logError(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      }
	    }
	  }
	  function onHandled(id) {
	    if (rejections[id].logged) {
	      if (options.onHandled) {
	        options.onHandled(rejections[id].displayId, rejections[id].error);
	      } else if (!rejections[id].onUnhandled) {
	        console.warn(
	          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
	        );
	        console.warn(
	          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
	          rejections[id].displayId + '.'
	        );
	      }
	    }
	  }
	}
	
	function logError(id, error) {
	  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
	  var errStr = (error && (error.stack || error)) + '';
	  errStr.split('\n').forEach(function (line) {
	    console.warn('  ' + line);
	  });
	}
	
	function matchWhitelist(error, list) {
	  return list.some(function (cls) {
	    return error instanceof cls;
	  });
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
/******/ ])));
//# sourceMappingURL=main.4f25bf6c.js.map