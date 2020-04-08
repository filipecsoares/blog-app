import React, { useState, useEffect } from "react";
import axios from "axios";

import PostForm from "../PostForm";
import PostList from "../../components/PostList";
import Layout from "../../components/Layout";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("inicio")
        const token = localStorage.getItem("SESSION_TOKEN");
        const postResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/posts`,
          {
            headers: { "auth-token": token },
          }
        );

        console.log(postResponse.data);
        const postUsers = await Promise.all(
          postResponse.data.map(async (post) => {
            const user = await axios.get(
              `${process.env.REACT_APP_SERVER_URL}/users/${post.owner}`,
              {
                headers: { "auth-token": token },
              }
            );

            return { ...post, username: user.data.username };
          })
        );

        setPosts(postUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = (ownerID, postID) => {
    console.log(ownerID, postID);

    const newPosts = posts.map((post) => {
      if (post._id === postID) {
        const postLiked = post.likes.find((owner) => owner === ownerID);

        if (postLiked) {
          return {
            ...post,
            likes: post.likes.filter((owner) => owner !== ownerID),
          };
        }
        return { ...post, likes: [...post.likes, ownerID] };
      }
      return post;
    });

    setPosts(newPosts.reverse());
  };

  const onCreatePost = async (title, content) => {
    try {
      const token = localStorage.getItem("SESSION_TOKEN");

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/posts`,
        {
          title,
          content,
        },
        {
          headers: { "auth-token": token },
        }
      );

      setPosts([...posts, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <PostForm onCreatePost={onCreatePost} />
      <PostList posts={posts} onLike={handleLike} />
    </Layout>
  );
}
