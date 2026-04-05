import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "feature/user/userSlice";
import type { RootState, AppDispatch } from "@/redux/store";
interface User {
  id: number;
  name: string;
}

export default function User() {

  const { user, isLoading, isError, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>;

  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && user.length === 0) {
    content = <h1>No user found</h1>;
  }
  if (!isLoading && !isError && user.length > 0) {

    content = (
      <ul>
        {user.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }


  return <div>{content}</div>;
}