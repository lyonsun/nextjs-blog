import Link from "next/link"

function handleClick() {
    if (document.getElementById('btn-mobile-menu-toggle').getAttribute('aria-expanded') == 'false') {
        document.getElementById('btn-mobile-menu-toggle').setAttribute('aria-expanded', 'true');
        document.getElementById("mobile-menu").classList.remove("invisible");
        document.getElementById("mobile-menu").firstChild.classList.remove("translate-x-full");
        document.getElementById("mobile-menu").firstChild.classList.remove("opacity-0");
    } else {
        document.getElementById('btn-mobile-menu-toggle').setAttribute('aria-expanded', 'false');
        document.getElementById("mobile-menu").classList.add("invisible");
        document.getElementById("mobile-menu").firstChild.classList.add("translate-x-full");
        document.getElementById("mobile-menu").firstChild.classList.add("opacity-0");
    }
}

function handleBackDropClick(e) {
    if (e.target.id !== 'mobile-menu__nav') {
        document.getElementById('btn-mobile-menu-toggle').setAttribute('aria-expanded', 'false');
        document.getElementById("mobile-menu").classList.add("invisible");
        document.getElementById("mobile-menu").firstChild.classList.add("translate-x-full");
        document.getElementById("mobile-menu").firstChild.classList.add("opacity-0");
    }
}

export default function Header() {
    return (
        <header className="bg-neutral fixed top-0 left-0 w-full z-50">
            <div className='relative px-5 py-8 max-w-[1200px] mx-auto flex justify-between items-center uppercase'>
                <Link href='/'>
                    <a className='text-primary-600 font-semibold flex gap-1 items-center mr-4 h-9'>
                        <span className='text-white bg-primary-600 text-xs rounded-full w-5 h-5 inline-flex justify-center items-center'>O</span> bserver
                    </a>
                </Link>
                <nav className='hidden md:flex gap-12 text-sm tracking-widest'>
                    <Link href='/'>
                        <a className="hover:underline hover:underline-offset-8">Home</a>
                    </Link>
                    <Link href='/about'>
                        <a className="hover:underline hover:underline-offset-8">About</a>
                    </Link>
                    <Link href='/services'>
                        <a className="hover:underline hover:underline-offset-8">Services</a>
                    </Link>
                    <Link href='/work'>
                        <a className="hover:underline hover:underline-offset-8">Work</a>
                    </Link>
                </nav>
                <Link href='mailto:sunly917@gmail.com'>
                    <a className='hidden md:block md:mr-4 px-6 py-2 text-white bg-primary-600 rounded-full text-sm hover:outline hover:outline-1 hover:outline-primary-600 hover:text-primary-600 hover:bg-white transition-colors ease-linear duration-300'>Hire Me<i className="ml-2 fa-regular fa-envelope"></i></a>
                </Link>

                {/* hamburger menu */}
                <button className='cursor-pointer md:hidden z-20' id="btn-mobile-menu-toggle" aria-label="Mobile Menu Toggle" aria-controls="mobile-menu" aria-expanded="false" onClick={handleClick}>
                    <i className="fa-solid fa-bars h-9 w-9 flex justify-center items-center"></i>
                </button>

                {/* mobile menu */}
                <div id="mobile-menu" className="md:hidden fixed right-0 top-0 h-full w-full z-10 bg-gray-800 bg-opacity-80 flex justify-end invisible" onClick={handleBackDropClick}>
                    <nav id="mobile-menu__nav" className='h-full w-1/2 min-w-[280px] p-10 bg-gradient-to-br from-primary-600 to-primary-300 flex flex-col items-end justify-end gap-8 translate-x-full opacity-0 transition-all ease-in-out duration-500'>
                        <Link href='/'>
                            <a className="text-primary-100 font-medium text-3xl hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">Home</a>
                        </Link>
                        <Link href='/about'>
                            <a className="text-primary-100 font-medium text-3xl hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">About</a>
                        </Link>
                        <Link href='/services'>
                            <a className="text-primary-100 font-medium text-3xl hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">Services</a>
                        </Link>
                        <Link href='/work'>
                            <a className="text-primary-100 font-medium text-3xl hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">Work</a>
                        </Link>
                        <Link href='mailto:sunly917@gmail.com'>
                            <a className='px-10 py-4 text-white e bg-primary-600 rounded-full text-lg hover:outline hover:outline-1 hover:outline-primary-600 hover:text-primary-600 hover:bg-white transition-colors ease-linear duration-300'>Hire Me<i className="ml-2 fa-regular fa-envelope"></i></a>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}