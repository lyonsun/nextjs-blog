import Link from "next/link"

export default function CTA() {
    return (
        <section className="cta dark:bg-jet px-5 py-24">
            <div className="cta__inner max-w-[1200px] mx-auto rounded-3xl bg-neutral dark:bg-davys-gray bg-[url('/images/cta-background.svg')] bg-no-repeat bg-center bg-cover">
                <div className="cta__content p-8 grid place-items-center text-center px-7 py-20 md:py-28 max-w-[650px] mx-auto">
                    <h1 className="font-semibold text-3xl lg:text-5xl lg:leading-snug mt-2 mb-3 dark:text-white">Interested working with me? Let's connect!</h1>
                    <Link href="mailto:sunly917@gmail.com">
                        <a className="uppercase px-10 py-6 text-white bg-primary-600 rounded-full text-sm font-medium border border-primary-600 hover:text-primary-600 hover:bg-white transition-colors ease-linear duration-300"><i className="fa-regular fa-envelope mr-2"></i> CONTACT ME</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}