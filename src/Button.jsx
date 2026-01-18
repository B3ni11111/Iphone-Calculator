import { Button as MuiButton } from '@mui/material';


export default function Button({ onClick, label, icon, variant = 'contained', sx = {}, xs = 3, sm = 3 }) {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      fullWidth
      sx={{
        height: '60px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderRadius: '50px', 
        textTransform: 'none', 
        boxShadow: 'none',    
        '&:hover': {
          boxShadow: 'none',
          opacity: 0.8,      
        },
        ...sx, 
      }}
    >
      {icon || label}
    </MuiButton>
  );
}
