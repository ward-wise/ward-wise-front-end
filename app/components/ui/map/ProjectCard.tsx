export default function ProjectCard({ project }: { project: any }) {

    return (
        <div className="flex flex-col w-full bg-white shadow-up md:shadow-lg rounded-t-lg md:rounded-lg p-6 absolute bottom-0 z-50 md:bottom-10 md:left-10 md:w-1/4" >
            <h2 className="font-bold text-lg">{project.item}</h2>
            <div className="flex text-md py-4">
                <p className="font-bold text-lime-700">${new Intl.NumberFormat('en-US').format(Math.round(project.cost))}</p>
                <p className="ml-auto">Ward {project.ward} - {project.year}</p>
            </div>
            <p className="pt-4">{project.location}</p>
        </div>
    )
};