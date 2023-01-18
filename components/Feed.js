import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggesions from "./Suggesions";

export default function Feed() {
  return (
    <main className="container mx-auto p-4 max-w-6xl">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-7">
          <section>
            {/* Stories */}
            <Stories />
            {/* Posts */}
            <Posts />
          </section>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <section>
            {/* Mini Profile */}
            <MiniProfile />
            {/* Suggesions */}
            <Suggesions />
          </section>
        </div>
      </div>
    </main>
  );
}
