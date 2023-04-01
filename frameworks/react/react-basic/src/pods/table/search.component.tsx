import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface Props {
  onSetOrganization: (e: string) => void;
}

export const SearchComponent: React.FC<Props> = ({ onSetOrganization }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      style={{ backgroundColor: 'white', width: '90%', borderRadius:'3px' }}
    >
      <TextField
        label="Search for a company"
        defaultValue={'lemoncode'}
        onBlur={e => onSetOrganization(e.target.value)}
      />
    </Box>
  );
}
