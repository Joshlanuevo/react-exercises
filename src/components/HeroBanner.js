import HomeImage from '../assets/images/baki_bg.png';

const HeroBanner = () => {
  return (
    <div className='relative p-20 uppercase'>
      <div className='font-semibold text-5xl mx-5 mt-20'>Energy & Persistence</div>
      <div className='text-3xl mx-5 mt-5'>Conquer All Things</div>
      <div>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5 mt-20">
            Explore Exercises
        </button>
      </div>
      <img src={HomeImage} alt="baki" className="hero-banner-img" />
    </div>
  )
}

export default HeroBanner;