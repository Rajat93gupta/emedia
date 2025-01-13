"use client";
import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid2,
    Link,
    Avatar,
    IconButton,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PermMediaIcon from '@mui/icons-material/PermMedia';

const Page = () => {
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [feedContent, setFeedContent] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleCommentClick = () => {
        setIsCommentBoxOpen(!isCommentBoxOpen);
    };

    const handleShareClick = () => {
        if (commentText.trim()) {
            setFeedContent((prev) => [
                ...prev,
                { text: commentText, image: uploadedImage },
            ]);
            setCommentText('');
            setUploadedImage(null);
            setIsCommentBoxOpen(false);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedImage(URL.createObjectURL(file));
        }
    };

    return (
        <Box sx={{ paddingTop: '80px', px: 2 }}>
            <Grid2 container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid2 item xs={12} md="auto">
                    <Typography component="p" variant="h6">
                        Feeds
                    </Typography>
                </Grid2>

                <Grid2 item xs={12} md="auto">
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <Link href="/recent" underline="hover" sx={{ cursor: 'pointer', fontSize: '1rem' }}>
                            Recent
                        </Link>
                        <Link href="/friends" underline="hover" sx={{ cursor: 'pointer', fontSize: '1rem' }}>
                            Friends
                        </Link>
                        <Link href="/popular" underline="hover" sx={{ cursor: 'pointer', fontSize: '1rem' }}>
                            Popular
                        </Link>
                    </Box>
                </Grid2>
            </Grid2>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#DFEBFF',
                    borderRadius: '20px',
                    padding: '20px',
                    marginTop: '20px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src="./vedio1.png" alt="User Avatar" sx={{ width: 30, height: 30 }} />
                        <Box>
                            <Typography component="p" variant="body1" sx={{ fontWeight: 'bold' }}>
                                Username
                            </Typography>
                            <Typography component="p" variant="body2" sx={{ color: 'gray', fontSize: '12px' }}>
                                2 hours ago
                            </Typography>
                        </Box>
                    </Box>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>

              <Box sx={{display:"flex" ,alignItems:"center" ,gap:"10px"}}>
              {feedContent.map((feed, index) => (
                    <Box key={index} sx={{ marginTop: '20px', }}>
                        {feed.image && (
                            <img
                                src={feed.image}
                                alt="Uploaded"
                                style={{
                                    maxWidth:"200px",
                                    height:"200px",
                                    width: '100%',
                                    borderRadius: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                        )}
                        <Typography component="p" sx={{ fontSize: '14px' }}>
                            {feed.text}
                        </Typography>
                    </Box>
                ))}
              </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <RemoveRedEyeRoundedIcon />
                        <Typography component="span" sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
                            6234
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <FavoriteIcon
                            sx={{
                                color: 'black',
                                '&:hover': {
                                    color: 'red',
                                },
                                transition: 'color 0.3s ease',
                            }}
                        />
                        <Typography component="span" sx={{ fontSize: '12px', fontWeight: '600' }}>
                            Like
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                        onClick={handleCommentClick}
                    >
                        <InsertCommentIcon sx={{ color: 'black' }} />
                        <Typography component="span" sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
                            Share Feedback
                        </Typography>
                    </Box>
                </Box>

                {isCommentBoxOpen && (
                    <Box
                        sx={{
                            marginTop: '15px',
                            background: '#FFFFFF',
                            borderRadius: '10px',
                            padding: '15px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px',padding:"0px" }}>
                           
                            {uploadedImage && (
                                <img
                                    src={uploadedImage}
                                    alt="Preview"
                                    style={{
                                        maxWidth:"200px",
                                        width: '100%',
                                        height:"200px",
                                        borderRadius: '10px',
                                        marginBottom: '10px',
                                        background:"green"
                                     
                                    }}
                                />
                            )}
                             <TextField
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Write your comment here..."
                                multiline
                                rows={3}
                                fullWidth
                                variant="outlined"
                                sx={
                                    {
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: '10px',
                                        "& fieldset": {
                                            border: 'none',
                                        },
                                    },fontSize:"12px",
                                    "& .MuiOutlinedInput-root": {
                                        padding: 0, // Remove padding from the root
                                        "& textarea": {
                                            padding: 0, // Remove padding from the textarea specifically
                                        },
                                        "& fieldset": {
                                            border: 'none', // Optional: Remove border
                                        },
                                    },
                                }}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Box sx={{display:"flex", alignItems:"center",gap:"2px"}}>
                                    <PermMediaIcon/>
                                <Button variant="" component="label" sx={{fontSize:"14px",textTransform:"lowercase",padding:"0px"}}>
                                     Upload Image
                                    <input type="file" hidden onChange={handleImageUpload} />
                                </Button>
                                </Box>
                                <FormControlLabel control={<Checkbox />} label="Public" />
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ alignSelf: 'flex-end' }}
                                onClick={handleShareClick}
                            >
                                Share
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Page;
