import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className="bg-white text-black border-b border-gray-200 sticky top-0 z-50">
            <nav className="flex justify-between items-center px-4 container mx-auto h-16">
                <a href=""><img className="h-10" src={Logo} alt="Dev Stack Logo" /></a>
                <ul className="flex gap-4 text-center text-[15px] text-slate-600">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="flex gap-2 items-center">
                    <button className="px-2 md:px-4 py-2 text-slate-700 text-xs md:text-sm">Sign In</button>
                    <button className="bg-[#DB2777] text-white px-3 md:px-5 py-1 md:py-2 rounded-full text-xs md:text-sm">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;