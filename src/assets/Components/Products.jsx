
import c1 from '../../../public/1.png'
import c2 from '../../../public/2.png'
import c3 from '../../../public/3.png'
import c4 from '../../../public/4.png'
import c5 from '../../../public/5.png'
import c6 from '../../../public/6.png'

import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { BsCup, BsCupHotFill } from "react-icons/bs";

const Products = () => {

    return (
        <div>
            <h1 className="mt-10 text-4xl font-extrabold text-center text-[#331A15]">Our Popular Products</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20 mt-10 mb-5 '>



                <div className='grid grid-cols-1 xl:grid-cols-2  items-center bg-[#F5F4F1] rounded-xl py-4 mx-2' >

                    <div className='flex justify-center xl:justify-start'>
                        <img  src={c1} alt="" />
                    </div>

                    <div className='flex space-x-8 my-5 justify-center xl:justify-start'>

                        <div className='space-y-1'>
                            <p><span className='font-bold'>Name:</span> Hot Cold Coffee</p>
                            <p><span className='font-bold'>Chef :</span> Jasif valuka</p>
                            <p><span className='font-bold'>Price:</span> 320 tk</p>
                        </div>

                        <div className='flex-col space-y-2 text-xl font-bold'>
                            <p><AiFillEye></AiFillEye></p>
                            <p><AiFillEdit></AiFillEdit></p>
                            <p><AiFillDelete></AiFillDelete></p>
                        </div>

                    </div>


                </div>


                <div className='grid grid-cols-1 xl:grid-cols-2 items-center bg-[#F5F4F1] rounded-xl py-4 mx-2' >

                    <div className='flex justify-center xl:justify-start'>
                        <img  src={c2} alt="" />
                    </div>

                    <div className='flex space-x-8 my-5 justify-center xl:justify-start'>

                        <div className='space-y-1'>
                            <p><span className='font-bold'>Name:</span> American Coffee</p>
                            <p><span className='font-bold'>Chef :</span> Sunil Satrey</p>
                            <p><span className='font-bold'>Price:</span> 220 tk</p>
                        </div>

                        <div className='flex-col space-y-2 text-xl font-bold'>
                            <p><AiFillEye></AiFillEye></p>
                            <p><AiFillEdit></AiFillEdit></p>
                            <p><AiFillDelete></AiFillDelete></p>
                        </div>

                    </div>


                </div>



                <div className='grid grid-cols-1 xl:grid-cols-2  items-center bg-[#F5F4F1] rounded-xl py-4 mx-2' >

                    <div className='flex justify-center xl:justify-start'>
                        <img  src={c3} alt="" />
                    </div>

                    <div className='flex space-x-8 my-5 justify-center xl:justify-start'>

                        <div className='space-y-1'>
                            <p><span className='font-bold'>Name:</span> Thailand Hot Coffee</p>
                            <p><span className='font-bold'>Chef :</span> Arjun Agal</p>
                            <p><span className='font-bold'>Price:</span> 120 tk</p>
                        </div>

                        <div className='flex-col space-y-2 text-xl font-bold'>
                            <p><AiFillEye></AiFillEye></p>
                            <p><AiFillEdit></AiFillEdit></p>
                            <p><AiFillDelete></AiFillDelete></p>
                        </div>

                    </div>


                </div>


                <div className='grid grid-cols-1 xl:grid-cols-2 items-center bg-[#F5F4F1] rounded-xl py-4 mx-2' >

                    <div className='flex justify-center xl:justify-start'>
                        <img  src={c1} alt="" />
                    </div>

                    <div className='flex space-x-8 my-5 justify-center xl:justify-start'>

                        <div className='space-y-1'>
                            <p><span className='font-bold'>Name:</span> China Sweet Coffee</p>
                            <p><span className='font-bold'>Chef :</span> Roktim Paul</p>
                            <p><span className='font-bold'>Price:</span> 290 tk</p>
                        </div>

                        <div className='flex-col space-y-2 text-xl font-bold'>
                            <p><AiFillEye></AiFillEye></p>
                            <p><AiFillEdit></AiFillEdit></p>
                            <p><AiFillDelete></AiFillDelete></p>
                        </div>

                    </div>


                </div>



                <div className='grid grid-cols-1 xl:grid-cols-2  items-center bg-[#F5F4F1] rounded-xl py-4 mx-2' >

                    <div className='flex justify-center xl:justify-start'>
                        <img  src={c1} alt="" />
                    </div>

                    <div className='flex space-x-8 my-5 justify-center xl:justify-start'>

                        <div className='space-y-1'>
                            <p><span className='font-bold'>Name:</span> Australian Pizza Coffee</p>
                            <p><span className='font-bold'>Chef :</span> Chiris Lyne</p>
                            <p><span className='font-bold'>Price:</span> 450 tk</p>
                        </div>

                        <div className='flex-col space-y-2 text-xl font-bold'>
                            <p><AiFillEye></AiFillEye></p>
                            <p><AiFillEdit></AiFillEdit></p>
                            <p><AiFillDelete></AiFillDelete></p>
                        </div>

                    </div>


                </div>







                <div className='grid grid-cols-1 xl:grid-cols-2 items-center bg-[#F5F4F1] rounded-xl py-4'>

                    <div className='flex justify-center xl:justify-start'>
                        <img className='ml-10 w-[120px]' src={c6} alt="" />
                    </div>

                    <div className='flex space-x-8 my-5 justify-center xl:justify-start'>

                        <div className='space-y-1'>
                            <p><span className='font-bold'>Name:</span> Maxican Coffee</p>
                            <p><span className='font-bold'>Chef :</span> Onil valuka</p>
                            <p><span className='font-bold'>Price:</span> 520 tk</p>
                        </div>

                        <div className='flex-col space-y-2 text-xl font-bold'>
                            <p><AiFillEye></AiFillEye></p>
                            <p><AiFillEdit></AiFillEdit></p>
                            <p><AiFillDelete></AiFillDelete></p>
                        </div>

                    </div>


                </div>



            </div>




            <div className='text-center my-3'>

                <button className='btn bg-[#E3B573] hover:bg-[#E3B573] font-bold text-white'>Add Coffee <span className='text-black'><BsCupHotFill></BsCupHotFill></span></button>


            </div>

        </div>
    );
};

export default Products;