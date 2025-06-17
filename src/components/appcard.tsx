export type AppProps = {
  name: string
  description: string
  icon: string
  stars: number
}

export default function AppCard({ name, description, icon, stars }: AppProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {icon && <img src={icon} alt="icon" className="w-6 h-6 object-contain" />}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">⭐ {stars}</span>
    </div>
  )
}
