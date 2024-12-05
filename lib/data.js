import user1 from "../public/user/abhay.jpg";
import user2 from "../public/user/abhi.jpg";
import raunak from "../public/user/user-2.jpg";
import sidhant from "../public/user/user-1.jpeg";
import gee from "../public/user/user-3.jpeg";

export const navItem = [
    {
        name: "services",
    },
    {
        name: "projects",
    },
    {
        name: "our process",
    },
    {
        name: "our blog",
    },
]

export const users = [
    {
        icon: user1
    },
    {
        icon: user2
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
            image: gee,
            name: "Geetansh Diwedi",
        },
    },

]