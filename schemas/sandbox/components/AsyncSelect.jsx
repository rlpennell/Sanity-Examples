import { useState, useEffect } from 'react';
import { useWorkspace } from 'sanity';

export const AsyncSelect = props => {
  const [listItems, setListItems] = useState([]);
  const { schemaType, renderDefault } = props;
  const { options } = schemaType;
  const { url, formatResponse } = options;

  useEffect(() => {
    const getCats = () =>
      fetch(url)
        .then(res => res.json())
        .then(formatResponse)
        .then(setListItems);

    getCats();
  }, [url, formatResponse]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });
};
