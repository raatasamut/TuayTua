import Link from "next/link";

type FooterProps = {
  locale: string;
};

export default function Footer({ locale }: FooterProps) {
  const translations = {
    th: {
      home: "หน้าแรก",
      ourStory: "ประวัติความเป็นมา",
      ingredients: "แหล่งผลิตวัตถุดิบ",
      whereToBuy: "จุดจำหน่าย",
      menu: "เมนู",
      copyright: "© 2024 ถ้วยถั่ว. สงวนลิขสิทธิ์.",
      contact: "ติดต่อเรา",
      address: "123 ถนนสุขุมวิท กรุงเทพฯ 10110",
      phone: "โทร: 02-123-4567",
      email: "อีเมล: info@tuaytua.com"
    },
    en: {
      home: "Home",
      ourStory: "Our Story",
      ingredients: "Ingredients",
      whereToBuy: "Where to Buy",
      menu: "Menu",
      copyright: "© 2024 TuayTua. All rights reserved.",
      contact: "Contact Us",
      address: "123 Sukhumvit Road, Bangkok 10110",
      phone: "Tel: 02-123-4567",
      email: "Email: info@tuaytua.com"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

  return (
    <footer className="bg-soy-cream border-t border-warm-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-warm-brown mb-4">{locale === "th" ? "ถ้วยถั่ว" : "TuayTua"}</h3>
            <p className="text-warm-brown/70 text-sm">{t.copyright}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-warm-brown mb-4">{t.contact}</h3>
            <address className="not-italic text-warm-brown/70 text-sm">
              <p>{t.address}</p>
              <p className="mt-2">{t.phone}</p>
              <p className="mt-2">{t.email}</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-warm-brown mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href={`/${locale}`}
                  className="text-warm-brown/70 hover:text-soybean-yellow"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/our-story`}
                  className="text-warm-brown/70 hover:text-soybean-yellow"
                >
                  {t.ourStory}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/ingredients`}
                  className="text-warm-brown/70 hover:text-soybean-yellow"
                >
                  {t.ingredients}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/menu`}
                  className="text-warm-brown/70 hover:text-soybean-yellow"
                >
                  {t.menu}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/where-to-buy`}
                  className="text-warm-brown/70 hover:text-soybean-yellow"
                >
                  {t.whereToBuy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
