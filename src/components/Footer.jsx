

export default function Footer(){
    return(
        <footer className="sticky bottom-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        
        {/* Gradient border on top */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        
        {/* Items of the footer */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center
                        py-3 md:py-0 md:h-10 gap-3 md:gap-0">
            <div className="flex justify-center md:justify-start px-5">
                <span>Automation</span>
                </div>
            <div className="text-center">
            <span>Year</span>
            </div>
            <div className="flex justify-center md:justify-end px-5">
            <span>Login</span>
            </div>
        </div>
        
        </footer>
    )
}
