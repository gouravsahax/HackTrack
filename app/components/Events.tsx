'use client';

import EventCard from "@/app/components/EventCard";

// Mock Data structure containing both standard and remote events
const dummyEvents = [
    {
        id: "1",
        title: "Global Cyber Security Hackathon",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Oct 24, 2026",
        location: "Remote",
        participants: "1,240 participants",
        organizedBy: "CyberX Foundation"
    },
    {
        id: "2",
        title: "Silicon Valley AI Dev Summit",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Nov 12, 2026",
        location: "San Francisco, CA",
        participants: "860 participants",
        organizedBy: "AI Builders League"
    },
    {
        id: "3",
        title: "Next.js 16 Launch Party & Sprint",
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 05, 2026",
        location: "Remote",
        participants: "2,100 participants",
        organizedBy: "Vercel Community"
    },
    {
        id: "4",
        title: "Global Cyber Security Hackathon",
        image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Oct 24, 2026",
        location: "Remote",
        participants: "1,240 participants",
        organizedBy: "CyberX Foundation"
    },
    {
        id: "5",
        title: "Silicon Valley AI Dev Summit",
        image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Nov 12, 2026",
        location: "San Francisco, CA",
        participants: "860 participants",
        organizedBy: "AI Builders League"
    },
    {
        id: "6",
        title: "Next.js 16 Launch Party & Sprint",
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 05, 2026",
        location: "Remote",
        participants: "2,100 participants",
        organizedBy: "Vercel Community"
    }
];

export default function Events() {
    return (
        <div className="text-sm border border-zinc-800 bg-zinc-950/40 rounded-sm min-h-[80vh] p-6 flex flex-col gap-6">

            {/* Filter Controls Row */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-zinc-900">
                <div className="px-4 py-1.5 rounded-sm bg-zinc-900 text-zinc-100 font-medium">
                    All Events
                </div>
                <div className="px-4 py-1.5 rounded-sm bg-zinc-900 text-zinc-100 font-medium">
                    My Country
                </div>
                <div className="px-4 py-1.5 rounded-sm bg-zinc-900 text-zinc-100 font-medium">
                    My State
                </div>
                <div className="px-4 py-1.5 rounded-sm bg-zinc-900 text-zinc-100 font-medium">
                    My College
                </div>
                <div className="px-4 py-1.5 rounded-sm bg-zinc-900 text-zinc-400 font-medium">
                    Remote Only
                </div>
            </div>

            {/* Scrollable Grid Display Wrapper */}
            <div className="flex-1 overflow-y-auto pr-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dummyEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            image={event.image}
                            date={event.date}
                            location={event.location}
                            participants={event.participants}
                            organizedBy={event.organizedBy}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}