var tool = {
    $escape: function (n) {
        var r = /["&'<>]/;
        function i(n) {
            return 'string' != typeof n && (n = null == n ? '' : 'function' == typeof n ? i(n.call(n)) : JSON.stringify(n)), n;
        }
        return (function (n) {
            var e = '' + n,
                t = r.exec(e);
            if (!t) return n;
            var a = '',
                o = void 0,
                i = void 0,
                l = void 0;
            for (o = t.index, i = 0; o < e.length; o++) {
                switch (e.charCodeAt(o)) {
                    case 34:
                        l = '&#34;';
                        break;
                    case 38:
                        l = '&#38;';
                        break;
                    case 39:
                        l = '&#39;';
                        break;
                    case 60:
                        l = '&#60;';
                        break;
                    case 62:
                        l = '&#62;';
                        break;
                    default:
                        continue;
                }
                i !== o && (a += e.substring(i, o)), (i = o + 1), (a += l);
            }
            return i !== o ? a + e.substring(i, o) : a;
        })(i(n));
    },
    $each: function (n, e) {
        if (Array.isArray(n)) for (var t = 0, a = n.length; t < a; t++) e(n[t], t);
        else for (var o in n) e(n[o], o);
    },
};

var video = function (n) {
    'use strict';
    var e = '',
        t = (n = n || {}).enableSubtitle,
        o = n.subtitle,
        r = n.current,
        i = n.airplay,
        l = n.pic,
        s = tool.$escape,
        p = n.screenshot,
        d = n.preload,
        c = n.url;
    return t = o && "webvtt" === o.type,
        e += '\n<video  class="dplayer-video ',
        r && (e += "dplayer-video-current"),
        e += '"\n    webkit-playsinline\n    ',
        i && (e += ' x-webkit-airplay="allow" '),
        e += "\n    playsinline\n    ",
        l && (e += 'poster="',
        e += s(l),
        e += '"'),
        e += "\n    ",
        (p || t) && (e += 'crossorigin="anonymous"'),
        e += "\n    ",
        d && (e += 'preload="',
        e += s(d),
        e += '"'),
        e += "\n    ",
        i ? e += "\n    nosrc\n    " : c && (e += '\n    src="',
        e += s(c),
        e += '"\n    '),
        e += "\n    >\n    ",
        i && (e += '\n    <source src="',
        e += s(c),
        e += '">\n    '),
        e += "\n    ",
        t && (e += '\n    <track class="dplayer-subtrack" kind="metadata" default src="',
        e += s("string" == typeof o.url ? o.url : o.url[o.index].url),
        e += '"></track>\n    '),
        e + "\n</video>";
};

var player = function (n) {
    'use strict';
    var e,
        o = '',
        r = (n = n || {}).video,
        i = n.options,
        l = tool.$escape,
        s = n.tran,
        p = n.icons,
        d = n.index,
        c = tool.$each;
    return n.$value,
        n.$index,
        o += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ',
        e = video(r),
        o += e,
        o += "\n    ",
        i.logo && (o += '\n    <div class="dplayer-logo">\n        <img src="',
        o += l(i.logo),
        o += '">\n    </div>\n    '),
        o += '\n    <div class="dplayer-danmaku"',
        i.danmaku && i.danmaku.bottom && (o += ' style="margin-bottom:',
        o += l(i.danmaku.bottom),
        o += '"'),
        o += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ',
        i.danmaku && (o += '\n        <span class="dplayer-danloading">',
        o += l(s("danmaku-loading")),
        o += "</span>\n        "),
        o += '\n        <span class="diplayer-loading-icon">',
        o += p.loading,
        o += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="',
        o += l(s("setting")),
        o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
        o += p.pallette,
        o += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-font">\n                <div class="dplayer-comment-setting-title">',
        o += l(s("set-danmaku-font")),
        o += '</div>\n<input type="hidden">\n<div class="dplayer-danmaku-font-bar-wrap">\n<div class="dplayer-danmaku-font-bar">\n<div class="dplayer-danmaku-font-bar-inner">\n <span class="dplayer-thumb"></span>\n</div>\n</div>\n</div>\n<div class="dplayer-danmaku-font-intro"><span>小号</span><span>标准</span><span>大号</span><span>超大</span><span>特大</span></div></div>\n        <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">',
        o += l(s("set-danmaku-color")),
        o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
        o += l(d),
        o += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
        o += l(d),
        o += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
        o += l(d),
        o += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
        o += l(d),
        o += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
        o += l(d),
        o += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',
        o += l(d),
        o += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">',
        o += l(s("set-danmaku-type")),
        o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',
        o += l(d),
        o += '" value="1">\n                    <span>',
        o += l(s("top")),
        o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',
        o += l(d),
        o += '" value="0" checked>\n                    <span>',
        o += l(s("rolling")),
        o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',
        o += l(d),
        o += '" value="2">\n                    <span>',
        o += l(s("bottom")),
        o += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="',
        o += l(s("input-danmaku-enter")),
        o += '" maxlength="200">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="',
        o += l(s("send")),
        o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
        o += p.send,
        o += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">',
        o += p.play,
        o += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">',
        o += p.volumeDown,
        o += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ',
        o += l(i.theme),
        o += ';">\n                        <span class="dplayer-thumb" style="background: ',
        o += l(i.theme),
        o += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ',
        i.live && (o += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ',
        o += l(i.theme),
        o += ';"></span>',
        o += l(s("live")),
        o += "</span>\n        "),
        o += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ',
        i.video.quality && (o += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">',
        o += l(i.video.quality[i.video.defaultQuality].name),
        o += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ',
        c(i.video.quality, (function(n, e) {
            o += '\n                    <div class="dplayer-quality-item" data-index="',
            o += l(e),
            o += '">',
            o += l(n.name),
            o += "</div>\n                "
        }
        )),
        o += "\n                </div>\n            </div>\n        </div>\n        "),
        o += "\n        ",
        i.screenshot && (o += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="',
        o += l(s("screenshot")),
        o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
        o += p.camera,
        o += "</span>\n        </div>\n        "),
        o += "\n        ",
        i.airplay && (o += '\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="',
        o += l(s("airplay")),
        o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
        o += p.airplay,
        o += "</span>\n        </div>\n        "),
        o += "\n        ",
        i.chromecast && (o += '\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="',
        o += l(s("chromecast")),
        o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',
        o += p.chromecast,
        o += "</span>\n        </div>\n        "),
        o += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="',
        o += l(s("send-danmaku")),
        o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
        o += p.comment,
        o += "</span>\n            </button>\n        </div>\n        ",
        i.subtitle && (o += "\n        ",
        "string" == typeof i.subtitle.url ? (o += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="',
        o += l(s("hide-subs")),
        o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
        o += p.subtitle,
        o += "</span>\n            </button>\n        </div>\n        ") : (o += '\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="',
        o += l(s("subtitle")),
        o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
        o += p.subtitle,
        o += '</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ',
        c(i.subtitle.url, (function(n, e) {
            o += '\n                        <div class="dplayer-subtitles-item" data-subtitle="',
            o += l(n.url),
            o += '">\n                            \x3c!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. --\x3e\n                            <span class="dplayer-label">',
            o += l(n.lang ? n.name ? n.name + " (" + s(n.lang) + ")" : s(n.lang) : n.name),
            o += "</span>\n                        </div>\n                    "
        }
        )),
        o += "\n                </div>\n            </div>\n        </div>\n        "),
        o += "\n        "),
        o += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="',
        o += l(s("setting")),
        o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
        o += p.setting,
        o += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">',
        o += l(s("speed")),
        o += '</span>\n                        <div class="dplayer-toggle">',
        o += p.right,
        o += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">',
        o += l(s("loop")),
        o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">',
        o += l(s("show-danmaku")),
        o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">',
        o += l(s("unlimited-danmaku")),
        o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">',
        o += l(s("opacity-danmaku")),
        o += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ',
        c(i.playbackSpeed, (function(n, e) {
            o += '\n                        <div class="dplayer-setting-speed-item" data-speed="',
            o += l(n),
            o += '">\n                            <span class="dplayer-label">',
            o += l(1 === n ? s("normal") : n),
            o += "</span>\n                        </div>\n                    "
        }
        )),
        o += '\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="',
        o += l(s("web-fullscreen")),
        o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
        o += p.fullWeb,
        o += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="',
        o += l(s("fullscreen")),
        o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',
        o += p.full,
        o += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ',
        o += l(i.theme),
        o += '">\n                <span class="dplayer-thumb" style="background: ',
        o += l(i.theme),
        o += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ',
        i.danmaku && (o += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '),
        o += '\n</div>\n<div class="dplayer-menu">\n    ',
        c(i.contextmenu, (function(n, e) {
            o += '\n        <div class="dplayer-menu-item">\n            <a',
            n.link && (o += ' target="_blank"'),
            o += ' href="',
            o += l(n.link || "javascript:void(0);"),
            o += '">',
            n.key && (o += " ",
            o += l(s(n.key))),
            n.text && (o += " ",
            o += l(n.text)),
            o += "</a>\n        </div>\n    "
        }
        )),
        o += '\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ',
        o += p.play,
        o += "\n</button>";
};

export { video, player };
