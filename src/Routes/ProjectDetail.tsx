import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Motion,
  NavBar,
  Tag,
  Button,
  Footer,
  ImageSpinner,
  PageBackground,
} from "../components";
import { projectCards, projectCategories, getProjectBySlug } from "../constants/projectData";

// Fullscreen photo viewer. Arrow keys / buttons to move, Esc or click outside to close.
const Lightbox = ({ images, index, title, onClose, onChange }) => {
  const hasMany = images.length > 1;
  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMany && e.key === "ArrowLeft") prev();
      if (hasMany && e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const navButton = "absolute top-1/2 -translate-y-1/2 text-white text-2xl p-4 cursor-pointer hover:scale-110 transition";

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button type="button" aria-label="Close" className="absolute top-4 right-4 text-white text-2xl p-2 cursor-pointer" onClick={onClose}>
        <i className="fa-solid fa-xmark" />
      </button>
      {hasMany && (
        <button type="button" aria-label="Previous photo" className={`${navButton} left-2`} onClick={(e) => { e.stopPropagation(); prev(); }}>
          <i className="fa-solid fa-chevron-left" />
        </button>
      )}
      <img
        src={images[index]}
        alt={`${title} screenshot ${index + 1}`}
        className="max-h-[90vh] max-w-full rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      {hasMany && (
        <button type="button" aria-label="Next photo" className={`${navButton} right-2`} onClick={(e) => { e.stopPropagation(); next(); }}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      )}
      {hasMany && (
        <span className="absolute bottom-4 text-sm text-white/70">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Close the viewer when moving to another project via prev/next
  useEffect(() => setOpenIndex(null), [slug]);

  useEffect(() => {
    if (project) document.title = `${project.title} | Gabriel Eduria`;
    return () => { document.title = "Gabriel Eduria | Developer"; };
  }, [project]);

  if (!project) {
    return (
      <div className="relative w-full min-h-screen">
        <PageBackground />
        <NavBar />
        <div className="max-w-[880px] mx-auto p-6 text-center pt-20">
          <h2 className="text-3xl font-bold mb-3">Project not found</h2>
          <p className="text-gray-500 mb-6">The project you're looking for doesn't exist or has moved.</p>
          <Link to="/projects" className="font-semibold underline">Back to all projects</Link>
        </div>
      </div>
    );
  }

  const images = project.gallery?.length ? project.gallery : [project.image];
  const [hero, ...rest] = images;
  const category = projectCategories.find((c) => c.id === project.category);

  const position = projectCards.findIndex((p) => p.slug === project.slug);
  const prevProject = projectCards[(position - 1 + projectCards.length) % projectCards.length];
  const nextProject = projectCards[(position + 1) % projectCards.length];

  return (
    <div className="relative w-full min-h-screen">
      <PageBackground />
      <Motion>
        <NavBar />
        <article className="w-full max-w-[880px] mx-auto p-6">
          <Link
            to={category ? `/projects?category=${category.id}` : "/projects"}
            className="inline-flex items-center text-sm text-gray-500 hover:text-current transition mb-6"
          >
            <i className="fa-solid fa-arrow-left mr-2" />
            {category ? category.label : "All projects"}
          </Link>

          <header className="mb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-3xl sm:text-5xl font-bold">{project.title}</h2>
              <span className="text-lg font-semibold text-gray-500">{project.year}</span>
            </div>
            {category && (
              <span className="inline-flex items-center gap-2 mt-2 text-xs uppercase tracking-wide text-gray-500">
                <i className={category.icon} /> {category.label}
              </span>
            )}
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{project.shortDescription}</p>

            {(project.live || project.url) && (
              <div className="flex gap-3 mt-4">
                {project.live && (
                  <Button href={project.live}>
                    <i className="fa-solid fa-arrow-right -rotate-50 mr-2" />
                    Visit Live Site
                  </Button>
                )}
                {project.url && (
                  <Button href={project.url}>
                    <i className="fa-solid fa-folder mr-2" />
                    View Repo
                  </Button>
                )}
              </div>
            )}
          </header>

          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="block w-full rounded-2xl overflow-hidden cursor-zoom-in mb-8 shadow-xl"
            aria-label="Open photo fullscreen"
          >
            <ImageSpinner
              src={hero}
              alt={`Screenshot of ${project.title}`}
              className="w-full min-h-40"
              imgClassName="w-full h-auto object-contain"
            />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <section className="md:col-span-2">
              <h3 className="text-xl font-bold mb-2">About the project</h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">{project.fullDescription}</p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-2">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </section>
          </div>

          {rest.length > 0 && (
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rest.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setOpenIndex(i + 1)}
                    className="rounded-xl overflow-hidden cursor-zoom-in transition duration-300 hover:scale-[1.02]"
                    aria-label={`Open photo ${i + 2} fullscreen`}
                  >
                    <ImageSpinner
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      className="w-full min-h-24"
                      imgClassName="w-full h-auto object-cover"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          <nav className="flex justify-between gap-4 border-t border-gray-300 dark:border-gray-700 pt-6 text-sm">
            <Link to={`/projects/${prevProject.slug}`} className="flex flex-col hover:opacity-70 transition min-w-0">
              <span className="text-gray-500"><i className="fa-solid fa-arrow-left mr-2" />Previous</span>
              <span className="font-semibold truncate">{prevProject.title}</span>
            </Link>
            <Link to={`/projects/${nextProject.slug}`} className="flex flex-col items-end text-right hover:opacity-70 transition min-w-0">
              <span className="text-gray-500">Next<i className="fa-solid fa-arrow-right ml-2" /></span>
              <span className="font-semibold truncate">{nextProject.title}</span>
            </Link>
          </nav>
        </article>
        <Footer />
      </Motion>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          title={project.title}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
