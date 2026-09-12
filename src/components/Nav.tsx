import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className="bg-green-900 text-white">
            <nav className="flex justify-between items-center p-4">
                <a href=""><img src={Logo} alt="Dev Stack Logo" /></a>
                <ul className="flex gap-4 text-center">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="flex gap-2 items-center">
                    <button className="bg-white text-green-900 px-4 py-2 rounded">Sign In</button>
                    <button className="bg-white text-green-900 px-4 py-2 rounded ml-2">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;