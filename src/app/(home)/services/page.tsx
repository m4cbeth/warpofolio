import { servicespage } from "@/data/content-data";
import { ServicesCard } from "@/components/ServicesCard";
import { ContactForm } from "@/components/ContactForm";

export default function ServicesPage() {
    return (
        <main>
            <section className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
                <div className="mx-auto max-w-4xl px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-5xl border-b-2 font-thin tracking-tight text-slate-900 dark:text-white">
                            {servicespage.heading}
                        </h1>
                    </div>
                    <div className="mt-10 grid gap-6">
                        {servicespage.sections.map((section, idx) => (
                            <div className="relative">
                                <div className="absolute z-10 mt-5 ml-10 text-9xl font-black opacity-50 text-white">
                                    {idx+1}
                                </div>
                                <ServicesCard key={idx} section={section} />
                            </div>
                        ))}
                    </div>
                    <div key={"cta"} className="relative">
                        <div className=" z-10 mt-5 ml-10 text-9xl font-black opacity-50 bordder border-white">
                            5
                        </div>
                        <div className="pl-5 pt-5 text-6xl absolute inset-0 bordder border-white text-white opacity-100 z-10">
                            get in touch
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )
}
