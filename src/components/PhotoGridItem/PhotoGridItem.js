import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, sources, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          {sources.map(({ srcset, type }) => (
            <source srcSet={srcset} type={type} />
          ))}
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

const Tags = styled.ul``;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  float: left;
  margin-right: 8px;

  &:last-of-type {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: none;
    max-width: min-content;
    margin-right: 0;
  }
`;

export default PhotoGridItem;
