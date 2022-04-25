import React, { createContext, useMemo, useState } from 'react';

type UserType = {
  email: string;
  token: string;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    email: '',
    token: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const value = useMemo(() => ({ state, setState }), []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UserContext;
