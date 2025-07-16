const Footer = () => {
  return (
    <footer className="text-white/70 py-4 px-4 border-t border-white/10 text-sm">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-1">
        <p className="flex items-center gap-2 justify-center text-xs sm:text-sm text-white/60">
          Built with
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png"
            alt="Beating Heart"
            width="18"
            height="18"
            className="inline-block animate-pulse"
          />
          by Vinit Kumar Pothuraju
        </p>
        <p className="text-[11px] sm:text-xs text-gray-500">
          © {new Date().getFullYear()} Vinit Kumar Pothuraju. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
