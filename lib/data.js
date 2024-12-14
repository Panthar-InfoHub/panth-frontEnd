import user1 from "../public/user/abhay.jpg";
import user2 from "../public/user/abhi.jpg";
import raunak from "../public/user/raunak.jpg";
import sidhant from "../public/user/sidhant.jpg";
import ankush from "../public/user/ankush.jpg";
import gagan from "../public/user/gagan.png";
import arqam from "../public/user/arqam.jpg";
import raj from "../public/user/raj.jpg";
import ankit from "../public/user/ankit.jpg";

export const navItem = [

    {
        name: "Services",
        link: "#servicesSection"
    },
    {
        name: "projects",
        link: ""
    },
    {
        name: "About Us",
        link: "/about"
    },
    {
        name: "our process",
        link: "/process"
    },
]

export const users = [
    {
        icon: user1,
        name: "Abhay Namdev",
        role: "Founder & Chief Executive Officer (CEO)",
        description: "Abhay Namdev, Founder and CEO of Panthar Infohub Pvt. Ltd., is recognized as the World's Youngest CEO by the International Book of Records. A B.Tech student at AKTU, Lucknow, he combines technical expertise with entrepreneurial drive to lead innovation and empower businesses, inspiring future innovators."
    },
    {
        icon: user2,
        name: "Abhishekh Pal",
        role: "Co-founder & Chief Marketing Officer (CMO)",
        description: "Abhishek Pal, Co-founder and CMO of Panthar Infohub Pvt. Ltd., combines technical expertise with innovative marketing. A B.Tech student at AKTU, Lucknow, he drives data-driven strategies to empower businesses and shape a smarter, safer future."
    },
]

export const services = [
    {
        title: "Discovery",
        descriptiom: "We conduct thorough research and analysis to understand your needs, issues, and goals. This step guarantees that we create a solid basis for generating effective and specialized solutions.",
    },
    {
        title: "Design",
        descriptiom: "Our design team creates visually appealing and user-friendly experiences. From UI/UX to branding, we are dedicated to creating designs that attract and connect with your target audience.",
    },
    {
        title: "Development",
        descriptiom: "We use cutting-edge technologies to create scalable, secure, and high-performing applications. Our development methodology offers seamless functionality and adaptation to your business requirements.",
    },
    {
        title: "Marketing",
        descriptiom: "To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.",
    },
]

export const reviews = [
    {
        rating: 4,
        text: "Panthar Infohub Pvt. Ltd. has impressed me with its dedication to enhancing public safety through innovative technology. The company shows remarkable vision under its young leadership and is making noticeable progress. There’s still a bit of room for refinement, but they’re definitely paving the way for a safer and smarter future!",
        author: {
            image: sidhant,
            name: "Sidhant Kumar",
        },
    },
    {
        rating: 4,
        text: "Panthar Infohub Pvt. Ltd. does a great job with its focus on innovation and public safety. Their use of advanced technology really stands out, and it's inspiring to see such a young leadership team making a global impact",
        author: {
            image: raunak,
            name: "Raunak Kushwaha",
        },
    },
    {
        rating: 3.5,
        text: "The services provided by Panthar Infohub Pvt. Ltd. are reliable and reflect their effort to bring innovation into public safety. However, there’s noticeable potential for improvement in certain areas. With a bit more refinement and focus, they could truly stand out and deliver an even greater impact",
        author: {
            image: ankush,
            name: "Ankush Sahu",
        },
    },

]

export const Teams = [
    {
        role: "Founders",
        users: [
            {
                icon: user1,
                name: "Abhay Namdev",
                role: "Founder & CEO",
            },
            {
                icon: user2,
                name: "Abhishekh Pal",
                role: "Co-Founder & CMO",
            },
        ]

    },
    {
        role: "UI",
        users: [
            {
                icon: ankit,
                name: "Ankit Bose",
                role: "UX/UI Designer",
            },
        ]

    },
    {
        role: "Developers",
        users: [
            {
                icon: arqam,
                name: "Arqam Ahmad Siddiqui",
                role: "Android Developer",
            },
            {
                icon: raj,
                name: "Raj Diwedi",
                role: "Full Stack Developer",
            },
            {
                icon: gagan,
                name: "Gagan",
                role: "Full Stack Developer",
            },
        ]

    },

]