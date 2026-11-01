/**
 * ملف قاعدة البيانات الوهمية للمنتجات (data.js)
 * يحتوي على مصفوفة منتجات قطع غيار السيارات مقسمة حسب الأقسام:
 * (المحرك، الفرامل، الكهرباء) مع رسومات SVG عالية الدقة مدمجة لضمان سرعة التحميل والعمل دون اتصال.
 */

const productsData = [
  {
    id: 1,
    name: "شاحن توربيني مزدوج الأداء (Twin-Scroll Turbocharger)",
    category: "المحرك",
    price: 3450,
    oldPrice: 3900,
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    stockCount: 8,
    availabilityText: "متوفر في المخزون",
    oem: "TRB-ENG-901X",
    compatibility: "مناسب لمحركات 4 و 6 سلندر الرياضية",
    badge: "الأكثر مبيعاً",
    badgeType: "hot",
    description: "شاحن توربيني رياضي مصنوع من سبائك التيتانيوم والألمنيوم المقاومة للحرارة العالية حتى 1050 درجة مئوية، يمنح المحرك زيادة في العزم بنسبة 35% مع استجابة فورية بدون تأخير (Zero Turbo Lag).",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%232a181c"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
        <linearGradient id="metal1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23e2e8f0"/>
          <stop offset="50%" stop-color="%2364748b"/>
          <stop offset="100%" stop-color="%231e293b"/>
        </linearGradient>
        <linearGradient id="redAcc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="%23ff2a3c"/>
          <stop offset="100%" stop-color="%23f97316"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg1)"/>
      <circle cx="200" cy="150" r="115" fill="none" stroke="%23ff2a3c" stroke-opacity="0.15" stroke-width="2" stroke-dasharray="8 6"/>
      <path d="M 200 55 C 265 55, 305 100, 305 155 C 305 215, 255 255, 195 255 C 135 255, 95 210, 95 150 C 95 110, 120 70, 155 55 L 155 25 L 235 25 L 235 58 Z" fill="url(%23metal1)" stroke="%2394a3b8" stroke-width="3"/>
      <circle cx="200" cy="155" r="74" fill="%23090b10" stroke="url(%23redAcc)" stroke-width="10"/>
      <g stroke="%23cbd5e1" stroke-width="4" stroke-linecap="round">
        <line x1="200" y1="90" x2="200" y2="220"/>
        <line x1="135" y1="155" x2="265" y2="155"/>
        <line x1="154" y1="109" x2="246" y2="201"/>
        <line x1="246" y1="109" x2="154" y2="201"/>
      </g>
      <circle cx="200" cy="155" r="22" fill="url(%23redAcc)" stroke="%23ffffff" stroke-width="2"/>
      <circle cx="200" cy="155" r="8" fill="%230f172a"/>
      <rect x="24" y="24" width="90" height="28" rx="8" fill="%23ff2a3c" fill-opacity="0.2" stroke="%23ff2a3c"/>
      <text x="69" y="43" fill="%23ff6b00" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">STAGE 3+</text>
    </svg>`
  },
  {
    id: 2,
    name: "طقم فرامل سيراميك كربوني رياضي (6-Piston Ceramic Brakes)",
    category: "الفرامل",
    price: 2180,
    oldPrice: 2500,
    rating: 4.9,
    reviewsCount: 98,
    inStock: true,
    stockCount: 12,
    availabilityText: "متوفر في المخزون",
    oem: "BRK-CRM-602S",
    compatibility: "جنوط مقاس 18 بوصة فما فوق",
    badge: "أداء رياضي",
    badgeType: "sport",
    description: "أقراص فرامل مهواة ومثقبة من السيراميك الكربوني مع كاليبر 6 مكابس باللون الأحمر الرياضي، توفر قوة كبح استثنائية في السرعات العالية ومقاومة تامة للتآكل والحرارة.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg2" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%2329151a"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
        <linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23cbd5e1"/>
          <stop offset="50%" stop-color="%23475569"/>
          <stop offset="100%" stop-color="%231e293b"/>
        </linearGradient>
        <linearGradient id="caliperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23ff2a3c"/>
          <stop offset="100%" stop-color="%23991b1b"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg2)"/>
      <circle cx="195" cy="155" r="105" fill="url(%23discGrad)" stroke="%2394a3b8" stroke-width="4"/>
      <circle cx="195" cy="155" r="62" fill="%230f172a" stroke="%23f97316" stroke-width="4"/>
      <circle cx="195" cy="155" r="28" fill="%231e293b" stroke="%2364748b" stroke-width="3"/>
      <path d="M 245 68 C 295 85, 318 140, 305 205 C 298 228, 272 238, 250 225 L 235 195 C 250 170, 252 135, 232 105 Z" fill="url(%23caliperGrad)" stroke="%23fca5a5" stroke-width="2.5"/>
      <circle cx="275" cy="115" r="10" fill="%237f1d1d" stroke="%23fca5a5" stroke-width="1.5"/>
      <circle cx="283" cy="150" r="11" fill="%237f1d1d" stroke="%23fca5a5" stroke-width="1.5"/>
      <circle cx="275" cy="185" r="10" fill="%237f1d1d" stroke="%23fca5a5" stroke-width="1.5"/>
      <rect x="24" y="24" width="105" height="28" rx="8" fill="%23f97316" fill-opacity="0.2" stroke="%23f97316"/>
      <text x="76" y="43" fill="%23f97316" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">CERAMIC PRO</text>
    </svg>`
  },
  {
    id: 3,
    name: "بطارية ليثيوم ذكية فائقة القدرة (AGM Lithium Pro 95Ah)",
    category: "الكهرباء",
    price: 980,
    oldPrice: 1150,
    rating: 4.8,
    reviewsCount: 76,
    inStock: true,
    stockCount: 19,
    availabilityText: "متوفر في المخزون",
    oem: "ELC-BAT-950L",
    compatibility: "السيارات الحديثة وأنظمة Start-Stop",
    badge: "ضمان 3 سنوات",
    badgeType: "new",
    description: "بطارية جافة بتقنية AGM وليثيوم هجينة مزودة بشريحة ذكية لحماية الدوائر الكهربائية، توفر تيار بدء تشغيل بارد 950 CCA وعمر افتراضي أطول بـ 3 مرات من البطاريات التقليدية.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg3" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%23172536"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23334155"/>
          <stop offset="100%" stop-color="%230f172a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg3)"/>
      <rect x="115" y="58" width="28" height="22" rx="4" fill="%23ff2a3c" stroke="%23fca5a5" stroke-width="2"/>
      <rect x="257" y="58" width="28" height="22" rx="4" fill="%2338bdf8" stroke="%23bae6fd" stroke-width="2"/>
      <rect x="85" y="76" width="230" height="26" rx="8" fill="%23ff2a3c"/>
      <rect x="90" y="98" width="220" height="145" rx="12" fill="url(%23boxGrad)" stroke="%2364748b" stroke-width="3"/>
      <rect x="125" y="122" width="150" height="55" rx="8" fill="%23090d14" stroke="%23f97316" stroke-width="2"/>
      <text x="200" y="157" fill="%23ff6b00" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">14.4V ⚡</text>
      <line x1="115" y1="198" x2="285" y2="198" stroke="%23475569" stroke-width="4" stroke-linecap="round"/>
      <line x1="115" y1="215" x2="285" y2="215" stroke="%23475569" stroke-width="4" stroke-linecap="round"/>
      <rect x="24" y="24" width="95" height="28" rx="8" fill="%23ff2a3c" fill-opacity="0.2" stroke="%23ff2a3c"/>
      <text x="71" y="43" fill="%23ff2a3c" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">950 CCA</text>
    </svg>`
  },
  {
    id: 4,
    name: "فلتر هواء رياضي كربوني (Carbon Fiber Cold Air Intake)",
    category: "المحرك",
    price: 890,
    oldPrice: 1050,
    rating: 4.7,
    reviewsCount: 64,
    inStock: true,
    stockCount: 15,
    availabilityText: "متوفر في المخزون",
    oem: "ENG-CAI-408C",
    compatibility: "تركيب مباشر متعدد المقاسات",
    badge: "صوت رياضي",
    badgeType: "sport",
    description: "نظام سحب هواء بارد مغلف بالكربون فايبر العازل للحرارة مع فلتر قطني متعدد الطبقات قابل للغسل، يرفع كفاءة الاحتراق ويضيف نغمة رياضية عميقة للمحرك.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg4" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%23261915"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
        <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23ff2a3c"/>
          <stop offset="100%" stop-color="%237f1d1d"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg4)"/>
      <path d="M 85 190 Q 130 190 165 155 L 215 155" fill="none" stroke="%2364748b" stroke-width="38" stroke-linecap="round"/>
      <rect x="195" y="128" width="22" height="54" rx="5" fill="%23f97316"/>
      <polygon points="217,120 315,92 315,218 217,190" fill="url(%23coneGrad)" stroke="%23fca5a5" stroke-width="2.5"/>
      <rect x="312" y="90" width="12" height="130" rx="5" fill="%2394a3b8"/>
      <rect x="24" y="24" width="95" height="28" rx="8" fill="%23f97316" fill-opacity="0.2" stroke="%23f97316"/>
      <text x="71" y="43" fill="%23f97316" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">+18 HP</text>
    </svg>`
  },
  {
    id: 5,
    name: "مجموعة تيل فرامل تيتانيوم بلس (Titanium-Tech Brake Pads)",
    category: "الفرامل",
    price: 420,
    oldPrice: 510,
    rating: 4.8,
    reviewsCount: 215,
    inStock: true,
    stockCount: 30,
    availabilityText: "متوفر في المخزون",
    oem: "BRK-PAD-204T",
    compatibility: "يتوافق مع أغلب سيارات السيدان والـ SUV",
    badge: "بدون ضوضاء",
    badgeType: "hot",
    description: "فحمات فرامل مدعمة بألياف السيراميك والتيتانيوم تمنع صدور الأصوات المزعجة وتقلل غبار الجنوط بنسبة 90%، مع ثبات عالٍ في الأجواء الممطرة والحارة.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg5" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%23221d29"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg5)"/>
      <path d="M 95 110 Q 200 65 305 110 L 290 175 Q 200 140 110 175 Z" fill="%23334155" stroke="%2394a3b8" stroke-width="3"/>
      <path d="M 85 150 Q 200 105 315 150 L 298 220 Q 200 185 102 220 Z" fill="%23ff2a3c" stroke="%23fca5a5" stroke-width="3"/>
      <path d="M 105 158 Q 200 122 295 158 L 282 208 Q 200 178 118 208 Z" fill="%231e293b" stroke="%23f97316" stroke-width="2"/>
      <line x1="200" y1="138" x2="200" y2="192" stroke="%23f97316" stroke-width="5" stroke-linecap="round"/>
      <rect x="24" y="24" width="100" height="28" rx="8" fill="%23ff2a3c" fill-opacity="0.2" stroke="%23ff2a3c"/>
      <text x="74" y="43" fill="%23ff2a3c" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">LOW DUST</text>
    </svg>`
  },
  {
    id: 6,
    name: "دينامو شحن ذكي عالي التيار (High-Output 220A Alternator)",
    category: "الكهرباء",
    price: 1320,
    oldPrice: 1500,
    rating: 4.9,
    reviewsCount: 53,
    inStock: true,
    stockCount: 5,
    availabilityText: "كمية محدودة (5 قطع)",
    oem: "ELC-ALT-220A",
    compatibility: "مناسب للسيارات المزودة بأنظمة صوتية وإضاءة قوية",
    badge: "كمية محدودة",
    badgeType: "warning",
    description: "دينامو مطور بقوة 220 أمبير بملفات نحاسية نقية 100% ومنظم جهد رقمي مدمج، يضمن ثبات الفولتية حتى مع تشغيل التكييف والإضاءة الكاملة على السرعات المنخفضة.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg6" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%23261d14"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg6)"/>
      <circle cx="210" cy="155" r="88" fill="%23334155" stroke="%23cbd5e1" stroke-width="4"/>
      <circle cx="210" cy="155" r="68" fill="%230f172a" stroke="%23f97316" stroke-width="10" stroke-dasharray="14 8"/>
      <circle cx="210" cy="155" r="45" fill="%23475569" stroke="%2394a3b8" stroke-width="3"/>
      <rect x="85" y="115" width="38" height="80" rx="8" fill="%23ff2a3c" stroke="%23fca5a5" stroke-width="2.5"/>
      <rect x="123" y="135" width="25" height="40" fill="%2394a3b8"/>
      <circle cx="210" cy="155" r="18" fill="%23ff2a3c"/>
      <rect x="24" y="24" width="90" height="28" rx="8" fill="%23f97316" fill-opacity="0.2" stroke="%23f97316"/>
      <text x="69" y="43" fill="%23f97316" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">220 AMP</text>
    </svg>`
  },
  {
    id: 7,
    name: "طقم بواجي إيريديوم ليزر (Laser Iridium Spark Plugs x6)",
    category: "الكهرباء",
    price: 360,
    oldPrice: 440,
    rating: 4.9,
    reviewsCount: 189,
    inStock: true,
    stockCount: 25,
    availabilityText: "متوفر في المخزون",
    oem: "ELC-SPK-600I",
    compatibility: "طقم 6 قطع لمحركات البنزين والتيربو",
    badge: "توفير الوقود",
    badgeType: "new",
    description: "شمعات احتراق برأس إيريديوم ملحوم بالليزر بقطر 0.6 ملم تضمن شرارة فائقة القوة، تسارعاً أنعم، وتوفيراً ملحوظاً في استهلاك الوقود حتى 100,000 كم.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg7" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%23192231"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg7)"/>
      <rect x="182" y="45" width="36" height="75" rx="6" fill="%23f8fafc" stroke="%23cbd5e1" stroke-width="2"/>
      <line x1="182" y1="65" x2="218" y2="65" stroke="%23ff2a3c" stroke-width="4"/>
      <line x1="182" y1="80" x2="218" y2="80" stroke="%23ff2a3c" stroke-width="4"/>
      <polygon points="168,120 232,120 240,150 160,150" fill="%2394a3b8" stroke="%23e2e8f0" stroke-width="2"/>
      <rect x="176" y="150" width="48" height="65" rx="4" fill="%23475569" stroke="%23cbd5e1" stroke-width="2"/>
      <rect x="196" y="215" width="8" height="16" fill="%23f97316"/>
      <path d="M 220 215 L 220 242 L 198 242" fill="none" stroke="%2394a3b8" stroke-width="6" stroke-linecap="round"/>
      <circle cx="200" cy="234" r="14" fill="%2338bdf8" fill-opacity="0.35"/>
      <circle cx="200" cy="234" r="5" fill="%23ffffff"/>
      <rect x="24" y="24" width="95" height="28" rx="8" fill="%23ff2a3c" fill-opacity="0.2" stroke="%23ff2a3c"/>
      <text x="71" y="43" fill="%23ff2a3c" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">IRIDIUM X6</text>
    </svg>`
  },
  {
    id: 8,
    name: "عمود كامات رياضي مطروق (Forged Stage-2 Camshaft)",
    category: "المحرك",
    price: 1750,
    oldPrice: 2050,
    rating: 4.8,
    reviewsCount: 41,
    inStock: true,
    stockCount: 6,
    availabilityText: "متوفر في المخزون",
    oem: "ENG-CAM-208F",
    compatibility: "محركات V6 و V8 عالية الأداء",
    badge: "فولاذ مطروق",
    badgeType: "sport",
    description: "عمود كامات مصنع بتقنية الطرق الحراري (CNC Billet Steel) بتوقيت فتح صمامات محسن لزيادة تدفق الهواء والوقود في دورات المحرك العالية (RPM).",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg8" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%2329191c"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg8)"/>
      <rect x="45" y="140" width="310" height="26" rx="6" fill="%2364748b" stroke="%23cbd5e1" stroke-width="2"/>
      <circle cx="70" cy="153" r="46" fill="%23ff2a3c" stroke="%23fca5a5" stroke-width="3"/>
      <circle cx="70" cy="153" r="18" fill="%230f172a" stroke="%23cbd5e1" stroke-width="3"/>
      <ellipse cx="145" cy="138" rx="18" ry="38" fill="%2394a3b8" stroke="%23f8fafc" stroke-width="2"/>
      <ellipse cx="195" cy="168" rx="18" ry="38" fill="%2394a3b8" stroke="%23f8fafc" stroke-width="2"/>
      <ellipse cx="245" cy="138" rx="18" ry="38" fill="%2394a3b8" stroke="%23f8fafc" stroke-width="2"/>
      <ellipse cx="295" cy="168" rx="18" ry="38" fill="%2394a3b8" stroke="%23f8fafc" stroke-width="2"/>
      <rect x="24" y="24" width="95" height="28" rx="8" fill="%23f97316" fill-opacity="0.2" stroke="%23f97316"/>
      <text x="71" y="43" fill="%23f97316" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">CNC BILLET</text>
    </svg>`
  },
  {
    id: 9,
    name: "طقم خراطيم فرامل فولاذية مضفرة (Braided Stainless Brake Lines)",
    category: "الفرامل",
    price: 540,
    oldPrice: 650,
    rating: 4.7,
    reviewsCount: 67,
    inStock: true,
    stockCount: 14,
    availabilityText: "متوفر في المخزون",
    oem: "BRK-LIN-400S",
    compatibility: "طقم كامل أمامي وخلفي (4 خطوط)",
    badge: "استجابة فورية",
    badgeType: "new",
    description: "خراطيم فرامل مغلفة بشبكة من الفولاذ المقاوم للصدأ تمنع انتفاخ الأنابيب تحت الضغط العالي وتمنح دواسة الفرامل شعوراً صلباً ودقيقاً في جميع الظروف.",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <radialGradient id="bg9" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="%23261722"/>
          <stop offset="100%" stop-color="%230f131a"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" rx="18" fill="url(%23bg9)"/>
      <ellipse cx="200" cy="160" rx="95" ry="62" fill="none" stroke="%2394a3b8" stroke-width="14"/>
      <ellipse cx="200" cy="160" rx="95" ry="62" fill="none" stroke="%23ff2a3c" stroke-width="10" stroke-dasharray="10 6"/>
      <ellipse cx="200" cy="160" rx="68" ry="42" fill="none" stroke="%23cbd5e1" stroke-width="12"/>
      <rect x="115" y="205" width="38" height="22" rx="5" fill="%23f97316" stroke="%23fed7aa" stroke-width="2"/>
      <circle cx="98" cy="216" r="14" fill="none" stroke="%23e2e8f0" stroke-width="6"/>
      <rect x="245" y="205" width="38" height="22" rx="5" fill="%23ff2a3c" stroke="%23fca5a5" stroke-width="2"/>
      <circle cx="300" cy="216" r="14" fill="none" stroke="%23e2e8f0" stroke-width="6"/>
      <rect x="24" y="24" width="105" height="28" rx="8" fill="%23ff2a3c" fill-opacity="0.2" stroke="%23ff2a3c"/>
      <text x="76" y="43" fill="%23ff2a3c" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">DOT CERTIFIED</text>
    </svg>`
  }
];
