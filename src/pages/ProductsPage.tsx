import {useMemo, useState} from 'react';
import {MessageCircle, Search, X} from 'lucide-react';
import {buildWhatsAppUrl} from '@/src/config/business';
import {PRODUCT_CATEGORIES, PRODUCTS_DATA} from '@/src/data/products';
import {SafeImage} from '@/src/components/SafeImage';
import {ProductDetailModal} from '@/src/components/ProductDetailModal';
import type {ProductFilter, ProductItem} from '@/src/types';

interface ProductsPageProps {
  selectedCategory: ProductFilter;
  onSelectCategory: (category: ProductFilter) => void;
  onEnquireContact: (productName: string) => void;
}

const FILTER_OPTIONS: ProductFilter[] = ['All', ...PRODUCT_CATEGORIES];

export function ProductsPage({
  selectedCategory,
  onSelectCategory,
  onEnquireContact,
}: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    onSelectCategory('All');
  };

  return (
    <div className="bg-slate-50 min-h-[70vh]">
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Equipment Catalogue
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Power Tools &amp; Industrial Equipment
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Browse tools across woodworking, masonry drilling, concrete consolidation, and
            metal fabrication. Contact us via WhatsApp or our store desk for current model
            availability and quotations.
          </p>
        </div>
      </section>

      {/* Search & Category Controls */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search power tools, sanders, routers..."
                aria-label="Search products"
                className="w-full pl-10 pr-9 py-2.5 min-h-[42px] text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-500 tabular-nums">
              Showing {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'item' : 'items'}
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter products by category"
            className="flex flex-wrap items-center gap-2"
          >
            {FILTER_OPTIONS.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(category)}
                  className={`px-3.5 py-2 min-h-[38px] text-xs sm:text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                    isSelected
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-4 max-w-lg mx-auto">
              <h2 className="text-lg font-semibold text-[#0B1F3A]">
                No matching equipment found
              </h2>
              <p className="text-sm text-slate-600">
                Try clearing your search term or selecting a different equipment category.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center justify-center px-4 py-2 min-h-[40px] bg-[#0B1F3A] hover:bg-[#132d52] text-white text-sm font-medium rounded-md transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const whatsappMsg = `Hello Subasri Power Tools, I would like to enquire about "${product.name}" (${product.category}).`;

                return (
                  <article
                    key={product.id}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                        <SafeImage
                          src={product.image}
                          alt={product.name}
                          fallbackLabel={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-5 sm:p-6 space-y-2.5">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {product.category}
                        </p>
                        <h2 className="text-lg font-semibold text-[#0B1F3A] leading-snug">
                          {product.name}
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 flex flex-col sm:flex-row gap-2.5">
                      <button
                        type="button"
                        onClick={() => setActiveProduct(product)}
                        className="flex-1 inline-flex items-center justify-center px-3.5 py-2.5 min-h-[42px] border border-slate-300 hover:border-[#0B1F3A] text-[#0B1F3A] text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer"
                      >
                        View Details
                      </button>
                      <a
                        href={buildWhatsAppUrl(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[42px] bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onEnquireContact={onEnquireContact}
      />
    </div>
  );
}
