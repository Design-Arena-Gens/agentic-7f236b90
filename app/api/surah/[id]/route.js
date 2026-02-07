import { NextResponse } from 'next/server';

const surahContent = {
  1: {
    arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمَٰنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,
    translation: `Allah ke naam se jo bohat meherbaan aur reham wala hai.
Tamam taareef Allah ke liye hai jo tamam jahano ka Rabb hai.
Bohat meherbaan, reham wala.
Qayamat ke din ka maalik.
Hum sirf Teri ibadat karte hain aur sirf Tujh se madad maangte hain.
Hume seedhi raah dikha.
Un logon ki raah jo Teri nehmaton wale hain, na ki un ki jo gazab wale hain aur na bhatkne walon ki.`,
    reflection: `Yeh Quran ki pehli aur sabse ahmiyat Soorah hai jo hume Allah ki taareef, ibadat aur hidayat ki dua sikhati hai.`,
  },
  103: {
    arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
وَالْعَصْرِ
إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ`,
    translation: `Allah ke naam se jo bohat meherbaan aur reham wala hai.
Qasam hai waqt ki,
Beshak insaan nuqsaan mein hai,
Siwaye un logon ke jo iman laye aur nek amal kiye aur aik dusre ko haq ki naseehat ki aur sabr ki wasiyat ki.`,
    reflection: `Yeh chhoti magar azeem soorah humein batati hai ke kamyabi ke liye iman, nek amal, haq ki tableegh aur sabr zaruri hai.`,
  },
  112: {
    arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
    translation: `Allah ke naam se jo bohat meherbaan aur reham wala hai.
Kaho: Woh Allah hai jo ek hai,
Allah be-niyaz hai,
Na kisi ko janam diya aur na kisi se paida hua,
Aur koi bhi uske barabar nahi.`,
    reflection: `Yeh soorah Allah ki towheed aur wahdat ko bayaan karti hai - ke Allah aik hai, be-niyaz hai aur koi uske jaisa nahi.`,
  },
  113: {
    arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
مِن شَرِّ مَا خَلَقَ
وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
    translation: `Allah ke naam se jo bohat meherbaan aur reham wala hai.
Kaho: Main panaah maangta hoon subah ke Rabb ki,
Har makhlooq ki burai se,
Aur andhere ki burai se jab woh chha jaye,
Aur ganth mein phoonk marne walon ki burai se,
Aur hasid ki burai se jab woh hasad kare.`,
    reflection: `Yeh soorah humein Allah ki panah maangna sikhati hai har qisam ki burai, jadoo aur hasad se.`,
  },
  114: {
    arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلَٰهِ النَّاسِ
مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَالنَّاسِ`,
    translation: `Allah ke naam se jo bohat meherbaan aur reham wala hai.
Kaho: Main panaah maangta hoon logon ke Rabb ki,
Logon ke baadshah ki,
Logon ke ilaah ki,
Chhup chhup ke waswase daalne wale ki burai se,
Jo logon ke dilon mein waswase dalta hai,
Jinnat mein se aur insano mein se.`,
    reflection: `Quran ki aakhri soorah jo humein Shaitan ke waswaason se Allah ki panah maangna sikhati hai.`,
  }
};

const generateGenericPost = (surah) => {
  const reflections = [
    `Yeh soorah humein Allah ki qudrat aur rehmat ke baare mein sochne par majboor karti hai.`,
    `Is soorah mein Allah ne apne bandon ko hidayat aur naseehaten di hain.`,
    `Yeh ayat humein nek amal aur Allah par tawakkul ki taraf bulaati hai.`,
    `Is soorah ka paigham humari zindagi ko behtar banane ka zariya hai.`,
    `Allah ki ye ayaat humein sabr, shukr aur ikhlaas sikhati hain.`
  ];

  const randomReflection = reflections[Math.floor(Math.random() * reflections.length)];

  return `📖 Quran Majeed – Surah ${surah.name}
${surah.arabic}

🕋 Surah Number: ${surah.number}
📄 Ayat: ${surah.verses}
📚 Meaning: ${surah.meaning}

💡 Paighaam:
${randomReflection}

🤲 Allah humein is soorah par amal karne ki taufeeq ata farmaye. Ameen.

#Quran #DailyQuran #Surah${surah.name.replace(/[^a-zA-Z]/g, '')} #IslamicReminder #QuranForLife #IslamicPost #DailyAyat`;
};

export async function GET(request, { params }) {
  const id = parseInt(params.id);

  const surahData = {
    1: { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", verses: 7, meaning: "The Opening" },
    2: { number: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286, meaning: "The Cow" },
    3: { number: 3, name: "Aal-E-Imran", arabic: "آل عمران", verses: 200, meaning: "Family of Imran" },
    4: { number: 4, name: "An-Nisa", arabic: "النساء", verses: 176, meaning: "The Women" },
    5: { number: 5, name: "Al-Maidah", arabic: "المائدة", verses: 120, meaning: "The Table" },
    103: { number: 103, name: "Al-Asr", arabic: "العصر", verses: 3, meaning: "The Declining Day" },
    112: { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, meaning: "The Sincerity" },
    113: { number: 113, name: "Al-Falaq", arabic: "الفلق", verses: 5, meaning: "The Daybreak" },
    114: { number: 114, name: "An-Nas", arabic: "الناس", verses: 6, meaning: "The Mankind" }
  };

  const surah = surahData[id] || {
    number: id,
    name: `Surah-${id}`,
    arabic: "سورة",
    verses: 10,
    meaning: "Divine Chapter"
  };

  let post;

  if (surahContent[id]) {
    const content = surahContent[id];
    post = `📖 Quran Majeed – Surah ${surah.name}
${surah.arabic}

🕋 ${content.arabic}

🌍 Roman Urdu Translation:
${content.translation}

💡 Paighaam:
${content.reflection}

🤲 Allah humein is soorah par amal karne ki taufeeq ata farmaye. Ameen.

#Quran #DailyQuran #Surah${surah.name.replace(/[^a-zA-Z]/g, '')} #IslamicReminder #QuranForLife #IslamicPost #DailyAyat`;
  } else {
    post = generateGenericPost(surah);
  }

  return NextResponse.json({ post, surah });
}
