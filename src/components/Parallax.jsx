import React from 'react';
import bg from "../assets/bg_images/casting-1417198_1920.jpg";

export default function Parallax() {
    return (
        <div
            className="w-screen h-screen bg-fixed bg-cover bg-center mt-10 flex flex-col items-center justify-center relative"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 py-10 z-30">Quality Assurance</h1>
            <p className='leading-relaxed text-lg text-white px-6 md:px-12 text-center z-30'>As harmonious to the company philosophy “Quality is not an act. It is a habit”, we have established leading technology and applied stringent quality assurance measures in every stage of production. Various tests are conducted from the beginning stage of procurement of raw materials to the final stage of launch of the final product in the market.</p>
            <p className='leading-relaxed text-lg text-white px-6 md:px-12 text-center z-30'>Material testing, visual inspection, and dimensional checkup are done at multiple stages to ensure the 100% accuracy rate and efficiency. Our experts in the quality assurance department also take rigorous quality checks of the finished goods before they are dispatched. For excellent physical and dimensional properties of our products, our quality control department has top-notch facilities to equalize it.</p>
        </div>
    );
}