function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">

                <div>

                    <h3 className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-xl font-bold text-transparent">
                        VideoAI
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                        AI-powered video enhancement with automated background blur,
                        smart captions, and export-ready results.
                    </p>

                </div>

                <div className="flex flex-col items-center gap-3 md:items-end">

                    <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                        • AI Video Processing
                    </div>

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} VideoAI. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;