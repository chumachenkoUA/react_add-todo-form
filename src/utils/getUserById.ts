import { User } from '../types/User';
import usersFromServer from '../api/users';

export const getUserById = (id: number): User => {
  return usersFromServer.find(user => user.id === id)!;
};
