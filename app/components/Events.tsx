'use client';

import { useState } from 'react';
import EventCard from "@/app/components/EventCard";

// Mock Data structure containing both standard and remote events
const dummyEvents = [
    {
        id: "1",
        title: "Global Cyber Security Hackathon",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
        date: "Oct 24, 2026",
        location: "Remote"
    },
    {
        id: "2",
        title: "Silicon Valley AI Dev Summit",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
        date: "Nov 12, 2026",
        location: "San Francisco, CA"
    },
    {
        id: "3",
        title: "Next.js 16 Launch Party & Sprint",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
        date: "Dec 05, 2026",
        location: "Remote"
    },
    {
        id: "4",
        title: "Open Source Contributors Meetup",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        date: "Jan 15, 2027",
        location: "Remote"
    },
    {
        id: "5",
        title: "Cloud & DevOps Conference",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        date: "Feb 03, 2027",
        location: "San Francisco, CA"
    },
    {
        id: "6",
        title: "AI Agents Builder Workshop",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
        date: "Mar 21, 2027",
        location: "Remote"
    }
];

export default function Events() {
    // State to track which filter option is active
    const [activeFilter, setActiveFilter] = useState<'all' | 'remote'>('all');

    // Filter logic based on the user selection
    const filteredEvents = dummyEvents.filter(event => {
        if (activeFilter === 'remote') {
            return event.location.toLowerCase() === 'remote';
        }
        return true; // returns all events
    });

    return (
        <div className="text-sm border border-zinc-800 bg-zinc-950/40 rounded-sm min-h-[80vh] p-6 flex flex-col gap-6">

            {/* Filter Controls Row */}
            <div className="flex gap-2 pb-6 border-b border-zinc-900">
                <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-1.5 rounded-sm font-medium transition-all ${
                        activeFilter === 'all'
                            ? 'bg-[#AAFF00] text-black shadow-lg shadow-[#AAFF00]/10'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                >
                    All Events
                </button>
                <button
                    onClick={() => setActiveFilter('remote')}
                    className={`px-4 py-1.5 rounded-sm font-medium transition-all ${
                        activeFilter === 'remote'
                            ? 'bg-[#AAFF00] text-black shadow-lg shadow-[#AAFF00]/10'
                            : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                >
                    Remote Only
                </button>
            </div>

            {/* Scrollable Grid Display Wrapper */}
            <div className="flex-1 overflow-y-auto pr-1">
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                id={event.id}
                                title={event.title}
                                image={event.image}
                                date={event.date}
                                location={event.location}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-zinc-500">
                        No events found matching this filter criteria.
                    </div>
                )}
            </div>

        </div>
    );
}
