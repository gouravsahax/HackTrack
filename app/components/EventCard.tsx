import Link from "next/link";

interface EventCardProps {
    id: string;
    title: string;
    image: string;
    date: string;
    location: string;
}

export default function EventCard({
                                      id,
                                      title,
                                      image,
                                      date,
                                      location,
                                  }: EventCardProps) {
    return (
        <Link href={`/events/${id}`} className="block group">
            <div className="border border-zinc-800 bg-zinc-950 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#AAFF00]/50 text-left">

                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden bg-zinc-900">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                    <span className="text-[#AAFF00] text-xs font-mono font-semibold tracking-wider uppercase">
                        {date}
                    </span>

                    <h3 className="text-white text-base font-bold line-clamp-1 transition-colors group-hover:text-[#AAFF00]">
                        {title}
                    </h3>

                    <div className="text-zinc-400 text-xs flex items-center gap-1">
                        <span>📍</span>
                        <span>{location}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
}