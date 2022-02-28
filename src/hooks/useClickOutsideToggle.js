import { useEffect, useRef, useState } from 'react'

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null)
    const refw = useRef(null)
    const refw1 = useRef(null)
    const refw2 = useRef(null)
    const refw3 = useRef(null)
    const reff = useRef(null)
    const reff1 = useRef(null)
    const reff2 = useRef(null)
    const reff3 = useRef(null)
    const reff4 = useRef(null)
    const reff5 = useRef(null)
    const reff6 = useRef(null)
    const refm = useRef(null)
    const refm1 = useRef(null)
    const refm2 = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // workspace dropdown
            if ( refw1.current && refw1.current.contains(event.target)) {
                setExpanded(false);
                console.log("refw1");
            }
            if ( refw2.current && refw2.current.contains(event.target)) {
                setExpanded(false);
                console.log("refw2");
            }
            if ( refw3.current && refw3.current.contains(event.target)) {
                setExpanded(false);
                console.log("refw3");
            }
            if (refw.current && refw.current.contains(event.target)) {
                console.log("refw");
                return;
            }
            // features dropdown
            if ( reff1.current && reff1.current.contains(event.target)) {
                setExpanded(false);
                console.log("reff1");
            }
            if ( reff2.current && reff2.current.contains(event.target)) {
                setExpanded(false);
                console.log("reff2");
            }
            if ( reff3.current && reff3.current.contains(event.target)) {
                setExpanded(false);
                console.log("reff3");
            }
            if ( reff4.current && reff4.current.contains(event.target)) {
                setExpanded(false);
                console.log("reff4");
            }
            if ( reff5.current && reff5.current.contains(event.target)) {
                setExpanded(false);
                console.log("reff5");
            }
            if ( reff6.current && reff6.current.contains(event.target)) {
                setExpanded(false);
                console.log("reff6");
            }
            if (reff.current && reff.current.contains(event.target)) {
                console.log("reff");
                return;
            }
            // moodshots dropdown
            if ( refm1.current && refm1.current.contains(event.target)) {
                setExpanded(false);
                console.log("refm1");
            }
            if ( refm2.current && refm2.current.contains(event.target)) {
                setExpanded(false);
                console.log("refm2");
            }
            if (refm.current && refm.current.contains(event.target)) {
                console.log("refm");
                return;
            }
            // page and  toggle icon
            if ( ref.current && !ref.current.contains(event.target)) {
                setExpanded(false);
            }
            }
            document.addEventListener("mouseup", handleClickOutside);
            return () => {
            document.removeEventListener("mouseup", handleClickOutside);
            };
        }, [ref])

        return { expanded, setExpanded, ref, refw, refw1, refw2, refw3, 
            reff, reff1, reff2, reff3, reff4, reff5, reff6, refm, refm1, refm2, 
            };
}

export default useClickOutsideToggle;