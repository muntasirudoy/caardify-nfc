"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GoogleTagManager = () => {
    const pathname = usePathname();

    useEffect(() => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
            event: "pageview",
            page: pathname,
        });
    }, [pathname]);

    return (
        <>
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJRQJTB3');
          `,
                }}
            />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-2Q5NCDSEF4"
                strategy="afterInteractive"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-2Q5NCDSEF4');
            `,
                }}
            />
        </>
    );
};

export default GoogleTagManager;
