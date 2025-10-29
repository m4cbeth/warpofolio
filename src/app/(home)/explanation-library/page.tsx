import Link from "next/link";

export default function ExplanationLibraryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
            {`The Explanation Library`}
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {`Your best prospects never make it to a discovery call.`}
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {`Not because you're not qualified. Not because your service isn't valuable.`}
        </p>

        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {`Because when they Google "should I move my LIRA before retirement" at 11pm, someone else shows up with an answer. And you don't.`}
        </p>

        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          {`By the time they're ready to book a meeting, they've already decided who seems like the expert. And it's not based on your credentials—it's based on who showed them what they know before the meeting even happened.`}
        </p>

        <div className="mt-10 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
          <p className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {`The Trap Most Advisors Are In:`}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {`You explain complex concepts brilliantly to clients every single day.`}
          </p>
        </div>
      </section>

      {/* The Trap */}
      <section className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {`These explanations are your competitive advantage. They're what make clients say "finally, someone who actually explained this clearly."`}
          </p>

          <div className="space-y-3 mb-8 ml-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <p className="text-lg text-gray-600 dark:text-gray-400">{`Why pension income splitting saves $8k/year for a retiring couple`}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <p className="text-lg text-gray-600 dark:text-gray-400">{`How incorporating makes sense at $150k revenue (but not at $90k)`}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <p className="text-lg text-gray-600 dark:text-gray-400">{`Why the Smith Manoeuvre works in Calgary real estate but fails in Toronto condos`}</p>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {`But they only happen`} <span className="font-semibold text-gray-900 dark:text-gray-50">{`after someone becomes a client.`}</span>
          </p>

          <p className="text-xl font-bold text-gray-900 dark:text-gray-50 text-center">
            {`What if prospects could experience that clarity before they ever booked a call?`}
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
          {`What We Build: An Explanation Library`}
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {`Think of it like this:`} <span className="font-semibold text-gray-900 dark:text-gray-50">{`Every month, you spend 15 minutes explaining one concept you've explained a hundred times to clients—the same way you'd explain it over coffee.`}</span>
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {`We turn that into:`}
        </p>

        <div className="space-y-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-900 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <p className="text-gray-700 dark:text-gray-300">{`An interactive tool (retirement projection calculator, fee comparison tool, tax strategy visualizer—whatever concept you explained)`}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <p className="text-gray-700 dark:text-gray-300">{`An article that walks through the tool (SEO-optimized, compliance-clean, written in your voice)`}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✓</span>
            <p className="text-gray-700 dark:text-gray-300">{`Social posts that drive traffic to the tool (LinkedIn, X, newsletter content)`}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`Month 1`}</p>
            <p className="text-gray-700 dark:text-gray-300">{`You have one tool prospects can play with`}</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`Month 6`}</p>
            <p className="text-gray-700 dark:text-gray-300">{`You have six tools competitors can't match`}</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`Month 12`}</p>
            <p className="text-gray-700 dark:text-gray-300">{`You have a library that answers every question prospects Google before they hire an advisor`}</p>
          </div>
        </div>
      </section>

      {/* Why Interactive Tools */}
      <section className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {`Why Interactive Tools, Not Just Blog Posts?`}
          </h2>

          <p className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-8">
            {`Because blog posts get skimmed. Tools get used.`}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {`When a prospect:`}
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300">{`Plays with your retirement calculator and sees their actual numbers`}</p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300">{`Uses your fee analyzer and realizes they're overpaying their current advisor`}</p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300">{`Runs your tax strategy visualizer and discovers they're leaving $12k on the table`}</p>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {`They're not just learning. They're`} <span className="font-bold">{`experiencing your expertise.`}</span>
          </p>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
            {`And when they book a discovery call, they're not interviewing you. They're asking "how do I work with you?"`}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
          {`How It Works`}
        </h2>

        {/* Foundation Phase */}
        <div className="mb-12">
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
              {`Month 1-3: Foundation ($1,200/month)`}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {`We build the three tools that solve your biggest prospect objections:`}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  {`Tool #1: Retirement projection calculator`}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 italic">{`(answers: "Am I on track?")`}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  {`Tool #2: Fee comparison analyzer`}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 italic">{`(answers: "What's this actually worth?")`}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  {`Tool #3: Tax optimization visualizer`}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 italic">{`(answers: "Am I leaving money on the table?")`}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="font-semibold text-gray-900 dark:text-gray-50 mb-3">{`Each tool comes with:`}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-gray-400 dark:text-gray-600 mt-1">✓</span>
                <p className="text-gray-700 dark:text-gray-300">{`An article explaining how to use it (and why it matters)`}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 dark:text-gray-600 mt-1">✓</span>
                <p className="text-gray-700 dark:text-gray-300">{`Social content driving traffic to it`}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 dark:text-gray-600 mt-1">✓</span>
                <p className="text-gray-700 dark:text-gray-300">{`Compliance documentation so your firm greenlights it`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expansion Phase */}
        <div className="p-6 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {`Month 4+: Expansion ($800/month)`}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {`Every month, we build one more tool based on the questions your prospects actually ask:`}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-1">→</span>
              <p className="text-gray-700 dark:text-gray-300">{`LIRA withdrawal strategy calculator`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-1">→</span>
              <p className="text-gray-700 dark:text-gray-300">{`Incorporation decision framework`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-1">→</span>
              <p className="text-gray-700 dark:text-gray-300">{`Pension income splitting optimizer`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-1">→</span>
              <p className="text-gray-700 dark:text-gray-300">{`RRSP vs. TFSA comparison tool`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-1">→</span>
              <p className="text-gray-700 dark:text-gray-300">{`Estate planning cost visualizer`}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900">
          <p className="text-lg text-gray-900 dark:text-gray-50 font-semibold mb-2">
            {`After 12 months, you have a library of 15+ interactive tools that:`}
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
              <p className="text-gray-700 dark:text-gray-300">{`Rank for high-intent Google searches`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
              <p className="text-gray-700 dark:text-gray-300">{`Convert website visitors into discovery calls`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
              <p className="text-gray-700 dark:text-gray-300">{`Position you as the obvious expert in your niche`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* This Isn't Content Marketing */}
      <section className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {`This Isn't "Content Marketing." It's Authority Infrastructure.`}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {`Most advisors treat their website like a business card: static, generic, forgettable.`}
          </p>

          <p className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-8">
            {`You're building something different: a library of proof that you can explain complex concepts simply.`}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`Every tool`}</p>
              <p className="text-gray-700 dark:text-gray-300">{`is a demonstration of how you think`}</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`Every article`}</p>
              <p className="text-gray-700 dark:text-gray-300">{`is a preview of how you work`}</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`Every interaction`}</p>
              <p className="text-gray-700 dark:text-gray-300">{`is a reason to trust you before the first meeting`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
          {`Investment`}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">{`Setup`}</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`$1,500`}</p>
            <p className="text-gray-600 dark:text-gray-400">{`Site framework, compliance review process`}</p>
          </div>

          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">{`First 3 months`}</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{`$1,200`}</p>
            <p className="text-gray-600 dark:text-gray-400">{`Build your core tools`}</p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">{`Ongoing`}</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{`$800`}</p>
            <p className="text-gray-600 dark:text-gray-400">{`One new tool per month + maintenance`}</p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{`Year 1 total:`}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{`$12,300`}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{`Year 2+:`}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{`$9,600/year`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Question */}
      <section className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {`The Real Question:`}
          </h2>

          <p className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            {`How much is a qualified prospect worth to you?`}
          </p>

          <div className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {`If one extra discovery call per month closes into one new client every quarter, and that client is worth $3k/year in fees...`}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 mb-8">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-50 text-center">
              {`This pays for itself with 4 extra clients. Ever.`}
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {`The advisors who dominate online aren't smarter than you. They just showed up consistently with valuable explanations until they became the obvious choice.`}
          </p>

          <p className="text-xl font-semibold text-gray-900 dark:text-gray-50 text-center">
            {`That's what the Explanation Library does. You provide the expertise. We build the infrastructure.`}
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 dark:bg-black border-y border-gray现象-800">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-white mb-6">
            {`Ready to Build Your Authority Library?`}
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            {`The advisors who dominate online showed up consistently.`}
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {`Let's build your Explanation Library. You provide the insights. We build the tools.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              {`Book a free consultation`}
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-violet-900 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
            >
              {`View Pricing`}
            </Link>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            {`We'll show you exactly how the Explanation Library works and what it would look like for your niche.`}
          </p>
        </div>
      </section>
    </div>
  );
}

