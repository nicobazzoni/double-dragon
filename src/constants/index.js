import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '200+', label: 'Students' },
    { value: '20+', label: 'years' },
  
];

export const products = [
    {
        imgURL: shoe4,
        name: "Mental Toughness",
        price: "",
    },
    {
        imgURL: shoe5,
        name: "Discipline and Dedication ",
        price: "",
    },
    {
        imgURL: shoe6,
        name: "Training and Conditioning",
        price: "",
    },
    {
        imgURL: shoe7,
        name: "Movement and Balance",
        price: "",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Lessons",
        subtext: "Where Students Come First At the heart of everything that we do is our passion for education and our commitment to our students."} ,

    {
        imgURL: shieldTick,
        label: "Quality Education",
        subtext: " Thanks to our varied course selection and unique teaching techniques you will soon be on the way to learning martial arts"
    },
    {
        imgURL: support,
        label: "Purposeful Learning",
        subtext: "The skilled team members at are here to help students achieve their goals. Are you ready to reach your potential? Call us today to learn more about Double Dragon Martial Arts Academy.  Please come in and visit during our schools hours."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "doubledragonnyc@gmail.com", link: "mailto:doubledragonnyc@gmail.com" },
      
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
