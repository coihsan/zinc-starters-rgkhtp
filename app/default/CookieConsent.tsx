"use client";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    // Periksa apakah ada cookie consent
    if (hasCookie("localConsent")) {
      // Jika ada, set `showConsent` ke false
      setShowConsent(false);
    }
  }, []);

  return (
    <div>
      {showConsent && (
        <div id="cookie-consent">
          <h2>Cookie Consent</h2>
          <p>
            Situs ini menggunakan cookie untuk meningkatkan pengalaman pengguna.
            Dengan melanjutkan, Anda setuju dengan penggunaan cookie kami.
          </p>
          <button type="button" onClick={() => setShowConsent(false)}>
            Setuju
          </button>
          <button type="button" onClick={() => setShowConsent(true)}>
            Tolak
          </button>
        </div>
      )}
    </div>
  );
}

export default CookieConsent;
