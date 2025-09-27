import { servicespage } from "@/data/content-data";
import { ServicesCard } from "@/components/ServicesCard";
import { ContactSection } from "@/components/ContactSection";

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
                            <ServicesCard key={idx} section={section} />
                        ))}
                    </div>
                    <div className="">
                        <ContactSection />
                    </div>
                </div>
            </section>
        </main>
    )
}
