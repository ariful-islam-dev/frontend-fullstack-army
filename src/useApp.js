import { useEffect, useState } from "react";
const cacheData = {};

export function useApp() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);
  const max = 10;

  useEffect(() => {
    if (cacheData[`user-${id}`]) {
      setUser(cacheData[`user-${id}`]);
      return;
    }
    setLoading(true);
    fetchUsers(id)
      .then((data) => {
        setUser(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!cacheData[`user-${id + 1}`] && id < max) {
      fetchUsers(id + 1);
    }
  }, [id]);

  const fetchUsers = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        cacheData[`user-${id}`] = data;
        return data;
      })
      .catch((err) => console.log(err));
  };

  const nextUser = () => {
    if (id < max) {
      setId(id + 1);
    }
  };
  const prevUser = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };
  return {
    user,
    loading,
    id,
    max,
    nextUser,
    prevUser,
  };
}
