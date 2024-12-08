interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
  
export function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-inner">
        <img src={image} alt={title} className="project-card-image" />
        <div className="project-card-overlay">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
        </div>
      </div>
    </a>
  );
}
  