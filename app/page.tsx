const calendlyUrl = "https://calendly.com/kairelkeflee/30min";

export default function Home() {
  return (
    <main>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)", position: "sticky", top: 0, background: "#070707" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, paddingBottom: 16 }}>
          <strong style={{ color: "#C9A84C" }}>Klenek Bisnes</strong>
          <a className="btn" href={calendlyUrl} target="_blank">Tempah Sekarang</a>
        </div>
      </header>

      <section className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
        <p style={{ color: "#C9A84C", letterSpacing: 2, textTransform: "uppercase", fontSize: 12 }}>Sesi Data Read + Zoom · RM499</p>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, maxWidth: 820 }}>Data jualan awak tengah cerita sesuatu. <span style={{ color: "#C9A84C" }}>Jom kita baca sama-sama.</span></h1>
        <p className="muted" style={{ maxWidth: 760, fontSize: 18 }}>
          Saya bantu business owner baca data sebenar, kenal pasti kebocoran, dan susun langkah tindakan yang terus boleh dibuat.
          Bukan teori umum — diagnosis khusus untuk bisnes awak.
        </p>
      </section>

      <section className="container grid grid-3" style={{ paddingBottom: 48 }}>
        {[["48j","Laporan siap sebelum sesi"],["60min","Sesi Zoom 1-on-1"],["100%","Berdasarkan data awak"]].map(([a,b]) => (
          <div key={a} className="card" style={{ textAlign: "center" }}><h3 style={{ color: "#C9A84C", fontSize: 30, margin: 0 }}>{a}</h3><p className="muted">{b}</p></div>
        ))}
      </section>

      <section className="container" style={{ paddingBottom: 56 }}>
        <h2>Apa awak dapat</h2>
        <div className="grid grid-2">
          {[
            "Laporan Audit Jualan (PDF)",
            "Sesi Zoom 1-on-1 (60 minit)",
            "3 punca utama masalah dikenal pasti",
            "Preskripsi tindakan yang jelas dan spesifik",
            "Rakaman sesi untuk rujukan semula",
            "Laporan disiapkan 48 jam sebelum sesi",
          ].map((x) => <div key={x} className="card">✓ {x}</div>)}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80, textAlign: "center" }}>
        <h2>Jangan teruskan bisnes berdasarkan tekaan.</h2>
        <a className="btn" href={calendlyUrl} target="_blank">Book Meeting Sekarang</a>
      </section>
    </main>
  );
}
