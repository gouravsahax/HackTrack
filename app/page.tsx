export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center min-h-[55vh] bg-[#0a0a0a] relative overflow-hidden px-6 py-12">
            <div className="absolute w-[600px] h-[600px]" />

            <div className="flex flex-col gap-4 justify-center items-center relative z-10 max-w-[60vw] w-full ">

                <h1 className="text-[clamp(2.4rem,4.5vw,6rem)] text-[#f0ede6] text-center uppercase m-0 w-full leading-18">
                    The simplest way to attend <em className="not-italic italic text-[#AAFF00]">tech events</em>
                </h1>

                <p className="text-[16px] text-[#f0ede6]/35 font-light tracking-[0.08em] uppercase m-0 pt-3 w-full text-center">
                    Create, discover, attend and manage tech events in one place.
                </p>
            </div>

            <div></div>
        </div>
    );
}