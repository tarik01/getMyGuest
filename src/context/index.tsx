import React from 'react';

import { UserContextProvider } from './user';

export default function GlobalContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserContextProvider>{children}</UserContextProvider>;
}
