// import Image from "next/image"

// export const GoldSocial = () => {
//     const socialDetails = [
//         {
//             image: '/icons/black/Facebook.svg',
//             text: 'Facebook'
//         },
//         {
//             image: '/icons/black/Instagram.svg',
//             text: 'Instagram'
//         },
//         {
//             image: '/icons/black/YouTube.svg',
//             text: 'YouTube'
//         },
//         {
//             image: '/icons/black/Twitter.svg',
//             text: 'Twitter'
//         },
//         {
//             image: '/icons/black/LinkedIn.svg',
//             text: 'LinkedIn'
//         }
//     ]

//     return (<div className="px-4 pb-8 flex gap-4 justify-between flex-wrap">
//         {socialDetails?.map((details, i) => (
//             <SocialCard key={i} image={details.image} text={details.text} />
//         ))}
//     </div>)
// }

// const SocialCard = ({ image, text }: { image: string, text: string }) => {
//     return (
//         <div className="relative  w-[70px] h-[80px] duration-300 border-[1px] border-gray-50 shadow-lg rounded-lg cursor-pointer">
//             <div className="absolute z-50 shadow-md flex justify-center items-center rounded-lg  w-full h-[55px] bg-white">
//                 <Image src={image} width={26} height={26} alt="icon" />
//             </div>
//             <span className="   absolute bottom-0 text-[12px] text-center  justify-center font-secondary w-full capitalize"> {text}</span>
//         </div>
//     )
// }




"use client"
import Image from "next/image"
import { useRef,  useEffect } from "react"

export const GoldSocial = () => {
  const socialDetails = [
    { image: "/icons/black/Facebook.svg", text: "Facebook" },
    { image: "/icons/black/Instagram.svg", text: "Instagram" },
    { image: "/icons/black/YouTube.svg", text: "YouTube" },
    { image: "/icons/black/Twitter.svg", text: "Twitter" },
    { image: "/icons/black/LinkedIn.svg", text: "LinkedIn" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Mouse + Touch swipe support
  useEffect(() => {
    const slider = containerRef.current
    if (!slider) return

    const handleMouseDown = (e: MouseEvent) => {
      isDown.current = true
      slider.classList.add("cursor-grabbing")
      startX.current = e.pageX - slider.offsetLeft
      scrollLeft.current = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown.current = false
      slider.classList.remove("cursor-grabbing")
    }

    const handleMouseUp = () => {
      isDown.current = false
      slider.classList.remove("cursor-grabbing")
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX.current) * 1.5
      slider.scrollLeft = scrollLeft.current - walk
    }

    slider.addEventListener("mousedown", handleMouseDown)
    slider.addEventListener("mouseleave", handleMouseLeave)
    slider.addEventListener("mouseup", handleMouseUp)
    slider.addEventListener("mousemove", handleMouseMove)

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown)
      slider.removeEventListener("mouseleave", handleMouseLeave)
      slider.removeEventListener("mouseup", handleMouseUp)
      slider.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="px-4 pb-8 overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar cursor-grab"
      >
        {socialDetails.map((details, i) => (
          <SocialCard key={i} image={details.image} text={details.text} />
        ))}
      </div>
    </div>
  )
}

const SocialCard = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="relative w-[70px] h-[80px] shrink-0 duration-300 border-[1px] border-gray-50 shadow-lg rounded-lg cursor-pointer  mb-5">
      <div className="absolute z-50 shadow-md flex justify-center items-center rounded-lg w-full h-[55px] bg-white">
        <Image src={image} width={26} height={26} alt="icon" />
      </div>
      <span className="absolute bottom-0 text-[12px] text-center justify-center font-secondary w-full capitalize">
        {text}
      </span>
    </div>
  )
}
