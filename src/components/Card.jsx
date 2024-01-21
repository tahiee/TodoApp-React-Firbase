import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useRef } from 'react';
import { Container, TextField } from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

export default function BasicCard({ title, editTodo, deleteTodo, index }) {
    const [showTodo, setShowTodo] = useState(true);
    
    const editedValue = useRef('');

    const editedTodoFunc = () => {
        console.log(editedValue.current.value);
        editTodo(index, editedValue.current.value);
        setShowTodo(true)
    }
    return (
        <>
            <Card sx={{ minWidth: 275 }} className='mt-2'>
                {showTodo ?
                    <Container sx={{boxShadow: 6 , backgroundColor:"#e8eaf6", border:"2px solid gray",marginTop:"2px",marginBottom:"8px" ,borderRadius:"5px", width:"50%"}}>
                        <CardContent sx={{ }} >
                            <Typography sx={{ color: 'black', fontWeight:"500" , fontSize: "20px", display: 'flex', justifyContent: "left", alignItems: "left", textAlign: "left" }} color="text.secondary" >
                                {title}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: "left", alignItems: "left", textAlign: "left" }}>
                            <Button variant="contained" color="success" onClick={() => setShowTodo(false)}>
                                Edit</Button>
                            <Button variant="contained" color="error" onClick={deleteTodo}>
                                Delete
                            </Button>
                        </CardActions>
                    </Container> : <Container sx={{marginTop:"12px"}}>
                        <TextField sx={{width:"292px", height:'60px' ,marginBottom:"8px"}} type="text" placeholder='edited value' inputRef={editedValue} />
                        <Button sx={{ marginLeft: '12px', marginTop: '5px', marginBottom: '5px' }} variant="contained" color="success" onClick={editedTodoFunc}>
                            Save</Button>
                    </Container>
                }

            </Card>
        </>
    );
}