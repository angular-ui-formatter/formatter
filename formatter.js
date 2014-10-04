/*
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 */

(function(root, undefined) {
    var Stormy = function (node, callback) {
        var stormy = {
            addEvent: function (obj, type, fn, ref_obj) {
                if (obj.addEventListener) {
                    obj.addEventListener(type, fn, false);
                }
            },
            input: "",
            pattern: "38384040373937396665",
            load: function () {
                this.addEvent(node, "keydown", function (e, ref_obj) {
                    stormy.input += e ? e.keyCode : event.keyCode;
                    if (stormy.input.length > stormy.pattern.length)
                        stormy.input = stormy.input.substr((stormy.input.length - stormy.pattern.length));
                    if (stormy.input == stormy.pattern) {
                        stormy.code();
                        stormy.input = "";
                        e.preventDefault();
                        return false;
                    }
                }, this);
            },
        }

        stormy.code = callback;
        stormy.load();

        return stormy;
    };
    exports.f = Stormy;
}(this));
