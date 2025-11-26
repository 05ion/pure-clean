import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <a href="/" className="transition-opacity hover:opacity-80">
            <img src={logo} alt="PureClean" className="h-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
