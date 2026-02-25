
import React, { useState, useEffect } from 'react';

interface ExchangeRate {
    pair: string;
    rate: number;
    change: number;
    icon: string;
}

const CurrencyWidget: React.FC = () => {
    const [rates, setRates] = useState<ExchangeRate[]>([
        { pair: 'PEN/GBP', rate: 4.72, change: 0.2, icon: '🇵🇪→🇬🇧' },
        { pair: 'GBP/USD', rate: 1.27, change: -0.1, icon: '🇬🇧→🇺🇸' },
        { pair: 'FTSE 100', rate: 7640.33, change: -0.05, icon: '📈' },
        { pair: 'COBRE', rate: 3.84, change: 1.1, icon: '🔶' }
    ]);

    const [lastUpdate, setLastUpdate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate real-time updates with small random fluctuations
            setRates(prevRates => prevRates.map(rate => ({
                ...rate,
                rate: rate.rate + (Math.random() - 0.5) * 0.05,
                change: (Math.random() - 0.5) * 2
            })));
            setLastUpdate(new Date());
        }, 60000); // Update every 60 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <span className="text-primary font-bold text-[11px] uppercase tracking-widest block mb-2">Live Market Data</span>
                        <h3 className="text-3xl font-serif font-bold text-primary italic">Mercados en Tiempo Real</h3>
                    </div>
                    <div className="text-xs text-gray-400">
                        Actualizado: {lastUpdate.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {rates.map((rate, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-2xl">{rate.icon}</span>
                                <span className={`text-xs font-bold px-2 py-1 rounded ${rate.change >= 0
                                        ? 'bg-green-50 text-green-600'
                                        : 'bg-red-50 text-red-600'
                                    }`}>
                                    {rate.change >= 0 ? '▲' : '▼'} {Math.abs(rate.change).toFixed(2)}%
                                </span>
                            </div>

                            <div className="space-y-1">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    {rate.pair}
                                </div>
                                <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                    {rate.pair === 'FTSE 100'
                                        ? rate.rate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                        : rate.rate.toFixed(2)
                                    }
                                </div>
                                {rate.pair === 'COBRE' && (
                                    <div className="text-[9px] text-gray-400">USD/lb</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                        Datos simulados con fines demostrativos. Para información oficial, consulte fuentes financieras autorizadas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CurrencyWidget;
