import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { getUserFromLocalCookie } from './auth';

interface UserCtx {
  user: string | null;
}

interface UserProviderProps {
  value: UserCtx;
  children: ReactNode;
}

let userState: string | null;

const User = createContext<UserCtx>({ user: null });

export const UserProvider = ({ value, children }: UserProviderProps) => {
  const { user } = value;

  useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, []);

  return <User.Provider value={value}> {children}</User.Provider>;
};

export const useUser = () => useContext(User);

export const useFetchUser = () => {
  const [data, setUser] = useState<UserCtx>({
    user: userState
  });

  useEffect(() => {
    if (userState !== undefined) return;

    let isMounted = true;
    const resolveUser = async () => {
      const user = await getUserFromLocalCookie();

      if (isMounted) {
        setUser({ user });
      }
    };
    resolveUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};
