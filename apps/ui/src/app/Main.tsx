import { useState } from 'react';
import { trpc } from '../client';
import { ButtonWithHotkey } from '../components/ButtonWithHotkey';

export function Main() {
  const [fileContents, setFileContents] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col gap-2">
      <span className='mb-4 font-bold'>
        You can test keyboard shortcuts within the webview panel with
        ctrl+shift+l
      </span>
      <span className='font-bold'>
        Click the below button to get the current contents of the active text
        editor, as a demo for messaging passing. The button also can activated with the keyboard shortcut `ctrl + shift + t`, and holding `ctrl` shows a hint for the keyboard shortcut
      </span>
      <span className="font-mono whitespace-pre">{fileContents}</span>
      <ButtonWithHotkey
        className="p-2 outline rounded-md self-start outline-1"
        keys="ctrl+shift+t"
        action={async () => {
          const newContents = await trpc.files.getCurContents.query();
          setFileContents(newContents);
        }}
      >
        Get Contents
      </ButtonWithHotkey>
    </div>
  );
}
