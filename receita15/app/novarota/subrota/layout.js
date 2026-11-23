export default function SubRotaLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "10px", marginTop: "10px" }}>
      <small>Layout específico da Sub-rota</small>
      {children}
    </div>
  )
}