import toast from 'react-hot-toast';

export type ShortcutHandler = {
  name: string;
  action: () => Promise<void> | void;
};

export const sampleKeyboardShortcut: ShortcutHandler = {
  name: 'Sample Keyboard Shortcut',
  action: async () => {
    toast.success('Keyboard shortcut pressed!');
  },
};

export const handlers = {
  'ctrl+shift+l': sampleKeyboardShortcut,
};
