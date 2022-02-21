import Link from "next/link"

export default function Header() {
    return (
        <header className='px-5 py-10 max-w-[1200px] mx-auto flex justify-between items-center uppercase'>
            <Link href='/'>
                <a className='text-violet-600 font-semibold flex gap-1 items-center mr-4 h-9'>
                    <span className='text-white bg-violet-600 text-xs rounded-full w-5 h-5 inline-flex justify-center items-center'>A</span> PORTOSTAR
                </a>
            </Link>
            <nav className='hidden md:flex gap-12 text-sm tracking-widest'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/services'>
                    <a>Services</a>
                </Link>
                <Link href='/work'>
                    <a>Work</a>
                </Link>
            </nav>
            <Link href='mailto:sunly917@gmail.com'>
                <a className='hidden sm:block sm:ml-auto sm:mr-4 md:ml-0 md:mr-0 px-6 py-2 text-white bg-violet-600 rounded-full text-sm'>Hire Me<i class="ml-2 fa-regular fa-envelope"></i></a>
            </Link>

            {/* hamburger menu */}
            <button className='cursor-pointer md:hidden'>
                <i className="fa-solid fa-bars h-9 flex justify-center items-center"></i>
            </button>

            {/* mobile menu */}
            <nav className='hidden'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/services'>
                    <a>Services</a>
                </Link>
                <Link href='/work'>
                    <a>Work</a>
                </Link>
                <Link href='mailto:sunly917@gmail.com'>
                    <a className='hidden sm:block sm:ml-auto sm:mr-2 md:ml-0 md:mr-0 px-6 py-2 text-white bg-violet-600 rounded-full text-sm'>Hire Me<i class="ml-2 fa-regular fa-envelope"></i></a>
                </Link>
            </nav>
        </header>
    )
}