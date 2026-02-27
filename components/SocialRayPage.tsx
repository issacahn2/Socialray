"use client";

import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function SocialRayPage() {
    return (
        <div className="min-h-screen relative font-sans selection:bg-ray-primary/30 text-white overflow-x-hidden bg-ray-bg">
            {/* Page Background Shaders - Layered above the base background but below content */}
            <div className="fixed inset-0 z-[2] opacity-80 pointer-events-none">
                <CyberneticGridShader />
            </div>

            {/* Main Content Wrapper - Layered above shaders */}
            <div className="relative z-10">

                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-[1000] glass-nav px-8 py-5 flex justify-between items-center transition-all bg-[#0A0A0A]/80 border-b border-ray-border">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white">
                        Social<span className="text-ray-primary">Ray</span>
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link href="#services" className="text-sm font-medium text-ray-text-dim hover:text-ray-primary transition-colors">Services</Link>
                        <Link href="#packages" className="text-sm font-medium text-ray-text-dim hover:text-ray-primary transition-colors">Pricing</Link>
                        <Link
                            href="https://tally.so/r/jay4Wx"
                            target="_blank"
                            className="bg-ray-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-ray-primary-dark transition-all shadow-sm active:scale-95"
                        >
                            Apply Now
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-ray-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ray-primary/10 border border-ray-primary/20 mb-10">
                            <span className="w-1.5 h-1.5 bg-ray-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-wider uppercase text-ray-primary">Confidential — Qualified Clients Only</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                            THE ONLY TEAM<br />THAT CAN MAKE<br />ANYTHING <span className="text-ray-primary">GO VIRAL</span><br />
                            <span className="text-ray-primary/40">ON X.</span>
                        </h1>
                        <p className="text-ray-text-dim text-lg leading-relaxed max-w-2xl mb-12">
                            We give brands, executives, and companies an unfair advantage on X — using proprietary access to make your posts trend and your audience grow with real targeted followers at scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <Link
                                href="https://tally.so/r/jay4Wx"
                                target="_blank"
                                className="px-10 py-4 bg-ray-primary text-white font-bold text-sm tracking-wide rounded-2xl hover:bg-ray-primary-dark transition-all shadow-lg shadow-ray-primary/20 group"
                            >
                                Start Application
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link
                                href="#results"
                                className="px-10 py-4 bg-ray-card text-ray-text-dim font-bold text-sm tracking-wide rounded-2xl border border-ray-border hover:bg-white/5 transition-all"
                            >
                                View Results
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-16 border-y border-ray-border bg-ray-card/30 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-4xl grid grid-cols-2 gap-12">
                        <div className="text-center group">
                            <div className="text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-105">1M+</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-ray-text-dim/70">Followers Delivered</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl font-bold text-ray-primary mb-2 transition-transform group-hover:scale-105">48H</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-ray-text-dim/70">Avg. Time to Trend</div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-28 px-6" id="services">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-20 flex flex-col items-center text-center">
                            <span className="text-xs font-black tracking-[0.3em] uppercase text-ray-primary block mb-4">— What We Do</span>
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">NOBODY ELSE<br />CAN DO <span className="text-ray-primary">THIS.</span></h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-ray-card p-10 rounded-[32px] border border-ray-border hover:border-ray-primary/30 transition-all relative group overflow-hidden shadow-neo-dark">
                                <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                                <div className="w-12 h-12 bg-ray-primary/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-colors group-hover:bg-ray-primary/20">
                                    <span className="text-ray-primary font-bold text-xl leading-none">01</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-5 relative z-10">Viral Tweet Engineering</h3>
                                <p className="text-ray-text-dim text-base leading-relaxed relative z-10">
                                    We analyze trending content in real time and engineer posts designed to win the algorithm and drive massive organic reach.
                                </p>
                            </div>
                            <div className="bg-ray-card p-10 rounded-[32px] border border-ray-border hover:border-ray-primary/30 transition-all relative group overflow-hidden shadow-neo-dark">
                                <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                                <div className="w-12 h-12 bg-ray-primary/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-colors group-hover:bg-ray-primary/20">
                                    <span className="text-ray-primary font-bold text-xl leading-none">02</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-5 relative z-10">Algorithm Visibility</h3>
                                <p className="text-ray-text-dim text-sm leading-relaxed relative z-10">
                                    Your posts get shown beyond your normal reach. The recommendation system surfaces your content to people who have never heard of you.
                                </p>
                            </div>
                            <div className="bg-ray-card p-10 rounded-[32px] border border-ray-border hover:border-ray-primary/30 transition-all relative group overflow-hidden shadow-neo-dark">
                                <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                                <div className="w-12 h-12 bg-ray-primary/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-colors group-hover:bg-ray-primary/20">
                                    <span className="text-ray-primary font-bold text-xl leading-none">03</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-5 relative z-10">Global Targeting</h3>
                                <p className="text-ray-text-dim text-sm leading-relaxed relative z-10">
                                    We deploy growth campaigns targeting any country, age group, or demographic — building the exact audience your brand needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantage Section */}
                <section className="py-24 px-6 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-ray-border to-transparent"></div>
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-ray-primary block mb-4">— Why SocialRay</span>
                                <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-8">OUR <span className="text-ray-primary">UNFAIR</span><br />ADVANTAGE</h2>
                                <p className="text-ray-text-dim text-lg leading-relaxed">Most agencies use standard tools. We use internal infrastructure and algorithm insights that nobody else has access to.</p>
                            </div>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-ray-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-ray-primary font-bold">→</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white mb-1">Proprietary Access</h4>
                                        <p className="text-ray-text-dim text-base">We operate at infrastructure level — not running standard X ads like everyone else.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-ray-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-ray-primary font-bold">→</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white mb-1">Algorithm Insider Edge</h4>
                                        <p className="text-ray-text-dim text-sm">We know exactly which signals the recommendation engine rewards and engineer around them.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-ray-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-ray-primary font-bold">→</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white mb-1">Real Proof</h4>
                                        <p className="text-ray-text-dim text-sm">6.9M views on one post. 25K to 242K followers in 21 days. We have the receipts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className="py-28 px-6" id="packages">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-ray-primary block mb-4">— Growth Packages</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white">CONFIDENTIAL <span className="text-ray-primary">PRICING</span></h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Package 1 */}
                            <div className="bg-ray-card p-10 rounded-[32px] border border-ray-border flex flex-col items-center text-center relative overflow-hidden shadow-sm transition-all hover:shadow-xl hover:border-ray-primary/20">
                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                                <div className="text-xs font-bold text-ray-primary/70 tracking-widest uppercase mb-6 relative z-10">Package 01</div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Starter Boost</h3>
                                <div className="mb-2 relative z-10">
                                    <span className="text-5xl font-bold text-white">$5,000</span>
                                </div>
                                <div className="text-xs font-bold text-ray-text-dim tracking-widest uppercase mb-10 relative z-10">14 DAY DURATION</div>
                                <ul className="space-y-5 mb-12 text-base text-ray-text-dim w-full relative z-10">
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> 10,000+ Followers Growth</li>
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> Profile Optimization</li>
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> Niche & Interest Targeting</li>
                                </ul>
                                <Link
                                    href="https://tally.so/r/jay4Wx"
                                    target="_blank"
                                    className="w-full text-center border-2 border-ray-primary text-ray-primary font-bold text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-ray-primary hover:text-white transition-all shadow-sm shadow-ray-primary/5 relative z-10"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Package 2 */}
                            <div className="bg-ray-card p-10 rounded-[40px] border-4 border-ray-primary flex flex-col items-center text-center relative overflow-hidden shadow-2xl scale-105 z-10">
                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                                <div className="absolute top-8 right-[-40px] bg-ray-primary text-white text-xs font-black py-1.5 px-12 rotate-45 uppercase z-20">Popular</div>
                                <div className="text-sm font-bold text-ray-primary tracking-widest uppercase mb-6 relative z-10">Package 02</div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Authority Builder</h3>
                                <div className="mb-2 relative z-10">
                                    <span className="text-6xl font-bold text-white">$50,000</span>
                                </div>
                                <div className="text-sm font-bold text-ray-text-dim tracking-widest uppercase mb-10 relative z-10">30 DAY DURATION</div>
                                <ul className="space-y-5 mb-12 text-base text-white font-medium w-full relative z-10">
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> 100,000+ Followers Growth</li>
                                    <li className="flex gap-3 items-center justify-center text-ray-primary font-bold"><span className="text-ray-primary text-white">→</span> Trending Push on X</li>
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> Authority & Credibility Boost</li>
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> Viral Tweet Distribution</li>
                                </ul>
                                <Link
                                    href="https://tally.so/r/jay4Wx"
                                    target="_blank"
                                    className="w-full text-center bg-ray-primary text-white font-bold text-xs tracking-widest uppercase py-5 rounded-2xl shadow-lg shadow-ray-primary/30 hover:bg-ray-primary-dark transition-all relative z-10"
                                >
                                    Get Started Now
                                </Link>
                            </div>

                            {/* Package 3 */}
                            <div className="bg-ray-card p-10 rounded-[32px] border border-ray-border flex flex-col items-center text-center relative overflow-hidden shadow-sm transition-all hover:shadow-xl hover:border-ray-primary/20">
                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                                <div className="text-xs font-bold text-ray-primary/70 tracking-widest uppercase mb-6 relative z-10">Package 03</div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Enterprise</h3>
                                <div className="mb-2 relative z-10">
                                    <span className="text-5xl font-bold text-white">$150K+</span>
                                </div>
                                <div className="text-xs font-bold text-ray-text-dim tracking-widest uppercase mb-10 relative z-10">CUSTOM DURATION</div>
                                <ul className="space-y-5 mb-12 text-base text-ray-text-dim w-full relative z-10">
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> Custom Follower Scope</li>
                                    <li className="flex gap-3 items-center justify-center font-semibold text-white"><span className="text-ray-primary">→</span> Algorithm Domination</li>
                                    <li className="flex gap-3 items-center justify-center"><span className="text-ray-primary">→</span> Dedicated Manager</li>
                                </ul>
                                <Link
                                    href="https://tally.so/r/jay4Wx"
                                    target="_blank"
                                    className="w-full text-center border-2 border-ray-primary text-ray-primary font-bold text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-ray-primary hover:text-white transition-all shadow-sm shadow-ray-primary/5 relative z-10"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="py-28 px-6 overflow-hidden" id="results">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-ray-primary block mb-4">— Real Results</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">FROM 25K TO <span className="text-ray-primary">242.3K</span><br />FOLLOWERS</h2>
                            <p className="text-ray-text-dim text-xs font-bold tracking-widest uppercase">Tech Sector Account — NDA Protected</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
                            <div className="bg-ray-card p-6 rounded-3xl border border-ray-border text-center">
                                <div className="text-3xl font-bold text-white">25K</div>
                                <div className="text-xs font-bold text-ray-text-dim/60 uppercase tracking-widest mt-1">Before</div>
                            </div>
                            <div className="bg-ray-primary/10 p-6 rounded-3xl border border-ray-primary/20 text-center">
                                <div className="text-3xl font-bold text-ray-primary">242.3K</div>
                                <div className="text-xs font-bold text-ray-primary/60 uppercase tracking-widest mt-1">After</div>
                            </div>
                            <div className="bg-ray-primary p-6 rounded-3xl text-center shadow-lg shadow-ray-primary/20">
                                <div className="text-3xl font-bold text-white">869%</div>
                                <div className="text-xs font-bold text-white/60 uppercase tracking-widest mt-1">Growth</div>
                            </div>
                            <div className="bg-ray-card p-6 rounded-3xl border border-ray-border text-center">
                                <div className="text-3xl font-bold text-white">21</div>
                                <div className="text-xs font-bold text-ray-text-dim/60 uppercase tracking-widest mt-1">Days</div>
                            </div>
                        </div>

                        <div className="bg-ray-card p-12 rounded-[40px] border border-ray-border relative group overflow-hidden">
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ray-primary/10 text-ray-primary text-xs font-black tracking-widest uppercase rounded-full mb-8 relative z-10">
                                <span className="w-1.5 h-1.5 bg-ray-primary rounded-full"></span>
                                Top Viral Performance
                            </div>
                            <div className="space-y-8 relative z-10">
                                <p className="text-xl italic text-white/90 leading-relaxed md:max-w-xl">"48 hours ago we asked: what if AI agents had their own place to hang out? today moltbook has: 2,129 AI agents..."</p>
                                <div className="flex items-center gap-12 pt-8 border-t border-ray-border/50">
                                    <div>
                                        <div className="text-4xl font-bold text-ray-primary">6.9M</div>
                                        <div className="text-[10px] font-bold text-ray-text-dim uppercase tracking-widest">Views</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">19K</div>
                                        <div className="text-[10px] font-bold text-ray-text-dim uppercase tracking-widest">Likes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 text-center relative overflow-hidden bg-ray-primary">
                    <div className="absolute inset-0 bg-gradient-to-br from-ray-primary-dark via-ray-primary to-ray-primary-light opacity-80"></div>

                    {/* CTA Background Shader */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <ShaderAnimation />
                    </div>

                    <div className="container mx-auto max-w-2xl relative z-10">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/70 block mb-6 leading-none">Limited Availability</span>
                        <h2 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1] mb-8">READY TO BE OUR<br />NEXT <span className="underline decoration-white/30 underline-offset-8">CASE STUDY?</span></h2>
                        <p className="text-white/80 text-lg mb-12 font-medium">We only take on a limited number of high-stakes clients per month.</p>
                        <Link
                            href="https://tally.so/r/jay4Wx"
                            target="_blank"
                            className="inline-block bg-white text-ray-primary font-bold text-sm tracking-[0.2em] uppercase px-12 py-6 rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95"
                        >
                            START YOUR APPLICATION →
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-20 px-6 border-t border-ray-border">
                    <div className="container mx-auto max-w-5xl flex flex-col items-center gap-10">
                        <div className="text-2xl font-black tracking-tight text-white">
                            Social<span className="text-ray-primary">Ray</span>
                        </div>
                        <div className="flex gap-8">
                            <Link href="#services" className="text-xs font-bold uppercase tracking-widest text-ray-text-dim hover:text-ray-primary transition-colors">Services</Link>
                            <Link href="#packages" className="text-xs font-bold uppercase tracking-widest text-ray-text-dim hover:text-ray-primary transition-colors">Pricing</Link>
                        </div>
                        <div className="text-center text-xs font-bold tracking-[0.2em] text-ray-text-dim/50 leading-loose uppercase">
                            Operating across US & Korea — Confidential<br />
                            © 2024 SocialRay Agency
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
