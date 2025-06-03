type projectprops = {
    name:string,
    description:string,
    stars:number,
    icon: string
}



export default function ProjectCard({ name, description, stars, icon }: projectprops) {
  const repoUrl = `https://github.com/${name}`;

    return (
      <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {icon && (
          <img src={icon} alt="icon" className="w-6 h-6 object-contain" />
        )}
        <div>
        <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            {name}
          </a>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">⭐ {stars}</span>
    </div>
    );
  }
  