import React, { useEffect, useRef, useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import BasicCard from '../components/Card';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, where, query } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import Typography from '@mui/material/Typography'
import { auth } from '../firebase/firebaseConfig'


const Home = () => {

  //state 
  const [data, setData] = useState([]);
  //form
  const todo = useRef()

  //useEffect
  useEffect(() => {
    async function getDataFromFirestore() {
      const user = auth.currentUser;
      if (user) {
        const q = query(collection(db, "todo"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const newData = [];
        querySnapshot.forEach((doc) => {
          const obj = {
            docId: doc.id,
            ...doc.data()
          }
          newData.push(obj);
        });
        setData(newData);
      }
    }
    getDataFromFirestore();

  }, []);



  //add todo function
  const addTodo = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;

    if (user) {
      try {
        const docRef = await addDoc(collection(db, "todo"), {
          userId: user.uid, // Associate the user ID with the todo
          todo: todo.current.value,
        });
          setData([...data, {
          docId: docRef.id,
          todo: todo.current.value
        }]);

        todo.current.value = '';
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  // Edit Function
  const editTodo = async (index, editedValue) => {
    console.log(`todo index is ${index} and value is ${editedValue}`);
    if (data && data[index]) {
      const updatedTodo = doc(db, "todo", data[index].docId);
      try {
        await updateDoc(updatedTodo, {
          todo: editedValue
        });
        data.splice(index, 1, {
          todo: editedValue
        });
        setData([...data]);
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    } else {
      console.error("Invalid index or data array:", index, data);
    }
  };

  // delete function
  const deleteTodo = async (index) => {
    console.log('todo deleted', index);

    try {
      if (data && data[index]) {
        await deleteDoc(doc(db, "todo", data[index].docId));
        data.splice(index, 1);
        setData([...data]);
      } else {
        console.error("Invalid index or data array:", index, data);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <Box   sx={{ flexDirection: 'row', justifyContent:"center" ,alignItems:"center", textAlign:"center", marginTop:'18px' }}>
      <form onSubmit={addTodo}>
        <TextField sx={{ width: '25%'}} id="filled-basic" label="Todo" variant="filled" inputRef={todo} required min={6} />
        <div >
        <Button sx={{ width: '25%', marginTop:'12px' }} variant="contained" type='submit'>Add Todo</Button>
        </div>
      </form>
      <Box>
        {data.length > 0 ? data.map((item, index) => {
          return <BasicCard key={index} title={item.todo} editTodo={editTodo} deleteTodo={() => deleteTodo(index)} index={index} />
        }) : <Typography sx={{ marginTop:'12px' }} variant="h5" color="initial">No item found</Typography>}
      </Box>
    </Box>
  )
}

export default Home