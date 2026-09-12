import HeroImg from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className="container mx-auto flex min-h-[400px] py-18 items-center gap-10">
            <div className="w-1/2">
                <h2 className="text-5xl font-bold text-slate-900">Build Your Ideal <br></br><span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 
                 bg-clip-text text-transparent">Development Stack</span></h2>
                <p className="py-4">Explore frontend, backend, database, and tooling options, <br></br>
                    compare them side by side, and put together the stack that fits your <br></br> next project.</p>
                
                <div className="flex gap-6 items-center mt-4">
                    <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-xs font-medium text-white">Explore Technologies</button>
                    <button className="rounded-md border border-slate-200 px-6 py-2 text-xs font-medium text-slate-500">Learn More</button>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;