export default function NovaRotaLayout({ children }) {
  return (
    <section style={{ border: "2px solid #0070f3", padding: "15px", borderRadius: "8px" }}>
      <header style={{ marginBottom: "10px", color: "#0070f3" }}>
        <strong>Seção: Nova Rota (Layout Interno)</strong>
      </header>

      {children}
    </section>
  )
}