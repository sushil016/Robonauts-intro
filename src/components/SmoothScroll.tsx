import App from "../App"
import Lenis from "@studio-freight/lenis"
import { Lenis as ReactLenis } from "@studio-freight/react-lenis"
import { useEffect } from "react"

const Main = () => {
    useEffect(() => {
      const lenis = new Lenis({
        // Add any configuration options here
      })
  
      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
    }, [])
  
    return (
      <ReactLenis root>
        <App />
      </ReactLenis>
    )
  }

  export default Main