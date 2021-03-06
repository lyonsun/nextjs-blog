import Image from "next/image"
import Link from "next/link"

import styles from './about.module.css'

export default function About() {
    return (
        <section className={`about ${styles["bg-about"]} bg-neutral dark:bg-jet relative`}>
            <div className={styles["about__inner"]}>
                <div className="px-5 py-24 max-w-[1200px] mx-auto">
                    <div className="about__content max-w-[500px] mx-auto md:mx-0 text-center md:text-left transition-all ease-in-out duration-300">
                        <h1 className="uppercase text-primary-500 font-medium">Web Developer</h1>
                        <div className="py-8 font-bold text-4xl leading-[60px] lg:text-6xl lg:leading-[78px] text-jet dark:text-white transition-all ease-linear duration-300">Web Developer With 10 Years Of Experience.</div>
                        <div className="text-smoky-black dark:text-white opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</div>
                        <div className="mt-8">
                            <Link href="mailto:sunly917@gmail.com">
                                <a className="inline-block uppercase px-10 py-6 text-white bg-primary-500 rounded-full text-sm font-medium border border-primary-500 hover:text-primary-500 hover:bg-white transition-colors ease-linear duration-300"><i className="fa-regular fa-envelope mr-2"></i> CONTACT ME</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}