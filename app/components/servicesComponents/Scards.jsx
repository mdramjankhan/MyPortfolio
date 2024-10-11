import React from 'react';
import Scard from './Scard';
import web from "../../assets/servicesImgs/web.jpg";
import host from "../../assets/servicesImgs/hosting.jpg";
import design from "../../assets/servicesImgs/design.webp";
import allsol from "../../assets/servicesImgs/aiSol.jpg";
import smtp from "../../assets/servicesImgs/mail.jpeg";
import ai from "../../assets/servicesImgs/ai.jpg";

export default function Scards() {
    return (
        <div className='p-5 mt-10 flex flex-col md:flex-row justify-around items-center flex-wrap gap-8 md:gap-10 md:p-12'>
            <Scard
                img={web}
                name={"Web Development"}
                text={"Custom web development services tailored to your business needs, including frontend and backend development."}
            />

            <Scard
                img={host}
                name={"Web Hosting"}
                text={"Reliable and scalable web hosting solutions to ensure your website is always available and performs optimally."}
            />

            <Scard
                img={design}
                name={"Web Design"}
                text={"Creative and user-centric web design services to build visually appealing and functional websites."}
            />

            <Scard
                img={allsol}
                name={"All Web Solutions"}
                text={"Comprehensive web solutions to cover all aspects of your online presence and business needs."}
            />

            <Scard
                img={smtp}
                name={"SMTP Services"}
                text={"Secure and reliable SMTP services for managing your email communications effectively."}
            />

            <Scard
                img={ai}
                name={"AI Integration"}
                text={"Leverage AI to enhance your business operations, drive innovation, and gain a competitive edge."}
            />
        </div>
    )
}
