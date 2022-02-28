import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="footer pt-9 dark:bg-jet">
            <div className="footer__inner mx-5 2xl:mx-14 pt-20 lg:pt-28 px-8 md:px-24 2xl:px-40 rounded-t-3xl bg-jet text-white">
                <div className="footer__primary grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-4 gap-y-12 place-items-center md:place-items-start pb-12 md:pb-20 border-b border-b-light-gray">
                    <div className="footer__primary__general max-w-sm text-center md:text-left">
                        <div className="footer__primary__general__logo mb-6">
                            <Link href='/'>
                                <a className='text-white font-semibold flex gap-2 justify-center md:justify-start items-center mr-4 h-9 text-4xl uppercase'>
                                    <span className='text-jet bg-white text-3xl rounded-full w-10 h-10 inline-flex justify-center items-center'>B</span> utterfly
                                </a>
                            </Link>
                        </div>
                        <div className="footer__primary__general__text leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit.
                        </div>
                    </div>
                    <div className="footer__primary__contact px-8 grid gap-4">
                        <div className="footer__primary__contact__email flex gap-4 items-center justify-center md:justify-start">
                            <i className="fa-regular fa-envelope"></i>
                            <a href="mailto:sunly917@gmail.com">sunly917@gmail.com</a>
                        </div>
                        <div className="footer__primary__contact__phone flex gap-4 items-center justify-center md:justify-start">
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+358404040404">+358 40 404 0404</a>
                        </div>
                        <div className="footer__primary__contact__social flex gap-6 justify-center md:justify-start">
                            <a className="hover:brightness-75 transition ease-linear duration-300" href="https://www.facebook.com/bronzesword" target="_blank" rel="noopener noreferrer">
                                <Image width={24} height={24} src="/images/socials/facebook.svg" alt="Facebook" />
                            </a>
                            <a className="hover:brightness-75 transition ease-linear duration-300" href="https://www.instagram.com/lyonsun7" target="_blank" rel="noopener noreferrer">
                                <Image width={24} height={24} src="/images/socials/instagram.svg" alt="Instagram" />
                            </a>
                            <a className="hover:brightness-75 transition ease-linear duration-300" href="https://www.linkedin.com/in/lyonsun7" target="_blank" rel="noopener noreferrer">
                                <Image width={24} height={24} src="/images/socials/linkedin.svg" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__secondary py-14 flex flex-col md:flex-row justify-between gap-8">
                    <nav className='flex gap-4 md:gap-12 flex-wrap text-sm tracking-widest justify-center'>
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
                    <div className="footer__secondary__copyright flex justify-center opacity-60">
                        © 2022 Liang Sun
                    </div>
                </div>
            </div>
        </footer>
    )
}