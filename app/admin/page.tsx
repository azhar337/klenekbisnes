import Link from "next/link";

const bookings = [
  { name: "Farah A", business: "Skincare Lab", date: "2026-04-10", time: "10:00", status: "Confirmed" },
  { name: "Rizal A", business: "Dapur Rizq", date: "2026-04-11", time: "14:00", status: "Pending Payment" },
  { name: "Nurul I", business: "Bakeri Nur", date: "2026-04-12", time: "20:30", status: "Confirmed" },
];

export default function AdminPage() {
  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">Klenek Bisnes · Admin</div>
          <Link href="/" className="btn btn-ghost">Lihat Website</Link>
        </div>
      </header>

      <div className="container" style={{ padding: "88px 22px 40px" }}>
        <p className="badge">Dashboard</p>
        <h1 className="display" style={{ marginTop: 8 }}>Kalendar & Tempahan</h1>

        <div className="grid grid-3" style={{ marginTop: 12 }}>
          <div className="card" style={{ padding: 16 }}><p style={{ margin: 0 }}>Total Tempahan</p><h2 className="display" style={{ color: "var(--gold)", margin: 0 }}>27</h2></div>
          <div className="card" style={{ padding: 16 }}><p style={{ margin: 0 }}>Bulan Ini</p><h2 className="display" style={{ color: "var(--gold)", margin: 0 }}>11</h2></div>
          <div className="card" style={{ padding: 16 }}><p style={{ margin: 0 }}>Pending Payment</p><h2 className="display" style={{ color: "var(--gold)", margin: 0 }}>4</h2></div>
        </div>

        <div className="card" style={{ marginTop: 14, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Senarai Tempahan Terkini</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Bisnes</th>
                <th>Tarikh</th>
                <th>Masa</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={`${b.name}-${b.date}`}>
                  <td>{b.name}</td>
                  <td>{b.business}</td>
                  <td>{b.date}</td>
                  <td>{b.time}</td>
                  <td>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
