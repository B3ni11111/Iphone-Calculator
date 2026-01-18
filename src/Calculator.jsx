import { useState } from "react";
import { 
  Paper,   
  Box,       
  Grid,      
  Typography, 
  Container  
} from '@mui/material';
import Button from './Button';
import { evaluate } from "mathjs";

export default function Calculator() {
 
  const [num, setNum] = useState(0);
  

  const [string, setString] = useState('');



  const handleNum = (n) => {
    setString((prev) => {
        return (prev + n)
    })
  }
  
  


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


  const handlePercentage = () => {
  
    if (num !== 0) {
      const percentageValue = num / 100;
      setNum(percentageValue);
      setString(percentageValue.toString());
    } else if (string) {
 
      try {
        const currentValue = evaluate(string);
        const percentageValue = currentValue / 100;
        setNum(percentageValue);
        setString(percentageValue.toString());
      } catch {
     
        setString((prev) => prev + ' / 100');
      }
    }
  };


  const handleDelete = () => {
    setString((prev) => {
      if (prev.length > 0) {
        return prev.slice(0, -1);
      }
      return '';
    });

    if (string.length <= 1) {
      setNum(0);
    }
  };


  const handlePlusMinus = () => {
    if (num !== 0) {
      const newValue = -num;
      setNum(newValue);
      setString(newValue.toString());
    } else if (string) {
      
      try {
        const currentValue = evaluate(string);
        const newValue = -currentValue;
        setNum(newValue);
        setString(newValue.toString());
      } catch {
        
        if (string.startsWith('-')) {
          setString(string.slice(1));
        } else {
          setString('-' + string);
        }
      }
    }
  };


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
        backgroundColor: '#000000' 
      }}
    >
   
      <Paper 
        elevation={8} 
        sx={{ 
          padding: 3, 
          borderRadius: 3,
          backgroundColor: '#000000',
          width: '100%',
          maxWidth: '400px'
        }}
      >
 
        <Box 
          sx={{ 
            mb: 3,        
            p: 2,           
            backgroundColor: '#000000', 
            borderRadius: 2,
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}
        >

          <Typography 
            variant="h6" 
            sx={{ 
              color: '#888',
              fontSize: '1rem',
              mb: 1,
              minHeight: '24px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif'
            }}
          >
            {string}
          </Typography>
          
       
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#fff',
              fontWeight: 'bold',
              wordBreak: 'break-all',
              textAlign: 'right',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif'  
            }}
          >
            {num}
          </Typography>
        </Box>

       
        <Grid container spacing={2}>
         
          <Grid size={3}>
           
            <Button 
              onClick={handleClear} 
              label="C" 
              sx={{backgroundColor: gray, color: white}} 
            />
          </Grid>
          <Grid size={3}>
           
            <Button 
              onClick={handlePlusMinus} 
              label="+/-" 
              sx={{backgroundColor: gray, color: white}} 
            />
          </Grid>
          <Grid size={3}>
          
            <Button 
              onClick={handlePercentage} 
              label="%" 
              sx={{backgroundColor: gray, color: white}} 
            />
          </Grid>
          <Grid size={3}>
           
            <Button  
              sx={{backgroundColor: orange, color: white}} 
              onClick={handleDivide} 
              label="÷"  
            />
          </Grid>

        
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

         
          <Grid size={6}>
           
            <Button  
              sx={{
                backgroundColor: black, 
                color: white,
                borderRadius: '30px', 
              }} 
              onClick={() => handleNum(0)} 
              label="0" 
            />
          </Grid>
          <Grid size={3}>
            <Button  sx={{backgroundColor: black, color: white}} onClick={handleDecimal} label="." />
          </Grid>
          <Grid size={3}>
          
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
