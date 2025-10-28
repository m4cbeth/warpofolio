"use client"

import { AnimatePresence, m, usePresenceData, wrap } from "motion/react"
import { forwardRef, useState } from "react"

type SlideData = {
    number: number
    bgColorClass: string
    buttonColorClass: string
    borderColorClass: string
    textColorClass: string
    motionColor: string
    title: string
    description: string
}

const slides: SlideData[] = [
    {
        number: 1,
        bgColorClass: "bg-violet-500",
        buttonColorClass: "bg-violet-600",
        borderColorClass: "border-violet-500",
        textColorClass: "text-violet-500",
        motionColor: "#8b5cf6", // violet-500
        title: "Start Slow",
        description: "We focus on one tool per quarter, and build it out to a full-featured tool, documenting the process on social media.",
    },
    {
        number: 2,
        bgColorClass: "bg-fuchsia-500",
        buttonColorClass: "bg-fuchsia-600",
        borderColorClass: "border-fuchsia-500",
        textColorClass: "text-fuchsia-500",
        motionColor: "#d946ef", // fuchsia-500
        title: "Build Momentum",
        description: "Build momentum and grow your practice.",
    },
    {
        number: 3,
        bgColorClass: "bg-blue-500",
        buttonColorClass: "bg-blue-600",
        borderColorClass: "border-blue-500",
        textColorClass: "text-blue-500",
        motionColor: "#3b82f6", // blue-500
        title: "Scale",
        description: "Scale your practice and grow your business.",
    },
]

export default function TierProcessSlides() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)

    function setSlide(newDirection: 1 | -1) {
        const nextIndex = wrap(0, slides.length, selectedIndex + newDirection)
        setSelectedIndex(nextIndex)
        setDirection(newDirection)
    }

    const currentSlide = slides[selectedIndex]

    return (
        <div className="flex items-center justify-center gap-4 relative py-16">
            <m.button
                initial={false}
                aria-label="Previous"
                className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 outline-offset-2 ${currentSlide.buttonColorClass}`}
                onClick={() => setSlide(-1)}
                whileFocus={{ outline: `2px solid ${currentSlide.motionColor}` }}
                whileTap={{ scale: 0.9 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
            </m.button>

            <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
            >
                <Slide
                    key={selectedIndex}
                    slide={currentSlide}
                />
            </AnimatePresence>

            <m.button
                initial={false}
                aria-label="Next"
                className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 outline-offset-2 ${currentSlide.buttonColorClass}`}
                onClick={() => setSlide(1)}
                whileFocus={{ outline: `2px solid ${currentSlide.motionColor}` }}
                whileTap={{ scale: 0.9 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </m.button>
        </div>
    )
}

const Slide = forwardRef(function Slide(
    { slide }: { slide: SlideData },
    ref: React.Ref<HTMLDivElement>
) {
    const direction = usePresenceData()
    return (
        <m.div
            ref={ref}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.2,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4,
                },
            }}
            exit={{ opacity: 0, x: direction * -100 }}
            className={`w-100 h-60 ${slide.bgColorClass} rounded-2xl flex items-center justify-center border-4 ${slide.borderColorClass}`}
        >   <div className="flex">
                <div className="flex-shrink-0">
                    <span className="text-9xl font-black text-white drop-shadow-lg">
                        {slide.number}
                    </span>
                </div>
                <div className="flex-grow">
                    <p className="text-2xl font-bold text-white">
                        {slide.title}
                    </p>
                    <p className="text-sm text-white">
                        {slide.description}
                    </p>
                </div>
            </div>
        </m.div>
    )
})
