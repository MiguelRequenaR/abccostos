import { useState } from 'react'
import { Card } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@workspace/ui/components/table'
import {
  User,
  Package,
  Wrench,
  Briefcase,
  CirclePlus,
  Edit,
  Trash2,
} from 'lucide-react'
import { type Recurso } from '../data/recursos-schema'
import { type Partida } from '../data/schema'

interface AnalisisCostosProps {
  partida: Partida
  recursos: Recurso[]
}

const TipoIcon = ({ tipo }: { tipo: Recurso['tipo'] }) => {
  const iconMap = {
    'mano-obra': User,
    'material': Package,
    'equipo': Wrench,
    'subcontrato': Briefcase,
  }
  
  const Icon = iconMap[tipo]
  return <Icon className='size-3 sm:size-4 text-red-600' />
}

export function AnalisisCostos({ partida, recursos }: AnalisisCostosProps) {
  const [unidad, setUnidad] = useState('m2')
  const [rendimiento, setRendimiento] = useState('20.00')
  
 

  return (
    <Card className='mt-4 border-l-4 border-l-purple-500 pt-0'>
      <div className='bg-primary/20 px-2 sm:px-4 py-2 sm:py-3 border-b'>
        <div className='space-y-2 sm:space-y-3'>
          {/* Header info */}
          <div className='flex items-center gap-2'>
            <span className='font-semibold text-purple-700 text-xs sm:text-sm'>{partida.codigo}</span>
            <span className='font-medium text-xs sm:text-sm truncate'>{partida.item}</span>
          </div>
          
          {/* Controls - responsive layout */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
            {/* Input controls */}
            <div className='flex flex-wrap items-center gap-2 sm:gap-4'>
              <div className='flex items-center gap-1.5'>
                <span className='text-[10px] sm:text-xs text-muted-foreground'>Un</span>
                <Input
                  value={unidad}
                  onChange={(e) => setUnidad(e.target.value)}
                  className='h-6 sm:h-7 w-12 sm:w-16 text-center text-xs'
                />
              </div>
              <div className='flex items-center gap-1.5'>
                <span className='text-[10px] sm:text-xs text-muted-foreground'>Rend</span>
                <Input
                  value={rendimiento}
                  onChange={(e) => setRendimiento(e.target.value)}
                  className='h-6 sm:h-7 w-14 sm:w-20 text-center text-xs'
                />
              </div>
              <div className='flex items-center gap-1.5'>
                <span className='text-[10px] sm:text-xs text-muted-foreground'>P.Unit</span>
                <span className='font-semibold rounded bg-purple-600 px-2 sm:px-3 py-0.5 sm:py-1 text-white text-xs sm:text-sm'>
                  20.00
                </span>
              </div>
            </div>
            
            {/* Action buttons and indicators */}
            <div className='flex items-center gap-1.5'>
              <div className='flex gap-0.5 sm:gap-1'>
                <Button variant='ghost' size='icon' className='size-6 sm:size-7'>
                  <CirclePlus className='size-3 sm:size-4' />
                </Button>
                <Button variant='ghost' size='icon' className='size-6 sm:size-7'>
                  <Edit className='size-3 sm:size-4' />
                </Button>
                <Button variant='ghost' size='icon' className='size-6 sm:size-7'>
                  <Trash2 className='size-3 sm:size-4' />
                </Button>
              </div>
              <div className='flex gap-0.5 sm:gap-1 ml-1 sm:ml-2'>
                <div className='size-4 sm:size-5 rounded-full bg-red-500' />
                <div className='size-4 sm:size-5 rounded-full bg-gray-400' />
                <div className='size-4 sm:size-5 rounded-full bg-orange-500' />
                <div className='size-4 sm:size-5 rounded-full bg-green-500' />
                <div className='size-4 sm:size-5 rounded-full border-2 border-gray-300 bg-white' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-2 sm:p-4'>
        <div className='flex items-center justify-end gap-1.5 sm:gap-2 mb-2 sm:mb-3'>
          <Button variant='ghost' size='sm' className='gap-1.5 sm:gap-2 text-xs sm:text-sm'>
            <CirclePlus className='size-3 sm:size-4' />
            <span className='hidden sm:inline'>Nuevo Recurso</span>
            <span className='sm:hidden'>Nuevo</span>
          </Button>
          <Button variant='ghost' size='sm' className='gap-1.5 sm:gap-2 text-purple-600 text-xs sm:text-sm'>
            <CirclePlus className='size-3 sm:size-4' />
            Agregar
          </Button>
        </div>

        {/* Responsive table wrapper */}
        <div className='overflow-x-auto'>
          <Table className='min-w-[600px]'>
            <TableHeader className='bg-primary/50'>
              <TableRow>
                <TableHead className='w-10 sm:w-12'></TableHead>
                <TableHead className='w-12 sm:w-16 text-xs sm:text-sm'>Descripción</TableHead>
                <TableHead className='w-12 sm:w-16 text-xs sm:text-sm'>Und</TableHead>
                <TableHead className='w-16 sm:w-20 text-xs sm:text-sm'>Cuadrilla</TableHead>
                <TableHead className='w-16 sm:w-20 text-xs sm:text-sm'>Cantidad</TableHead>
                <TableHead className='w-20 sm:w-24 text-xs sm:text-sm'>Precio</TableHead>
                <TableHead className='w-20 sm:w-24 text-xs sm:text-sm'>Parcial</TableHead>
                <TableHead className='w-10 sm:w-12'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recursos.map((recurso) => (
                <TableRow key={recurso.id}>
                  <TableCell>
                    <TipoIcon tipo={recurso.tipo} />
                  </TableCell>
                  <TableCell className='w-16'>
                    <span className='text-xs sm:text-sm truncate block'>{recurso.descripcion}</span>
                  </TableCell>
                  <TableCell className='text-center'>
                    <span className='text-xs sm:text-sm'>{recurso.unidad}</span>
                  </TableCell>
                  <TableCell>
                    {recurso.cuadrilla !== undefined ? (
                      <Input
                        type='number'
                        defaultValue={recurso.cuadrilla}
                        className='text-xs'
                        step='0.01'
                      />
                    ) : (
                      <div className='text-center text-xs sm:text-sm'>-</div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Input
                      type='number'
                      defaultValue={recurso.cantidad}
                      className='h-6 sm:h-7 w-16 sm:w-20 text-xs'
                      step='0.01'
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type='number'
                      defaultValue={recurso.precio}
                      className='h-6 sm:h-7 w-20 sm:w-24 text-xs'
                      step='0.01'
                    />
                  </TableCell>
                  <TableCell className='font-medium text-xs sm:text-sm'>
                    {recurso.parcial.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button variant='ghost' size='icon' className='size-5 sm:size-6'>
                      <Trash2 className='size-2.5 sm:size-3 text-red-600' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}

