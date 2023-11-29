import React from "react";

interface modalProps {
    isVisible: boolean,
    onClose: any,
    children: any,
}

const FeedbackModal = ({ isVisible, onClose, children }: modalProps) => {
    if ( !isVisible ) return null;

    const handleClose = (e: any) => {
        if ( e.target.id === "wrapper" ) onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose} >
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()} >x</button>
                <div className="bg-dark p-2 border-2 rounded border-custom-border h-[500px] overflow-auto">{children}</div>
            </div>
        </div>
    );
};

export default FeedbackModal;