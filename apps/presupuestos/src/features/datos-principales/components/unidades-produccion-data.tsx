import { useState } from 'react'
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Input } from '@workspace/ui/components/input'
import { Button } from '@workspace/ui/components/button'
import {
  PlusIcon,
  SearchIcon,
  FileTextIcon,
  PackageIcon,
} from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@workspace/ui/components/table'
import { unidadesProduccionColumns } from './unidades-produccion-columns'

export interface UnidadProduccion {
  id: string
  nombre: string
  costoDirecto: number
  gastosGenerales: number
  utilidad: number
  subTotal: number
  igv: number
  total: number
}

const mockData: UnidadProduccion[] = [
  {
    id: '001',
    nombre: 'Arquitectura',
    costoDirecto: 60.0,
    gastosGenerales: 60.0,
    utilidad: 60.0,
    subTotal: 60.0,
    igv: 60.0,
    total: 60.0,
  },
  {
    id: '002',
    nombre: 'Estructuras',
    costoDirecto: 100.0,
    gastosGenerales: 100.0,
    utilidad: 100.0,
    subTotal: 100.0,
    igv: 100.0,
    total: 100.0,
  },
  {
    id: '003',
    nombre: 'Instalaciones Electricas',
    costoDirecto: 200.0,
    gastosGenerales: 200.0,
    utilidad: 100.0,
    subTotal: 200.0,
    igv: 200.0,
    total: 200.0,
  },
]

export default function UnidadesProduccionData() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: mockData,
    columns: unidadesProduccionColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className='space-y-4'>
      {/* Search and Actions */}
      <div className='flex items-center justify-between gap-4'>
        <div className='relative flex-1 max-w-sm'>
          <SearchIcon className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            placeholder='Buscar Unidad de Producción'
            value={(table.getColumn('nombre')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('nombre')?.setFilterValue(event.target.value)
            }
            className='pl-9'
          />
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon'>
            <FileTextIcon className='h-5 w-5' />
          </Button>
          <Button variant='ghost' size='icon'>
            <PackageIcon className='h-5 w-5' />
          </Button>
          <Button variant='ghost' className='gap-2'>
            <PlusIcon className='h-4 w-4' />
            <span className='hidden lg:inline'>U.P.</span>
          </Button>
          <Button variant='ghost' className='hidden lg:flex'>Ver Resumen</Button>
          <Button variant='ghost' className='hidden lg:flex'>Ver Recursos</Button>
        </div>
      </div>

      {/* Table */}
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={unidadesProduccionColumns.length}
                  className='h-24 text-center'
                >
                  Sin resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} de{' '}
          {table.getFilteredRowModel().rows.length} fila(s) seleccionada(s).
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
                        </Button>
        </div>
      </div>
    </div>
  )
}

