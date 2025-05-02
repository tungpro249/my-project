'use client';

import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({ onChange, value = '' }) {
  const [data, setData] = useState(value);

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
          if (onChange) onChange(data);
        }}
      />
    </div>
  );
}
