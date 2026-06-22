"use client";

import Script from "next/script";

export function SectionAd() {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `(function(fgvbk){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = fgvbk || {};
s.src = "\/\/massivesalad.com\/b-X_V.sydTGbla0\/Y\/WmcN\/Kekme9\/u\/ZqU\/lckjPFTlcexLNAjTEf0EOfT_cftZNAzzEW2\/MCTaU\/wVM\/Qu";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`,
      }}
      strategy="afterInteractive"
    />
  );
}
