import React from 'react';

type Props = {
  name: string,
  avatar: string,
  description: string,
};

export const PostCard: React.FC<Props> = ({ name, avatar, description }) => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            className="is-rounded"
            src={avatar}
            alt="avatar"
          />
        </p>
      </figure>
      <div className="media-content" style={{ width: '50%' }}>
        <div className="content">
          <p>
            <strong>{name}</strong>
            <br />
            {description}
          </p>
        </div>

      </div>
    </article>
  );
};
