import React from 'react';
import styled from 'styled-components/macro';

import data from '../../data';
import MaxWidthWrapper from '../MaxWidthWrapper';
import PhotoGridItem from '../PhotoGridItem';
import VisuallyHidden from '../VisuallyHidden';

const MainContent = () => {
  return (
    <Wrapper>
      <VisuallyHidden>
        <h1>All Photos</h1>
      </VisuallyHidden>
      {data.map(({ id, src, alt, tags }) => {
        const sources = [
          {
            srcset: `${src.replace('.jpg', '.avif 1x')},
            ${src.replace('.jpg', '@2x.avif 2x')},
            ${src.replace('.jpg', '@3x.avif 3x')}`,
            type: 'image/avif',
          },
          {
            srcset: `${src.replace('.jpg', '.jpg 1x')},
            ${src.replace('.jpg', '@2x.jpg 2x')},
            ${src.replace('.jpg', '@3x.jpg 3x')}`,
            type: 'image/jpg',
          },
        ];
        return (
          <PhotoGridItem
            key={id}
            id={id}
            src={src}
            sources={sources}
            alt={alt}
            tags={tags}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  /*
    We haven't covered grid yet, but we'll learn more about
    this technique in a future module!
  */
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 128px;
  padding-bottom: 128px;
`;

export default MainContent;
