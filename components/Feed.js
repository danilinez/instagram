import Stories from './Stories'

export default function Feed() {
  return (
    <main className="container mx-auto p-4">
      <div class="grid grid-cols-12 gap-1">
        <div class="col-span-12 xl:col-span-8">
          <section>
            {/* Stories */}
            <Stories />
            {/* Posts */}

          </section>
        </div>
        <div class="col-span-12 xl:col-span-4">
          <section>
            {/* Mini Profile */}

            {/* Suggesions */}

          </section>
        </div>
      </div>
    </main>
  );
}
