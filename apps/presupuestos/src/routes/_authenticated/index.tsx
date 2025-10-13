import { createFileRoute } from '@tanstack/react-router'
import { requireRole } from '@/lib/route-guards'
import { Dashboard } from '@/features/dashboard'

export const Route = createFileRoute('/_authenticated/')({
  component: Dashboard,
  beforeLoad: () => {
    requireRole(['user'])
  },
})
