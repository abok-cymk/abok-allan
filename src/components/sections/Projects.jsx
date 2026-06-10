import { useState, useMemo } from "react";
import { projects, allTags } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { Tag } from "../ui/Tag";
import { SectionHeader } from "../ui/SectionHeader";

export function Projects() {
    const [activeTag, setActiveTag] = useState(null)
    const [showAll, setShowAll] = useState(false)

    const filtered = useMemo(() => {
        const base = activeTag
            ? projects.filter(p => p.tags.includes(activeTag))
            : projects
        return showAll ? base : base.slice(0, 4)
    }, [activeTag, showAll])

    const totalFiltered = useMemo(() => {
        return activeTag
            ? projects.filter(p => p.tags.includes(activeTag)).length
            : projects.length
    }, [activeTag])

    const handleTagClick = (tag) => {
        setActiveTag(prev => prev === tag ? null : tag)
        setShowAll(false)
    }

    return (
        <section id="projects" className="py-12 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="Projects"
                description="Things I've built or contributed to."
            />

            <div
                className="flex flex-wrap gap-2 mb-8"
                role="group"
                aria-label="Filter projects by technology"
            >
                <Tag
                    label="All"
                    active={activeTag === null}
                    onClick={() => { setActiveTag(null); setShowAll() }}
                />
                {allTags.map(tag => (
                    <Tag
                        key={tag}
                        label={tag}
                        active={activeTag === tag}
                        onClick={() => handleTagClick(tag)}
                    />
                ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-center py-12 text-sm text-text-muted-light dark:text-text-muted-dark">
                    No projects with that tag yet.
                </p>
            )}

            {totalFiltered > 4 && (
                <div className="mt-6 text-center">
                    <button
                    onClick={() => setShowAll(prev => !prev)}
                    className="text-sm font-mono text-text-muted-light dark:text-text-muted-dark hover:text-accent transition-colors duration-150 underline underline-offset-2"
                    >
                        {showAll ? "Show less" : `Show all ${totalFiltered} projects`}
                    </button>
                </div>
            )}
        </section>
    )
}