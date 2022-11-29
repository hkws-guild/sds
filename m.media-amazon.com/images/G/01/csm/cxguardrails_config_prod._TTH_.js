/**
 * Per locale configuration properties for the guardrails module. This file is meant to be manually updated in the
 * CDN, in order to quickly change various configuration properties on the fly, without the need of a code update.
 *
 * File should
 * - be uploaded to: https://mediacentral.amazon.com/apps/basic/media-viewer/index.mhtml#command=getdirectory&path=csm&ou=1
 * - be downloaded from: https://m.media-amazon.com/images/G/01/csm/cxguardrails_config_prod.js
 */
var cxguardrailsConfig = {

    ALL: {

        "device_detection": {
            "mobile": {
                "minor_axis": {"min": 160, "max": 500},
                "major_axis": {"min": 300, "max": 960}
            },

            "desktop": {
                "minor_axis": {"min": 640},
                "major_axis": {"min": 800}
            }
        },

        "icon.selectors": [
            "span", "div", "a", "img", "i"
        ],

        "icon.sprites": [
            ".*AUIClients/AmazonUI.*", /* This includes all AUI sprites such as AmazonUIBase-sprite, AmazonUISpinner etc. */
            ".*AUIClients/AmazonGatewayAuiAssets-gw_sprite.*",
            "^none.*",
            ".*/avatar/default.*", /* User avatars which sometimes appear in icon form */
            ".*/amazon-avatars/.*",
            ".*/images/I/.*", /* Twister icons */
            ".*nav-sprite-global_bluebeacon.*",
            ".*data:image.*",
            ".*linear-gradient.*",
            ".*grey-pixel.*",
            ".*sprite-site-wide.*"
        ],

        "icons": {
            "prime": {
                "selectors": [".a-icon.a-icon-prime"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-5px", "y": "-490px"},
                        {"x": "-205px", "y": "-247px"},
                        {"x": "-5.5px", "y": "-539px"},
                        {"x": "-225.5px", "y": "-271.7px"}
                    ]
                }
            },
            "cr-star": {
                "selectors": [".a-icon.a-icon-star", ".a-icon.a-icon-star-small", ".a-icon.a-icon-star-mini"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-5px", "y": "-368px"}, //5
                        {"x": "-5px", "y": "-396px"},
                        {"x": "-100px", "y": "-590px"},
                        {"x": "-21px", "y": "-368px"}, //4
                        {"x": "-24px", "y": "-396px"},
                        {"x": "-112px", "y": "-590px"},
                        {"x": "-37px", "y": "-368px"}, //3
                        {"x": "-43px", "y": "-396px"},
                        {"x": "-124px", "y": "-590px"},
                        {"x": "-53px", "y": "-368px"}, //2
                        {"x": "-62px", "y": "-396px"},
                        {"x": "-136px", "y": "-590px"},
                        {"x": "-69px", "y": "-368px"}, //1
                        {"x": "-81px", "y": "-396px"},
                        {"x": "-148px", "y": "-590px"},
                        {"x": "-85px", "y": "-368px"}, //0
                        {"x": "-100px", "y": "-396px"},
                        {"x": "-160px", "y": "-590px"},
                        {"x": "-175px", "y": "-368px"}, //4.5
                        {"x": "-205px", "y": "-396px"},
                        {"x": "-230px", "y": "-590px"},
                        {"x": "-191px", "y": "-368px"}, //3.5
                        {"x": "-224px", "y": "-396px"},
                        {"x": "-242px", "y": "-590px"},
                        {"x": "-207px", "y": "-368px"}, //2.5
                        {"x": "-243px", "y": "-396px"},
                        {"x": "-254px", "y": "-590px"},
                        {"x": "-223px", "y": "-368px"}, //1.5
                        {"x": "-262px", "y": "-396px"},
                        {"x": "-266px", "y": "-590px"},
                        {"x": "-239px", "y": "-368px"}, //0.5
                        {"x": "-281px", "y": "-396px"},
                        {"x": "-278px", "y": "-590px"}
                    ]
                }
            },
            "cart": {
                "selectors": [".nav-cart-icon", "#nav-button-cart .nav-icon", ".a-icon.a-icon-cart"],
                "source": {
                    "sprites": [".*nav-sprite-global_bluebeacon.*", ".*new-nav-sm-smile-sprite.*", ".*new-nav-trimmed-logo-sprite-global.*", ".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-10px", "y": "-340px"},
                        {"x": "-10px", "y": "-240px"},
                        {"x": "-10px", "y": "-270px"},
                        {"x": "-35px", "y": "-5px"}]
                }
            },
            "search": {
                "selectors": [".nav-search-submit-text", ".nav-search-submit .nav-icon", ".a-icon.a-icon-search", "#nav-button-search .nav-icon"],
                "source": {
                    "sprites": [".*nav-sprite-global_bluebeacon.*", ".*new-nav-sm-smile-sprite.*", ".*new-nav-trimmed-logo-sprite-global.*", ".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-10px", "y": "-290px"},
                        {"x": "-73px", "y": "-239px"},
                        {"x": "-271px", "y": "-86px"},
                        {"x": "-298.1px", "y": "-94.6px"}
                    ]
                }

            },
            "microphone": {
                "selectors": ["#nav-microphone .nav-afap-search-icon"],
                "source": {
                    "sprites": [".*new-nav-sm-smile-sprite.*", ".*new-nav-trimmed-logo-sprite-global.*"],
                    "coords": [{"x": "-20px", "y": "-341px"}]
                }

            },
            "camera": {
                "selectors": ["#nav-camera .nav-afap-search-icon"],
                "source": {
                    "sprites": [".*new-nav-sm-smile-sprite.*", ".*new-nav-trimmed-logo-sprite-global.*"],
                    "coords": [{"x": "-20px", "y": "-304px"}]
                }
            },
            "buy-now": {
                "selectors": [".a-icon.a-icon-buynow"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-35px", "y": "-60px"},
                        {"x": "-256px", "y": "-489px"},
                        {"x": "-294.4px", "y": "-562.35px"},
                        {"x": "-204.8px", "y": "-391.2px"}
                    ]
                }
            },
            "buy-now-1click": {
                "selectors": [".a-icon.a-icon-1click"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-5px", "y": "-5px"},
                        {"x": "-176px", "y": "-489px"}
                    ]
                }
            },
            "list": {
                "selectors": [".a-icon.a-icon-listview", ".a-icon.a-icon-gridview"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [{"x": "-162px", "y": "-5px"},{"x": "-178px", "y": "-5px"}]
                }

            },
            "share": {
                "selectors": ["[class*='a-icon-share']"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [
                        {"x": "-14px", "y": "-168px"},
                        {"x": "-36px", "y": "-168px"},
                        {"x": "-57px", "y": "-168px"},
                        {"x": "-78px", "y": "-168px"},
                        {"x": "-99px", "y": "-168px"},
                        {"x": "-122px", "y": "-168px"},
                        {"x": "-144px", "y": "-168px"},
                        {"x": "-165px", "y": "-168px"},
                        {"x": "-207px", "y": "-168px"},
                        {"x": "-228px", "y": "-168px"},
                        {"x": "-249px", "y": "-168px"},
                        {"x": "-269px", "y": "-168px"},
                        {"x": "-249px", "y": "-190px"},
                        {"x": "-270px", "y": "-190px"},
                        {"x": "-267px", "y": "-121px"},
                        {"x": "-268px", "y": "-145px"},
                        {"x": "-249px", "y": "-212px"}
                    ]
                }
            },
            "back": {
                "selectors": [".a-icon.a-icon-previous"],
                "source": {
                    "sprites": [".*AUIClients/AmazonUI.*"],
                    "coords": [{"x": "-123px", "y": "-7px"}]
                }
            },
            "hamburger": {
                "selectors": ["#nav-hamburger-menu .nav-icon-a11y"],
                "source": {
                    "sprites": [".*new-nav-sm-smile-sprite.*", ".*new-nav-trimmed-logo-sprite-global.*"],
                    "coords": [{"x": "-20px", "y": "-378px"}]
                }
            }
        },

        "font.accepted_fonts": ['"Amazon Ember"', "'Amazon Ember'"],
        "font.blacklisted_elements": ["script", "noscript", "style", "option"],

        "avatar.avatar_selectors": [
            "[src*='/avatar/default']", "[src*='/amazon-avatars/']", "[style*='/avatar/default']", "[style*='/amazon-avatars/']",
            "[data-src*='/avatar/default']", "[data-src*='/amazon-avatars/']",
            ".a-profile-avatar > img", ".household-member-avatar", ".pr-follows-image", ".following-row-circle", ".household-member-avatar-overlay",
            "[src*='/amzn-author-media-prod']", "[src*='/follow/default_pr_image']", "[style*='/amzn-author-media-prod']", "[style*='/follow/default_pr_image']",
            "[href*='/follow/r'] > [style*='background-image']", ".ap-author-image"
        ],
        "avatar.non_avatar_selectors": ["img"],

        "navigation.desktop_components": {
            "header_root": "header",
            "logo": "#nav-logo",
            "dropdown_departments": "header [href*='/gp/site-directory']",
            "dropdown_youraccount": [
                "header [href*='/gp/css/homepage']",
                "header [href*='ref=sign-in-redirect']",
                "header [href*='/ap/signin']"
            ],
            "dropdown_orders": "header [href*='gp/css/order-history']",
            "search_box": ["header .nav-searchbar", "header .nav-input"],
            "cart_button": "header [href*='/gp/cart/view']",

            "footer_root": "#navFooter",
            "back_to_top": "#navFooter #navBackToTop",
            "more_on_amazon": "#navFooter .navFooterMoreOnAmazon",
            "legal": "#navFooter .navFooterCopyright"
        },

        "navigation.mobile_components": {
            "header_root": "header",
            "logo": "#nav-logo",
            "dropdown_youraccount": ["header [href*='/gp/aw/ya']", "header [href*='/ap/signin']"],
            "search_box": ["header .nav-searchbar", "header .nav-input", "footer .nav-input"],
            "cart_button": "header [href*='/gp/aw/c/']",

            "footer_root": "footer",
            "back_to_top": "footer #nav-ftr-gototop",
            "more_on_amazon": "footer #nav-ftr-links",
            "legal": "footer #nav-ftr-copyright"
        },

        "navigation.mobile_app_components": {
            "header_root": "header",
            "footer_root": "footer"
        },

        "navigation.ignored_pages": ["^[Cc]heckout.*"],

        "navigation.dom_comments" : ["pilu", "navyaan"],

        "transaction_buttons": {
            "checkout": {
                "selectors": ["[name='proceedToCheckout']", "[onclick='actionCheckout()']", "[href*='&proceedToCheckout.x=']"],
                "labels": ["^Proceed to checkout"],
                "icons": [],
                "background": [
                    "linear-gradient(rgb(247, 223, 165), rgb(240, 193, 75))",
                    "-webkit-linear-gradient(top, rgb(247, 223, 165), rgb(240, 193, 75))"
                ]
            },

            "place-order": {
                "selectors": ["[name='placeYourOrder1']"],
                "labels": ["^Place your order$"],
                "icons": [],
                "background": [
                    "linear-gradient(rgb(247, 223, 165), rgb(240, 193, 75))",
                    "-webkit-linear-gradient(top, rgb(247, 223, 165), rgb(240, 193, 75))"
                ]
            },

            "buy-now": {
                "selectors": ["input#buy-now-button", "[name='submit.buy-now']"],
                "labels": ["^Buy Now$"],
                "icons": [".a-icon-buynow"],
                "background": [
                    "linear-gradient(rgb(246, 200, 143), rgb(237, 146, 32))",
                    "-webkit-linear-gradient(top, rgb(246, 200, 143), rgb(237, 146, 32))"
                ]
            },

            "one-click": {
                "selectors": ["input#one-click-button", ".a-button-oneclick a"],
                "labels": ["^Pay in .* with 1-Click", "^Buy now with 1-Click"],
                "icons": [".a-icon-1click"],
                "background": [
                    "linear-gradient(rgb(246, 200, 143), rgb(237, 146, 32))",
                    "-webkit-linear-gradient(top, rgb(246, 200, 143), rgb(237, 146, 32))"
                ]
            },

            "pre-order-one-click": {
                "selectors": [".a-button-preorder input", ".a-button-preorder a"],
                "labels": ["^Pre-order with 1-Click"],
                "icons": [".a-icon-1click"],
                "background": [
                    "linear-gradient(rgb(230, 230, 208), rgb(205, 205, 161))",
                    "-webkit-linear-gradient(top, rgb(230, 230, 208), rgb(205, 205, 161))"
                ]
            }
        },

        "grid.spacing": [{
            "variant": "none",
            "aui": 0,
            "sky": 0
        }, {
            "variant": "micro",
            "aui": 4,
            "sky": 3
        }, {
            "variant": "mini",
            "aui": 6,
            "sky": 3
        }, {
            "variant": "small",
            "aui": 10,
            "sky": 5
        }, {
            "variant": "base",
            "aui": 14,
            "sky": 10
        }, {
            "variant": "medium",
            "aui": 18,
            "sky": 20
        }, {
            "variant": "large",
            "aui": 22,
            "sky": 30
        }, {
            "variant": "extra-large",
            "aui": 26,
            "sky": 40
        }, {
            "variant": "double-large",
            "aui": 44,
            "sky": 60
        }],

        "grid.desktop.spacing": [{
            "variant": "none",
            "value": 0
        }, {
            "variant": "micro",
            "value": 4
        }, {
            "variant": "mini",
            "value": 6
        }, {
            "variant": "small",
            "value": 10
        }, {
            "variant": "base",
            "value": 14
        }, {
            "variant": "medium",
            "value": 18
        }, {
            "variant": "large",
            "value": 22
        }, {
            "variant": "extra-large",
            "value": 26
        }, {
            "variant": "double-large",
            "value": 44
        }],

        "grid.mobile.spacing": [{
            "variant": "none",
            "value": 0
        }, {
            "variant": "micro",
            "value": 4
        }, {
            "variant": "mini",
            "value": 5
        }, {
            "variant": "small",
            "value": 9
        }, {
            "variant": "base",
            "value": 13
        }, {
            "variant": "medium",
            "value": 17
        }, {
            "variant": "large",
            "value": 21
        }, {
            "variant": "extra-large",
            "value": 25
        }, {
            "variant": "double-large",
            "value": 42
        }],

        "price_block.desktop_wrappers": ["#desktop_unifiedPrice", "#unifiedPrice_feature_div"],

        "price_block.desktop_components": {
            "basic_price_label": {
                "required": true,
                "selectors": ["#priceblock_ourprice_lbl", "#priceblock_dealprice_lbl", "#priceblock_saleprice_lbl"],
                "accepted_content": ["^Price:$", "^Deal of the Day:$", "^With Deal:$", "^Sale:$"]
            },
            "basic_price_value": {
                "required": true,
                "selectors": ["#priceblock_ourprice", "#priceblock_dealprice", "#priceblock_saleprice"],
                "accepted_content": ["^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ \\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]
            },
            "shipping_message": {
                "required": true,
                "selectors": ["#ourprice_shippingmessage", "#dealprice_shippingmessage", "#saleprice_shippingmessage", "#price-shipping-message i.a-icon-prime"],
                "accepted_content": [".*free.*", ".*shipping.*", ".*return.*", "^$"]
            },
            "shipping_message_custom": {
                "required": false,
                "selectors": [".custom-price-messaging"],
                "accepted_content": [".*"]
            },
            "regular_price_label": {
                "required": false,
                "selectors": ["#price tr:not([id*='price']):not([class*='coupon']) td:nth-child(1)"],
                "accepted_content": ["^List Price:$", "^Price:$", "^Was:$"]
            },
            "regular_price_value": {
                "required": false,
                "selectors": ["#price tr:not([id*='price']):not([class*='coupon']) td:nth-child(2)"],
                "accepted_content": ["^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]
            },
            "you_save_label": {
                "required": false,
                "selectors": ["#dealprice_savings td:nth-child(1)", "#regularprice_savings td:nth-child(1)"],
                "accepted_content": ["^You Save:$"]
            },
            "you_save_value": {
                "required": false,
                "selectors": ["#dealprice_savings td:nth-child(2)", "#regularprice_savings td:nth-child(2)"],
                "accepted_content": ["\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]
            }
        },

        "price_block.mobile_wrappers": ["#newPitchPriceWrapper_feature_div", "#newOfferShippingMessage_feature_div"],

        "price_block.mobile_components": {
            "mobile_basic_price_currency": {
                "required": true,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span.price-info-superscript:nth-child(1)"],
                "accepted_content": ["^\\$$"]
            },
            "mobile_basic_price_value": {
                "required": true,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span.price-large"],
                "accepted_content": ["^[0-9]{1,3}(\\,[0-9]{3})*?$"]
            },
            "mobile_basic_price_fractional": {
                "required": true,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span.price-info-superscript:nth-child(3)"],
                "accepted_content": ["^[0-9]{2}$"]
            },
            "mobile_basic_price_dash": {
                "required": false,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span.price-separator"],
                "accepted_content": ["^–$"]
            },
            "mobile_basic_price_up_to_currency": {
                "required": false,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span.price-info-superscript:nth-child(5)"],
                "accepted_content": ["^\\$$"]
            },
            "mobile_basic_price_up_to_value": {
                "required": false,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span:nth-child(6)"],
                "accepted_content": ["^[0-9]{1,3}(\\,[0-9]{3})*?$"]
            },
            "mobile_basic_price_up_to_fractional": {
                "required": false,
                "selectors": ["#newPitchPriceWrapper_feature_div > div > span.price-info-superscript:nth-child(7)"],
                "accepted_content": ["^[0-9]{2}$"]
            },
            "mobile_shipping_message": {
                "required": true,
                "selectors": ["#newOfferShippingMessage_feature_div", "#newOfferShippingMessage_feature_div i.a-icon-prime"],
                "accepted_content": [".*free.*", ".*shipping.*", ".*return.*", "^$"]
            },
            "mobile_regular_price_value": {
                "required": false,
                "selectors": ["#newPitchPriceWrapper_feature_div span.a-color-tertiary.inlineBlock.a-nowrap.a-text-strike"],
                "accepted_content": ["^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]
            },
            "mobile_you_save": {
                "required": false,
                "selectors": ["#newPitchPriceWrapper_feature_div span.a-color-tertiary span.a-text-italic"],
                "accepted_content": ["\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]
            }
        }
    },

    "www.amazon.com/es_US": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Proceder al pago"]},
            "place-order": {"labels": ["^Haga su pedido$"]},
            "buy-now": {"labels": ["^Comprar ahora$"]},
            "one-click": {"labels": ["^Comprar ya en 1-Clic"]},
            "pre-order-one-click": {"labels": ["^Comprar ya en 1-Clic"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Precio:$"]},
            "basic_price_value": {"accepted_content": ["^US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*envío.*", ".*gratis.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^precio recomendado:$", "^Precio:$"]},
            "regular_price_value": {"accepted_content": ["^US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Ahorras:$"]},
            "you_save_value": {"accepted_content": ["US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^US\\$$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^US\\$$"]},
            "mobile_shipping_message": {"accepted_content": [".*envío.*", ".*gratis.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["US\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.com/en_US": {
        "navigation.mobile_components": {
            "header_root": "header",
            "logo": "#nav-logo",
            "hamburger": "header #nav-hamburger-menu",
            "dropdown_youraccount": ["header [href*='/gp/aw/ya']", "header [href*='/ap/signin']"],
            "search_box": ["header .nav-searchbar", "header .nav-input", "footer .nav-input"],
            "cart_button": "header [href*='/gp/aw/c/']",

            "footer_root": "footer",
            "back_to_top": "footer #nav-ftr-gototop",
            "more_on_amazon": "footer #nav-ftr-links",
            "legal": "footer #nav-ftr-copyright"
        }
    },

    "www.amazon.ca/en_CA": {
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^CDN\\$$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^CDN\\$$"]},
            "mobile_regular_price_value": {"accepted_content": ["^CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["CDN\\$\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.ca/fr_CA": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Passer la command"]},
            "place-order": {"labels": ["^Passez votre commande"]},
            "buy-now": {"labels": ["^Acheter maintenant$"]},
            "one-click": {"labels": ["^Acheter en 1-Click"]},
            "pre-order-one-click": {"labels": ["^Précommander avec 1-Click"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Prix\\ :$", "^Prix avec rabais\\ :$"]},
            "basic_price_value": {"accepted_content": ["^CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$", "^CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}\\ \\-\\ CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*livraison.*", ".*gratui.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Prix conseillé\\ :$", "^Prix\\ :$"]},
            "regular_price_value": {"accepted_content": ["^CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Économisez\\ :$"]},
            "you_save_value": {"accepted_content": ["CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^CDN\\$$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^CDN\\$$"]},
            "mobile_shipping_message": {"accepted_content": [".*livraison.*", ".*gratui.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["CDN\\$\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.com.mx/es_MX": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Proceder al pago"]},
            "place-order": {"labels": ["^Haga su pedido$"]},
            "buy-now": {"labels": ["^Comprar ahora$"]},
            "one-click": {"labels": ["^Comprar ya con 1-Clic\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Realiza una preventa con 1-Clic\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Precio:$"]},
            "basic_price_value": {"accepted_content": ["^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ \\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*envío.*", ".*gratis.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Precio recomendado:$", "^Precio:$"]},
            "regular_price_value": {"accepted_content": ["^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Ahorras:$"]},
            "you_save_value": {"accepted_content": ["\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^\\$$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^\\$$"]},
            "mobile_shipping_message": {"accepted_content": [".*envío.*", ".*gratis.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["\\$[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.com.br/pt_BR": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Continuar"]},
            "place-order": {"labels": ["^Colocar a sua encomenda$"]},
            "buy-now": {"labels": ["^Comprar agora$"]},
            "one-click": {"labels": ["^Compre agora com 1-Clique\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Comprar em pré-venda com 1-Clique\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Preço:$", "^Preço promocional:$"]},
            "basic_price_value": {"accepted_content": ["^R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*frete.*", ".*grátis.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Preço sugerido:$", "^Preço:$"]},
            "regular_price_value": {"accepted_content": ["^R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Você economiza:$"]},
            "you_save_value": {"accepted_content": ["R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^R\\$$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^R\\$$"]},
            "mobile_shipping_message": {"accepted_content": [".*frete.*", ".*grátis.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["R\\$\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.de/de_DE": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Zur Kasse"]},
            "place-order": {"labels": ["^Geben Sie Ihre Bestellung$"]},
            "buy-now": {"labels": ["^Jetzt kaufen$"]},
            "one-click": {"labels": ["^Jetzt mit 1-Click\\s*® kaufen$"]},
            "pre-order-one-click": {"labels": ["^Vorbestellen mit 1-Click\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "basic_price_label": {"accepted_content": ["^Preis:$", "^Angebotspreis:$"]},
            "shipping_message": {"accepted_content": [".*kostenlose.*", ".*lieferung.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Preis:$", "^Unverb. Preisempf.:$"]},
            "you_save_label": {"accepted_content": ["^Sie sparen:$"]},
            "mobile_shipping_message": {"accepted_content": [".*kostenlose.*", ".*lieferung.*", "^$"]}
        }
    },

    "www.amazon.de/en_GB": {
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "basic_price_label": {"accepted_content": ["^Price:$", "^Sale:$", "^Our Price:$"]},
            "shipping_message": {"accepted_content": [".*free.*", ".*delivery.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Price:$", "^Suggested price:$"]},
            "you_save_label": {"accepted_content": ["^You Save:$"]},
            "mobile_shipping_message": {"accepted_content": [".*free.*", ".*delivery.*", "^$"]}
        }
    },

    "www.amazon.de/nl_NL": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Kostenlos lesen"]},
            "place-order": {"labels": ["^Plaats uw bestelling$"]},
            "buy-now": {"labels": ["^Nu kopen$"]},
            "one-click": {"labels": ["^Vorbestellen mit 1-Click\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Voorbestellen met 1-Click\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "basic_price_label": {"accepted_content": ["^Onze prijs:$"]},
            "shipping_message": {"accepted_content": [".*gratis.*", ".*verzending.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Onze prijs:$", "^Prijs van deal:$"]},
            "you_save_label": {"accepted_content": ["^Je bespaart:$"]},
            "mobile_shipping_message": {"accepted_content": [".*gratis.*", ".*verzending.*", "^$"]}
        }
    },

    "www.amazon.de/pl_PL": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Przejdź do kasy"]},
            "place-order": {"labels": ["^Złóż zamówienie$"]},
            "buy-now": {"labels": ["^Kup teraz$"]},
            "one-click": {"labels": ["^Kup teraz (1-Click®)$"]},
            "pre-order-one-click": {"labels": ["^Zamów w przedsprzedaży za pomocą 1-Click\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "basic_price_label": {"accepted_content": ["^Nasza cena:$", "^Oferta dnia:$"]},
            "shipping_message": {"accepted_content": [".*DARMOWA.*", ".*dostawa.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Nasza cena:$", "^Sugerowana cena (DE):$"]},
            "you_save_label": {"accepted_content": ["^Oszczędność na pakiecie:$"]},
            "mobile_shipping_message": {"accepted_content": [".*DARMOWA.*", ".*dostawa.*", "^$"]}
        }
    },

    "www.amazon.de/tr_TR": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Alışverişi Tamamla"]},
            "place-order": {"labels": ["^Siparişinizi verin$"]},
            "buy-now": {"labels": ["^Şimdi satın alın$"]},
            "one-click": {"labels": ["^1-Click® ile şimdi al$"]},
            "pre-order-one-click": {"labels": ["^1-Click\\s*®\\s*ile ön sipariş$"]}
        },
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "basic_price_label": {"accepted_content": ["^Fiyat:$", "^Günün Fırsatı:$", "^Fiyatımız:$"]},
            "shipping_message": {"accepted_content": [".*BEDAVA.*", ".*Kargo.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Fiyat:$", "^Önerilen fiyat (DE):$"]},
            "you_save_label": {"accepted_content": ["^Paket Tasarrufları:$"]},
            "mobile_shipping_message": {"accepted_content": [".*BEDAVA.*", ".*Kargo.*", "^$"]}
        }
    },

    "www.amazon.de/cs_CZ": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Pokračujte k pokladně"]},
            "place-order": {"labels": ["^Vaše objednávky$"]},
            "buy-now": {"labels": ["^Koupit nyní$"]},
            "one-click": {"labels": ["^Koupit nyní pomocí 1-Click$"]},
            "pre-order-one-click": {"labels": ["^Předobjednat pomocí funkce 1-Click\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "basic_price_label": {"accepted_content": ["^Cena:$", "^Nejvýhodnější nákup dne:$", "^Naše cena:$"]},
            "shipping_message": {"accepted_content": [".*ZDARMA.*", ".*Doručení.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Cena:$", "^Doporuč. cena (v DE):$"]},
            "you_save_label": {"accepted_content": ["^Úspory za balíček:$"]},
            "mobile_shipping_message": {"accepted_content": [".*ZDARMA.*", ".*Doručení.*", "^$"]}
        }
    },

    "www.amazon.co.uk/en_GB": {
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Price:$", "^Deal Price:$"]},
            "basic_price_value": {"accepted_content": ["^£[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^£[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ £[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*Delivery.*", ".*FREE.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Price:$", "^RRP:$"]},
            "regular_price_value": {"accepted_content": ["^£[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^You Save:$"]},
            "you_save_value": {"accepted_content": ["£[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^£$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^£$"]},
            "mobile_shipping_message": {"accepted_content": [".*Delivery.*", ".*FREE.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^£[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["£[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.in/en_IN": {
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Price:$", "^Deal of the Day:$"]},
            "basic_price_value": {"accepted_content": ["^[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ [0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*Delivery.*", ".*FREE.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Price:$", "^M.R.P.:$"]},
            "regular_price_value": {"accepted_content": ["^[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^You Save:$"]},
            "you_save_value": {"accepted_content": ["[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^$"]},
            "mobile_shipping_message": {"accepted_content": [".*Delivery.*", ".*FREE.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.fr/fr_FR": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Passer la command"]},
            "place-order": {"labels": ["^Passez votre commande$"]},
            "buy-now": {"labels": ["^Acheter maintenant$"]},
            "one-click": {"labels": ["^Acheter en 1-Click\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Précommander avec 1-Click\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Prix :$", "^Prix de l'offre :$"]},
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*LIVRAISON.*", ".*GRATUITE.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Prix :$", "^Prix conseillé :$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Économisez :$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_shipping_message": {"accepted_content": [".*LIVRAISON.*", ".*GRATUITE.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\ [0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.es/es_ES": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Tramitar pedido"]},
            "place-order": {"labels": ["^Haga su pedido$"]},
            "buy-now": {"labels": ["^Comprar ya$"]},
            "one-click": {"labels": ["^Comprar ya en 1-Clic\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Reservar con 1-Clic\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Precio:$", "^Precio actual:$"]},
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*Envío.*", ".*GRATIS.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Precio:$", "^Precio recomendado:$"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Ahorras:$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_shipping_message": {"accepted_content": [".*Envío.*", ".*GRATIS.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.it/it_IT": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Procedi all'ordine"]},
            "place-order": {"labels": ["^Effettuare l'ordine$"]},
            "buy-now": {"labels": ["^Acquista ora$"]},
            "one-click": {"labels": ["^Compra ora con 1-Click\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Preordina con 1-Click\\s*®$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Prezzo:$", "^Offerta del giorno:$", "^Prezzo in offerta:$"]},
            "basic_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$", "^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\-\\ EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "shipping_message": {"accepted_content": [".*Spedizione.*", ".*GRATUITA.*", "^$"]},
            "regular_price_label": {"accepted_content": ["^Prezzo:$", "^Prezzo precedente:$", "^Prezzo consigliato:"]},
            "regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^Risparmi:$"]},
            "you_save_value": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^EUR$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^EUR$"]},
            "mobile_shipping_message": {"accepted_content": [".*Spedizione.*", ".*GRATUITA.*", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["EUR\\ [0-9]{1,3}(\\.[0-9]{3})*?\\,[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.nl/nl_NL": {
        "transaction_buttons_override": {
            "checkout": {"labels": ["^Kostenlos lesen"]},
            "place-order": {"labels": ["^Plaats uw bestelling$"]},
            "buy-now": {"labels": ["^Nu kopen$"]},
            "one-click": {"labels": ["^Vorbestellen mit 1-Click\\s*®$"]},
            "pre-order-one-click": {"labels": ["^Voorbestellen met 1-Click\\s*®$"]}
        }
    },

    "www.amazon.cn/zh_CN": {
        "font.accepted_fonts": ["'Hiragino Sans GB'"],
        "transaction_buttons_override": {
            "checkout": {"labels": ["^进入结算中心"]},
            "place-order": {"labels": ["^将您的订单$"]},
            "buy-now": {"labels": ["^立即购买$"]},
            "one-click": {"labels": ["^一键下单\\s*®$"]},
            "pre-order-one-click": {"labels": ["^预售：加入购物车$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^价格:$", "^优惠价:$"]},
            "basic_price_value": {"accepted_content": ["^¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$", "^¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\-\\ ¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "shipping_message": {"accepted_content": ["^something$", "^$"]},
            "regular_price_label": {"accepted_content": ["^镇店之宝价:$", "^售价$"]},
            "regular_price_value": {"accepted_content": ["^¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "you_save_label": {"accepted_content": ["^something$"]},
            "you_save_value": {"accepted_content": ["¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^¥$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^¥$"]},
            "mobile_shipping_message": {"accepted_content": ["^something$"]},
            "mobile_regular_price_value": {"accepted_content": ["^¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}$"]},
            "mobile_you_save": {"accepted_content": ["¥[0-9]{1,3}(\\,[0-9]{3})*?\\.[0-9]{2}\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.co.jp/ja_JP": {
        "font.accepted_fonts": ["'Hiragino Kaku Gothic Pro W3'", '"Hiragino Kaku Gothic Pro W3"'],
        "transaction_buttons_override": {
            "checkout": {"labels": ["^レジに進む"]},
            "place-order": {"labels": ["^ご注文します。$"]},
            "buy-now": {"labels": ["^今すぐ購入$"]},
            "one-click": {"labels": ["^1-Click®で今すぐ買う$"]},
            "pre-order-one-click": {"labels": ["^1-Click\\s*®\\s*で予約注文®$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^価格:$", "^特選タイムセール:$"]},
            "basic_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$", "^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\-\\ ￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "shipping_message": {"accepted_content": ["^.*配送.*$", "^.*無料.*$", "^$"]},
            "regular_price_label": {"accepted_content": ["^参考価格:$"]},
            "regular_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "you_save_label": {"accepted_content": ["^OFF:$"]},
            "you_save_value": {"accepted_content": ["￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^￥$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^￥$"]},
            "mobile_shipping_message": {"accepted_content": ["^.*配送.*$", "^.*無料.*$", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "mobile_you_save": {"accepted_content": ["￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.co.jp/zh_CN": {
        "font.accepted_fonts": ["'Hiragino Kaku Gothic Pro W3'", '"Hiragino Kaku Gothic Pro W3"'],
        "transaction_buttons_override": {
            "checkout": {"labels": ["^进入结算中心"]},
            "place-order": {"labels": ["^将您的订单$"]},
            "buy-now": {"labels": ["^立即购买$"]},
            "one-click": {"labels": ["^一键下单\\s*®$"]},
            "pre-order-one-click": {"labels": ["^通过一键下单\\s*®\\s*方式预购$"]}
        },
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^价格:$", "^优惠价:$"]},
            "basic_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$", "^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\-\\ ￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "shipping_message": {"accepted_content": ["^something$", "^$"]},
            "regular_price_label": {"accepted_content": ["^镇店之宝价:$", "^售价$"]},
            "regular_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "you_save_label": {"accepted_content": ["^OFF:$"]},
            "you_save_value": {"accepted_content": ["￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^￥$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^￥$"]},
            "mobile_shipping_message": {"accepted_content": ["^something$"]},
            "mobile_regular_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "mobile_you_save": {"accepted_content": ["￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\(\\d+\\%\\)"]}
        }
    },

    "www.amazon.co.jp/en_US": {
        "font.accepted_fonts": ["'Hiragino Kaku Gothic Pro W3'", '"Hiragino Kaku Gothic Pro W3"'],
        "price_block_override": {
            "basic_price_label": {"accepted_content": ["^Price:", "^Deal of the Day:", "^With Deal:$"]},
            "basic_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$", "^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\-\\ ￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "shipping_message": {"accepted_content": ["^.*Free.*$", "^.*Shipping.*$", "^$"]},
            "regular_price_label": {"accepted_content": ["^List Price:$"]},
            "regular_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "you_save_label": {"accepted_content": ["^You Save:$"]},
            "you_save_value": {"accepted_content": ["￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\(\\d+\\%\\)"]},
            "mobile_basic_price_currency": {"accepted_content": ["^￥$"]},
            "mobile_basic_price_up_to_currency": {"accepted_content": ["^￥$"]},
            "mobile_shipping_message": {"accepted_content": ["^.*Free.*$", "^.*Shipping.*$", "^$"]},
            "mobile_regular_price_value": {"accepted_content": ["^￥\\ [0-9]{1,3}(\\,[0-9]{3})*?$"]},
            "mobile_you_save": {"accepted_content": ["￥\\ [0-9]{1,3}(\\,[0-9]{3})*?\\ \\(\\d+\\%\\)"]}
        }
    }

};

if (window.cxguardrails_config) {
    window.cxguardrails_config.update(cxguardrailsConfig);
}
