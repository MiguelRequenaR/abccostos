import { ReactNode } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@workspace/ui/components/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@workspace/ui/components/dropdown-menu'

interface ToolbarAction {
  label: string
  icon?: ReactNode
  onClick: () => void
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  priority?: 'high' | 'medium' | 'low' // For mobile dropdown ordering
}

interface ResponsiveToolbarProps {
  actions: ToolbarAction[]
  className?: string
}

export default function ResponsiveToolbar({ actions, className = '' }: ResponsiveToolbarProps) {
  // Sort actions by priority for mobile dropdown
  const sortedActions = [...actions].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 }
    return priorityOrder[a.priority || 'medium'] - priorityOrder[b.priority || 'medium']
  })

  // On mobile: show first 2 actions as icons, rest in dropdown
  // On desktop: show all actions with text
  const mobileVisibleActions = sortedActions.slice(0, 2)
  const mobileDropdownActions = sortedActions.slice(2)

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Desktop: Show all actions with text */}
      <div className="hidden md:flex items-center space-x-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || 'outline'}
            size="sm"
            onClick={action.onClick}
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </Button>
        ))}
      </div>

      {/* Mobile: Show first 2 actions as icons only */}
      <div className="flex md:hidden items-center space-x-1">
        {mobileVisibleActions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || 'outline'}
            size="sm"
            onClick={action.onClick}
            className="px-2"
            title={action.label}
          >
            {action.icon}
          </Button>
        ))}

        {/* Mobile dropdown for remaining actions */}
        {mobileDropdownActions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="px-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {mobileDropdownActions.map((action, index) => (
                <DropdownMenuItem key={index} onClick={action.onClick}>
                  {action.icon && <span className="mr-2">{action.icon}</span>}
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
