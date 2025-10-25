import { useState } from 'react'
import { Search, FileDown, Download, Upload, Plus } from 'lucide-react'
import { Input } from '@workspace/ui/components/input'
import ResponsiveToolbar from './responsive-toolbar'
import { ElementoCard } from './elemento-card'

interface Elemento {
  codigo: string
  nombre: string
}

const mockData: Elemento[] = [
  { codigo: '00001', nombre: 'OBRAS PROVISONALES' },
  { codigo: '00002', nombre: 'OBRAS PRELIMINARES' },
  { codigo: '00003', nombre: 'COLUMNAS' },
  { codigo: '00004', nombre: 'CONCRETO SIMPLES' },
  { codigo: '00005', nombre: 'CONCRETO ARMADO' },
]

export default function ElementosCards() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = mockData.filter(item =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.codigo.includes(searchTerm)
  )

  return (
    <div className="space-y-4">
      {/* Header with search and actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar elementos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 max-w-sm"
            />
          </div>
        </div>
        
        <ResponsiveToolbar
          actions={[
            {
              label: 'PDF',
              icon: <FileDown className="h-4 w-4" />,
              onClick: () => console.log('PDF export'),
              variant: 'outline',
              priority: 'high'
            },
            {
              label: 'Excel',
              icon: <Download className="h-4 w-4" />,
              onClick: () => console.log('Excel export'),
              variant: 'outline',
              priority: 'high'
            },
            {
              label: 'Exportar',
              onClick: () => console.log('Export'),
              variant: 'outline',
              priority: 'medium'
            },
            {
              label: 'Importar',
              icon: <Upload className="h-4 w-4" />,
              onClick: () => console.log('Import'),
              variant: 'outline',
              priority: 'medium'
            },
            {
              label: 'Nuevo Elemento',
              icon: <Plus className="h-4 w-4" />,
              onClick: () => console.log('New element'),
              variant: 'default',
              priority: 'high'
            }
          ]}
        />
      </div>

      {/* Cards */}
      {filteredData.length === 0 ? (
        <div className='text-muted-foreground py-10 text-center text-sm'>
          No hay resultados.
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-3'>
          {filteredData.map((elemento) => (
            <ElementoCard key={elemento.codigo} elemento={elemento} />
          ))}
        </div>
      )}
    </div>
  )
}
