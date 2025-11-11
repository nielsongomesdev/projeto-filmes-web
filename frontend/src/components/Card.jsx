export default function Card({ title, children, footer }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-sm text-gray-700">{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  )
}
