import CountUp from "react-countup"

export default function Experience() {
    return (
        <section className="experience dark:bg-gray">
            <div className="px-5 py-20 max-w-[1200px] mx-auto">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-12 place-items-center dark:text-white">
                    <li className="flex flex-col items-center">
                        <span className="font-semibold text-5xl leading-[56px] mb-2"><CountUp end={100} />+ </span>
                        <span className="font-medium uppercase text-gray dark:text-white opacity-70">Projects</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="font-semibold text-5xl leading-[56px] mb-2"><CountUp end={24} /> </span>
                        <span className="font-medium uppercase text-gray dark:text-white opacity-70">Winning Award</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="font-semibold text-5xl leading-[56px] mb-2"><CountUp end={70} />+ </span>
                        <span className="font-medium uppercase text-gray dark:text-white opacity-70">Happy Clients</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="font-semibold text-5xl leading-[56px] mb-2"><CountUp end={10} /> </span>
                        <span className="font-medium uppercase text-gray dark:text-white opacity-70">YEAR EXPERIENCE</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}