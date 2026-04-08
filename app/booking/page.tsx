"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookingPage() {
  const [done, setDone] = useState(false);

  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand">Klenek Bisnes</Link>
          <Link href="/" className="btn btn-ghost">Kembali</Link>
        </div>
      </header>

      <div className="form-wrap">
        <p className="badge">Booking</p>
        <h1 className="display" style={{ marginTop: 8 }}>Tempah sesi 1-on-1 awak</h1>
        <p>Pilih slot, isi maklumat, dan sahkan tempahan. Selepas itu, kami akan emel langkah hantar data dan pautan pembayaran RM499.</p>

        <form
          className="card form"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div>
            <label>Nama penuh</label>
            <input required placeholder="Contoh: Ahmad Razak" />
          </div>
          <div>
            <label>Emel</label>
            <input type="email" required placeholder="nama@bisnes.com" />
          </div>
          <div>
            <label>Nombor WhatsApp</label>
            <input required placeholder="+6012xxxxxxx" />
          </div>
          <div>
            <label>Nama bisnes</label>
            <input required placeholder="Contoh: Kedai Kopi ABC" />
          </div>
          <div>
            <label>Jenis bisnes</label>
            <select defaultValue="">
              <option value="" disabled>Pilih jenis bisnes</option>
              <option>Ecommerce</option>
              <option>F&B</option>
              <option>Retail</option>
              <option>Service</option>
              <option>Lain-lain</option>
            </select>
          </div>
          <div>
            <label>Tarikh pilihan</label>
            <input type="date" required />
          </div>
          <div>
            <label>Masa pilihan</label>
            <select defaultValue="">
              <option value="" disabled>Pilih masa</option>
              <option>10:00 AM</option>
              <option>11:30 AM</option>
              <option>2:00 PM</option>
              <option>4:00 PM</option>
              <option>8:30 PM</option>
            </select>
          </div>
          <div>
            <label>Apa cabaran utama bisnes awak sekarang?</label>
            <textarea rows={4} placeholder="Contoh: jualan turun, margin tak stabil, stok tak bergerak..." />
          </div>

          <button className="btn btn-primary" type="submit">Sahkan Tempahan</button>

          {done ? (
            <div className="card" style={{ background: "var(--green-dim)", borderColor: "var(--green-border)" }}>
              <strong>Tempahan diterima.</strong>
              <p style={{ margin: "6px 0 0" }}>
                Kami akan hubungi awak melalui emel/WhatsApp untuk langkah seterusnya (hantar data + bayaran).
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </main>
  );
}
