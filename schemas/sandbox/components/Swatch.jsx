import React, { useState, useEffect } from 'react';
import { useFormValue, useClient } from 'sanity';
import { Inline, Avatar } from '@sanity/ui';

export const Swatch = props => {
  const { value, renderDefault } = props;
  const [palette, setPalette] = useState();
  const [swatchColor, setSwatchColor] = useState();
  const image = useFormValue(['image'])?.asset?._ref;
  const client = useClient({ apiVersion: '2023-01-10' });

  useEffect(() => {
    const getPalette = () =>
      client
        .fetch(`*[_id == $id][0].metadata.palette`, { id: image })
        .then(setPalette);

    if (image) {
      getPalette();
    } else {
      setPalette();
      setSwatchColor();
    }
  }, [image]);

  useEffect(() => {
    if (palette && palette[value]) setSwatchColor(palette[value].background);
  }, [value, palette]);

  return (
    <Inline space={3}>
      <Avatar style={{ backgroundColor: swatchColor }} />
      {renderDefault(props)}
    </Inline>
  );
};
