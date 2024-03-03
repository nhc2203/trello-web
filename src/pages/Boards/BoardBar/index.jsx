import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const MENU_STYLES = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="MERN Fullstack"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title='NguyenHungCuong'>
            <Avatar alt="NguyenHungCuong" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='NguyenHungCuong'>
            <Avatar alt="NguyenHungCuong" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='NguyenHungCuong'>
            <Avatar alt="NguyenHungCuong" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='NguyenHungCuong'>
            <Avatar alt="NguyenHungCuong" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='NguyenHungCuong'>
            <Avatar alt="NguyenHungCuong" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar