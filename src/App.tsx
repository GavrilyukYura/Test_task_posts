import React, { useState } from 'react';
import 'bulma/bulma.sass';
import { PostCard } from './components/PostCard';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [description, setDescription] = useState('');

  const addPost = () => {
    const newPost = {
      id: posts.length,
      name,
      avatar,
      description,
    };

    setPosts(prevPost => [...prevPost, newPost]);
    setName('');
    setAvatar('');
    setDescription('');
  };

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <main className="columns">
        <div className="column is-half">
          <form
            action="#"
            onSubmit={(event) => {
              event.preventDefault();
              addPost();
            }}
          >
            <input
              className="input is-normal"
              placeholder="Ім'я"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
            <input
              className="input is-normal"
              placeholder="Посилання на аватарку"
              type="text"
              value={avatar}
              onChange={(event) => {
                setAvatar(event.target.value);
              }}
              required
            />
            <textarea
              className="textarea"
              placeholder="Текст посту"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              required
            />
            <button
              className="button is-primary is-rounded"
              type="submit"
              style={{ marginTop: '20px' }}
            >
              Add
            </button>
          </form>
          <div
            className="container"
            style={{ marginTop: '50px' }}
          >
            {posts.map((post) => (
              <PostCard
                key={post.id}
                name={post.name}
                avatar={post.avatar}
                description={post.description}
              />
            ))}
          </div>
        </div>
        <div>
          {posts.slice(-5).reverse().map((post) => (
            <PostCard
              key={post.id}
              name={post.name}
              avatar={post.avatar}
              description={post.description}
            />
          ))}
        </div>
      </main>
    </div>

  );
};
