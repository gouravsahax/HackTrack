import Link from "next/link";

interface EventCardProps {
    id: string;
    title: string;
    image: string;
    date: string;
    location: string;
    participants: string;
    organizedBy: string;
}

export default function EventCard({
                                      id,
                                      title,
                                      image,
                                      date,
                                      location,
                                      participants,
                                      organizedBy,
                                  }: EventCardProps) {
    return (
        <Link href={`/events/${id}`} className="block group">
            <div className="overflow-hidden text-left transition-all duration-300 group-hover:scale-[1.02]">

                {/* Image */}
                <div className="relative w-full h-50 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                    {/* Date */}
                    <div className="absolute bottom-2 left-2 z-10 bg-black/75 backdrop-blur-sm px-3 py-1 rounded-sm border border-white/10">
                        <span className="text-white text-xs font-mono font-semibold tracking-wider uppercase">
                            {date}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="py-4 flex flex-col gap-2">
                    <h3 className="text-white text-base font-bold line-clamp-1 transition-colors group-hover:text-[#AAFF00]">
                        {title}
                    </h3>

                    <div className="text-zinc-400 text-xs flex items-center gap-2">
                        <span>📍</span>
                        <span>{location}</span>
                    </div>

                    <div className="text-zinc-400 text-xs flex items-center gap-2">
                        <span>👥</span>
                        <span>{participants}</span>
                    </div>

                    <div className="text-zinc-400 text-xs flex items-center gap-2">
                        <span>🏷️</span>
                        <span>Organized by {organizedBy}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
}