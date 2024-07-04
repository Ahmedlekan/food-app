import { icons, images } from "./";

const myProfile = {
    name: "ByProgrammers",
    profile_image: images.profile,
    address: "No. 88, Jln Padungan, Kuching"
}

const foodItems = [
    {
        id: 1,
        name: "Hamburger",
        description: "Chicken patty hamburger",
        category: ['Fast Food'],
        isFavourite: true,
        image: require("../assets/dummyData/hamburger.png"),
        prices: [
            {size: 'S', price: '15.99', currency: '$'},
            {size: 'M', price: '18.99', currency: '$'},
            {size: 'L', price: '21.99', currency: '$'},
        ],
        average_rating: 4.6,
        ratings_count: '6,879',
    },
    
    {
        id: 2,
        name: "Cheese Burger",
        description: "Chicken patty hamburger",
        category: ['Fast Food'],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/hamburger.png"),
        prices: [
            {size: 'S', price: '14.99', currency: '$'},
            {size: 'M', price: '17.99', currency: '$'},
            {size: 'L', price: '19.99', currency: '$'},
        ],
        average_rating: 4.6,
        ratings_count: '6,879',
    },
    {
        id: 3,
        name: "Hot Tacos",
        description: "Mexican tortilla & tacos",
        category: ['Fast Food'],
        calories: 78,
        isFavourite: false,
        image: require("../assets/dummyData/hot_tacos.png"),
        prices: [
            {size: 'S', price: '13.99', currency: '$'},
            {size: 'M', price: '15.99', currency: '$'},
            {size: 'L', price: '18.99', currency: '$'},
        ],
        average_rating: 4.5,
        ratings_count: '6,879',
    },
    {
        id: 4,
        name: "Wrap Sandwich",
        description: "Grilled vegetables sandwich",
        category: ['Fast Food'],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '10.99', currency: '$'},
            {size: 'M', price: '14.99', currency: '$'},
            {size: 'L', price: '19.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },

    {
        id: 5,
        name: "Chocolate Cake",
        description: "Grilled vegetables sandwich",
        category: ['Cake'],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '17.99', currency: '$'},
            {size: 'M', price: '21.99', currency: '$'},
            {size: 'L', price: '25.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },
    {
        id: 6,
        name: "Vanilla Cake",
        description: "Grilled vegetables sandwich",
        category: ['Cake'],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '18.99', currency: '$'},
            {size: 'M', price: '20.99', currency: '$'},
            {size: 'L', price: '24.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },
    {
        id: 7,
        name: "Coconut Cake",
        description: "Grilled vegetables sandwich",
        category: ['Cake'],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '20.99', currency: '$'},
            {size: 'M', price: '25.99', currency: '$'},
            {size: 'L', price: '30.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },
    
    {
        id: 8,
        name: "Strawberry Cake",
        description: "Grilled vegetables sandwich",
        category: ['Cake'],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '19.99', currency: '$'},
            {size: 'M', price: '23.99', currency: '$'},
            {size: 'L', price: '28.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },

    {
        id: 9,
        name: "Spanish Rice",
        description: "Grilled vegetables sandwich",
        category: ["Rice Item"],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '16.99', currency: '$'},
            {size: 'M', price: '19.99', currency: '$'},
            {size: 'L', price: '23.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },
    {
        id: 10,
        name: "Fried Rice",
        description: "Grilled vegetables sandwich",
        category:  ["Rice Item"],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '16.99', currency: '$'},
            {size: 'M', price: '19.99', currency: '$'},
            {size: 'L', price: '23.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },
    {
        id: 11,
        name: "Mexican Rice",
        description: "Grilled vegetables sandwich",
        category:  ["Rice Item"],
        calories: 78,
        isFavourite: true,
        image: require("../assets/dummyData/wrap_sandwich.png"),
        prices: [
            {size: 'S', price: '19.99', currency: '$'},
            {size: 'M', price: '22.99', currency: '$'},
            {size: 'L', price: '28.99', currency: '$'},
        ],
        average_rating: 5,
        ratings_count: '6,879',
    },

    {
        id: 12,
        name: "Veg Biryani",
        description: "Veg Biryani is a flavourful rice dish made with basmati rice, mixed vegetables, whole spices, freshly ginger, garlic, coriander and mint leaves. In this blog post I have shared vegetable biryani",
        category:  ["Rice Item"],
        isFavourite: true,
        image: require("../assets/dummyData/veg_biryani.png"),
        prices: [
            {size: 'S', price: '17.99', currency: '$'},
            {size: 'M', price: '19.99', currency: '$'},
            {size: 'L', price: '24.99', currency: '$'},
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        
    }
] 


const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: icons.burger,
        foodList: foodItems.filter(item => item.category.includes("Fast Food")),
    },


    {
        id: 2,
        name: "Cake",
        icon: icons.cherry,
        foodList: foodItems.filter(item => item.category.includes("Cake")),
    },


    {
        id: 3,
        name: "Rice Item",
        icon: icons.rice,
        foodList: foodItems.filter(item => item.category.includes("Rice Item")),
    }
]

const menu = [
    {
        id: 1,
        name: "Featured",
        list: foodItems.filter(item => [1, 3, 7, 8, 9, 11,].includes(item.id)),
    },
    {
        id: 2,
        name: "Nearby you",
        list: foodItems.filter(item => [2, 4, 5, 7, 9, 12].includes(item.id)),
    },
    {
        id: 3,
        name: "Popular",
        list: foodItems.filter(item => [1, 3, 7, 5, 9, 11].includes(item.id)),
    },
    {
        id: 4,
        name: "Newest",
        list: foodItems.filter(item => [2, 4, 6, 7, 8, 10,].includes(item.id)),
    },
    {
        id: 5,
        name: "Trending",
        list: foodItems.filter(item => [1, 3, 5, 8, 9, 11,].includes(item.id)),
    },
    {
        id: 6,
        name: "Recommended",
        list: foodItems.filter(item => [2, 4, 6, 7, 9, 12].includes(item.id)),
    },

]


const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]


export default {
    myProfile,
    fromLocs,
    categories,
    menu,
    myCards,
    allCards
}