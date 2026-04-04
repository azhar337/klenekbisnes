const calendlyUrl = "https://calendly.com/kairelkeflee/30min";

const sections = {
  pains: [
    "Jualan tak konsisten bulan ke bulan, tapi tak pasti punca sebenar.",
    "Data ada dalam spreadsheet tapi tak tahu nak guna untuk keputusan bisnes.",
    "Dah buat promo dan ads, tapi margin masih tak bergerak.",
    "Banyak nasihat umum, tapi tiada diagnosis khusus untuk bisnes sendiri.",
  ],
  offer: [
    "Laporan Audit Jualan (PDF)",
    "Sesi Zoom 1-on-1 (60 minit)",
    "3 punca utama masalah dikenal pasti",
    "Preskripsi tindakan yang jelas dan spesifik",
    "Rakaman sesi untuk rujukan semula",
    "Laporan disiapkan 48 jam sebelum sesi",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#F0EAD8]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-wide text-[#C9A84C]">Klenek Bisnes</p>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="rounded-md bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-black">Tempah Sekarang</a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#C9A84C]">Sesi 1-on-1 RM499</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Data jualan awak tengah cerita sesuatu. <span className="text-[#C9A84C]">Jom kita baca sama-sama.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#A89F94]">
          Saya bantu business owner baca data sebenar, kenal pasti kebocoran, dan susun langkah tindakan yang terus boleh dibuat.
          Bukan teori umum — diagnosis khusus untuk bisnes awak.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="rounded-md bg-[#C9A84C] px-6 py-3 font-semibold text-black">Book di Calendly</a>
          <p className="self-center text-sm text-[#A89F94]">Slot terhad setiap minggu.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-14 md:grid-cols-3">
        {[["48j", "Laporan siap sebelum sesi"], ["60min", "Sesi Zoom 1-on-1"], ["100%", "Berdasarkan data awak"]].map(([num, label]) => (
          <div key={num} className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-3xl font-bold text-[#C9A84C]">{num}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-[#A89F94]">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold">Masalah yang biasa berlaku</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sections.pains.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-[#A89F94]">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold">Apa awak dapat dalam sesi ini</h2>
        <p className="mt-3 max-w-3xl text-[#A89F94]">
          Awak hantar data jualan, saya analisis dahulu, kemudian kita walkthrough dalam Zoom supaya awak jelas apa berlaku,
          kenapa berlaku, dan apa tindakan seterusnya.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {sections.offer.map((item) => (
            <div key={item} className="rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10 p-4">✓ {item}</div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-6">
          <div>
            <p className="text-4xl font-bold text-[#C9A84C]">RM 499</p>
            <p className="text-sm text-[#A89F94]">Sekali bayar · Tiada langganan</p>
          </div>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="rounded-md bg-[#C9A84C] px-6 py-3 font-semibold text-black">Tempah Slot di Calendly</a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Jangan teruskan bisnes berdasarkan tekaan.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#A89F94]">Tempah sesi Data Read + Zoom sekarang, dan dapatkan kejelasan untuk tindakan yang betul.</p>
        <a href={calendlyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-md bg-[#C9A84C] px-8 py-4 text-lg font-semibold text-black">Book Sekarang di Calendly</a>
      </section>
    </main>
  );
}
