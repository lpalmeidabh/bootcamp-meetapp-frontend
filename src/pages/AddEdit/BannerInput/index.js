import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import PropTypes from 'prop-types';
import { Container } from './styles';
import exportImage from '~/assets/exportImage.png';

export default function BannerInput({ image, imageID }) {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    setPreview(image);
    setFile(imageID);
  }, [image, imageID]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img src={preview || exportImage} alt="Banner" />
        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
}

BannerInput.propTypes = {
  image: PropTypes.string,
  imageID: PropTypes.number,
};

BannerInput.defaultProps = {
  image: exportImage,
  imageID: 0,
};
