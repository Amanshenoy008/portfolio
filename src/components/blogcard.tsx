type blogcard = {
    title:string,
    link:string,
    date:string,
    
}



export default function BlogCard({ title, link, date }: blogcard) {
    return (
      <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center space-x-4">
         
          <div>
            <p className="font-semibold">{title}</p>
          </div>
        </div>
        <span className="text-sm text-gray-500"> {date}</span>
      </div>
    );
  }
  