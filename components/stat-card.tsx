interface StatCardProps {
  value: string
  unit: string
  description: string
  color: string
}

export function StatCard({ value, unit, description, color }: StatCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-end mb-2">
        <span className={`text-4xl font-bold ${color}`}>{value}</span>
        <span className={`text-2xl font-semibold ${color}`}>{unit}</span>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}
