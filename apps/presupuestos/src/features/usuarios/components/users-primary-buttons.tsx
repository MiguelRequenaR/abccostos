import { Button } from '@workspace/ui/components/button'
import { UserPlus } from 'lucide-react'
import { useUsers } from './users-provider'

export function UsersPrimaryButtons() {
  const { setOpen } = useUsers()
  return (
    <div className='flex gap-2'>
      {/* <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('invite')}
      >
        <span>Invitar Usuario</span> <MailPlus size={18} />
      </Button> */}
      <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Registrar</span> <UserPlus size={18} />
      </Button>
    </div>
  )
}
