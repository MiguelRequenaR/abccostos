import { useState } from 'react'
import { Search, Save, FileDown, Download, Upload, Plus } from 'lucide-react'
import { Input } from '@workspace/ui/components/input'
import ResponsiveToolbar from './responsive-toolbar'
import { PartidaCard } from './partida-card'

interface Partida {
  codigo: string
  descripcion: string
  unidad: string
  ultimaModificacion: string
  fechaModificacion: string
}

const mockData: Partida[] = [
  { 
    codigo: '000001', 
    descripcion: 'Cartel De Identificación De La Obra 3.60x2.40m', 
    unidad: 'und', 
    ultimaModificacion: 'Alejandro Bravo', 
    fechaModificacion: '25/06/2025' 
  },
  { 
    codigo: '000002', 
    descripcion: 'Sobrecimientos Reforzados - Concreto F\'c=210 Kg/cm2', 
    unidad: 'm3', 
    ultimaModificacion: 'Victor Ramirez', 
    fechaModificacion: '25/06/2025' 
  },
  { 
    codigo: '000003', 
    descripcion: 'Limpieza De Terreno Manual', 
    unidad: 'm2', 
    ultimaModificacion: 'Carlos Mendoza', 
    fechaModificacion: '24/06/2025' 
  },
  { 
    codigo: '000004', 
    descripcion: 'Excavación Manual En Tierra', 
    unidad: 'm3', 
    ultimaModificacion: 'Maria Lopez', 
    fechaModificacion: '23/06/2025' 
  },
  { 
    codigo: '000005', 
    descripcion: 'Relleno Compactado Con Agua', 
    unidad: 'm3', 
    ultimaModificacion: 'Jose Garcia', 
    fechaModificacion: '22/06/2025' 
  },
]

export default function PartidasCards() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = mockData.filter(item =>
    item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
              placeholder="Buscar partida"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 max-w-sm"
            />
          </div>
        </div>
        
        <ResponsiveToolbar
          actions={[
            {
              label: 'Guardar',
              icon: <Save className="h-4 w-4" />,
              onClick: () => console.log('Save'),
              variant: 'outline',
              priority: 'high'
            },
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
              label: 'Importar',
              icon: <Upload className="h-4 w-4" />,
              onClick: () => console.log('Import'),
              variant: 'outline',
              priority: 'medium'
            },
            {
              label: 'Nuevo Partida',
              icon: <Plus className="h-4 w-4" />,
              onClick: () => console.log('New partida'),
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
          {filteredData.map((partida) => (
            <PartidaCard key={partida.codigo} partida={partida} />
          ))}
        </div>
      )}
    </div>
  )
}
