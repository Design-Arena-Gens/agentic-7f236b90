'use client';

import { useState, useEffect } from 'react';

const quranData = [
  { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", verses: 7, meaning: "The Opening" },
  { number: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286, meaning: "The Cow" },
  { number: 3, name: "Aal-E-Imran", arabic: "آل عمران", verses: 200, meaning: "Family of Imran" },
  { number: 4, name: "An-Nisa", arabic: "النساء", verses: 176, meaning: "The Women" },
  { number: 5, name: "Al-Maidah", arabic: "المائدة", verses: 120, meaning: "The Table" },
  { number: 6, name: "Al-Anam", arabic: "الأنعام", verses: 165, meaning: "The Cattle" },
  { number: 7, name: "Al-Araf", arabic: "الأعراف", verses: 206, meaning: "The Heights" },
  { number: 8, name: "Al-Anfal", arabic: "الأنفال", verses: 75, meaning: "The Spoils of War" },
  { number: 9, name: "At-Tawbah", arabic: "التوبة", verses: 129, meaning: "The Repentance" },
  { number: 10, name: "Yunus", arabic: "يونس", verses: 109, meaning: "Jonah" },
  { number: 11, name: "Hud", arabic: "هود", verses: 123, meaning: "Hud" },
  { number: 12, name: "Yusuf", arabic: "يوسف", verses: 111, meaning: "Joseph" },
  { number: 13, name: "Ar-Rad", arabic: "الرعد", verses: 43, meaning: "The Thunder" },
  { number: 14, name: "Ibrahim", arabic: "ابراهيم", verses: 52, meaning: "Abraham" },
  { number: 15, name: "Al-Hijr", arabic: "الحجر", verses: 99, meaning: "The Rocky Tract" },
  { number: 16, name: "An-Nahl", arabic: "النحل", verses: 128, meaning: "The Bee" },
  { number: 17, name: "Al-Isra", arabic: "الإسراء", verses: 111, meaning: "The Night Journey" },
  { number: 18, name: "Al-Kahf", arabic: "الكهف", verses: 110, meaning: "The Cave" },
  { number: 19, name: "Maryam", arabic: "مريم", verses: 98, meaning: "Mary" },
  { number: 20, name: "Ta-Ha", arabic: "طه", verses: 135, meaning: "Ta-Ha" },
  { number: 21, name: "Al-Anbiya", arabic: "الأنبياء", verses: 112, meaning: "The Prophets" },
  { number: 22, name: "Al-Hajj", arabic: "الحج", verses: 78, meaning: "The Pilgrimage" },
  { number: 23, name: "Al-Muminun", arabic: "المؤمنون", verses: 118, meaning: "The Believers" },
  { number: 24, name: "An-Nur", arabic: "النور", verses: 64, meaning: "The Light" },
  { number: 25, name: "Al-Furqan", arabic: "الفرقان", verses: 77, meaning: "The Criterion" },
  { number: 26, name: "Ash-Shuara", arabic: "الشعراء", verses: 227, meaning: "The Poets" },
  { number: 27, name: "An-Naml", arabic: "النمل", verses: 93, meaning: "The Ant" },
  { number: 28, name: "Al-Qasas", arabic: "القصص", verses: 88, meaning: "The Stories" },
  { number: 29, name: "Al-Ankabut", arabic: "العنكبوت", verses: 69, meaning: "The Spider" },
  { number: 30, name: "Ar-Rum", arabic: "الروم", verses: 60, meaning: "The Romans" },
  { number: 31, name: "Luqman", arabic: "لقمان", verses: 34, meaning: "Luqman" },
  { number: 32, name: "As-Sajdah", arabic: "السجدة", verses: 30, meaning: "The Prostration" },
  { number: 33, name: "Al-Ahzab", arabic: "الأحزاب", verses: 73, meaning: "The Combined Forces" },
  { number: 34, name: "Saba", arabic: "سبإ", verses: 54, meaning: "Sheba" },
  { number: 35, name: "Fatir", arabic: "فاطر", verses: 45, meaning: "Originator" },
  { number: 36, name: "Ya-Sin", arabic: "يس", verses: 83, meaning: "Ya-Sin" },
  { number: 37, name: "As-Saffat", arabic: "الصافات", verses: 182, meaning: "Those who set the Ranks" },
  { number: 38, name: "Sad", arabic: "ص", verses: 88, meaning: "The Letter Sad" },
  { number: 39, name: "Az-Zumar", arabic: "الزمر", verses: 75, meaning: "The Troops" },
  { number: 40, name: "Ghafir", arabic: "غافر", verses: 85, meaning: "The Forgiver" },
  { number: 41, name: "Fussilat", arabic: "فصلت", verses: 54, meaning: "Explained in Detail" },
  { number: 42, name: "Ash-Shuraa", arabic: "الشورى", verses: 53, meaning: "The Consultation" },
  { number: 43, name: "Az-Zukhruf", arabic: "الزخرف", verses: 89, meaning: "The Ornaments of Gold" },
  { number: 44, name: "Ad-Dukhan", arabic: "الدخان", verses: 59, meaning: "The Smoke" },
  { number: 45, name: "Al-Jathiyah", arabic: "الجاثية", verses: 37, meaning: "The Crouching" },
  { number: 46, name: "Al-Ahqaf", arabic: "الأحقاف", verses: 35, meaning: "The Wind-Curved Sandhills" },
  { number: 47, name: "Muhammad", arabic: "محمد", verses: 38, meaning: "Muhammad" },
  { number: 48, name: "Al-Fath", arabic: "الفتح", verses: 29, meaning: "The Victory" },
  { number: 49, name: "Al-Hujurat", arabic: "الحجرات", verses: 18, meaning: "The Rooms" },
  { number: 50, name: "Qaf", arabic: "ق", verses: 45, meaning: "The Letter Qaf" },
  { number: 51, name: "Adh-Dhariyat", arabic: "الذاريات", verses: 60, meaning: "The Winnowing Winds" },
  { number: 52, name: "At-Tur", arabic: "الطور", verses: 49, meaning: "The Mount" },
  { number: 53, name: "An-Najm", arabic: "النجم", verses: 62, meaning: "The Star" },
  { number: 54, name: "Al-Qamar", arabic: "القمر", verses: 55, meaning: "The Moon" },
  { number: 55, name: "Ar-Rahman", arabic: "الرحمن", verses: 78, meaning: "The Beneficent" },
  { number: 56, name: "Al-Waqiah", arabic: "الواقعة", verses: 96, meaning: "The Inevitable" },
  { number: 57, name: "Al-Hadid", arabic: "الحديد", verses: 29, meaning: "The Iron" },
  { number: 58, name: "Al-Mujadila", arabic: "المجادلة", verses: 22, meaning: "The Pleading Woman" },
  { number: 59, name: "Al-Hashr", arabic: "الحشر", verses: 24, meaning: "The Exile" },
  { number: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", verses: 13, meaning: "She that is to be examined" },
  { number: 61, name: "As-Saf", arabic: "الصف", verses: 14, meaning: "The Ranks" },
  { number: 62, name: "Al-Jumuah", arabic: "الجمعة", verses: 11, meaning: "The Congregation" },
  { number: 63, name: "Al-Munafiqun", arabic: "المنافقون", verses: 11, meaning: "The Hypocrites" },
  { number: 64, name: "At-Taghabun", arabic: "التغابن", verses: 18, meaning: "The Mutual Disillusion" },
  { number: 65, name: "At-Talaq", arabic: "الطلاق", verses: 12, meaning: "The Divorce" },
  { number: 66, name: "At-Tahrim", arabic: "التحريم", verses: 12, meaning: "The Prohibition" },
  { number: 67, name: "Al-Mulk", arabic: "الملك", verses: 30, meaning: "The Sovereignty" },
  { number: 68, name: "Al-Qalam", arabic: "القلم", verses: 52, meaning: "The Pen" },
  { number: 69, name: "Al-Haqqah", arabic: "الحاقة", verses: 52, meaning: "The Reality" },
  { number: 70, name: "Al-Maarij", arabic: "المعارج", verses: 44, meaning: "The Ascending Stairways" },
  { number: 71, name: "Nuh", arabic: "نوح", verses: 28, meaning: "Noah" },
  { number: 72, name: "Al-Jinn", arabic: "الجن", verses: 28, meaning: "The Jinn" },
  { number: 73, name: "Al-Muzzammil", arabic: "المزمل", verses: 20, meaning: "The Enshrouded One" },
  { number: 74, name: "Al-Muddaththir", arabic: "المدثر", verses: 56, meaning: "The Cloaked One" },
  { number: 75, name: "Al-Qiyamah", arabic: "القيامة", verses: 40, meaning: "The Resurrection" },
  { number: 76, name: "Al-Insan", arabic: "الإنسان", verses: 31, meaning: "The Man" },
  { number: 77, name: "Al-Mursalat", arabic: "المرسلات", verses: 50, meaning: "The Emissaries" },
  { number: 78, name: "An-Naba", arabic: "النبإ", verses: 40, meaning: "The Tidings" },
  { number: 79, name: "An-Naziat", arabic: "النازعات", verses: 46, meaning: "Those who drag forth" },
  { number: 80, name: "Abasa", arabic: "عبس", verses: 42, meaning: "He Frowned" },
  { number: 81, name: "At-Takwir", arabic: "التكوير", verses: 29, meaning: "The Overthrowing" },
  { number: 82, name: "Al-Infitar", arabic: "الإنفطار", verses: 19, meaning: "The Cleaving" },
  { number: 83, name: "Al-Mutaffifin", arabic: "المطففين", verses: 36, meaning: "The Defrauding" },
  { number: 84, name: "Al-Inshiqaq", arabic: "الإنشقاق", verses: 25, meaning: "The Sundering" },
  { number: 85, name: "Al-Buruj", arabic: "البروج", verses: 22, meaning: "The Mansions of the Stars" },
  { number: 86, name: "At-Tariq", arabic: "الطارق", verses: 17, meaning: "The Morning Star" },
  { number: 87, name: "Al-Ala", arabic: "الأعلى", verses: 19, meaning: "The Most High" },
  { number: 88, name: "Al-Ghashiyah", arabic: "الغاشية", verses: 26, meaning: "The Overwhelming" },
  { number: 89, name: "Al-Fajr", arabic: "الفجر", verses: 30, meaning: "The Dawn" },
  { number: 90, name: "Al-Balad", arabic: "البلد", verses: 20, meaning: "The City" },
  { number: 91, name: "Ash-Shams", arabic: "الشمس", verses: 15, meaning: "The Sun" },
  { number: 92, name: "Al-Lail", arabic: "الليل", verses: 21, meaning: "The Night" },
  { number: 93, name: "Ad-Duhaa", arabic: "الضحى", verses: 11, meaning: "The Morning Hours" },
  { number: 94, name: "Ash-Sharh", arabic: "الشرح", verses: 8, meaning: "The Relief" },
  { number: 95, name: "At-Tin", arabic: "التين", verses: 8, meaning: "The Fig" },
  { number: 96, name: "Al-Alaq", arabic: "العلق", verses: 19, meaning: "The Clot" },
  { number: 97, name: "Al-Qadr", arabic: "القدر", verses: 5, meaning: "The Power" },
  { number: 98, name: "Al-Bayyinah", arabic: "البينة", verses: 8, meaning: "The Clear Proof" },
  { number: 99, name: "Az-Zalzalah", arabic: "الزلزلة", verses: 8, meaning: "The Earthquake" },
  { number: 100, name: "Al-Adiyat", arabic: "العاديات", verses: 11, meaning: "The Courser" },
  { number: 101, name: "Al-Qariah", arabic: "القارعة", verses: 11, meaning: "The Calamity" },
  { number: 102, name: "At-Takathur", arabic: "التكاثر", verses: 8, meaning: "The Rivalry in world increase" },
  { number: 103, name: "Al-Asr", arabic: "العصر", verses: 3, meaning: "The Declining Day" },
  { number: 104, name: "Al-Humazah", arabic: "الهمزة", verses: 9, meaning: "The Traducer" },
  { number: 105, name: "Al-Fil", arabic: "الفيل", verses: 5, meaning: "The Elephant" },
  { number: 106, name: "Quraish", arabic: "قريش", verses: 4, meaning: "Quraish" },
  { number: 107, name: "Al-Maun", arabic: "الماعون", verses: 7, meaning: "The Small kindnesses" },
  { number: 108, name: "Al-Kawthar", arabic: "الكوثر", verses: 3, meaning: "The Abundance" },
  { number: 109, name: "Al-Kafirun", arabic: "الكافرون", verses: 6, meaning: "The Disbelievers" },
  { number: 110, name: "An-Nasr", arabic: "النصر", verses: 3, meaning: "The Divine Support" },
  { number: 111, name: "Al-Masad", arabic: "المسد", verses: 5, meaning: "The Palm Fiber" },
  { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, meaning: "The Sincerity" },
  { number: 113, name: "Al-Falaq", arabic: "الفلق", verses: 5, meaning: "The Daybreak" },
  { number: 114, name: "An-Nas", arabic: "الناس", verses: 6, meaning: "The Mankind" }
];

export default function Home() {
  const [currentSurah, setCurrentSurah] = useState(null);
  const [postedSurahs, setPostedSurahs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [fbPageId, setFbPageId] = useState('');
  const [fbAccessToken, setFbAccessToken] = useState('');

  useEffect(() => {
    const posted = JSON.parse(localStorage.getItem('postedSurahs') || '[]');
    setPostedSurahs(posted);

    const savedPageId = localStorage.getItem('fbPageId') || '';
    const savedToken = localStorage.getItem('fbAccessToken') || '';
    setFbPageId(savedPageId);
    setFbAccessToken(savedToken);

    const nextSurah = quranData.find(s => !posted.includes(s.number));
    if (nextSurah) {
      setCurrentSurah(nextSurah);
    }
  }, []);

  const generatePost = async (surah) => {
    try {
      const response = await fetch(`/api/surah/${surah.number}`);
      const data = await response.json();
      return data.post;
    } catch (error) {
      console.error('Error generating post:', error);
      return null;
    }
  };

  const postToFacebook = async (message) => {
    if (!fbPageId || !fbAccessToken) {
      setStatus('❌ Facebook Page ID aur Access Token darj karein');
      return false;
    }

    try {
      const response = await fetch(`https://graph.facebook.com/v18.0/${fbPageId}/feed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          access_token: fbAccessToken
        })
      });

      const data = await response.json();

      if (data.id) {
        return true;
      } else {
        console.error('FB Error:', data);
        setStatus(`❌ Facebook Error: ${data.error?.message || 'Unknown error'}`);
        return false;
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('❌ Network error');
      return false;
    }
  };

  const handlePost = async () => {
    if (!currentSurah) {
      setStatus('✅ Tamam Soorahs post ho chuki hain!');
      return;
    }

    setLoading(true);
    setStatus('📝 Post tayyar ho rahi hai...');

    const postContent = await generatePost(currentSurah);

    if (!postContent) {
      setStatus('❌ Post generate nahi hui');
      setLoading(false);
      return;
    }

    setStatus('📤 Facebook par post ho rahi hai...');
    const success = await postToFacebook(postContent);

    if (success) {
      const newPosted = [...postedSurahs, currentSurah.number];
      setPostedSurahs(newPosted);
      localStorage.setItem('postedSurahs', JSON.stringify(newPosted));

      setStatus(`✅ Surah ${currentSurah.name} successfully posted!`);

      const nextSurah = quranData.find(s => !newPosted.includes(s.number));
      setCurrentSurah(nextSurah);
    }

    setLoading(false);
  };

  const saveCredentials = () => {
    localStorage.setItem('fbPageId', fbPageId);
    localStorage.setItem('fbAccessToken', fbAccessToken);
    setStatus('✅ Credentials saved!');
  };

  const resetProgress = () => {
    if (confirm('Kya aap sure hain? Yeh sari posting history delete kar dega.')) {
      localStorage.removeItem('postedSurahs');
      setPostedSurahs([]);
      setCurrentSurah(quranData[0]);
      setStatus('🔄 Progress reset ho gaya');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{
            fontSize: '32px',
            color: '#1e3c72',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            🕌 Daily Quran Soorah Bot
          </h1>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Facebook par roz aik Soorah automatically post karein
          </p>
        </div>

        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>⚙️ Facebook Setup</h3>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Facebook Page ID
            </label>
            <input
              type="text"
              value={fbPageId}
              onChange={(e) => setFbPageId(e.target.value)}
              placeholder="Your Facebook Page ID"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Page Access Token
            </label>
            <input
              type="password"
              value={fbAccessToken}
              onChange={(e) => setFbAccessToken(e.target.value)}
              placeholder="Your Page Access Token"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            />
          </div>

          <button
            onClick={saveCredentials}
            style={{
              background: '#28a745',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            💾 Save Credentials
          </button>
        </div>

        <div style={{
          background: '#e8f5e9',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>
            📊 Progress: {postedSurahs.length} / 114
          </div>

          {currentSurah ? (
            <>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1e3c72',
                marginBottom: '5px'
              }}>
                📖 Next: Surah {currentSurah.name}
              </div>
              <div style={{ fontSize: '28px', color: '#2a5298', marginBottom: '5px' }}>
                {currentSurah.arabic}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                {currentSurah.verses} Ayat • {currentSurah.meaning}
              </div>
            </>
          ) : (
            <div style={{ fontSize: '20px', color: '#28a745', fontWeight: 'bold' }}>
              ✅ Alhamdulillah! Tamam 114 Soorahs post ho chuki hain!
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={handlePost}
            disabled={loading || !currentSurah}
            style={{
              background: loading ? '#ccc' : '#1e3c72',
              color: 'white',
              padding: '15px 40px',
              border: 'none',
              borderRadius: '10px',
              cursor: loading || !currentSurah ? 'not-allowed' : 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              marginRight: '10px',
              transition: 'all 0.3s'
            }}
          >
            {loading ? '⏳ Posting...' : '🚀 Post Karein'}
          </button>

          <button
            onClick={resetProgress}
            style={{
              background: '#dc3545',
              color: 'white',
              padding: '15px 40px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            🔄 Reset Progress
          </button>
        </div>

        {status && (
          <div style={{
            padding: '15px',
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            color: '#856404'
          }}>
            {status}
          </div>
        )}

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>📋 Posted Surahs</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '10px',
            maxHeight: '200px',
            overflow: 'auto'
          }}>
            {postedSurahs.map(num => {
              const surah = quranData.find(s => s.number === num);
              return (
                <div key={num} style={{
                  padding: '8px',
                  background: '#e8f5e9',
                  borderRadius: '5px',
                  fontSize: '13px',
                  textAlign: 'center'
                }}>
                  ✅ {surah?.name}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#fff8e1',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666'
        }}>
          <strong>💡 Instructions:</strong>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Facebook Page ID aur Access Token Graph API Explorer se hasil karein</li>
            <li>Token ko "pages_manage_posts" aur "pages_read_engagement" permissions ke saath generate karein</li>
            <li>Har din aik click se nayi Soorah post karein</li>
            <li>System automatically track karta hai konsi Soorah post ho chuki hai</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
