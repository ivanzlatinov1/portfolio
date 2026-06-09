import { useEffect, useState } from 'react'

const useLayout = () => {
    const [circleSize, setCircleSize] = useState(288)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w < 768) {
                setCircleSize(210)
                setIsMobile(true)
            } else if (w < 1024) {
                setCircleSize(235)
                setIsMobile(false)
            } else {
                setCircleSize(288)
                setIsMobile(false)
            }
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return { circleSize, isMobile }
}

export default useLayout
