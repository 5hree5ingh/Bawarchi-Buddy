import React from 'react';
import Button from '../Button/Button';
import Spice from "../../assets/spices.png";

const Hero = () => {
    return (
        <section>
            <div className='bg-white-300 max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center justify-between gap-10 py-10 '>

                {/* Hero Content - Left Side */}
                <div className='flex-1 space-y-6'>
                    <span className='bg-orange-100 rounded-full text-orange-500 px-5 py-2 text-lg inline-block'>
                        Export Best Quality...
                    </span>
                    <h1 className="md:text-7xl/20 font-bold text-5xl/14">
                        Aromatic Organic <span className=" text-orange-500">Spices</span> & <span className="text-orange-500">Seasonings</span> in Your City
                    </h1>

                    <p className='text-zinc-600 md:text-lg text-md max-w-xl'>
                        Loaded with flavor, rich in benefits. Fresh, healthy spices for every kitchen.
                    </p>
                    <Button content='Shop Now' />
                </div>

                {/* Hero Image - Right Side */}
                <div className='flex-1'>
                    <img
                        src={Spice}
                        alt="Spice Product"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
