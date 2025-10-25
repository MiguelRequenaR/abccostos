import { createFileRoute } from '@tanstack/react-router'
import { requireRole } from '@/lib/route-guards'
import { DashboardAdmin } from '@/features/dashboard-admin'

export const Route = createFileRoute('/_authenticated/(principal)/dashboard-admin/')({
  component: RouteComponent,
  beforeLoad: () => {
    requireRole(['principal'])
  },
})

function RouteComponent() {
  return <DashboardAdmin />
}
