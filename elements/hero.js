import Link from "next/link"

export default function Hero() {
    return (
        <section className="bg-[#f9f9fc] hero">
            <div className="relative px-5 py-8 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 items-center">
                <div className="hero__text max-w-md mx-auto md:mx-0 text-center md:text-left">
                    <h1 className="uppercase text-violet-600 font-medium">Liang Sun</h1>
                    <div className="py-8 font-bold text-4xl leading-[60px] lg:text-6xl lg:leading-[78px] text-[#333333]">
                        Hello, my name's Liang. I'm web developer.
                    </div>
                    <div className="hero__buttons inline-flex gap-4 flex-col lg:flex-row">
                        <Link href="mailto:sunly917@gmail.com">
                            <a className="uppercase px-10 py-6 text-white bg-violet-600 rounded-full text-sm font-medium hover:outline hover:outline-1 hover:outline-violet-600 hover:text-violet-600 hover:bg-white transition-colors ease-linear duration-300"><i className="fa-regular fa-envelope mr-2"></i> CONTACT ME</a>
                        </Link>
                        <Link href="/cv/curriculum-vitae-x.pdf">
                            <a className="uppercase px-10 py-6 text-[#333333] text-sm font-medium rounded-full hover:bg-violet-600 hover:text-white transition-colors ease-linear duration-300" download target='__blank'><i className="fa-solid fa-download mr-2"></i> DOWNLOAD CV</a>
                        </Link>
                    </div>
                </div>

                <div className="hero__image">
                    <div className="relative max-w-[500px] mx-auto">
                        <img className="w-full h-full" src="/images/avatar-bg.svg" alt="Avatar ackground frame" />
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-5/6 aspect-square object-cover" src="/images/me.jpeg" alt="Liang Sun" />
                    </div>
                </div>
            </div>
        </section>
    )
}