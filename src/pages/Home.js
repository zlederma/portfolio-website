import AboutMe from '../components/AboutMe'
import Landing from '../components/Landing'

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.scrollTo({
                top: 180,
                behavior: 'smooth',
            });
        }, 3500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Landing></Landing>
            <AboutMe></AboutMe>
        </>
    )
}
