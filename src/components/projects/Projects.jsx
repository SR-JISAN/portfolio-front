import { getProjects } from "@/lib/api";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projects = await getProjects();
  const featuredProjects = projects
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);
  return (
    <section id="projects" className="py-24 hero-grid">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Featured Projects</h2>

          <p className="mt-5 text-white  max-w-xl mx-auto">
            Some of the projects I&apos;ve designed and developed using modern
            technologies.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
