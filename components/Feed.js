import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <main className="container mx-auto p-4 max-w-6xl">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 xl:col-span-8">
          <section>
            {/* Stories */}
            <Stories />
            {/* Posts */}
            <Posts />
          </section>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <section>
            {/* Mini Profile */}

            {/* Suggesions */}

          </section>
        </div>
      </div>
    </main>
  );
}
