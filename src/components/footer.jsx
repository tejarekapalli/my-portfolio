function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0f172a] py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Rekapalli Teja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;