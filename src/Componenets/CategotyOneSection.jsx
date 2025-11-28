// CategotyOneSection.jsx
import React, { useState } from 'react';
import DynamicBookSlider from './DynamicBookSlider';

const CATEGORIES = [
  { title: 'Bestsellers', description: 'Discover the books that are captivating readers worldwide...' },
  { title: 'New Arrivals', description: 'Be the first to discover the latest titles...' },
  { title: 'Little Kids (Age 3-5)', description: 'Discover the best picture books for ages 3-5...' },
  { title: 'Popular Nonfiction', description: 'Find the best nonfiction books to gift...' },
  { title: 'Fiction Favorites', description: 'Most loved novels of the year...' },
  { title: 'Science & Tech', description: 'Mind-blowing books on AI, space, and future...' },
  { title: 'Self Help & Growth', description: 'Books that will change your life...' },
  { title: 'Romance', description: 'Heart-touching love stories...' },
  // Add jitne bhi chahe — sab automatically paginate ho jayenge
];

const ITEMS_PER_PAGE = 4;

const CategotyOneSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const totalPages = Math.ceil(CATEGORIES.length / ITEMS_PER_PAGE);

  // Current page ke categories
  const currentCategories = CATEGORIES.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Agar search kar rahe ho aur koi category match nahi → message dikhao
  const hasNoResults = searchQuery && currentCategories.length === 0;

  return (
    <>
      {/* Fixed Search Bar - Top Left */}
      <div className=" bg-white   flex justify-end  items-center">
        <div className=" max-w-xl  px-6 py-5">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search  books in all categories... (e.g. Harry Potter, Science, Love)"
              className="w-full bg-[#E7E7E7] px-6 py-4 pl-12 pr-16 rounded-full border-2 border-gray-300 focus:border-primary-orange focus:outline-none text-lg font-medium transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute left-4 top-5 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-4 text-gray-500 hover:text-red-600 font-bold text-xl"
              >
                ×
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              Searching for: <span className="font-bold text-primary-orange">"{searchQuery}"</span>
            </p>
          )}
        </div>
      </div>

      <div className="min-h-screen  px-4 md:px-10 py-10">
        {/* Show Categories */}
        {currentCategories.length > 0 ? (
          <div className="space-y-20">
            {currentCategories.map((cat, index) => (
              <section key={index}>
                <DynamicBookSlider
                  title={cat.title}
                  description={cat.description}
                  searchQuery={searchQuery.trim().toLowerCase()} // Pass search query to filter books
                />
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No categories found for "<span className="font-bold text-primary-orange">{searchQuery}</span>"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-3 bg-primary-orange text-white rounded-full hover:bg-orange-600 transition"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Pagination - Only if more than 4 categories */}
        {CATEGORIES.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center items-center gap-4 my-20 pb-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-orange text-white hover:bg-orange-600 shadow-lg'
              }`}
            >
              Previous
            </button>

            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-12 h-12 rounded-full font-bold text-lg transition-all shadow-md ${
                    currentPage === page
                      ? 'bg-primary-orange text-white scale-110'
                      : 'bg-white border-2 border-gray-300 hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-orange text-white hover:bg-orange-600 shadow-lg'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CategotyOneSection;