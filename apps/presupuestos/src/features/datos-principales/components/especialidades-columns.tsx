import { type ColumnDef } from '@tanstack/react-table'
import { Button } from '@workspace/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { MoreVerticalIcon } from 'lucide-react'
import { type Especialidad } from './especialidades-data'

export const especialidadesColumns: ColumnDef<Especialidad>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => (
      <div className='font-medium'>{row.getValue('id')}</div>
    ),
  },
  {
    accessorKey: 'unidadProduccion',
    header: 'Unidad de Produccion',
    cell: ({ row }) => (
      <div className='max-w-[200px] truncate'>{row.getValue('unidadProduccion')}</div>
    ),
  },
  {
    accessorKey: 'costoDirecto',
    header: 'Costo Directo',
    cell: ({ row }) => (
      <div className='text-right text-blue-600 font-medium'>
        {(row.getValue('costoDirecto') as number).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: 'gastosGenerales',
    header: 'Gastos Generales',
    cell: ({ row }) => (
      <div className='text-right text-blue-600 font-medium'>
        {(row.getValue('gastosGenerales') as number).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: 'utilidad',
    header: 'Utilidad',
    cell: ({ row }) => (
      <div className='text-right font-medium'>
        {(row.getValue('utilidad') as number).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: 'subTotal',
    header: 'Sub total',
    cell: ({ row }) => (
      <div className='text-right font-medium'>
        {(row.getValue('subTotal') as number).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: 'igv',
    header: 'Igv',
    cell: ({ row }) => (
      <div className='text-right font-medium'>
        {(row.getValue('igv') as number).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }) => (
      <div className='text-right font-medium'>
        {(row.getValue('total') as number).toFixed(2)}
      </div>
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
