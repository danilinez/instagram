export default function Story({img, username}) {
  return (
    <div className="flex flex-col items-center cursor-pointer scale-100 active:scale-90 transition-transform duration-100 ease-out">
      <img src={img} alt={username} className="storyBorder rounded-full h-14 w-14 p-[1.5px] max-w-[56px]" />
      <p className="w-10 truncate text-center text-xs">{username}</p>
    </div>
  );
}
