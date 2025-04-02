import React, { use, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const items = [
    { id: 1, name: 'Mortadelo', description: 'Personaje cómics', price: '$10' },
    { id: 2, name: 'Barman', description: 'Superhéroe', price: '$20' },
    { id: 3, name: 'Che', description: 'Profe inglés', price: '$30' },
    { id: 4, name: 'Dora', description: 'Personaje cómics', price: '$40' },
];

const MaterialDesign = ()=> {

    const [message, setMessage] = useState("")
    const [message2, setMessage2] = useState("")
    const [data, setData] = useState(items)
    
    const handleFilter = () => {
        setData(items)
        setData(data => {
            let filtro = data.filter(item =>
                item.name.toLowerCase() === message.toLowerCase() || item.description.toLowerCase() === message2.toLowerCase()
            )

            console.log("Filtro Data: ", filtro)
            return filtro
        })
    }

    const handleReset = () => {
        setData(items);
        setMessage("");
        setMessage2("");
    }

    return (
        <>  
            <Box sx={{ p: 2, border: '1px dashed grey', display: 'flex',
                flexDirection: 'line', padding: 2, gap: 2}}
            >
                <TextField
                    label='Introduce name' variant="standard"
                    id="message" name="message" value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                >
                </TextField>
                <TextField
                    label='Introduce description' variant="standard"
                    id="message2" name="message2" value={message2}
                    onChange={(e)=> setMessage2(e.target.value)}
                >
                </TextField>
                <Button variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleFilter}
                >
                    Filtrar
                </Button>
                <Button variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleReset}
                >
                    RESET
                </Button>
            </Box>

            <Box sx={{ p: 2, border: '1px dashed grey', display: 'flex', gap: 2, justifyContent: 'center' }}>
                {data.map((item, index) =>(
                    <Card 
                        key={index} sx={{ width: 300, p: 3, border: 'solid grey', display: 'flex', 
                            flexDirection: 'column', g: 5, alignItems: 'center', borderRadius: 5}}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <h3>{item.price}</h3>
                    </Card>
                ))}
            </Box>
        </>

    )
}

export default MaterialDesign