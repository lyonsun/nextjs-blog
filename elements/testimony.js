import Image from "next/image"

export default function Testimony() {
    return (
        <section className="testimony">
            <div className="testimony__heading bg-neutral dark:bg-gray pt-16 md:pt-24 pb-32 md:pb-40 px-5 text-center">
                <div className="heading-text relative max-w-[1200px] mx-auto flex flex-col items-center">
                    <h1 className="uppercase font-medium text-primary-600 pt-10 pb-4 px-10 bg-[url('/images/triangle.svg')] bg-no-repeat bg-[length:80px_80px] bg-[center_right_1rem] md:bg-center">Testimony</h1>
                    <div className="font-semibold text-3xl lg:text-5xl leading-[56px] mt-2 mb-3 dark:text-white">What Our Clients Say.</div>
                    <div className="heading-description text-gray dark:text-white opacity-70 max-w-[600px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
                    </div>
                </div>
            </div>
            <div className="testimony__content dark:bg-gray pb-10">
                <div className="testimony__list max-w-[1200px] mx-auto -mt-24 z-20 px-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="testimony__card p-10 bg-white dark:bg-dark-gray dark:text-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition ease-linear duration-300">
                        <div className="testimony__card-rating flex gap-1">
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                        </div>
                        <div className="testimony__card-content py-8 font-medium text-lg">
                            Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
                        </div>
                        <div className="testimony__card-footer flex gap-4 justify-between items-center">
                            <div className="testimony__card-author flex flex-wrap items-center gap-4">
                                <div className="testimony__card-author-image bg-primary-600 h-16 w-16 rounded-full overflow-hidden">
                                    <Image src={`https://unsplash.it/id/${Math.floor(Math.random() * 100)}/100/100`} alt="Testimony Author" width={100} height={100} />
                                </div>
                                <div className="testimony__card-author-info">
                                    <div className="testimony__card-author-name font-medium text-lg">
                                        David Gueta
                                    </div>
                                    <div className="testimony__card-author-position opacity-50">
                                        UI/UX Designer
                                    </div>
                                </div>
                            </div>
                            <div className="testimony__card-review-icon">
                                <i className="fa-regular fa-message fa-3x text-primary-600"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimony__card p-10 bg-white dark:bg-dark-gray dark:text-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition ease-linear duration-300">
                        <div className="testimony__card-rating flex gap-1">
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                            <i className="fa-regular fa-star fa-xl text-yellow"></i>
                        </div>
                        <div className="testimony__card-content py-8 font-medium text-lg">
                            Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
                        </div>
                        <div className="testimony__card-footer flex gap-4 justify-between items-center">
                            <div className="testimony__card-author flex flex-wrap items-center gap-4">
                                <div className="testimony__card-author-image bg-primary-600 h-16 w-16 rounded-full overflow-hidden">
                                    <Image src={`https://unsplash.it/id/${Math.floor(Math.random() * 100)}/100/100`} alt="Testimony Author" width={100} height={100} />
                                </div>
                                <div className="testimony__card-author-info">
                                    <div className="testimony__card-author-name font-medium text-lg">
                                        David Gueta
                                    </div>
                                    <div className="testimony__card-author-position opacity-50">
                                        UI/UX Designer
                                    </div>
                                </div>
                            </div>
                            <div className="testimony__card-review-icon">
                                <i className="fa-regular fa-message fa-3x text-primary-600"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}