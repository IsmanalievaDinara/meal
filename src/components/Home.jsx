import { Card,CardMedia,Grid,
    Typography} from '@mui/material'
    import {useEffect,useState} from 'react'
    import {useDispatch,useSelector} from 'react-redux'
    import {callToAPI} from './HomeSlice'
    
    
    function Home(){  
    
     const dispatch = useDispatch()
     const data = useSelector((state)=> state)
     useEffect(()=>{
         dispatch(callToAPI())
     },[dispatch])
     console.log(data)
  
     
        
        return (
            
            <div>
            {data.recipes.map((item)=>{
                return(
                    <>
                    <div className='card-container'>
            <Card sx={{maxWidth:300}}  className="card">
                <CardMedia
                component="img" height="300"
                image={item.strMealThumb}
                />
                <Typography className='Text' margin='10px' color="#8e4e84" fontSize="18px"fontWeight="bold">
                    {item.strMeal}
                </Typography>
                <Grid container spacing={2}>
              </Grid>
    
            </Card>
            
    
            </div>

    
           </>
    
            )
         
            })
         
           
        }

         </div> 
         )
    }
        
    export default Home
    