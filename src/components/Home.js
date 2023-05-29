import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from '../firebase';
import './css/home.css';

function Home() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection('posts')
            .get()
            .then((snapshot) => {
                const posts = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log("Posts", posts);
                setPosts(posts);
            })
    }, []);
    return (
        <div className="home">
            <h1 className="blog-heading">My First Blog Project</h1>

            <div className="my-logo">
            <a href="https://github.com/WebGuyAshis" id="blog-by">
                <span id="logo-first">-W</span>ebGuyAshis
            </a>
            </div>

            <div className="posts">
                {posts.map((post, index) => (
                    <div className="post" key={`post-${index}`}>
                        <Link className="link" to={`/post/${post.id}`}>
                            <img className="post-img" src={post.url} alt="" />
                            <h3 className="post-title">{post.title}</h3>
                        </Link>

                        <p className="post-subtitle">{post.subTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;