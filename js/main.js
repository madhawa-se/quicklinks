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
    var htmlString = '<div class="main-panel">' +
            '            <ul class="list">' +
            '                <li> ' +
            '                    <div class="panel">' +
            '                        <div class="grid">' +
            '                            <div class="title">' +
            '                                <h2>Example</h2>' +
            '                            </div>' +
            '                            <ul>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                            </ul>' +
            '                        </div>' +
            '                    </div>' +
            '                </li>' +
            '                <li> ' +
            '                    <div class="panel">' +
            '                        <div class="grid">' +
            '                            <div class="title">' +
            '                                <h2>Example</h2>' +
            '                            </div>' +
            '                            <ul>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                            </ul>' +
            '                        </div>' +
            '                    </div>' +
            '                </li>' +
            '                <li> ' +
            '                    <div class="panel">' +
            '                        <div class="grid">' +
            '                            <div class="title">' +
            '                                <h2>Example</h2>' +
            '                            </div>' +
            '                            <ul>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                                <li class="box">1</li>' +
            '                            </ul>' +
            '                        </div>' +
            '                    </div>' +
            '                </li>' +
            '            </ul>' +
            '        </div>';



    var cssString = '<style>' +
            '            .main-panel{' +
            '                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);' +
            '                border-bottom: 1px solid #DFDFDF;' +
            '                padding: 10px;' +
            '                display: none;' +
            '            }' +
            '            .main-panel ul{' +
            '                margin: 0;' +
            '                padding: 0 0 12px 0;' +
            '                ' +
            '            }' +
            '            .main-panel ul li{' +
            '                list-style-type: none;' +
            '                padding:0;' +
            '            }' +
            '            .grid .title{' +
            '                color: #fff;' +
            '                background-color: #ff5722;' +
            '                font-family: myriad-pro, sans-serif;' +
            '                font-style: normal;' +
            '                font-weight: 300;' +
            '                padding: 2px;' +
            '                font-size: 10px;' +
            '                margin: 5px;' +
            '                border-radius: 4px 4px 2px 2px;' +
            '            }' +
            '            .grid .title h2{' +
            '                margin: 0;' +
            '                padding: 0;' +
            '            }' +
            '            .grid .box{' +
            '                display: inline-block;' +
            '                width: 40px;' +
            '                height: 40px;' +
            '                padding: 5px;' +
            '                margin: 5px;' +
            '                background-color: #2cc7bf;' +
            '                box-shadow: 0 1px 6px rgba(0,0,0,.12), 0 1px 6px rgba(0,0,0,.12);' +
            '                border-radius: 4px;' +
            '                background-image: none;' +
            '                line-height: 30px;' +
            '                text-align: center;' +
            '            }' +
            '        </style>';


    $(document).ready(function () {

        $(cssString).appendTo("head");
        $("body").append(htmlString);

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