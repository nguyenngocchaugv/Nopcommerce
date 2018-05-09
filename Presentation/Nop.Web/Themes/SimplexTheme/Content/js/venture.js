//var cookieHelper = function (e) { var o = {}; return o.setCookie = function (e, o, n, t) { if (void 0 != o && "" != o) { var i = t ? "; domain=" + t : ""; document.cookie = e + "=" + encodeURIComponent(o) + "; max-age=" + 86400 * n + "; path=/" + i } }, o.getCookie = function (e) { var o, n, t, i = document.cookie.split(";"); for (o = 0; o < i.length; o++) if (n = i[o].substr(0, i[o].indexOf("=")), t = i[o].substr(i[o].indexOf("=") + 1), n = n.replace(/^\s+|\s+$/g, ""), n == e) return unescape(t); return "" }, o.deleteCookie = function (e, o) { var n = o ? "; domain=" + o : ""; document.cookie = e + "=; max-age=0; path=/" + n }, o }(jQuery);
(function ($) {

    $(document).ready(function () {

    //    var dependencies = [
    //        {
    //            module: "header",
    //            dependencies: ["attachDetach", "overlay", "perfectScrollbar"]
    //        },
    //        {
    //            module: "menu",
    //            dependencies: ["perfectScrollbar"]
    //        }
    //    ];

    //    var themeSettings = {
    //        lazyLoadProductBoxImages: {
    //            selector: '.item-box .picture a img[data-lazyloadsrc]'
    //        },
    //        goToTop: {
    //            scrollElementSelector: '#goToTop'
    //        },
    //        overlay: {
    //            overlayElementSelector: '.overlayOffCanvas',
    //            overlayClass: 'show',
    //            noPageScrollClass: 'scrollYRemove'
    //        },
    //        productQuantity: {
    //            quantityInputSelector: '.qty-input, .productQuantityTextBox',
    //            incrementSelectors: '.plus',
    //            decrementSelectors: '.minus'
    //        },
    //        toggle: {
    //            blocks: [
    //                {
    //                    opener: '.search-opener',
    //                    content: '.store-search-box form',
    //                    activeClassOpener: 'open',
    //                    activeClassContent: 'open',
    //                    animation: {
    //                        type: 'none'
    //                    },
    //                    afterToggle: function () {

    //                        $(".header-lower").toggleClass("search-overlay-open");
    //                    }
    //                },
    //                {
    //                    opener: '.footer-map-holder .title',
    //                    content: '.footer-map-wrapper',
    //                    activeClassOpener: 'open',
    //                    animation: {
    //                        type: 'slide',
    //                        speed: 'slow'
    //                    },
    //                    afterToggle: function () {

    //                        window.google.maps.event.trigger(window.footerMap, "resize");
    //                    }
    //                },
    //                {
    //                    opener: '.sublist-toggle-button',
    //                    content: '.sublist',
    //                    activeClassOpener: 'open',
    //                    animation: {
    //                        type: 'slide',
    //                        speed: 'slow'
    //                    }
    //                },
    //                {
    //                    opener: '.new-comment .title',
    //                    content: '.new-comment form',
    //                    activeClassOpener: 'open',
    //                    animation: {
    //                        type: 'slide',
    //                        speed: 'slow'
    //                    }
    //                },
    //                {
    //                    opener: '.write-review .title',
    //                    content: '.write-review-collapse',
    //                    activeClassOpener: 'open',
    //                    animation: {
    //                        type: 'slide',
    //                        speed: 'slow'
    //                    }
    //                }
    //            ]
    //        },
    //        flyoutCart: {
    //            flyoutCartSelector: '#flyout-cart',
    //            removeItemSelector: '.mini-shopping-cart-item-close'
    //        },
    //        equalizer: {
    //            blocks: [
    //                {
    //                    selector: '.checkout-page .address-item'
    //                },
    //                {
    //                    selector: '.rich-blog-homepage .blog-post'
    //                }
    //            ]
    //        },
    //        responsive: [
    //            {
    //                breakpoint: 1201,
    //                settings: {
    //                    menu: {
    //                        sublistIndent: {
    //                            enabled: true,
    //                            topLevelMenuWidth: 360
    //                        }
    //                    },
    //                    header: {
    //                        activeClass: 'open',
    //                        modules: [
    //                            {
    //                                content: '.header-selectors-wrapper',
    //                                elementToAttach: '.mobile-menu-items'
    //                            },
    //                            {
    //                                content: '#CartQuantityBox',
    //                                elementToAttach: '.responsive-nav-wrapper .shopping-cart-link a'
    //                            },
	   //                         {
	   //                             opener: '.search-wrap > span',
	   //                             content: '.store-search-box',
	   //                             elementToAttach: '.master-wrapper-page',
	   //                             overlay: true
	   //                         },
    //                            {
    //                                opener: '.responsive-nav-wrapper .menu-title > span',
    //                                closer: '.close-menu > span',
    //                                content: '.header-menu',
    //                                overlay: true,
    //                                scrollbar: true
    //                            },
    //                            {
    //                                elementToAttach: '.master-wrapper-page',
    //                                opener: '.filters-button-wrapper .filters-button',
    //                                closer: '.nopAjaxFilters7Spikes .close-btn',
    //                                content: '.nopAjaxFilters7Spikes',
    //                                overlay: true,
    //                                scrollbar: true
    //                            }
    //                        ]
    //                    },
    //                    toggle: {
    //                        blocks: [
    //                            {
    //                                opener: '.block .title',
    //                                content: '.listbox',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.mobile-selector .selector-title',
    //                                content: '.mobile-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.footer-map-holder .title',
    //                                content: '.footer-map-wrapper',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                },
    //                                afterToggle: function () {

    //                                    window.google.maps.event.trigger(window.footerMap, "resize");
    //                                }
    //                            },
    //                            {
    //                                opener: '.new-comment .title',
    //                                content: '.new-comment form',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.write-review .title',
    //                                content: '.write-review-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            }
    //                        ]
    //                    },
    //                    equalizer: {
    //                        blocks: [
    //                            {
    //                                selector: '.cart tr'
    //                            },
    //                            {
    //                                selector: '.checkout-page .address-item'
    //                            }
    //                        ]
    //                    }
    //                }
    //            },
    //            {
    //                breakpoint: 769,
    //                settings: {
    //                    menu: {
    //                        sublistIndent: {
    //                            enabled: true,
    //                            topLevelMenuWidth: 360
    //                        }
    //                    },
    //                    header: {
    //                        activeClass: 'open',
    //                        modules: [
    //                            {
    //                                content: '.header-selectors-wrapper',
    //                                elementToAttach: '.mobile-menu-items'
    //                            },
    //                            {
    //                                content: '#CartQuantityBox',
    //                                elementToAttach: '.responsive-nav-wrapper .shopping-cart-link a'
    //                            },
	   //                         {
	   //                             opener: '.search-wrap > span',
	   //                             content: '.store-search-box',
	   //                             elementToAttach: '.master-wrapper-page',
	   //                             overlay: true
	   //                         },
    //                            {
    //                                opener: '.responsive-nav-wrapper .menu-title > span',
    //                                closer: '.close-menu > span',
    //                                content: '.header-menu',
    //                                overlay: true,
    //                                scrollbar: true
    //                            },
    //                            {
    //                                elementToAttach: '.master-wrapper-page',
    //                                opener: '.filters-button-wrapper .filters-button',
    //                                closer: '.nopAjaxFilters7Spikes .close-btn',
    //                                content: '.nopAjaxFilters7Spikes',
    //                                overlay: true,
    //                                scrollbar: true
    //                            }
    //                        ]
    //                    },
    //                    toggle: {
    //                        blocks: [
    //                            {
    //                                opener: '.block .title',
    //                                content: '.listbox',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.mobile-selector .selector-title',
    //                                content: '.mobile-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.footer-block .title',
    //                                content: '.footer-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.footer-map-holder .title',
    //                                content: '.footer-map-wrapper',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                },
    //                                afterToggle: function () {

    //                                    window.google.maps.event.trigger(window.footerMap, "resize");
    //                                }
    //                            },
    //                            {
    //                                opener: '.sub-category-toggle-select',
    //                                content: '.sub-categories-wrapper',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.cart-collaterals .title',
    //                                content: '',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.new-comment .title',
    //                                content: '.new-comment form',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.write-review .title',
    //                                content: '.write-review-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            }
    //                        ]
    //                    },
    //                    equalizer: {
    //                        blocks: [
    //                            {
    //                                selector: '.checkout-page .address-item'
    //                            }
    //                        ]
    //                    }
    //                }
    //            },
    //            {
    //                breakpoint: 481,
    //                settings: {
    //                    menu: {
    //                        sublistIndent: {
    //                            enabled: true,
    //                            topLevelMenuWidth: 320
    //                        }
    //                    },
    //                    header: {
    //                        activeClass: 'open',
    //                        modules: [
    //                            {
    //                                content: '.header-selectors-wrapper',
    //                                elementToAttach: '.mobile-menu-items'
    //                            },
    //                            {
    //                                content: '#CartQuantityBox',
    //                                elementToAttach: '.responsive-nav-wrapper .shopping-cart-link a'
    //                            },
    //                            {
    //                                opener: '.search-wrap > span',
    //                                content: '.store-search-box',
    //                                elementToAttach: '.master-wrapper-page',
    //                                overlay: true
    //                            },
    //                            {
    //                                opener: '.responsive-nav-wrapper .menu-title > span',
    //                                closer: '.close-menu > span',
    //                                content: '.header-menu',
    //                                overlay: true,
    //                                scrollbar: true
    //                            },
    //                            {
    //                                elementToAttach: '.master-wrapper-page',
    //                                opener: '.filters-button-wrapper .filters-button',
    //                                closer: '.nopAjaxFilters7Spikes .close-btn',
    //                                content: '.nopAjaxFilters7Spikes',
    //                                overlay: true,
    //                                scrollbar: true
    //                            }
    //                        ]
    //                    },
    //                    toggle: {
    //                        blocks: [
    //                            {
    //                                opener: '.block .title',
    //                                content: '.listbox',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.mobile-selector .selector-title',
    //                                content: '.mobile-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.footer-block .title',
    //                                content: '.footer-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.footer-map-holder .title',
    //                                content: '.footer-map-wrapper',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                },
    //                                afterToggle: function () {

    //                                    window.google.maps.event.trigger(window.footerMap, "resize");
    //                                }
    //                            },
    //                            {
    //                                opener: '.sub-category-toggle-select',
    //                                content: '.sub-categories-wrapper',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.cart-collaterals .title',
    //                                content: '',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.new-comment .title',
    //                                content: '.new-comment form',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            },
    //                            {
    //                                opener: '.write-review .title',
    //                                content: '.write-review-collapse',
    //                                activeClassOpener: 'open',
    //                                animation: {
    //                                    type: 'slide',
    //                                    speed: 'slow'
    //                                }
    //                            }
    //                        ]
    //                    },
    //                    equalizer: {
    //                        blocks: [
    //                            {
    //                                selector: '.checkout-page .address-item'
    //                            }
    //                        ]
    //                    }
    //                }
    //            }
    //        ]
    //    };

    //    var theme = new window.sevenSpikesTheme(themeSettings, dependencies, false);

    //    theme.init();

    //    handleCategoryNavigationCollapse();
    //    handleClearCartButton();
    //    handleAddNewAddressExpand();
    //    handleNewCommetnExpand();
    //    handleWriteReviewExpand();
    //    handleGridViewModes();
    //    handleAjaxFiltersPriceRangeHandels();
      handleHomePageVideoPlayer();

    //    $(document).on('ventureMapLoaded', function () {

    //        $(".footer-map-holder .footer-map-wrapper").hide();
    //    });

    //    $(document).on("quickTabsRefreshedTab", function () {
    //        handleWriteReviewExpand();
    //    });

    //    $(window).load(function () {
    //        $('.page-loader').fadeOut("slow");
    //    });

    });

    function handleHomePageVideoPlayer() {
        
        function initYoutubePlayer() {
            player = new YT.Player('video-iframe', {
                events: {
                    'onStateChange': function (state) {
                        if (state.data === 0) {

                            isPlayerRunning = false;

                            player.destroy();
                        }
                    }
                }
            });
        }

        function initVimeoPlayer() {
            player = new Vimeo.Player('video-iframe');

            player.setVolume(0);

            player.on('ended', function () {

                isPlayerRunning = false;

                iFrame.remove();
            });
        }

        var playerElement = $('#video-player');

        if (playerElement.length === 0) {

            return;
        }

        var platformUrl = playerElement.attr('data-platform-url');
        var videoId = playerElement.attr('data-id')

        var isPlayerRunning = false;
        var player;
        var iFrame;
        var videoSettings;

        if (platformUrl.indexOf('youtube') !== -1) {

            // Embed video options
            videoSettings = {
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                mute: 1,
                enablejsapi: 1
            };

        } else if (platformUrl.indexOf('vimeo') !== -1) {

            // Embed video options
            videoSettings = {
                autoplay: 1,
                byline: 0,
                portrait: 0,
                title: 0,
                background: 1
            };
        }

        playerElement.on('click', function () {

            if (isPlayerRunning) {

                return;
            }

            isPlayerRunning = true;

            iFrame = $('<iframe>', {
                src: platformUrl + videoId + '?' + $.param(videoSettings),
                id: 'video-iframe',
                frameborder: 0,
                allowfullscreen: 1
            });

            iFrame.appendTo(playerElement).show('slow');

            if (platformUrl.indexOf('youtube') !== -1) {

                initYoutubePlayer();

            } else if (platformUrl.indexOf('vimeo') !== -1) {

                initVimeoPlayer();
            }

        });
    }

})(jQuery);