import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useRef } from 'react';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard({ title, editTodo, deleteTodo, index }) {
    const [showTodo, setShowTodo] = useState(true);
    const editedValue = useRef();

    const editedTodoFunc = () => {
        editTodo(index, editedValue.current.value);
        setShowTodo(true)
    }
    return (
        <>
            <Card sx={{ minWidth: 275 }} className='mt-2'>
                {showTodo ?
                    <div>
                        <CardContent>
                            <Typography sx={{ color: '#039be5', width: "50%", fontSize: 15 }} color="text.secondary" gutterBottom>
                                {title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success" onClick={() => setShowTodo(false)}>
                                Edit</Button>
                            <Button variant="contained" color="error" onClick={deleteTodo}>
                                Delete
                            </Button>
                        </CardActions>
                    </div> : <div>
                        <input type="text" placeholder='edited value' ref={editedValue} />
                        <Button sx={{marginLeft:'12px', marginTop:'5px',marginBottom:'5px'}} variant="contained" color="success" onClick={editedTodoFunc}>
                            Save</Button>
                    </div>
                }

            </Card>
        </>
    );
}