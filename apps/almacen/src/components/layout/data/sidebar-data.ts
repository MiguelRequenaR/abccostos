import {
  AudioWaveform,
  Boxes,
  Command,
  Crown,
  FileSearch,
  FileX,
  GalleryVerticalEnd,
  Monitor,
  Users,
  Wrench,
  BarChart3,
  ClipboardList,
  Truck,
  Warehouse,
  Computer,
} from 'lucide-react'
import { type SidebarData } from '../types'
import { type Database } from '@workspace/supabase/types'

type Usuario = Database['public']['Tables']['usuarios']['Row']

export const getSidebarData = (
  usuario: Usuario | null,
  userEmail?: string
): SidebarData => ({
  user: {
    name: usuario ? `${usuario.nombres} ${usuario.apellidos}` : 'Usuario',
    email: userEmail || 'usuario@ejemplo.com',
    avatar:
      usuario?.avatar ||
      'https://img.icons8.com/?size=100&id=p8UFrp2VUgHR&format=png&color=000000',
  },
  projects: [
    {
      name: 'Colegio ULP',
      logo: Command,
      plan: 'Consorcio ABC',
    },
    {
      name: 'Condominio Los Rosales',
      logo: GalleryVerticalEnd,
      plan: 'Consorcio ABC',
    },
    {
      name: 'Residencial El Sol',
      logo: AudioWaveform,
      plan: 'Consorcio ABC',
    },
  ],
  navGroups: [
    {
      title: 'Propietario',
      items: [
        { title: 'Dashboard', url: '/dashboard-propietario', icon: Monitor },
        {
          title: 'Clientes',
          url: '/clientes',
          icon: Crown,
        },
      ],
    },
    {
      title: 'Principal',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard-admin',
          icon: Monitor,
        },
        {
          title: 'Usuarios',
          url: '/usuarios',
          icon: Users,
        },
        {
          title: 'Proyectos',
          url: '/proyectos',
          icon: Boxes,
        },
      ],
    },
    {
      title: 'Almacén',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: Monitor,
        },
        {
          title: 'Mantenimiento',
          url: '/mantenimiento',
          icon: Wrench,
        },
        {
          title: 'Datos Principales',
          url: '/datos-principales',
          icon: FileX,
        },
        {
          title: 'Logística',
          url: '/logistica',
          icon: Truck,
        },
        {
          title: 'Gestión de Almacén',
          url: '/gestion-almacen',
          icon: Warehouse,
        },
        {
          title: 'Control Varios',
          url: '/control-varios',
          icon: ClipboardList,
        },
        {
          title: 'Control de Equipos',
          url: '/control-equipos',
          icon: Computer,
        },
        {
          title: 'Reportes',
          url: '/reportes',
          icon: BarChart3,
        },
        {
          title: 'Catálogos',
          url: '/catalogos',
          icon: FileSearch,
        }
      ],
    },
  ],
})
