import { Button as MuiButton } from '@mui/material';

/**
 * Button Component
 * 
 * Accepts custom sx styles and makes buttons round like iPhone calculator
 * Can display either a label (text) or an icon
 */
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
        borderRadius: '50px',  // Makes buttons perfectly round like iPhone calculator
        textTransform: 'none',  // Prevents uppercase text
        boxShadow: 'none',      // Remove default shadow for cleaner look
        '&:hover': {
          boxShadow: 'none',
          opacity: 0.8,         // Subtle hover effect
        },
        ...sx,  // Merge any custom styles passed from parent
      }}
    >
      {icon || label}
    </MuiButton>
  );
}
