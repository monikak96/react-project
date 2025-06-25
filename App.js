import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Header
 *  - logo
 *  - list
 * Body
 *  - search
 *  - restuarant container
 *      - res card
 *          - image
 *          - res name
 *          - cuisine
 *          - rating
 * Footer
 *  - address
 *  - phonenumber
 *  - 
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
                  {
                    "info": {
                      "id": "10892",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/delicious-mushroom-soup-with-fresh-herbs.png",
                      "locality": "Vani Vilas Road",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-vani-vilas-road-basavanagudi-rest10892",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "77949",
                      "name": "Burger King",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/04/hearty-breakfast-plate-with-eggs-sausages-and-beans.png",
                      "locality": "Hebbal",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "33K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹139"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "376"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-hebbal-basavanagudi-rest77949",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "396741",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/vibrant-vegetable-rice-stir-fry-delight.webp",
                      "locality": "Residency Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "21809",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Rolls.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-residency-road-central-bangalore-rest396741",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "396748",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/06/colorful-sushi-roll-held-with-chopsticks.webp",
                      "locality": "Residency Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "7918",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "961",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-residency-road-central-bangalore-rest396748",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "457522",
                      "name": "McDonald's",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/06/crispy-fried-chicken-drumstick-in-hot-oil.webp",
                      "locality": "Basavanagudi",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "630",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "6.5K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 00:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹80 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "9.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-basavanagudi-rest457522",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "393107",
                      "name": "EatFit",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/07/butter-chicken-in-a-pan.jpg",
                      "locality": "VASANTHA NAGAR",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹270 for two",
                      "cuisines": [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "North Indian",
                        "Thalis",
                        "Biryani"
                      ],
                      "avgRating": 4.6,
                      "parentId": "76139",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 54,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹599",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/eatfit-vasantha-nagar-central-bangalore-rest393107",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "396746",
                      "name": "Sweet Truth - Cake and Desserts",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/08/grilled-crispy-pork-with-rice.jpg",
                      "locality": "Residency Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "4444",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "334",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-residency-road-central-bangalore-rest396746",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "48233",
                      "name": "Kanti Sweets",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg",
                      "locality": "K.G. Road",
                      "areaName": "K.G.Circle",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Sweets"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "4700",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mithai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-k-g-road-k-g-circle-rest48233",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "693887",
                      "name": "Kwality Walls Ice Cream and More",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/06/grilled-salmon-bowl-with-quinoa-and-colorful-veggies.webp",
                      "locality": "KP agrahara magadi road",
                      "areaName": "Vijayanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "198",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-kp-agrahara-magadi-road-vijayanagar-rest693887",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "503003",
                      "name": "ZAZA Mughal Biryani",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/10/hot-chocolate.jpg",
                      "locality": "Lakshmi Nagar Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Awadhi"
                      ],
                      "avgRating": 4.4,
                      "parentId": "22473",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "655",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-lakshmi-nagar-road-central-bangalore-rest503003",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "1468",
                      "name": "A2B - Adyar Ananda Bhavan",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
                      "locality": "Basavanagudi",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "22",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "17K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "3.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-basavanagudi-rest1468",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "17301",
                      "name": "KFC",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/fresh-salmon-salad-with-herbs-and-citrus.png",
                      "locality": "Basavanagudi",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹125",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "6.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-basavanagudi-rest17301",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "426730",
                      "name": "Theobroma",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/04/golden-croissants-on-baking-paper.png",
                      "locality": "Lavelle Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "parentId": "1040",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "434"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "643832",
                      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-salami.jpg",
                      "locality": "Langford Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Keto",
                        "Snacks"
                      ],
                      "avgRating": 4.8,
                      "parentId": "355285",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "729",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹145"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-central-bangalore-rest643832",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "750396",
                      "name": "Daily Kitchen - Everyday Homely Meals",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/05/freshly-prepared-beef-steak-with-vegetables.jpg",
                      "locality": "Lakshmi Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Thalis"
                      ],
                      "avgRating": 4.4,
                      "parentId": "444382",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "684",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-everyday-homely-meals-lakshmi-road-central-bangalore-rest750396",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "503002",
                      "name": "NH1 Bowls - Highway To North",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/colorful-breakfast-bowl-with-eggs-and-vegetables.webp",
                      "locality": "Lakshmi Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Home Food"
                      ],
                      "avgRating": 4.6,
                      "parentId": "22452",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "845",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-central-bangalore-rest503002",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "822315",
                      "name": "Subway",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg",
                      "locality": "Langford Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/subway-langford-road-central-bangalore-rest822315",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "570511",
                      "name": "Bakingo",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/colorful-bowl-of-deliciousness-with-fried-egg.png",
                      "locality": "Puhlong X-road",
                      "areaName": "Vasanth Nagar",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3818",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "4.6K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 5.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹899",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53608",
                      "name": "Sweet Chariot",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
                      "locality": "Residency Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "912",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "3.6K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 22:15:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/sweet-chariot-residency-road-ashok-nagar-rest53608",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "41105",
                      "name": "Nandhini Deluxe",
                      "cloudinaryImageId": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/06/tender-grilled-ribs-with-rice-and-black-beans.webp",
                      "locality": "Kadubisanahalli",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹550 for two",
                      "cuisines": [
                        "Andhra",
                        "Chinese"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2451",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-25 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "2.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6008ba7e-4347-4338-b6fe-818545c6d71f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/nandhini-deluxe-kadubisanahalli-basavanagudi-rest41105",
                      "type": "WEBLINK"
                    }
                  }
                ]
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search bar</div>
            <div className="res-container">
                {resList.map(restaurant=><RestaurantCard key={restaurant.info.id}resData={restaurant}/>)}
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    let {resData} = props
    let {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" src={cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            <h6>{sla.deliveryTime} minutes</h6>
            
        </div>
    )
}

const AppComponent = () => (
    (
        <div className="main">
        <Header/>
        <Body/>
        </div>
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(< AppComponent/>)