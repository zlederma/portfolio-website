import AboutMe from '../components/AboutMe'
import Landing from '../components/Landing'

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.scrollTo({
                top: 100,
                behavior: 'smooth',
            });
        }, 3500); // 3 seconds

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Landing></Landing>
            <AboutMe></AboutMe>
        </>
    )
}
