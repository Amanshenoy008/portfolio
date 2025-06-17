export type BlogCardProps = {
  title: string
  link: string
  date: string
}

export default function BlogCard({ title, link, date }: BlogCardProps) {
  return (
    <a
      href={link}
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition"
    >
      <span className="font-semibold">{title}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </a>
  )
}
