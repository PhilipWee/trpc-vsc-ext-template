import type { AppRouter } from '@vsc-trpc-template/vsc-ext/types';
import { createTRPCClient } from '@trpc/client';
import { vscLink } from './link/vsc-link';

export const trpc = createTRPCClient<AppRouter>({
  links: [vscLink()],
});
