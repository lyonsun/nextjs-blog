import Image from "next/image";

export default function Clients() {
    return (
        <section className="clients">
            <div className="max-w-[1200px] mx-auto my-32 px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-20">
                    <div className="logo justify-self-center">
                        <Image className="hover:brightness-50 transition ease-linear duration-300" width="200" height="70" src="/images/clients/logo-1.svg" alt="logo 1" />
                    </div>
                    <div className="logo justify-self-center">
                        <Image className="hover:brightness-50 transition ease-linear duration-300" width="200" height="70" src="/images/clients/logo-2.svg" alt="logo 2" />
                    </div>
                    <div className="logo justify-self-center">
                        <Image className="hover:brightness-50 transition ease-linear duration-300" width="200" height="70" src="/images/clients/logo-3.svg" alt="logo 3" />
                    </div>
                    <div className="logo justify-self-center">
                        <Image className="hover:brightness-50 transition ease-linear duration-300" width="200" height="70" src="/images/clients/logo-4.svg" alt="logo 4" />
                    </div>
                </div>
            </div>
        </section>
    )
}