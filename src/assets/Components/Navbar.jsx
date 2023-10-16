import logo from '../../../public/pogo.png'

const Navbar = () => {
    return (

        <div className='flex gap-1 items-center md:px-10 px-1 py-2 bg-[#372727]'>
                  <div>
                      <img className='w-[50px] h-[50px]' src={logo} alt="" />
                  </div>
                  <h1 className='font-bold text-white  text-xl md:text-2xl'>Mr. Coffee Shop</h1>
        </div>
    );
};

export default Navbar;