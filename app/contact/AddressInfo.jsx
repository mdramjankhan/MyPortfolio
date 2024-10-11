import React from 'react';
import MapTag from './MapTag';
import ContactTag from './ContactTag';
import MailTag from './MailTag';
import SocialBar from './SocialBar';
export default function AddressInfo() {
    return (
        <div>
            <h1
                className=" uppercase pb-5 font-bold  text-3xl"
            >don't be shy</h1>
            <p
                className=" font-normal pb-5"
            >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

            <div>
                <div>
                    <MapTag/>
                    <MailTag/>
                    <ContactTag/>
                </div>
            </div>
            <div>
                <SocialBar/>
            </div>
        </div>
    )
}
