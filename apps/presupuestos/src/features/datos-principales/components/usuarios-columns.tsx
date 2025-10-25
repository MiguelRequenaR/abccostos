import { type ColumnDef } from '@tanstack/react-table'
import { Button } from '@workspace/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { MoreVerticalIcon } from 'lucide-react'
import { type Usuario } from './usuarios-data'

export const usuariosColumns: ColumnDef<Usuario>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => (
      <div className='font-medium'>{row.getValue('id')}</div>
    ),
  },
  {
    accessorKey: 'nombreCompleto',
    header: 'Nombre completo',
    cell: ({ row }) => (
      <div className='max-w-[200px] truncate'>{row.getValue('nombreCompleto')}</div>
    ),
  },
  {
    accessorKey: 'rol',
    header: 'Rol',
    cell: ({ row }) => (
      <div className='font-medium'>{row.getValue('rol')}</div>
    ),
  },
  {
    id: 'actions',
    header: 'Acciones',
    cell: () => {

      return (
        <div className='flex justify-center'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='h-8 w-8'>
                <MoreVerticalIcon className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Duplicar</DropdownMenuItem>
              <DropdownMenuItem className='text-destructive'>
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
]
