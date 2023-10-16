
import item1 from '../../../public/item1.png'
import item2 from '../../../public/item2.png'
import item3 from '../../../public/item3.png'
import item4 from '../../../public/item4.png'

const Intro = () => {

    return (
        <div className='bg-[#ECEAE3] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 text-center gap-2 '>

               <div>
                     <div className=' flex justify-center '>
                       <img src={item1} alt="" />
                     </div>
                     <h1 className='py-2 font-bold'>Awesome Aroma</h1>
                     <p className='text-xs'>You will definitely be a fan <br /> of the design & aroma of your coffee</p>
               </div>

               
               <div >
                     <div className=' flex justify-center '>
                       <img src={item2} alt="" />
                     </div>
                     <h1 className='py-2 font-bold'>Pure Grades</h1>
                     <p className='text-xs'>The coffee is made of the green <br />coffee beans which you will love</p>
               </div>


               <div >
                     <div className=' flex justify-center '>
                       <img src={item3} alt="" />
                     </div>
                     <h1 className='py-2 font-bold'>High Quality</h1>
                     <p className='text-xs'>We served the coffee to you <br /> maintaining the best quality</p>
               </div>


               <div >
                     <div className=' flex justify-center '>
                       <img src={item4} alt="" />
                     </div>
                     <h1 className='py-2 font-bold'>Proper Roasting</h1>
                     <p className='text-xs'>Your coffee is brewed by first <br />roasting the green coffee beans</p>
               </div>



              
        </div>
    );
};

export default Intro;