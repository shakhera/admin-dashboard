const Footer = () => {
  return (
    <footer className='bg-gray-100  py-6 w-full '>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col gap-5 md:flex-row justify-between items-center  md:space-y-0'>
          {/* Left section */}
          <div>
            <h2 className='text-xl font-bold text-gray-700'>
              Pharma Solutions
            </h2>
          </div>

          {/* Right section */}
          <div>
            <p className='text-sm text-gray-700'>
              &copy; {new Date().getFullYear()} Pharma Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
