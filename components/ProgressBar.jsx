import { useEffect, useState } from 'react'

const ProgressBar = ({ swiper }) => {

        console.log(swiper)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!swiper) return;

        const updateProgress = () => {
            const totalSlides = swiper.slides.length;
            const currentSlide = swiper.activeIndex;
            const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
            setProgress(progressPercentage);
        };

        swiper.on("slideChange", updateProgress);

        // Cleanup
        return () => {
            swiper.off("slideChange", updateProgress);
        };
    }, [swiper]);

    return (
        <div className="w-full h-2 bg-grey-1 rounded-full overflow-hidden">
            <div
                className="h-full bg-black-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}

export default ProgressBar
