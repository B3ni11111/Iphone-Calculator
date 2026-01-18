import { useState } from "react";
import { 
  Paper,      // Paper: Creates a card-like container with elevation/shadow. Perfect for calculator body.
  Box,        // Box: Flexible container for layout, spacing, and styling. Like a div but with MUI props.
  Grid,       // Grid: Responsive grid system for organizing buttons in rows and columns.
  Typography, // Typography: Text component with theme-aware styling. Used for the display screen.
  Container   // Container: Centers content and provides max-width. Wraps the entire calculator.
} from '@mui/material';
import Button from './Button';
import { evaluate } from "mathjs";

export default function Calculator() {
  // State for the current number value
  const [num, setNum] = useState(0);
  
  // State for the string representation of numbers and operators
  const [string, setString] = useState('');

  // Placeholder functions for each button - you'll implement the logic!
  
  // Number button handlers (0-9)

  const handleNum = (n) => {
    setString((prev) => {
        return (prev + n)
    })
  }
  
  

  // Operator button handlers
  const handleAdd = () => {
    setString((prev) => prev + ' + ')
  };
  
  const handleSubtract = () => {
    setString((prev) => prev + ' - ')
  };
  
  const handleMultiply = () => {
    setString((prev) => prev + ' * ')
  };
  
  const handleDivide = () => {
    setString((prev) => prev + ' / ')
  };
  
  const handleEquals = () => {
    setNum(evaluate(string))
    
  };
  
  const handleClear = () => {
    setString('')
    setNum(0)
  };
  
  const handleDecimal = () => {
    setString((prev) => prev + '.')
  };

  // Percentage handler - iPhone calculator logic: converts current number to percentage (divides by 100)
  const handlePercentage = () => {
    // If there's a current number displayed, convert it to percentage
    if (num !== 0) {
      const percentageValue = num / 100;
      setNum(percentageValue);
      setString(percentageValue.toString());
    } else if (string) {
      // If there's a string, evaluate it and convert to percentage
      try {
        const currentValue = evaluate(string);
        const percentageValue = currentValue / 100;
        setNum(percentageValue);
        setString(percentageValue.toString());
      } catch {
        // If evaluation fails, just add % to the string
        setString((prev) => prev + ' / 100');
      }
    }
  };

  // Delete handler - removes the last character from the string (backspace)
  const handleDelete = () => {
    setString((prev) => {
      if (prev.length > 0) {
        return prev.slice(0, -1);
      }
      return '';
    });
    // Also reset num if string becomes empty
    if (string.length <= 1) {
      setNum(0);
    }
  };

  // Plus/Minus handler - iPhone calculator logic: toggles the sign of the current number
  const handlePlusMinus = () => {
    if (num !== 0) {
      const newValue = -num;
      setNum(newValue);
      setString(newValue.toString());
    } else if (string) {
      // If there's a string, evaluate it and toggle sign
      try {
        const currentValue = evaluate(string);
        const newValue = -currentValue;
        setNum(newValue);
        setString(newValue.toString());
      } catch {
        // If evaluation fails, prepend minus or remove it
        if (string.startsWith('-')) {
          setString(string.slice(1));
        } else {
          setString('-' + string);
        }
      }
    }
  };

// Color scheme variables - need # prefix for hex colors
const orange = '#e88902'
const gray = '#505050'
const black = '#1C1C1C'
const white = '#D4D4D2'
  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        padding: 2,
        backgroundColor: '#000000'  // Pure black background like iPhone calculator
      }}
    >
      {/* Paper: Creates elevated card container. 
          Example: <Paper elevation={3}> gives shadow depth of 3 */}
      <Paper 
        elevation={8} 
        sx={{ 
          padding: 3, 
          borderRadius: 3,
          backgroundColor: '#000000',  // Pure black background like iPhone calculator
          width: '100%',
          maxWidth: '400px'
        }}
      >
        {/* Box: Flexible container for the display area.
            Example: <Box sx={{ p: 2 }}> adds padding of 2 units */}
        <Box 
          sx={{ 
            mb: 3,           // margin-bottom: 3 units
            p: 2,            // padding: 2 units
            backgroundColor: '#000000',  // Pure black like iPhone calculator
            borderRadius: 2,
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}
        >
          {/* Typography: Themed text component for displaying calculator string.
              Example: <Typography variant="h4"> displays large heading text */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#888',
              fontSize: '1rem',
              mb: 1,
              minHeight: '24px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif'  // Apple/iPhone font
            }}
          >
            {string}
          </Typography>
          
          {/* Typography: Display for the current number - iPhone calculator style */}
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#fff',
              fontWeight: 'bold',
              wordBreak: 'break-all',
              textAlign: 'right',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif'  // Apple/iPhone font
            }}
          >
            {num}
          </Typography>
        </Box>

        {/* Grid: Responsive grid system for button layout - iPhone calculator style.
            Example: <Grid container spacing={2}> creates grid with 2-unit gaps */}
        <Grid container spacing={2}>
          {/* Top row: C, +/-, %, ÷ - 4 equal buttons matching iPhone calculator */}
          <Grid size={3}>
            {/* Clear button - iPhone calculator style */}
            <Button 
              onClick={handleClear} 
              label="C" 
              sx={{backgroundColor: gray, color: white}} 
            />
          </Grid>
          <Grid size={3}>
            {/* Plus/Minus button - toggles sign of current number */}
            <Button 
              onClick={handlePlusMinus} 
              label="+/-" 
              sx={{backgroundColor: gray, color: white}} 
            />
          </Grid>
          <Grid size={3}>
            {/* Percentage button - iPhone calculator logic */}
            <Button 
              onClick={handlePercentage} 
              label="%" 
              sx={{backgroundColor: gray, color: white}} 
            />
          </Grid>
          <Grid size={3}>
            {/* Division operator button */}
            <Button  
              sx={{backgroundColor: orange, color: white}} 
              onClick={handleDivide} 
              label="÷"  
            />
          </Grid>

          {/* Second row: 7, 8, 9, × */}
          <Grid size={3}>
            <Button sx={{backgroundColor: black, color: white}} onClick={() => handleNum(7)} label="7" />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: black, color: white}} onClick={() => handleNum(8)} label="8" />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: black, color: white}} onClick={() => handleNum(9)} label="9" />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: orange, color: white}}  onClick={handleMultiply} label="×"  />
          </Grid>

          {/* Third row: 4, 5, 6, - */}
          <Grid size={3}>
            <Button sx={{backgroundColor: black, color: white}}  onClick={() => handleNum(4)} label="4" />
          </Grid>
          <Grid size={3}>
            <Button sx={{backgroundColor: black, color: white}}  onClick={() => handleNum(5)} label="5" />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: black, color: white}} onClick={() => handleNum(6)} label="6" />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: orange, color: white}} onClick={handleSubtract} label="−"  />
          </Grid>

          {/* Fourth row: 1, 2, 3, + */}
          <Grid size={3}>
            <Button sx={{backgroundColor: black, color: white}}  onClick={() => handleNum(1)} label="1" />
          </Grid>
          <Grid size={3}>
            <Button sx={{backgroundColor: black, color: white}}  onClick={() => handleNum(2)} label="2" />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: black, color: white}} onClick={() => handleNum(3)} label="3" />
          </Grid>
          <Grid size={3}>
            <Button sx={{backgroundColor: orange, color: white}} onClick={handleAdd} label="+" />
          </Grid>

          {/* Fifth row: 0 (double width), ., = - iPhone calculator style */}
          <Grid size={6}>
            {/* Zero button spans 2 columns (6/12) - rounded rectangle like iPhone */}
            <Button  
              sx={{
                backgroundColor: black, 
                color: white,
                borderRadius: '30px', // Slightly less round for the wide button
              }} 
              onClick={() => handleNum(0)} 
              label="0" 
            />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: black, color: white}} onClick={handleDecimal} label="." />
          </Grid>
          <Grid size={3}>
            {/* Equals button - in same row as 0 and . */}
            <Button 
              onClick={handleEquals} 
              label="=" 
              sx={{backgroundColor: orange, color: white}} 
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
