import { Card } from '@/ui/components'
import { Link } from '@tanstack/react-router'
import type { Project } from '../utils'

export function NavigationCard({
  project,
  direction,
}: {
  project: Project | null
  direction: 'prev' | 'next'
}) {
  if (!project) {
    return (
      <div className="w-full sm:w-1/2">
        <Card
          variant="navigation"
          size="base"
          className="max-sm:items-center opacity-50 pointer-events-none"
        >
          <span className="text-sm uppercase font-serif text-gray-400/90">
            {direction === 'prev' ? '← Anterior' : 'Próximo →'}
          </span>
          <span className="text-xl sm:text-2xl font-semibold">Nenhum</span>
        </Card>
      </div>
    )
  }

  return (
    <Link
      className="w-full sm:w-1/2"
      to={'/project/$slug'}
      params={{ slug: project.slug }}
    >
      <Card variant="navigation" size="base" className="max-sm:items-center">
        <span className="text-sm uppercase font-serif text-gray-400/90">
          {direction === 'prev' ? '← Anterior' : 'Próximo →'}
        </span>
        <span className="text-xl sm:text-2xl font-semibold">
          {project.title}
        </span>
      </Card>
    </Link>
  )
}
