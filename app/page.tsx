export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center min-h-[55vh] bg-[#0a0a0a] relative overflow-hidden px-6 py-12">
            <div className="absolute w-[600px] h-[600px]" />

            <div className="flex flex-col justify-center items-center relative z-10 max-w-[60vw] w-full ">

                <h1 className="text-[clamp(2.4rem,4.5vw,6rem)] text-[#f0ede6] text-center uppercase w-full leading-18 outfit-400 mb-4">
                    The simplest way to <em className="text-[#AAFF00] not-italic">attend</em> tech <em className="text-[#AAFF00] not-italic">events</em>
                </h1>
            </div>

            <div></div>
        </div>
    );
}