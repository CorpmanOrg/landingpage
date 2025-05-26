import Image, {StaticImageData} from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  image: string | StaticImageData
  title: string
  category: string
}

export function ServiceCard({ image, title, category }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <span className="text-xs font-medium uppercase tracking-wider text-green-300">{category}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <Link
          href="#"
          className="mt-2 inline-flex items-center text-sm font-medium text-green-300 hover:text-green-200"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
