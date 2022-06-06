import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="hero bg-neutral dark:bg-jet">
            <div className="relative px-5 py-8 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all ease-linear duration-300">
                <div className="hero__text px-2 text-center md:text-left">
                    <h1 className="uppercase text-primary-500 font-medium">Liang Sun</h1>
                    <div className="py-8 font-bold text-4xl leading-[60px] lg:text-6xl lg:leading-[78px] text-jet dark:text-white transition-all ease-linear duration-300">
                        Hello, my name is Liang. I'm a web developer.
                    </div>
                    <div className="hero__buttons inline-flex gap-4 flex-col lg:flex-row transition-all ease-linear duration-300">
                        <Link href="mailto:sunly917@gmail.com">
                            <a className="uppercase px-10 py-6 text-white bg-primary-500 rounded-full text-sm font-medium border border-primary-500 hover:text-primary-500 hover:bg-white transition-colors ease-linear duration-300"><i className="fa-regular fa-envelope mr-2"></i> CONTACT ME</a>
                        </Link>
                        <Link href="/cv/curriculum-vitae-x.pdf">
                            <a className="uppercase px-10 py-6 text-jet dark:text-white text-sm font-medium rounded-full hover:bg-white dark:hover:bg-davys-gray transition-colors ease-linear duration-300" download target='__blank'><i className="fa-solid fa-download mr-2"></i> DOWNLOAD CV</a>
                        </Link>
                    </div>
                </div>

                <div className="hero__image group">
                    <div className="relative max-w-[500px] mx-auto">
                        <Image className="group-hover:animate-spin" width="500" height="500" layout="responsive" priority={true} src="/images/avatar-bg.svg" alt="Avatar background frame" />
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5/6">
                            <Image width="500" height="500" layout="responsive" priority={true} objectFit="cover" objectPosition="center" className="rounded-full" src="/images/me.jpeg" alt="Liang Sun" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}