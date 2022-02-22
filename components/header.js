import Link from "next/link"

function handleClick() {
    document.getElementById("mobile-menu").classList.toggle("translate-x-full");

    if (document.getElementById('btn-mobile-menu-toggle').getAttribute('aria-expanded') == 'false') {
        document.getElementById('btn-mobile-menu-toggle').setAttribute('aria-expanded', 'true');
    } else {
        document.getElementById('btn-mobile-menu-toggle').setAttribute('aria-expanded', 'false');
    }
}

export default function Header() {
    return (
        <header className='relative px-5 py-8 max-w-[1200px] mx-auto flex justify-between items-center uppercase'>
            <Link href='/'>
                <a className='text-violet-600 font-semibold flex gap-1 items-center mr-4 h-9'>
                    <span className='text-white bg-violet-600 text-xs rounded-full w-5 h-5 inline-flex justify-center items-center'>A</span> PORTOSTAR
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
                <a className='hidden md:block md:mr-4 px-6 py-2 text-white bg-violet-600 rounded-full text-sm hover:outline hover:outline-1 hover:outline-violet-600 hover:text-violet-600 hover:bg-white transition-colors ease-linear duration-300'>Hire Me<i className="ml-2 fa-regular fa-envelope"></i></a>
            </Link>

            {/* hamburger menu */}
            <button className='cursor-pointer md:hidden z-[999]' id="btn-mobile-menu-toggle" aria-controls="mobile-menu" aria-expanded="false" onClick={handleClick}>
                <i className="fa-solid fa-bars h-9 w-9 flex justify-center items-center"></i>
            </button>

            {/* mobile menu */}
            <div id="mobile-menu" className="md:hidden fixed right-0 top-0 h-full w-1/2 min-w-[240px] z-[998] p-10 bg-violet-200 translate-x-full transition-all ease-in-out duration-500">
                <nav className='h-full flex flex-col items-end justify-end gap-8'>
                    <Link href='/'>
                        <a className="hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">Home</a>
                    </Link>
                    <Link href='/about'>
                        <a className="hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">About</a>
                    </Link>
                    <Link href='/services'>
                        <a className="hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">Services</a>
                    </Link>
                    <Link href='/work'>
                        <a className="hover:underline hover:underline-offset-8 hover:mr-2 transition-all ease-linear duration-300">Work</a>
                    </Link>
                    <Link href='mailto:sunly917@gmail.com'>
                        <a className='px-6 py-2 text-white bg-violet-600 rounded-full text-sm hover:outline hover:outline-1 hover:outline-violet-600 hover:text-violet-600 hover:bg-white transition-colors ease-linear duration-300'>Hire Me<i className="ml-2 fa-regular fa-envelope"></i></a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}