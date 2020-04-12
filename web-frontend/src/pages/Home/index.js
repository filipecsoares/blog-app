import React, { useState, useEffect } from "react";
import axios from "axios";

import PostList from "../../components/PostList";
import Layout from "../../components/Layout";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("SESSION_TOKEN");
        const postResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/posts`,
          {
            headers: { "auth-token": token },
          }
        );

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

  const handleLike = async (ownerID, postID) => {
    const token = localStorage.getItem("SESSION_TOKEN");
    const postResponse = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/posts/${postID}`,
      {
        user: {
          _id: ownerID,
        },
      },
      {
        headers: { "auth-token": token },
      }
    );
    let indexToReplace;
    const newPosts = [...posts];
    posts.forEach((post, index) => {
      if (post._id === postID) {
        indexToReplace = index;
      }
    });
    newPosts.splice(indexToReplace, 1, postResponse.data);
    setPosts(newPosts.reverse());
  };

  return (
    <Layout>
      <PostList posts={posts} onLike={handleLike} />
    </Layout>
  );
}
