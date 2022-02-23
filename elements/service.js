import Image from "next/image"

export default function Service() {
    return (
        <section className="service px-5 pt-12 pb-12 md:pb-36 max-w-[1200px] mx-auto">
            <div className="heading mb-16 relative text-center">
                <div className="heading__image absolute top-[-48px] left-[50%] z-[-1]">
                    <Image width="80" height="80" layout="fixed" src="/images/triangle.svg" alt="Heading Background Image" />
                </div>
                <div className="heading__text">
                    <h1 className="uppercase font-medium text-indigo-600">Services</h1>
                    <div className="font-semibold text-5xl leading-[56px] mt-2 mb-3">What I Do For My Customer.</div>
                    <div className="text-[#121212] opacity-70 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</div>
                </div>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
                <div className="card hover:bg-[#f9f9fc] text-center px-8 py-12 rounded-3xl shadow-2xl">
                    <div className="card__image mb-8">
                        <Image width="42" height="42" layout="fixed" src="/images/service-ui-ux-design.svg" alt="UX/UI Design Service Image" />
                    </div>
                    <div className="card__text">
                        <h2 className="font-medium text-indigo-600 mb-2">UI/UX Design</h2>
                        <div className="text-[#121212] opacity-70 max-w-xl mx-auto">lorem ipsum dolor sit amet consectur adi pising leo</div>
                    </div>
                </div>
                <div className="card hover:bg-[#f9f9fc] text-center px-8 py-12 rounded-3xl shadow-2xl">
                    <div className="card__image mb-8">
                        <Image width="42" height="42" layout="fixed" src="/images/service-product-design.svg" alt="Product Design Service Image" />
                    </div>
                    <div className="card__text">
                        <h2 className="font-medium text-indigo-600 mb-2">Product Design</h2>
                        <div className="text-[#121212] opacity-70 max-w-xl mx-auto">lorem ipsum dolor sit amet consectur adi pising leo</div>
                    </div>
                </div>
                <div className="card hover:bg-[#f9f9fc] text-center px-8 py-12 rounded-3xl shadow-2xl">
                    <div className="card__image mb-8">
                        <Image width="42" height="42" layout="fixed" src="/images/service-motion-graphics.svg" alt="Motion Graphics Service Image" />
                    </div>
                    <div className="card__text">
                        <h2 className="font-medium text-indigo-600 mb-2">Motion Graphics</h2>
                        <div className="text-[#121212] opacity-70 max-w-xl mx-auto">lorem ipsum dolor sit amet consectur adi pising leo</div>
                    </div>
                </div>
            </div>
        </section>
    )
}