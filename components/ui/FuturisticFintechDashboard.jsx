import React from 'react';
import {
    LayoutDashboard,
    BarChart3,
    Receipt,
    Search,
    ChevronRight,
    TrendingUp,
    MoreHorizontal,
    Briefcase,
    Zap,
    Users
} from 'lucide-react';

// --- Custom Colors and Styles (for a self-contained component) ---

// Custom classes for this design's aesthetic:
// - glowing-border-purple-green: Implements the thick, main container gradient border.
// - text-glow-pink/green: Applies a text shadow for the neon effect.

const SidebarItem = ({ icon: Icon, label, active }) => (
    <div
        className={`group flex items-center p-3 rounded-lg transition-all cursor-pointer 
            ${active ? 'bg-pink-600/20 text-white shadow-lg shadow-pink-500/30' : 'text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
    >
        <Icon className={`w-5 h-5 transition ${active ? 'text-pink-400' : 'group-hover:text-green-400'}`} />
        <span className="ml-3 text-sm">{label}</span>
    </div>
);

const TransactionItem = ({ name, amount, isProfit = true }) => (
    <li className="flex justify-between items-center py-1.5 border-b border-gray-700/50 last:border-b-0 text-xs">
        <span className="text-gray-400 truncate max-w-[70%]">{name}</span>
        <span className={`font-medium ${isProfit ? 'text-green-400' : 'text-pink-400'}`}>
            {isProfit ? '+' : '-'} ${amount}
        </span>
    </li>
);

const Bar = ({ height, color }) => (
    <div className="flex-shrink-0 w-1.5 mx-[1px] rounded-t-sm bg-gray-600/50 overflow-hidden">
        <div 
            className={`h-full ${color} transition-all duration-1000 ease-out`} 
            style={{ height: `${height}%` }} 
        />
    </div>
);

const AssetIcon = ({ label, color }) => (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${color} border border-white/20 shadow-md shadow-black/50`}>
        {label.substring(0, 1)}
    </div>
);

const FuturisticFintechDashboard = () => {

    const chartData = [80, 75, 50, 90, 65, 40, 85, 70, 95, 60, 80, 75];

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden py-10">

            {/* --- Background Glow/Noise --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-gray-950/80"></div>
                {/* Purple/Pink Main Glow Source */}
                <div className="absolute top-0 w-full h-[50vh] bg-pink-700/10 mix-blend-screen blur-[100px] opacity-50"></div>
                {/* Subtle Green Accent Glow */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-green-700/10 mix-blend-screen blur-[100px] opacity-30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                {/* --- Hero Section: Headline & CTA --- */}
                <header className="text-center mb-16 pt-10 max-w-3xl mx-auto opacity-0 animate-fade-in">
                    {/* Small Logo Placeholder - Using Lucide icon for simplicity */}
                    <div className="inline-block mb-6 p-2 rounded-full border-2 border-white/50 shadow-md shadow-white/30">
                        <Zap className="w-5 h-5 text-white" />
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                        Trade successfully, regardless of market conditions
                    </h1>
                    <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">
                        Automated DCA investing platform, spreading investments over time to reduce risk and grow wealth steadily.
                    </p>

                    <div className="mt-8 flex justify-center space-x-4">
                        <button className="px-6 py-2 bg-white text-black font-semibold rounded-full transition-colors hover:bg-gray-200">
                            Get Started
                        </button>
                        <button className="px-6 py-2 text-white border border-white/20 rounded-full bg-white/5 transition-colors hover:bg-white/10">
                            Learn More
                        </button>
                    </div>
                </header>

                {/* --- Dashboard Card / Analytics Panel --- */}
                <section className="opacity-0 animate-fade-in delay-300">
                    <div
                        className={`p-10 rounded-3xl bg-gray-900/40 backdrop-blur-xl shadow-2xl transition duration-500 ease-in-out`}
                        style={{
                            // Implement the thick, glowing gradient border
                            boxShadow: '0 0 100px rgba(236, 72, 153, 0.4)', // Outer pink glow
                            border: '3px solid transparent',
                            background: 'linear-gradient(rgba(26, 32, 44, 0.6), rgba(26, 32, 44, 0.6)) padding-box, linear-gradient(to right, #ec4899, #10b981) border-box',
                            borderRadius: '24px',
                        }}
                    >
                        <div className="flex">
                            {/* --- Left Sidebar inside the card --- */}
                            <div className="w-48 pr-6 border-r border-gray-700/50 space-y-5">
                                <div className="flex items-center text-gray-400 mb-6">
                                    <Search className="w-4 h-4 mr-2" />
                                    <input
                                        placeholder="Search"
                                        className="bg-transparent text-sm w-full outline-none"
                                    />
                                </div>
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Menu</h3>
                                <SidebarItem icon={LayoutDashboard} label="Dashboard" active={true} />
                                <SidebarItem icon={BarChart3} label="Analytics" active={false} />
                                <SidebarItem icon={Receipt} label="Transactions" active={false} />
                                <SidebarItem icon={Briefcase} label="Portfolio" active={false} />
                            </div>

                            {/* --- Main Analytics Content --- */}
                            <div className="flex-1 pl-8 grid grid-cols-3 gap-8">

                                {/* --- Column 1: Total Balance / Transactions --- */}
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Total Balance</h2>
                                        <MoreHorizontal className="w-4 h-4 text-gray-500 hover:text-white transition cursor-pointer" />
                                    </div>

                                    <p className="text-4xl font-extrabold text-white tracking-tighter mb-4">
                                        $74,503.<span className="text-gray-500">00</span>
                                    </p>
                                    
                                    <div className="space-y-3 mb-6 text-sm">
                                        <p className="text-gray-300">Total assets invested: <span className="text-pink-400 font-medium">$59,963.79</span></p>
                                        <p className="text-gray-300">Total earned (net profit): <span className="text-green-400 font-medium">+$14,539.21</span></p>
                                    </div>

                                    <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 max-h-40 overflow-y-auto">
                                        <h3 className="text-xs text-gray-500 mb-2">Recent Trades</h3>
                                        <ul className="space-y-1">
                                            <TransactionItem name="Sell BTC @ 65,000" amount="5,000.00" isProfit={true} />
                                            <TransactionItem name="Buy ETH DCA Strategy" amount="1,500.00" isProfit={false} />
                                            <TransactionItem name="Funding Withdrawal" amount="300.00" isProfit={false} />
                                            <TransactionItem name="Rebalance Fee" amount="12.50" isProfit={false} />
                                            <TransactionItem name="Stake Rewards" amount="45.21" isProfit={true} />
                                        </ul>
                                    </div>
                                </div>

                                {/* --- Column 2: Monthly Investment / Assets --- */}
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Monthly Investment</h2>
                                    </div>

                                    <p className="text-4xl font-extrabold text-white tracking-tighter mb-2">$2,500</p>
                                    <div className="flex items-center text-sm text-gray-400 mb-6">
                                        <ChevronRight className="w-4 h-4 mr-1 text-green-400" />
                                        Next cycle in 14 days
                                    </div>

                                    <h3 className="text-xs text-gray-500 mb-3 uppercase">Asset Distribution</h3>
                                    <div className="flex space-x-4 items-center">
                                        <div className="flex space-x-2">
                                            <AssetIcon label="BTC" color="bg-orange-500/80 text-white" />
                                            <AssetIcon label="ETH" color="bg-blue-500/80 text-white" />
                                            <AssetIcon label="ADA" color="bg-cyan-500/80 text-white" />
                                        </div>
                                        <div className="text-xs text-gray-400 space-y-1">
                                            <p>BTC 60%</p>
                                            <p>ETH 30%</p>
                                            <p>Other 10%</p>
                                        </div>
                                    </div>
                                </div>

                                {/* --- Column 3: Strategy Performance / Chart --- */}
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Strategy Performance</h2>
                                        <span className="text-xs text-green-400 font-medium flex items-center">
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            +24.3%
                                        </span>
                                    </div>

                                    <p className="text-4xl font-extrabold text-white tracking-tighter mb-4">$59,963.<span className="text-gray-500">79</span></p>

                                    <div className="flex justify-between items-end h-24 pt-4">
                                        {chartData.map((height, index) => (
                                            <Bar
                                                key={index}
                                                height={height}
                                                // Alternate bar colors (Pink/Green)
                                                color={index % 2 === 0 ? 'bg-pink-500 shadow-lg shadow-pink-500/50' : 'bg-green-500 shadow-lg shadow-green-500/50'}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-2 flex justify-between">
                                        <span>0</span>
                                        <span>1M</span>
                                        <span>3M</span>
                                        <span>6M</span>
                                        <span>1Y</span>
                                        <span>Max</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FuturisticFintechDashboard;