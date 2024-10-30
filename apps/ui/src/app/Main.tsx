import { useState } from 'react';
import { trpc } from '../client';
import { ButtonWithHotkey } from '../components/ButtonWithHotkey';

export function Main() {
  const [fileContents, setFileContents] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col">
      <span>
        You can test keyboard shortcuts within the webview panel with
        ctrl+shift+l
      </span>
      <span>
        Click the below button to get the current contents of the active text
        editor, as a demo for messaging passing
      </span>
      <ButtonWithHotkey
        keys="ctrl+shift+t"
        action={async () => {
          const newContents = await trpc.files.getCurContents.query();
          setFileContents(newContents);
        }}
      >
        Get Contents
      </ButtonWithHotkey>
      <span>cur file contents:</span>
      <span className="font-mono">{fileContents}</span>
    </div>
  );
}
