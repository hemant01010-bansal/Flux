import React, { useEffect, useState } from "react";

function Banner() {
    const quotes = [
        "Don’t wait for the perfect moment; make today meaningful.",
        "Every second gives you a chance to create something great.",
        "Keep moving forward and let your goals guide your time.",
        "Small steps every day can lead to great achievements.",
        "Use your time wisely today to build a better tomorrow.",
        "Stay focused, use your time well, and keep moving forward."
    ];

    const [ind, setInd] = useState(0); //useState says that if it is my first render then give me useState state otherwise give me the existing state

    // useEffect(()=>{  
    //     setInterval(() => {
    //         if (ind==4){
    //             setInd(0);
    //         }
    //         else{
    //             setInd((prev) => prev+1);
    //         }
    //         console.log(ind);
    //     }, 2000);
    // },[])

    useEffect(() => {
        const interval = setInterval(() => {
            setInd((prev) => {
                const next = prev === 4 ? 0 : prev + 1;
                console.log(next);
                return next;
            })
        }, 3000);
    }, [])

    return (
        <>
            <div style={{
                height: '25px', fontSize: '14px', color: '#9fa8c8', display: 'flex', justifyContent: 'center', alignItems: 'center',
                position: 'sticky', top: '0px', zIndex: '1000', backgroundColor: '#192548'
            }}>{quotes[ind]}</div>
        </>
    )
}

export default Banner;
