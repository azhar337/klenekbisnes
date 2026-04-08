import Link from "next/link";

const faqs = [
  ["Data macam mana yang perlu saya hantar?", "Apa-apa data jualan yang awak ada pun boleh — CSV, Excel, PDF, export dari POS, atau screenshot report. Saya akan bantu strukturkan ikut format yang sesuai sebelum analisis."],
  ["Kalau data saya bersepah, masih boleh join?", "Boleh. Itu normal. Fokus saya memang untuk bantu pemilik bisnes yang sibuk dan data belum tersusun cantik."],
  ["Sesi ni ajar teori ke terus bagi jawapan?", "Terus pada data awak. Kita fokus diagnosis, punca, dan plan tindakan yang boleh terus dibuat."],
  ["Lepas bayar, macam mana proses seterusnya?", "Awak akan terima emel pengesahan tempahan + langkah hantar data. Laporan audit siap 48 jam sebelum sesi Zoom."],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">Klenek Bisnes</div>
          <nav className="nav-links">
            <a href="#cara-kerja">Cara ia berjalan</a>
            <a href="#harga">Harga</a>
            <a href="#faq">FAQ</a>
            <Link href="/booking" className="btn btn-primary">Tempah Sekarang</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p className="eyebrow">KLENEK BISNES · <span style={{ color: "var(--gold)" }}>SESI 1-ON-1 DATA + ZOOM</span></p>
          <h1 className="display">Data jualan awak tengah cerita <span style={{ color: "var(--gold)", fontStyle: "italic" }}>sesuatu.</span> Jom kita baca sama-sama.</h1>
          <p style={{ maxWidth: 560 }}>
            Ramai business owner yang terlalu rapat dengan bisnes sendiri sampai tak nampak mana yang bocor.
            Saya baca data awak, kenal pasti punca masalah, dan terangkan step by step apa yang perlu dibuat — live dalam Zoom bersama awak.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <Link href="/booking" className="btn btn-primary">Tempah Sesi Saya — RM499</Link>
            <a href="#apa-dapat" className="btn btn-ghost">Tengok apa yang awak dapat ↓</a>
          </div>
          <p style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 12 }}>
            Slot terhad setiap minggu. Jangan tunggu sampai penuh. <strong style={{ color: "var(--gold-l)" }}>Semak slot yang ada sekarang.</strong>
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 20 }}>
        <div className="statbar">
          <div className="stat"><h3>48j</h3><p>Laporan siap sebelum sesi</p></div>
          <div className="stat"><h3>60min</h3><p>Sesi Zoom 1-on-1</p></div>
          <div className="stat"><h3>100%</h3><p>Berdasarkan data awak</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge">Masalah sebenar</p>
          <h2 className="display">Kenal tak situasi macam ni dalam bisnes awak?</h2>
          <div className="grid grid-2">
            <div className="card pain-card">📉 <strong>Jualan tak konsisten</strong> — bulan ke bulan, tapi awak tak tahu nak salahkan apa — produk ke, harga ke, atau marketing?</div>
            <div className="card pain-card">📊 <strong>Ada data dalam spreadsheet</strong> — tapi dok terbiar je — sebab awak tak tahu nak buat apa dengan nombor tu.</div>
            <div className="card pain-card">💸 <strong>Dah buat promo, dah buat ads</strong> — tapi untung tak bergerak pun. Rasa macam beli revenue, bukan bina revenue.</div>
            <div className="card pain-card">🤷 <strong>Dapat tips dari sana sini</strong> — kursus, coach, thread — tapi semua bagi nasihat umum, bukan untuk bisnes awak specifically.</div>
          </div>
          <p className="quote-bridge">Ni bukan masalah strategi. Ni masalah diagnosis. Awak tak perlukan kursus lagi — awak perlukan seseorang yang baca data awak dan cakap kebenaran.</p>
        </div>
      </section>

      <section id="apa-dapat" className="section">
        <div className="container">
          <p className="badge">Apa yang awak dapat</p>
          <h2 className="display">Data Read + Zoom — pakej diagnosis penuh untuk bisnes awak</h2>
          <p>
            Awak hantar data jualan. Saya buat analisis mendalam sebelum kita jumpa.
            Lepas tu kita Zoom, dan saya terangkan setiap penemuan — live — supaya awak faham bukan je apa yang berlaku,
            tapi <em>kenapa</em> ia berlaku, dan tepat <em>apa</em> yang perlu dibuat lepas ni.
          </p>

          <div className="grid grid-2" style={{ marginTop: 14 }}>
            {[
              ["Laporan Audit Jualan (PDF)", "Analisis lengkap data awak — dihantar 48 jam sebelum sesi Zoom"],
              ["Sesi Zoom 1-on-1 (60 minit)", "Walkthrough live laporan awak + tanya soalan apa saja"],
              ["3 Punca Utama Dikenal Pasti", "Mana yang bocor dan mana peluang pertumbuhan dalam bisnes awak"],
              ["Preskripsi Tindakan Yang Jelas", "Langkah konkrit ditulis khusus untuk situasi bisnes awak — bukan nasihat umum"],
              ["Rakaman Sesi (Milik Awak)", "Recording Zoom penuh dihantar lepas sesi — boleh tengok balik bila-bila masa"],
              ["Laporan Siap 48 Jam Sebelum Sesi", "Awak dapat baca dulu, sediakan soalan, datang Zoom dengan lebih prepared"],
            ].map(([title, sub]) => (
              <div key={title} className="card deliv">
                <div className="deliv-dot">✓</div>
                <div><strong>{title}</strong><p style={{ margin: "4px 0 0" }}>{sub}</p></div>
              </div>
            ))}
          </div>

          <div id="harga" className="card" style={{ marginTop: 14, padding: 18, display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div className="display" style={{ color: "var(--gold)", fontSize: "2.1rem" }}>RM 499</div>
              <p style={{ margin: "2px 0" }}>sekali bayar</p>
              <p style={{ margin: 0, fontSize: ".85rem" }}>Tiada langganan. Tiada hidden charges. Satu deliverable yang jelas.</p>
            </div>
            <Link href="/booking" className="btn btn-primary">Tempah Sesi Saya Sekarang →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge">Untuk siapa?</p>
          <h2 className="display">Ni sesuai untuk awak ke tak?</h2>
          <div className="two-col">
            <div className="fit-good">
              <strong>✓ Sesuai kalau awak...</strong>
              <ul>
                <li>Jalankan bisnes online atau fizikal dengan sekurang-kurangnya 3 bulan rekod jualan.</li>
                <li>Nak jawapan spesifik, bukan teori.</li>
                <li>Sanggup kongsi data sebenar untuk dapat insight sebenar.</li>
                <li>Dah bersedia nak ambil tindakan, bukan sekadar kumpul ilmu.</li>
              </ul>
            </div>
            <div className="fit-bad">
              <strong>✗ Kurang sesuai kalau awak...</strong>
              <ul>
                <li>Baru seminggu dua buka bisnes.</li>
                <li>Nak sesi motivasi atau pep talk.</li>
                <li>Nak seseorang yang setuju dengan semua keputusan awak.</li>
                <li>Belum bersedia nak tengok nombor bisnes awak dengan jujur.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="section">
        <div className="container">
          <p className="badge">Cara ia berjalan</p>
          <h2 className="display">Dari tempahan ke kejelasan — 4 langkah je</h2>
          <p>Simple, tersusun, dan mengikut jadual awak.</p>
          <div className="steps">
            {[
              ["1", "Tempah & Bayar", "Pilih slot dari kalendar ketersediaan saya dan bayar untuk sahkan tempahan awak."],
              ["2", "Hantar Data Awak", "Upload spreadsheet atau laporan jualan. CSV, Excel, PDF — apa yang awak ada pun boleh."],
              ["3", "Laporan Siap 48 Jam Awal", "Saya analisis data awak dan hantar laporan audit bertulis tepat 48 jam sebelum sesi Zoom."],
              ["4", "Sesi Zoom Bersama", "Kita jumpa dalam Zoom. Saya terangkan setiap penemuan. Awak tanya soalan. Kita tutup dengan plan tindakan yang jelas."],
            ].map(([no, title, desc]) => (
              <div className="card step" key={no}><div className="step-no">{no}</div><strong>{title}</strong><p>{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container authority">
          <div className="avatar-box">KB</div>
          <div>
            <p className="badge">Kenapa percaya saya</p>
            <h2 className="display">Saya baca nombor supaya awak tak perlu buat sendiri.</h2>
            <p>Saya seorang business consultant yang fokus kepada analisis data jualan SME. Bukan nak bagi framework buku teks — saya bagi diagnosis yang dibina sepenuhnya atas realiti bisnes awak.</p>
            <p>Klien saya pernah temui masalah stok mati yang merugikan ribuan ringgit sebulan, produk yang dihargai terlalu rendah selama bertahun-tahun, dan produk margin tinggi yang ditanam dalam katalog tanpa disedari.</p>
            <p>Setiap bisnes yang saya buat analisis, pemiliknya balik dengan sekurang-kurangnya satu insight yang boleh terus dilaksanakan. Ramai yang cakap, “Patutlah buat awal-awal lagi.”</p>
            <div className="pills">
              {['Analisis Jualan SME','Diagnostik Revenue','Strategi Harga','Optimasi Inventori','Analisis Margin'].map((x)=><span className="pill" key={x}>{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge">Apa kata klien</p>
          <h2 className="display">Lepas sesi, inilah yang mereka rasa</h2>
          <p>Feedback sebenar daripada business owner yang dah lalui proses ni.</p>
          <div className="grid grid-2" style={{ marginTop: 12 }}>
            {[
              ["FA — Farah A.", "Jenama Skincare Online", "Saya ingat masalah saya adalah marketing. Rupanya saya dok push produk yang margin paling rendah dengan paling kuat sekali. Data read ni ubah cara saya tengok keseluruhan katalog bisnes saya. Worth every ringgit."],
              ["RA — Rizal A.", "Pemilik F&B", "RM499 untuk kejelasan tahap ni? Saya dah belanja lebih dari tu untuk boosted post yang tak bagitahu apa-apa pun. Dia jumpa satu kesilapan harga yang dah makan RM800 sebulan. Selesai dalam 60 minit."],
              ["NI — Nurul I.", "Bakeri Homemade", "Ada 2 tahun data jualan tapi tak tahu nak buat apa dengan dia. Dia tukarkan semua tu jadi cerita yang jelas dalam masa seminggu. Sesi Zoom tu rasa macam ada CFO duduk sebelah saya sejam."],
              ["ZM — Zaki M.", "Pembekal Hardware & Tools", "Dia nampak yang kami buat volume tinggi dalam satu kategori yang hampir tak buat untung. Kami adjust product mix dan margin naik 18% bulan berikutnya. Ini pelaburan, bukan kos."],
            ].map(([name, role, q]) => (
              <div className="card testi" key={name}>
                <span className="q">“</span>
                <p style={{ fontStyle: "italic" }}>{q}</p>
                <strong>{name}</strong>
                <p style={{ margin: "2px 0 0", fontSize: ".85rem" }}>{role} · ★★★★★</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="container">
          <p className="badge">Soalan lazim</p>
          <h2 className="display">Soalan yang biasa ditanya</h2>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}<span style={{ color: "var(--gold)" }}>+</span></summary>
              <p>{a}</p>
            </details>
          ))}
          <details>
            <summary>Boleh refund ke?<span style={{ color: "var(--gold)" }}>+</span></summary>
            <p>Disebabkan kerja analisis bermula sebaik tempahan disahkan, bayaran tidak refundable selepas proses audit dimulakan. Jika belum mula, kita boleh bincang kes demi kes.</p>
          </details>
          <details>
            <summary>Boleh reschedule ke?<span style={{ color: "var(--gold)" }}>+</span></summary>
            <p>Boleh. Minimum 24 jam sebelum slot asal. Kami akan bantu tukar ke slot terdekat yang tersedia.</p>
          </details>
          <div style={{ marginTop: 20 }}>
            <Link href="/booking" className="btn btn-primary">Tempah Sekarang</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ padding: 24, textAlign: "center" }}>
          <h2 className="display" style={{ marginTop: 0 }}>Jangan tunggu sampai masalah jadi lebih mahal.</h2>
          <p>Tempah sesi sekarang, dapatkan diagnosis jelas, dan terus tahu langkah paling penting untuk naikkan prestasi bisnes awak.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn btn-primary">Tempah Sesi RM499 Sekarang</Link>
          </div>
          <p style={{ fontSize: ".8rem", marginTop: 10 }}>✅ Pembayaran selamat · ✅ Data dirahsiakan · ✅ Slot terhad · ✅ Support disediakan</p>
        </div>
      </section>

      <footer className="section" style={{ paddingTop: 28, paddingBottom: 32 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <p style={{ margin: 0, fontSize: ".85rem" }}>© 2026 Klenek Bisnes. Semua hak cipta terpelihara.</p>
          <div style={{ display: "flex", gap: 14, fontSize: ".85rem" }}>
            <a href="https://wa.me/60105424256" target="_blank">WhatsApp</a>
            <a href="mailto:muhdazharali98@gmail.com">Email</a>
            <a href="#">Instagram</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
