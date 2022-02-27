import Image from "next/image"

export default function Portfolio() {
    return (
        <section className="portfolio pt-12 pb-16 md:pb-32">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="portfolio__heading grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-end text-center md:text-left mb-8 md:mb-12">
                    <div className="heading-text relative">
                        <div className="heading__image absolute top-[-48px] left-[50%] md:-left-10 z-[-1]">
                            <Image width="80" height="80" layout="fixed" src="/images/triangle.svg" alt="Heading Background Image" />
                        </div>
                        <h1 className="uppercase font-medium text-primary-600">Portfolio</h1>
                        <div className="font-semibold text-3xl lg:text-5xl leading-[56px] mt-2">Selected Works.</div>
                    </div>
                    <div className="heading-description text-gray opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
                    </div>
                </div>
                <div className="portfolio__list grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="portfolio__card rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition ease-linear duration-300">
                        <div className="portfolio__featured-image w-full aspect-[3/2] bg-light-gray">
                            <Image width="600" height="400" layout="responsive" src={`https://unsplash.it/id/${Math.floor(Math.random() * 100)}/400/200`} alt="Portfolio Image" />
                        </div>
                        <div className="portfolio__card-content px-12 py-8">
                            <h2 className="text-xl font-medium mb-2">Creativa - Elementor Template Kit</h2>
                            <div className="text-gray opacity-70">UI/UX Design</div>
                        </div>
                    </div>
                    <div className="portfolio__card rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition ease-linear duration-300">
                        <div className="portfolio__featured-image w-full aspect-[3/2] bg-light-gray">
                            <Image width="600" height="400" layout="responsive" src={`https://unsplash.it/id/${Math.floor(Math.random() * 100)}/400/200`} alt="Portfolio Image" />
                        </div>
                        <div className="portfolio__card-content px-12 py-8">
                            <h2 className="text-xl font-medium mb-2">Nusapp - Elementor Template Kit</h2>
                            <div className="text-gray opacity-70">UI/UX Design</div>
                        </div>
                    </div>
                    <div className="portfolio__card rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition ease-linear duration-300">
                        <div className="portfolio__featured-image w-full aspect-[3/2] bg-light-gray">
                            <Image width="600" height="400" layout="responsive" src={`https://unsplash.it/id/${Math.floor(Math.random() * 100)}/400/200`} alt="Portfolio Image" />
                        </div>
                        <div className="portfolio__card-content px-12 py-8">
                            <h2 className="text-xl font-medium mb-2">Webina - Elementor Template Kit</h2>
                            <div className="text-gray opacity-70">UI/UX Design</div>
                        </div>
                    </div>
                    <div className="portfolio__card rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition ease-linear duration-300">
                        <div className="portfolio__featured-image w-full aspect-[3/2] bg-light-gray">
                            <Image width="600" height="400" layout="responsive" src={`https://unsplash.it/id/${Math.floor(Math.random() * 100)}/400/200`} alt="Portfolio Image" />
                        </div>
                        <div className="portfolio__card-content px-12 py-8">
                            <h2 className="text-xl font-medium mb-2">Marketin - Elementor Template Kit</h2>
                            <div className="text-gray opacity-70">UI/UX Design</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}