import { RxHamburgerMenu } from "react-icons/rx";
import { MdToggleOn, MdToggleOff, MdOutlineClose } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = ({ isON }) => {
  const imageUrl =
    "https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752660174/IMG-20250715-WA0002_xrwuem-removebg-preview_qdht1o.png";

  const [languageCategory, setLanguageCategory] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const OpenIconHamburger = () => setIsMenuOpen(true);
  const closeIconHamburger = () => setIsMenuOpen(false);
  const onToggleInmobileView = () => setLanguageCategory((prev) => !prev);

  const dropdownItems = [
    "చదువు",
    "న్యూస్",
    "ఈనాడు",
    "మకరం",
    "ఈ తరం",
    "ఆరోగ్యం",
    "హోమ్ బ్యూటీ",
    "హోమ్ హెల్త్",
    "ఫ్యాషన్",
    "వెబ్ స్టోరీస్",
  ];

  const dropdownItemsEnglish = [
    "Education",
    "News",
    "Eenadu",
    "Makaram",
    "This Generation",
    "Health",
    "Home Beauty",
    "Home Health",
    "Fashion",
    "Web Stories",
  ];

  const inkaItemsTelugu = [
    "ఫోటోలు",
    "వీడియోలు",
    "చెఫ్ ప్రత్యేకం",
    "సండే మ్యాగజైన్",
    "క్యాలెండర్",
    "రాశిఫలాలు",
    "జోక్స్",
    "ట్రెండింగ్",
  ];

  const inkaItemsEnglish = [
    "Photos",
    "Videos",
    "Chef Special",
    "Sunday Magazine",
    "Calendar",
    "Horoscope",
    "Jokes",
    "Trending",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="Header-container">
        {/* Telangana Dropdown */}
        <div
          className="text dropdown-parent"
          onMouseEnter={() => setShowDropdown("telangana")}
          onMouseLeave={() => setShowDropdown(null)}
        >
          {isON || languageCategory ? "Telangana" : "తెలంగాణ"} ▼
          {showDropdown === "telangana" && (
            <div className="dropdown-menu">
              <p className="dropdown-item">
                {isON || languageCategory ? "State News" : "రాష్ట్ర వార్తలు"}
              </p>
              <p className="dropdown-item">
                {isON || languageCategory ? "District News" : "జిల్లా వార్తలు"}
              </p>
            </div>
          )}
        </div>

        {/* Andhra Pradesh Dropdown */}
        <div
          className="text dropdown-parent"
          onMouseEnter={() => setShowDropdown("andhra")}
          onMouseLeave={() => setShowDropdown(null)}
        >
          {isON || languageCategory ? "Andhra Pradesh" : "ఆంధ్రప్రదేశ్"} ▼
          {showDropdown === "andhra" && (
            <div className="dropdown-menu">
              <p className="dropdown-item">
                {isON || languageCategory ? "State News" : "రాష్ట్ర వార్తలు"}
              </p>
              <p className="dropdown-item">
                {isON || languageCategory ? "District News" : "జిల్లా వార్తలు"}
              </p>
            </div>
          )}
        </div>

        <p className="text" id="home">
          {isON || languageCategory ? "National" : "జాతీయం"}
        </p>
        <p className="text" id="home">
          {isON || languageCategory ? "Cinema" : "సినిమా"}
        </p>
        <p className="text" id="home">
          {isON || languageCategory ? "Business" : "బిజినెస్"}
        </p>
        <p className="text" id="home">
          {isON || languageCategory ? "Sports" : "క్రీడలు"}
        </p>

        {/* Feature Pages Dropdown */}
        <div
          className="text dropdown-parent"
          onMouseEnter={() => setShowDropdown("features")}
          onMouseLeave={() => setShowDropdown(null)}
        >
          {isON || languageCategory ? "Feature Pages" : "ఫీచర్ పేజీలు"} ▼
          {showDropdown === "features" && (
            <div className="dropdown-menu">
              {(isON || languageCategory
                ? dropdownItemsEnglish
                : dropdownItems
              ).map((item, i) => (
                <p key={i} className="dropdown-item">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Inka Dropdown */}
        <div
          className="text dropdown-parent"
          onMouseEnter={() => setShowDropdown("inka")}
          onMouseLeave={() => setShowDropdown(null)}
        >
          {isON || languageCategory ? "More" : "ఇంకా"} ▼
          {showDropdown === "inka" && (
            <div className="dropdown-menu">
              {(isON || languageCategory ? inkaItemsEnglish : inkaItemsTelugu).map(
                (item, i) => (
                  <p key={i} className="dropdown-item">
                    {item}
                  </p>
                )
              )}
            </div>
          )}
        </div>

        {/* Links */}
        <a
          href="https://www.rtiexpressnews.com/"
          target="__blank"
          className="text epaper"
          id="home"
        >
          <p>Epaper</p>
        </a>
        <p className="text" id="home">
          RTI Activist
        </p>
        <a
          className="text epaper"
          id="home"
          target="__blank"
          href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit"
        >
          <p>RTI Reporter</p>
        </a>

        {/* Contact Us Link */}
        <a href="/ContactUs.html" className="text" id="home">
          {isON || languageCategory ? "Contact Us" : "మమ్మల్ని సంప్రదించండి"}
        </a>

        {/* About Link */}
        <a
          href="/About.html"
          className="text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isON || languageCategory ? "About" : "గురించి"}
        </a>
      </nav>

      {/* Mobile Header */}
      <nav className="mobile-view-small-large-screen-hamburger-icon-container">
        <img src={imageUrl} className="mobile-logo-rti-express" alt="RTI EXPRESS" />
        <div onClick={onToggleInmobileView} className="categories-container-on-mobile-view">
          {isON || languageCategory ? (
            <MdToggleOn size={30} color="green" />
          ) : (
            <MdToggleOff size={30} color="gray" />
          )}
          <p className="language">{isON || languageCategory ? "English" : "తెలుగు"}</p>
        </div>
        {!isMenuOpen && (
          <button onClick={OpenIconHamburger} className="hamburger-button">
            <RxHamburgerMenu />
          </button>
        )}
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="right-side-drawer">
          <button className="close-button-mobile-view" onClick={closeIconHamburger}>
            <MdOutlineClose />
          </button>

          {/* Telangana */}
          <div>
            <p>{isON || languageCategory ? "Telangana" : "తెలంగాణ"}</p>
            <div className="dropdown-menu-mobile">
              <p className="dropdown-item">{isON || languageCategory ? "State News" : "రాష్ట్ర వార్తలు"}</p>
              <p className="dropdown-item">{isON || languageCategory ? "District News" : "జిల్లా వార్తలు"}</p>
            </div>
          </div>

          {/* Andhra Pradesh */}
          <div>
            <p>{isON || languageCategory ? "Andhra Pradesh" : "ఆంధ్రప్రదేశ్"}</p>
            <div className="dropdown-menu-mobile">
              <p className="dropdown-item">{isON || languageCategory ? "State News" : "రాష్ట్ర వార్తలు"}</p>
              <p className="dropdown-item">{isON || languageCategory ? "District News" : "జిల్లా వార్తలు"}</p>
            </div>
          </div>

          <p>{isON || languageCategory ? "National" : "జాతీయం"}</p>
          <p>{isON || languageCategory ? "Cinema" : "సినిమా"}</p>
          <p>{isON || languageCategory ? "Business" : "బిజినెస్"}</p>
          <p>{isON || languageCategory ? "Sports" : "క్రీడలు"}</p>

          {/* Feature Pages */}
          <div>
            <p>{isON || languageCategory ? "Feature Pages" : "ఫీచర్ పేజీలు"}</p>
            <div className="dropdown-menu-mobile">
              {(isON || languageCategory ? dropdownItemsEnglish : dropdownItems).map((item, i) => (
                <p key={i} className="dropdown-item">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Inka */}
          <div>
            <p>{isON || languageCategory ? "More" : "ఇంకా"}</p>
            <div className="dropdown-menu-mobile">
              {(isON || languageCategory ? inkaItemsEnglish : inkaItemsTelugu).map((item, i) => (
                <p key={i} className="dropdown-item">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Footer */}
          <a
            href="https://www.rtiexpressnews.com/"
            target="__blank"
            className="text epaper"
            id="home"
          >
            <p>Epaper</p>
          </a>
          <p className="text" id="home">
            RTI Activist
          </p>
          <a
            className="text epaper"
            id="home"
            target="__blank"
            href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit"
          >
            <p>RTI Reporter</p>
          </a>

          {/* Contact Us Link in mobile */}
          <a href="/ContactUs.html" className="text" id="home">
            {isON || languageCategory ? "Contact Us" : "మమ్మల్ని సంప్రదించండి"}
          </a>

          {/* About Link in mobile */}
          <a
            className="text"
            href="/About.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isON || languageCategory ? "About" : "గురించి"}
          </a>

          <p id="home">hello@rtiexpress.com</p>
          <hr className="horizontal-line" />
          <div className="social-media-links-container">
            <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="__blank">
              <FaFacebook size={20} className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com/rtiexpress/" target="__blank">
              <FaInstagram size={20} className="social-media-icon" />
            </a>
            <a href="https://www.youtube.com/@rtiexpress667" target="__blank">
              <FaYoutube size={20} className="social-media-icon" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
