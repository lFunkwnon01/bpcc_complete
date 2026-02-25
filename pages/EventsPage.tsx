
import React from 'react';
import { MOCK_EVENTS } from '../mockData';

const EventsPage: React.FC = () => {
    return (
        <div className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <h1 className="text-6xl font-serif font-bold text-primary mb-4 italic">Eventos</h1>
                        <p className="text-gray-500 text-lg">Próximos encuentros, webinars y sesiones de networking.</p>
                    </div>
                </div>

                {/* Categories / Filters */}
                <div className="flex gap-4 mb-12 border-b border-gray-200 pb-2">
                    <button className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-2">Todos los Eventos</button>
                    <button className="text-gray-400 font-bold text-xs uppercase tracking-widest border-b-2 border-transparent pb-2 hover:text-primary transition-colors">Presenciales</button>
                    <button className="text-gray-400 font-bold text-xs uppercase tracking-widest border-b-2 border-transparent pb-2 hover:text-primary transition-colors">Virtuales</button>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_EVENTS.map(event => (
                        <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="aspect-[16/9] relative overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-primary text-white flex flex-col items-center justify-center w-14 h-14 rounded-lg font-bold">
                                    <span className="text-xl leading-none">{event.day}</span>
                                    <span className="text-[10px] uppercase">{event.month}</span>
                                </div>
                                <div className="absolute top-4 right-4 z-10 bg-accent text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                                    {event.type}
                                </div>
                                <img src={`https://picsum.photos/seed/${event.id}/600/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={event.title} />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">{event.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-3">{event.description}</p>
                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
