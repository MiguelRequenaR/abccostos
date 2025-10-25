import { useState } from 'react'
import { Search, FileDown, Download, Upload, Plus, MoreVertical } from 'lucide-react'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@workspace/ui/components/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@workspace/ui/components/dropdown-menu'
import ResponsiveToolbar from './responsive-toolbar'

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

export default function ElementosTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)

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
              className="pl-10 w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {itemsPerPage}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setItemsPerPage(10)}>10</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setItemsPerPage(25)}>25</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setItemsPerPage(50)}>50</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-32">Código</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead className="w-20">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.codigo}>
                <TableCell className="font-medium">{item.codigo}</TableCell>
                <TableCell>{item.nombre}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Eliminar</DropdownMenuItem>
                      <DropdownMenuItem>Duplicar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
