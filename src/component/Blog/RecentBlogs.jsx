import React from 'react'
import userimage from "../../../public/icon.png"
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
const RecentBlogs = () => {
  const Blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "UI vs. UX: What’s the difference?",
      time: "9 August 2022",
      userimage: userimage,
      author: "Mad Sparrow",

    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "UI vs. UX: What’s the difference?",
      time: "9 August 2022",
      userimage: userimage,
      author: "Mad Sparrow",

    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "UI vs. UX: What’s the difference?",
      time: "9 August 2022",
      userimage: userimage,
      author: "Mad Sparrow",

    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "UI vs. UX: What’s the difference?",
      time: "9 August 2022",
      userimage: userimage,
      author: "Mad Sparrow",

    }

  ]
  return (
    <>
    <Typography variant='h5' sx={{px:"60px", mt:5}}>Recent Post</Typography>
   
      <Box sx={{ display: "flex", justifyContent: { md: "center" }, gap: "12px", flexWrap: "wrap", p: 2 }}>
      
        {
          Blogs.map((blogs) => (
            <Card key={blogs.id} 
            sx={{ 
              maxWidth: { md: "300px" },
               width: "100%"
              
              }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogs.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>


          ))
        }
      </Box>
    </>
  )
}

export default RecentBlogs