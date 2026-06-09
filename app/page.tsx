export default function Home() {
    return (
        <main className="min-h-screen w-full overflow-hidden bg-black text-[#f0ede6]">
            <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">

                    <h1 className="max-w-5xl text-[clamp(2.25rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                        The simplest way to{" "}
                        <em className="not-italic text-[#AAFF00]">attend</em> tech{" "}
                        <em className="not-italic text-[#AAFF00]">events</em>
                    </h1>

                    <p className="max-w-2xl text-sm leading-6 text-[#f0ede6]/75 sm:text-base">
                        Discover, join, track and manage events in a easy and clean, focused experience
                    </p>
                </div>

                <div className="mt-auto pb-8 text-center text-sm text-[#f0ede6]/45">
                    Events
                </div>
            </section>
        </main>
    );
}