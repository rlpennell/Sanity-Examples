import React, { useState } from 'react';
import { Box, Button, Popover } from '@sanity/ui';

export const CodePreview = string => {
  const [isOpen, setIsOpen] = useState();

  return (
    <Box>
      <Popover
        content={<pre>{`${string}`}</pre>}
        padding={4}
        placement='top'
        portal
        open={isOpen}
      >
        <Button
          mode='ghost'
          padding={[3, 3, 4]}
          size={[2, 2, 3, 4]}
          text='Show Code'
        />
      </Popover>
    </Box>
  );
};
