import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Search, Filter } from 'lucide-react';

const BookOnePage = ({
  books = [],
  itemsPerPage = 12,
  showSearch = true
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const defaultBooks = [
    { id: 1, title: 'Project Hail Mary', author: 'Andy Weir', rating: 5, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop', category: 'Science Fiction' },
    { id: 2, title: "Nobody's Girl", author: 'Virginia Roberts Giuffre', rating: 4, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop', category: 'Biography' },
    { id: 3, title: 'You Better Be Lightning', author: 'Andrea Gibson', rating: 4, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop', category: 'Poetry' },
    { id: 4, title: 'Billy Collins', author: 'Pamela Sztybel', rating: 4, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop', category: 'Poetry' },
    { id: 5, title: 'Atomic Habits', author: 'James Clear', rating: 5, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop', category: 'Self-Help' },
    { id: 6, title: 'Next Time with our Man', author: 'John Smith', rating: 4, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop', category: 'Fiction' },
    { id: 7, title: 'Evermore', author: 'Sarah Johnson', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop', category: 'Romance' },
    { id: 8, title: 'Birth Video', author: 'Michael Brown', rating: 4, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=400&fit=crop', category: 'Documentary' },
    { id: 9, title: 'The Entrepreneur', author: 'David Lee', rating: 5, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop', category: 'Business' },
    { id: 10, title: 'Capitalism', author: 'Robert Wilson', rating: 4, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop', category: 'Economics' },
    { id: 11, title: 'Best Offer Wins', author: 'Emily Davis', rating: 5, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop', category: 'Business' },
    { id: 12, title: 'Focused Without Fear', author: 'Chris Martin', rating: 4, image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop', category: 'Self-Help' },
    { id: 13, title: 'An Many Seats As Socks', author: 'Patricia Green', rating: 4, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=400&fit=crop', category: 'Humor' },
    { id: 14, title: '1929', author: 'Thomas Anderson', rating: 5, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop', category: 'History' },
    { id: 15, title: '107 Days', author: 'Maria Garcia', rating: 5, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop', category: 'Memoir' },
    { id: 16, title: 'Watchtower of Everything', author: 'Daniel White', rating: 4, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop', category: 'Fantasy' },
    { id: 17, title: 'The Silent Patient', author: 'Alex Michaelides', rating: 5, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop', category: 'Thriller' },
    { id: 18, title: 'Where the Crawdads Sing', author: 'Delia Owens', rating: 5, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop', category: 'Fiction' },
    { id: 19, title: 'The Midnight Library', author: 'Matt Haig', rating: 5, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop', category: 'Fiction' },
    { id: 20, title: 'Educated', author: 'Tara Westover', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop', category: 'Memoir' }
  ];

  const booksList = books.length > 0 ? books : defaultBooks;

  const categories = useMemo(() => ['all', ...new Set(booksList.map(b => b.category))].sort(), [booksList]);

  const filteredBooks = useMemo(() => {
    return booksList.filter(book => {
      const matchesSearch = !searchTerm || 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [booksList, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pages;
  };

  const renderStars = (rating) => [...Array(5)].map((_, i) => (
    <Star key={i} size={14} className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'} />
  ));

  return (
    <section className="mt-[3%] py-16">
      <div className="custom-padding">

        {/* Search + Filter */}
        {showSearch && (
          <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col sm:flex-row gap-4 justify-end">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={22} />
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, author, or category..."
                className="w-full pl-12 pr-4 py-4 bg-[#E7E7E7] rounded-full focus:outline-none focus:border-2 focus:border-[#4a2c7c] transition-all shadow-md" />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-10 py-4 bg-[#E7E7E7] rounded-full appearance-none focus:outline-none focus:border-2 focus:border-[#4a2c7c] cursor-pointer min-w-[200px] shadow-md">
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500" size={16} />
            </div>
          </motion.div>
        )}

        {/* Books Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {currentBooks.map((book) => (
              <motion.div layout key={book.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -12 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <a href={`/book/${book.id}`} className="block">
                  <div className="p-4 bg-gray-50">
                    <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }}
                      src={book.image} alt={book.title} className="mx-auto" />
                  </div>
                  <div className="p-4 text-center space-y-2">
                    <h3 className="font-bold text-primary-blue hover:text-[#5a3c8c] transition-colors line-clamp-2 text-sm md:text-base">
                      {book.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">{book.author}</p>
                    <div className="flex justify-center gap-1">{renderStars(book.rating)}</div>
                    <span className="inline-block px-4 py-1.5 bg-[#4a2c7c] text-white text-xs rounded-full font-medium">
                      {book.category}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl font-medium">No books found :(</p>
            <p className="mt-2">Try different keywords or category</p>
          </div>
        )}

        {/* Pagination - AB 100% WORKING */}
        {totalPages > 1 && (
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 flex-wrap mt-8">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
              className="p-3 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft size={20} />
            </motion.button>

            {getPageNumbers().map((page, i) => page === '...' ? (
              <span key={i} className="px-3 text-gray-500">...</span>
            ) : (
              <motion.button key={i} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(page)}
                className={`w-12 h-12 rounded-full font-bold transition-all ${currentPage === page 
                  ? 'bg-primary-orange text-white shadow-lg' 
                  : 'bg-white text-gray-700  hover:bg-primary-orange hover:text-white'}`}>
                {page}
              </motion.button>
            ))}

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Results Count */}
        {filteredBooks.length > 0 && (
          <p className="text-center text-gray-600 mt-6">
            Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredBooks.length)} of {filteredBooks.length} books
          </p>
        )}
      </div>
    </section>
  );
};

export default BookOnePage;