import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="hero bg-neutral">
            <div className="relative px-5 py-8 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all ease-linear duration-300">
                <div className="hero__text max-w-md mx-auto md:mx-0 text-center md:text-left">
                    <h1 className="uppercase text-primary-600 font-medium">Liang Sun</h1>
                    <div className="py-8 font-bold text-4xl leading-[60px] lg:text-6xl lg:leading-[78px] text-dark-gray transition-all ease-linear duration-300">
                        Hello, my name is Liang. I'm web developer.
                    </div>
                    <div className="hero__buttons inline-flex gap-4 flex-col lg:flex-row transition-all ease-linear duration-300">
                        <Link href="mailto:sunly917@gmail.com">
                            <a className="uppercase px-10 py-6 text-white bg-primary-600 rounded-full text-sm font-medium hover:outline hover:outline-1 hover:outline-primary-600 hover:text-primary-600 hover:bg-white transition-colors ease-linear duration-300"><i className="fa-regular fa-envelope mr-2"></i> CONTACT ME</a>
                        </Link>
                        <Link href="/cv/curriculum-vitae-x.pdf">
                            <a className="uppercase px-10 py-6 text-dark-gray text-sm font-medium rounded-full hover:bg-primary-600 hover:text-white transition-colors ease-linear duration-300" download target='__blank'><i className="fa-solid fa-download mr-2"></i> DOWNLOAD CV</a>
                        </Link>
                    </div>
                </div>

                <div className="hero__image">
                    <div className="relative max-w-[500px] mx-auto">
                        <Image width="500" height="500" layout="responsive" src="/images/avatar-bg.svg" alt="Avatar background frame" />
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5/6">
                            <Image width="500" height="500" layout="responsive" objectFit="cover" objectPosition="center" className="rounded-full" src="/images/me.jpeg" alt="Liang Sun" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}