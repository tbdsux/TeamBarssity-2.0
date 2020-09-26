import React, { useState, useEffect } from 'react'

const Modal = () => {
    const [isShown, setIsShown] = useState(false);

    const showModal = () => {
        setIsShown(true);
    }

    const closeModal= () => {
        setIsShown(false);
    }

    useEffect(() => {
        if (!sessionStorage.popupModal) {
            const timer = setTimeout(() => {
                setIsShown(true);
                sessionStorage.popupModal = 1;
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    return isShown ? (
        <div class="w-full h-screen bg-bland fixed flex items-center justify-center">
            <div class="bg-white w-11/12 mx-auto">
                <h1>THis is a modal</h1>
            </div>
        </div>
    ) : null;
}

export default Modal