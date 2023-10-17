
import rectangle9 from '../../../public/rectangle9.png'
import rectangle10 from '../../../public/rectangle10.png'
import rectangle11 from '../../../public/rectangle11.png'
import rectangle12 from '../../../public/rectangle12.png'
import rectangle13 from '../../../public/rectangle13.png'
import rectangle14 from '../../../public/rectangle14.png'
import rectangle15 from '../../../public/rectangle15.png'
import rectangle16 from '../../../public/rectangle16.png'

const Sample = () => {

    return (

        <div className='px-2'>

                 <h1 className="text-2xl md:text-3xl text-center font-extrabold text-[#331A15] my-10">Follow on Instragram</h1>

                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   md:px-20 gap-4 mt-10 mb-5 '>

                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle9} alt="" />
                        </div>

                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle10} alt="" />
                        </div>

                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle11} alt="" />
                        </div>

                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle12} alt="" />
                        </div>


                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle13} alt="" />
                        </div>

                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle14} alt="" />
                        </div>


                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle15} alt="" />
                        </div>

                        <div className='flex justify-center'>
                            <img className='w-[320px]' src={rectangle16} alt="" />
                        </div>

                 </div>
        </div>
    );
};

export default Sample;