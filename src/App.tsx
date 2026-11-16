import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Navbar} from '@/src/components/Navbar';
import {Footer} from '@/src/components/Footer';
import {HomePage} from '@/src/pages/HomePage';
import {AboutPage} from '@/src/pages/AboutPage';
import {ProductsPage} from '@/src/pages/ProductsPage';
import {ContactPage} from '@/src/pages/ContactPage';
import type {
  ContactEnquiryPrefill,
  PageId,
  ProductCategory,
  ProductFilter,
} from '@/src/types';

const VALID_PAGES: PageId[] = ['home', 'about', 'products', 'contact'];

function getInitialPage(): PageId {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<ProductFilter>('All');
  const [contactPrefill, setContactPrefill] =
    useState<ContactEnquiryPrefill | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      if (window.location.hash !== `#${page}`) {
        window.history.pushState(null, '', `#${page}`);
      }
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedProductCategory(category);
    navigateTo('products');
  };

  const handleEnquireProduct = (productName: string) => {
    setContactPrefill({
      subject: `Product Enquiry: ${productName}`,
      message: `Hello Subasri Power Tools, I would like to enquire about ${productName}. Please share availability and store pricing details.`,
    });
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{opacity: 0, y: 6}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -4}}
            transition={{duration: 0.16, ease: [0.16, 1, 0.3, 1]}}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onSelectCategory={handleSelectCategory}
              />
            )}
            {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
            {currentPage === 'products' && (
              <ProductsPage
                selectedCategory={selectedProductCategory}
                onSelectCategory={setSelectedProductCategory}
                onEnquireContact={handleEnquireProduct}
              />
            )}
            {currentPage === 'contact' && (
              <ContactPage
                prefill={contactPrefill}
                onClearPrefill={() => setContactPrefill(null)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onNavigate={navigateTo}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  );
}
