/*!
 * @pixi/filter-displacement - v5.3.2
 * Compiled Tue, 27 Oct 2020 03:24:59 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
this.PIXI = this.PIXI || {};
this.PIXI.filters = this.PIXI.filters || {};
var _pixi_filter_displacement = (function (exports, core, math) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            var arguments$1 = arguments;

            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments$1[i];
                for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) { t[p] = s[p]; } }
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            { t[p] = s[p]; } }
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            { for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) { if (e.indexOf(p[i]) < 0)
                { t[p[i]] = s[p[i]]; } } }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") { r = Reflect.decorate(decorators, target, key, desc); }
        else { for (var i = decorators.length - 1; i >= 0; i--) { if (d = decorators[i]) { r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r; } } }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") { return Reflect.metadata(metadataKey, metadataValue); }
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) { throw new TypeError("Generator is already executing."); }
            while (_) { try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) { return t; }
                if (y = 0, t) { op = [op[0] & 2, t.value]; }
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) { _.ops.pop(); }
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
            if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) { if (!exports.hasOwnProperty(p)) { exports[p] = m[p]; } }
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) { return m.call(o); }
        return {
            next: function () {
                if (o && i >= o.length) { o = void 0; }
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) { return o; }
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) { m.call(i); }
            }
            finally { if (e) { throw e.error; } }
        }
        return ar;
    }

    function __spread() {
        var arguments$1 = arguments;

        for (var ar = [], i = 0; i < arguments.length; i++)
            { ar = ar.concat(__read(arguments$1[i])); }
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) { throw new TypeError("Symbol.asyncIterator is not defined."); }
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; } }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) { resume(q[0][0], q[0][1]); } }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) { throw new TypeError("Symbol.asyncIterator is not defined."); }
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) { return mod; }
        var result = {};
        if (mod != null) { for (var k in mod) { if (Object.hasOwnProperty.call(mod, k)) { result[k] = mod[k]; } } }
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var fragment = "varying vec2 vFilterCoord;\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform vec2 scale;\r\nuniform mat2 rotation;\r\nuniform sampler2D uSampler;\r\nuniform sampler2D mapSampler;\r\n\r\nuniform highp vec4 inputSize;\r\nuniform vec4 inputClamp;\r\n\r\nvoid main(void)\r\n{\r\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\r\n\r\n  map -= 0.5;\r\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\r\n\r\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\r\n}\r\n";

    var vertex = "attribute vec2 aVertexPosition;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 filterMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\nvarying vec2 vFilterCoord;\r\n\r\nuniform vec4 inputSize;\r\nuniform vec4 outputFrame;\r\n\r\nvec4 filterVertexPosition( void )\r\n{\r\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\r\n\r\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\r\n}\r\n\r\nvec2 filterTextureCoord( void )\r\n{\r\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\r\n}\r\n\r\nvoid main(void)\r\n{\r\n\tgl_Position = filterVertexPosition();\r\n\tvTextureCoord = filterTextureCoord();\r\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\r\n}\r\n";

    /**
     * The DisplacementFilter class uses the pixel values from the specified texture
     * (called the displacement map) to perform a displacement of an object.
     *
     * You can use this filter to apply all manor of crazy warping effects.
     * Currently the `r` property of the texture is used to offset the `x`
     * and the `g` property of the texture is used to offset the `y`.
     *
     * The way it works is it uses the values of the displacement map to look up the
     * correct pixels to output. This means it's not technically moving the original.
     * Instead, it's starting at the output and asking "which pixel from the original goes here".
     * For example, if a displacement map pixel has `red = 1` and the filter scale is `20`,
     * this filter will output the pixel approximately 20 pixels to the right of the original.
     *
     * @class
     * @extends PIXI.Filter
     * @memberof PIXI.filters
     */
    var DisplacementFilter = /** @class */ (function (_super) {
        __extends(DisplacementFilter, _super);
        /**
         * @param {PIXI.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
         * @param {number} [scale] - The scale of the displacement
         */
        function DisplacementFilter(sprite, scale) {
            var _this = this;
            var maskMatrix = new math.Matrix();
            sprite.renderable = false;
            _this = _super.call(this, vertex, fragment, {
                mapSampler: sprite._texture,
                filterMatrix: maskMatrix,
                scale: { x: 1, y: 1 },
                rotation: new Float32Array([1, 0, 0, 1]),
            }) || this;
            _this.maskSprite = sprite;
            _this.maskMatrix = maskMatrix;
            if (scale === null || scale === undefined) {
                scale = 20;
            }
            /**
             * scaleX, scaleY for displacements
             * @member {PIXI.Point}
             */
            _this.scale = new math.Point(scale, scale);
            return _this;
        }
        /**
         * Applies the filter.
         *
         * @param {PIXI.FilterSystem} filterManager - The manager.
         * @param {PIXI.RenderTexture} input - The input target.
         * @param {PIXI.RenderTexture} output - The output target.
         * @param {PIXI.CLEAR_MODES} clearMode - clearMode.
         */
        DisplacementFilter.prototype.apply = function (filterManager, input, output, clearMode) {
            // fill maskMatrix with _normalized sprite texture coords_
            this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
            this.uniforms.scale.x = this.scale.x;
            this.uniforms.scale.y = this.scale.y;
            // Extract rotation from world transform
            var wt = this.maskSprite.worldTransform;
            var lenX = Math.sqrt((wt.a * wt.a) + (wt.b * wt.b));
            var lenY = Math.sqrt((wt.c * wt.c) + (wt.d * wt.d));
            if (lenX !== 0 && lenY !== 0) {
                this.uniforms.rotation[0] = wt.a / lenX;
                this.uniforms.rotation[1] = wt.b / lenX;
                this.uniforms.rotation[2] = wt.c / lenY;
                this.uniforms.rotation[3] = wt.d / lenY;
            }
            // draw the filter...
            filterManager.applyFilter(this, input, output, clearMode);
        };
        Object.defineProperty(DisplacementFilter.prototype, "map", {
            /**
             * The texture used for the displacement map. Must be power of 2 sized texture.
             *
             * @member {PIXI.Texture}
             */
            get: function () {
                return this.uniforms.mapSampler;
            },
            set: function (value) {
                this.uniforms.mapSampler = value;
            },
            enumerable: false,
            configurable: true
        });
        return DisplacementFilter;
    }(core.Filter));

    exports.DisplacementFilter = DisplacementFilter;

    return exports;

}({}, PIXI, PIXI));
Object.assign(this.PIXI.filters, _pixi_filter_displacement);
//# sourceMappingURL=filter-displacement.js.map
