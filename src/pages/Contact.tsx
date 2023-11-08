import React from "react";

const Contact = () => {
    return (
        <div className="bg-dark text-white text-base font-jetbrainsmono min-h-screen max-h-full">
            <h1 className="text-inherit text-5xl font-bold py-10 px-5">Contact Us!</h1>
            <p className="text-inherit pl-5 py-0">Please send any and all complaints to the following email addresses:</p>
            <ul className="text-inherit pl-5 space-y-0.5 list-disc list-inside space-y-1">
                <li>drhayes24@wabash.edu</li>
                <li>orrunge24@wabash.edu</li>
                <li>khoque24@wabash.edu</li>
            </ul>
        </div>
    );
};

export default Contact;