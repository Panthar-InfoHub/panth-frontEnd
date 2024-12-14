import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const UbuntuFont = Lexend({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["200", "300", '400', "500", "600", "700"],
     main
});

export const metadata = {
    title: "Panthar InfoHub - Your Partner in Innovative Tech Solutions and Consultancy",
    description: "Panthar InfoHub is a leading technology consultancy and product development company based in Jhansi, India. We specialize in mobile and web app development, AI and machine learning solutions, cloud computing, safety technology, and IT services tailored to meet the unique needs of businesses and individuals. Delivering quality solutions that drive innovation and growth.",
    keywords: [
        "Panthar InfoHub",
        "Panthar Infohub Pvt. Ltd.",
        "panthar infohub",
        "panthar",
        "tech consultancy",
        "mobile app development in Jhansi",
        "web app development company",
        "AI integration services",
        "AI solutions company",
        "cloud computing services",
        "cloud computing consultancy",
        "software development company Jhansi",
        "software solutions Uttar Pradesh",
        "IoT solutions",
        "custom software development",
        "product-based company",
        "mobile app company in India",
        "tech innovation company",
        "website design in Jhansi",
        "website development company Uttar Pradesh",
        "IT services Jhansi",
        "IT consultancy India",
        "digital transformation solutions",
        "AI-powered apps",
        "safety apps for emergencies",
        "innovative technology Jhansi",
        "tech services India",
        "full-stack development company"
    ].join(", "),
    author: "Panthar InfoHub Pvt. Ltd.",
    company: "Panthar InfoHub",
    region: "Jhansi, Uttar Pradesh, India",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    charset: "UTF-8",
    ogTitle: "Panthar InfoHub - Revolutionizing Tech Services and Solutions",
    ogDescription: "Discover innovative technology solutions with Panthar InfoHub, your trusted partner in mobile apps, AI, cloud computing, and custom software development.",
    ogUrl: "https://pantharinfohub.com",
    ogImage: "https://pantharinfohub.com/assets/logo.png",
    twitterCard: "summary_large_image",
    twitterTitle: "Panthar InfoHub - Leading Tech Consultancy in India",
    twitterDescription: "Innovative mobile app development, AI solutions, and IT consultancy services by Panthar InfoHub.",
    twitterImage: "https://pantharinfohub.com/assets/logo.png",
    linkedinTitle: "Panthar InfoHub - Innovating Tech for the Future",
    linkedinDescription: "Explore Panthar InfoHub's innovative solutions in AI, cloud computing, and mobile app development. Your trusted partner for technology advancements.",
    linkedinImage: "https://pantharinfohub.com/assets/logo.png",
    instagramCard: "photo",
    instagramTitle: "Panthar InfoHub - Innovative Tech Solutions",
    instagramDescription: "Follow Panthar InfoHub for updates on tech consultancy, innovative apps, and AI solutions. Your go-to tech company in India.",
    instagramImage: "https://pantharinfohub.com/assets/logo.png",
    socials: {
        website: "https://pantharinfohub.com",
        linkedin: "https://www.linkedin.com/company/panthar-infohub",
        instagram: "https://www.instagram.com/panthar.infohub",
        twitter: "https://twitter.com/pantharinfohub",
        facebook: "https://www.facebook.com/profile.php?id=61564989943162",
        youtube: "https://youtube.com/@pantharinfohub",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        main
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="viewport" content={metadata.viewport} />
            <meta name="robots" content={metadata.robots} />
            <meta charSet={metadata.charset} />
            <title>{metadata.title}</title>
        </head>
      <body className={`${UbuntuFont.variable} antialiased`} >
       
        main
        {children}
        </body>
        </html>
    );
}