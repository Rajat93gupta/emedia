"use client"
import React, { useState } from "react";
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    TextField,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import PermMediaIcon from "@mui/icons-material/PermMedia";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState("");
    const [newPostImage, setNewPostImage] = useState(null);
    const [commentInputs, setCommentInputs] = useState({});
    const [commentVisibility, setCommentVisibility] = useState({});
    const [menuAnchor, setMenuAnchor] = useState({});

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setNewPostImage(URL.createObjectURL(file));
        }
    };

    const handleAddPost = () => {
        if (newPostText.trim() || newPostImage) {
            const newPost = {
                text: newPostText,
                image: newPostImage,
                likes: 0,
                comments: [],
                liked: false,
            };
            setPosts([newPost, ...posts]);
            setNewPostText("");
            setNewPostImage(null);
        }
    };

    const handleLike = (index) => {
        const updatedPosts = posts.map((post, i) =>
            i === index
                ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
                : post
        );
        setPosts(updatedPosts);
    };

    const handleCommentInputChange = (index, value) => {
        setCommentInputs((prev) => ({ ...prev, [index]: value }));
    };

    const handleAddComment = (index) => {
        const commentText = commentInputs[index]?.trim();
        if (!commentText) return;

        const updatedPosts = posts.map((post, i) =>
            i === index
                ? { ...post, comments: [commentText, ...post.comments] }
                : post
        );

        setPosts(updatedPosts);
        setCommentInputs((prev) => ({ ...prev, [index]: "" }));
    };

    const toggleCommentSection = (index) => {
        setCommentVisibility((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleMenuOpen = (event, index) => {
        setMenuAnchor((prev) => ({ ...prev, [index]: event.currentTarget }));
    };

    const handleMenuClose = (index) => {
        setMenuAnchor((prev) => ({ ...prev, [index]: null }));
    };

    return (
        <Box sx={{ padding: "80px" }}>
            {/* Post Creation Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#DFEBFF",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: "20px",
                    border: "1px solid #D3D3D3",
                }}
            >
                {newPostImage && (
                    <img
                        src={newPostImage}
                        alt="Preview"
                        style={{
                            width: "100%",
                            maxHeight: "200px",
                            borderRadius: "10px",
                            marginBottom: "10px",
                            objectFit: "cover",
                        }}
                    />
                )}
                <TextField
                    placeholder="What's on your mind?"
                    multiline
                    rows={3}
                    fullWidth
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            "& fieldset": { border: "none" },
                        },
                    }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button
                        variant=""
                        component="label"
                        startIcon={<PermMediaIcon />}
                        sx={{ color: "black", fontSize: "12px" }}
                    >
                        Upload Image
                        <input type="file" hidden onChange={handleImageUpload} />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleAddPost}
                        sx={{
                            color: "white",
                            fontSize: "12px",
                            background: "linear-gradient(90deg, #4A90E2 0%, #003366 100%)",
                            textTransform: "none",
                            "&:hover": {
                                background: "linear-gradient(90deg, #003366 0%, #4A90E2 100%)",
                            },
                        }}
                    >
                        Post
                    </Button>
                </Box>
            </Box>

            {/* Posts Section */}
            {posts.map((post, index) => (
                <Box
                    key={index}
                    sx={{
                        background: "#FFFFFF",
                        borderRadius: "10px",
                        padding: "20px",
                        marginBottom: "20px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Post Header */}
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <Avatar alt="User Avatar" />
                            <Typography sx={{ fontWeight: "bold" }}>Username</Typography>
                        </Box>
                        <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchor[index]}
                            open={Boolean(menuAnchor[index])}
                            onClose={() => handleMenuClose(index)}
                        >
                            <MenuItem onClick={() => handleMenuClose(index)}>Interested</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(index)}>Uninterested</MenuItem>
                        </Menu>
                    </Box>

                    {/* Post Content */}
                    {post.image && (
                        <img
                            src={post.image}
                            alt="Post"
                            style={{
                                width: "100%",
                                maxHeight: "200px",
                                borderRadius: "10px",
                                marginBottom: "10px",
                                objectFit: "cover",
                            }}
                        />
                    )}
                    <Typography>{post.text}</Typography>

                    {/* Post Actions */}
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <FavoriteIcon
                                sx={{ color: post.liked ? "red" : "black", cursor: "pointer" }}
                                onClick={() => handleLike(index)}
                            />
                            <Typography>{post.likes}</Typography>
                            <Box
                                sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "10px" }}
                                onClick={() => toggleCommentSection(index)}
                            >
                                <CommentIcon />
                                <Typography>Comment</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <ShareIcon />
                                <Typography>Share</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Conditional Comment Section */}
                    {commentVisibility[index] && (
                        <Box sx={{ marginTop: "10px" }}>
                            {post.comments.map((comment, i) => (
                                <Typography key={i} sx={{ fontSize: "18px", marginBottom: "5px" }}>
                                    {comment}
                                </Typography>
                            ))}
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <TextField
                                    placeholder="Add a comment..."
                                    value={commentInputs[index] || ""}
                                    onChange={(e) => handleCommentInputChange(index, e.target.value)}
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            padding: "0px",
                                            "& fieldset": { border: "none" },
                                        },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        height: "40px",
                                        background: "linear-gradient(90deg, #4A90E2 0%, #003366 100%)",
                                        "&:hover": { background: "linear-gradient(90deg, #003366 0%, #4A90E2 100%)" },
                                    }}
                                    onClick={() => handleAddComment(index)}
                                >
                                    Comment
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default Feed;
