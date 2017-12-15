// ==UserScript==
// @name         Quick Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *exbuild01.practiceweb.co.uk*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var obj = {};
    obj.settings = {};
    obj.settings.hotkey = 90;// ALT + z
    obj.visible = false;
    var baseUrl = window.location.origin + "/";
    var htmlString = '<div class="main-panel"><div class="init"><button class="trigger">start</button></div><ul class="list"></ul></div>';
    var cssString ="\.main-panel\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-size\:\ 12px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ width\:\ 60px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ box-shadow\:\ 0\ 2px\ 5px\ rgba\(0\,\ 0\,\ 0\,\ 0\.4\)\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ border-bottom\:\ 1px\ solid\ \#909090\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ padding\:\ 10px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ display\:\ block\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ position\:\ fixed\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ top\:\ 200px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ background\:\ \#6e6dbd\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ z-index\:\ 9999\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ transition\:\ all\ 0\.5s\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ border-radius\:\ 8px\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.expand\.main-panel\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ width\:\ 260px\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.expand\.main-panel\ ul\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ display\:block\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.main-panel\ ul\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ text-align\:\ center\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ margin\:\ 0\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ padding\:\ 0\ 0\ 12px\ 0\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ display\:\ none\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.main-panel\ ul\ li\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ list-style-type\:\ none\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ padding\:0\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.main-panel\ ul\ li\ a\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ width\:\ 40px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ height\:\ 40px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ display\:\ inline-block\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ color\:\ \#fff\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ text-decoration\:\ none\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ line-height\:\ 40px\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.main-panel\ \.init\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ text-align\:\ center\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.main-panel\ \.init\ button\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ height\:\ 50px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ width\:\ 50px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ border-radius\:\ 50\%\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ border\:\ 3px\ solid\ \#fff\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ background-color\:\ \#5adca4\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ color\:\ \#fff\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-weight\:\ bold\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ box-shadow\:\ 0\ 1px\ 6px\ rgba\(0\,0\,0\,\.12\)\,\ 0\ 1px\ 6px\ rgba\(0\,0\,0\,\.12\)\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.main-panel\ \.init\ button\:hover\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ background-color\:\ \#3ddaca\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ cursor\:\ pointer\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.grid\ \.title\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ color\:\ \#fff\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-family\:\ lato\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-style\:\ normal\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-weight\:\ 300\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-size\:\ 12px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ padding\:\ 2px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-size\:\ 10px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ margin\:\ 5px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ border-radius\:\ 4px\ 4px\ 2px\ 2px\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.grid\ \.title\ h2\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ margin\:\ 0\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ padding\:\ 0\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ font-size\:\ 12px\;\ \ \ \ \ \ \ \ \ \ \ \ \}\ \ \ \ \ \ \ \ \ \ \ \ \.grid\ \.box\{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ display\:\ inline-block\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ padding\:\ 5px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ margin\:\ 5px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ background-color\:\ \#2cc7bf\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ box-shadow\:\ 0\ 1px\ 6px\ rgba\(0\,0\,0\,\.12\)\,\ 0\ 1px\ 6px\ rgba\(0\,0\,0\,\.12\)\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ border-radius\:\ 4px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ background-image\:\ none\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ line-height\:\ 30px\;\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ text-align\:\ center\;\ \ \ \ \ \ \ \ \ \ \ \ \}";


    var linkTree = {
        "version": "1",
        "quicklinks": [
            {
                "categories": [
                    {
                        "name": "Site building",
                        "list": [
                            {
                                "item name": "Blocks",
                                "image": "",
                                "url": "/admin/build/block"
                            },
                            {
                                "item name": "Context",
                                "image": "",
                                "url": "/admin/build/context"
                            },
                            {
                                "item name": "Menus",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "Themes",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "ImageCache",
                                "image": "",
                                "url": ""
                            }
                        ]
                    },
                    {
                        "name": "Create content",
                        "list": [
                            {
                                "item name": "Node Block",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "None Ediatble Blocks",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "Menus",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "Themes",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "ImageCache",
                                "image": "",
                                "url": ""
                            }
                        ]
                    },
                    {
                        "name": "Create content",
                        "list": [
                            {
                                "item name": "Blocks",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "Context",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "Menus",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "Themes",
                                "image": "",
                                "url": ""
                            },
                            {
                                "item name": "ImageCache",
                                "image": "",
                                "url": ""
                            }
                        ]
                    }
                ]
            }
        ]
    };

    $(document).ready(function () {

        //$(cssString).appendTo("head");
        $("head").append("<style>"+cssString+"</style>");
        $("body").append(htmlString);
        init();

        $(document).keydown(function (e) {
            //e.preventDefault();
            if (e.altKey) {
                console.log(obj.settings.hotkey);
                console.log(e.which);
                console.log(e.which == obj.settings.hotkey);
                if (e.which == obj.settings.hotkey) {
                    swithVisible();
                }
            }
        });
    });

    function init() {
        buildUi();
    }

    function buildUi() {
        var cats = linkTree.quicklinks[0].categories;
        //alert(cats.length);
        var panel = $(".main-panel .list");

        for (var i = 0; i < cats.length; i++) {
            var cat = cats[i];
            var list = cat.list;
            var listString = "";
            for (var j = 0; j < list.length; j++) {
                var item = list[j];
                listString += '<li class="box"><a href="' + baseUrl + item.url + '" target="_blank"></a></li>';
            }
            panel.append('<li><div class="panel"><div class="grid"><div class="title"><h2>' + cat.name + '</h2></div><ul>' + listString + '</ul></div></div></li>');
        }
        
         $(".trigger").on("click", function () {
            $(".main-panel").toggleClass("expand");
         });
    }

    function swithVisible() {
        var panel = $(".main-panel");
        if (obj.visible) {
            $(".main-panel").css("display", "none");
        } else {
            $(".main-panel").css("display", "block");
        }
        obj.visible = !obj.visible;
    }

})();