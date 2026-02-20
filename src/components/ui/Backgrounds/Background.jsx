import { useEffect, useRef } from 'react'
import './Background.css'

const Background = ({ children }) => {
    const bgRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return
            const scrollY = window.scrollY
            bgRef.current.style.transform = `
        translateY(${scrollY * 0.15}px)
        rotate(${scrollY * 0.01}deg)
      `
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="background-root">
            {/* Glow Figures */}
            {<div className="glow-figure figure-1" />}
            <div className="glow-figure figure-2" />
            <div className="glow-figure figure-3" />
            <div className="background-content">
                {children}
            </div>
        </div>
    )
}

export default Background
