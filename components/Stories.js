import minifaker from 'minifaker';
import "minifaker/locales/en";
import { useEffect, useState } from 'react';
import Story from './Story';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([])
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => (
      {
        username: minifaker.username({ locale: "en" }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=3${Math.floor(Math.random() * 9) + 1}`,
        id: i
      }));
    setStoryUsers(storyUsers);
  }, [])
  return (
    <div className='flex items-center gap-2 p-4 shadow-sm bg-white overflow-x-auto invisibleScrollbar'>
      {storyUsers.map(user => (
        <Story key={user.id} username={user.username} img={user.img} /> 
      ))}
    </div>
  );
}
