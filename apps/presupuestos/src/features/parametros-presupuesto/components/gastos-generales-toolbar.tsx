import { Button } from '@workspace/ui/components/button'
import {
  ArrowDown,
  ArrowUp,
  Copy,
  Filter,
  Grid3x3,
  List,
  Minus,
  Pencil,
  Repeat2,
} from 'lucide-react'


export function GastosGeneralesToolbar() {
  return (
    <div className='flex items-center justify-end mb-2 '>
      <div className='flex items-center'>
        <Button variant='ghost' size='icon' className='size-8'>
          <Grid3x3 className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <List className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <ArrowUp className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <ArrowDown className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <Minus className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <Copy className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <Pencil className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <Filter className='size-4' />
        </Button>
        <Button variant='ghost' size='icon' className='size-8'>
          <Repeat2 className='size-4' />
        </Button>
      </div>

    </div>
  )
}

