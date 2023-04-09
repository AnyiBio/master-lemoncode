import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface Props {
  inputValue,
  onInputChange: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSetOrganization: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FC<Props> = ({
  inputValue,
  onInputChange,
  onSetOrganization,
  onKeyPress
}) => {

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
        value={inputValue}
        onChange={onInputChange}
        onBlur={onSetOrganization}
        onKeyDown={onKeyPress}
      />
    </Box>
  );
}
