import HomeImage from '../assets/images/saitama.jpg';

const Home = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
            <img src={HomeImage} alt="saitama"  className="w-full h-full object-cover" />
            <div className="absolute flex flex-col justify-start items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                <h1>Get Fit</h1>
                <h1>Get Fit</h1>
                <h1>Get Fit</h1>
            </div>
        </div>
    </div>
  )
}

export default Home;