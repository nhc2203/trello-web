import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'

import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors

} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

function BoardContent({ board }) {

  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 50 } })


  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd ', event)
    const { active, over } = event

    if(!over) return
    if (active.id !== over.id) {
      //Laay vi tri cu
      const oldIndex = orderedColumns.findIndex(c => c._id == active.id)
      //Laay vi tri moi
      const newIndex = orderedColumns.findIndex(c => c._id == over.id)

      const dndOrderdColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      // const dndOrderdColumnsIds = dndOrderdColumns.map(c => c._id)
      // console.log(dndOrderdColumns)
      // console.log(dndOrderdColumnsIds)

      //Cập nhập lại state
      setOrderedColumns(dndOrderdColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
        ),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns = {orderedColumns}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent