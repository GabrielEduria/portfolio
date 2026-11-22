import { Link, useSearchParams } from "react-router-dom";
import {
  Motion,
  NavBar,
  Tag,
  Footer,
  ImageSpinner,
  PageBackground,
} from "../components";
import { projectCards, projectCategories } from "../constants/projectData";

const ALL = "all";

const Projects = () => {
  // The selected category lives in the URL (?category=web) so it can be shared
  // and survives going back from a project page
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const active = projectCategories.some((c) => c.id === requested) ? requested : ALL;

  const visibleProjects =
    active === ALL ? projectCards : projectCards.filter((p) => p.category === active);

  const filters = [
    { id: ALL, label: "All Projects", icon: "fa-solid fa-layer-group" },
    ...projectCategories,
  ];

  const countFor = (id: string) =>
    id === ALL ? projectCards.length : projectCards.filter((p) => p.category === id).length;

  const selectCategory = (id: string) =>
    setSearchParams(id === ALL ? {} : { category: id });

  const categoryLabel = (id: string) =>
    projectCategories.find((c) => c.id === id)?.label ?? "";

  return (
    <div className="relative w-full min-h-screen">
      <PageBackground />

      <Motion>
        <NavBar />
        <div className="w-full max-w-[880px] mx-auto relative flex flex-col md:flex-row gap-6 p-6">
          {/* Sidebar: pills on mobile, a sticky vertical list on desktop */}
          <aside className="md:w-48 md:flex-shrink-0">
            <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible md:sticky md:top-32 pb-1">
              {filters.map((filter) => {
                const isActive = active === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => selectCategory(filter.id)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold
                      cursor-pointer transition duration-200 border
                      ${isActive
                        ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/10"}`}
                  >
                    <i className={`${filter.icon} w-4 text-center`} />
                    <span className="flex-1 text-left">{filter.label}</span>
                    <span className={`text-xs ${isActive ? "opacity-80" : "text-gray-500"}`}>
                      {countFor(filter.id)}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="flex-1 min-w-0">
            {visibleProjects.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-10 text-center text-gray-500">
                <i className="fa-solid fa-hourglass-half text-2xl mb-3" />
                <p>Nothing here yet. Projects in this category are coming soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {visibleProjects.map((card) => (
                  <Link
                    key={card.slug}
                    to={`/projects/${card.slug}`}
                    className="group rounded-2xl flex flex-col transform transition duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-full overflow-hidden rounded-2xl flex items-center justify-center">
                      <ImageSpinner
                        src={card.image}
                        alt={`Screenshot of ${card.title}`}
                        className="max-h-full max-w-full"
                        imgClassName="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col pt-2 flex-grow">
                      <div className="flex justify-between items-center gap-2">
                        <h2 className="font-bold text-lg sm:text-xl text-wrap">{card.title}</h2>
                        <span className="text-sm font-semibold text-gray-500">{card.year}</span>
                      </div>
                      <span className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        {categoryLabel(card.category)}
                      </span>
                      <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed mb-3">
                        {card.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm mb-3">
                        {card.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                      <span className="mt-auto text-sm font-semibold inline-flex items-center">
                        View project
                        <i className="fa-solid fa-arrow-right ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </Motion>
    </div>
  );
};

export default Projects;
