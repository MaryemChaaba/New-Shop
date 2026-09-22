"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface FeaturedCategory {
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
}

const featuredCategories: FeaturedCategory[] = [
  {
    name: "Electronics",
    slug: "smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&crop=center",
    itemCount: 25,
    description: "Latest smartphones and gadgets",
  },
  {
    name: "Fashion",
    slug: "mens-shirts",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop&crop=center",
    itemCount: 40,
    description: "Trendy clothing and accessories",
  },
  {
    name: "Beauty",
    slug: "beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&crop=center",
    itemCount: 30,
    description: "Premium beauty products",
  },
  {
    name: "Home & Living",
    slug: "furniture",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center",
    itemCount: 20,
    description: "Furniture and home decor",
  },
  {
    name: "Sports",
    slug: "sports-accessories",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center",
    itemCount: 15,
    description: "Sports gear and accessories",
  },
  {
    name: "Jewelry",
    slug: "womens-jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop&crop=center",
    itemCount: 18,
    description: "Beautiful jewelry collection",
  },
  {
    name: "Watches",
    slug: "mens-watches",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=200&h=200&fit=crop&crop=center",
    itemCount: 12,
    description: "Elegant timepieces",
  },
  {
    name: "Bags",
    slug: "womens-bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=center",
    itemCount: 22,
    description: "Stylish bags and handbags",
  },
  {
    name: "Laptops",
    slug: "laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop&crop=center",
    itemCount: 18,
    description: "High-performance laptops",
  },
];

const FeaturedCategories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update items to show based on screen size
  React.useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640)
        setItemsToShow(2); // mobile
      else if (width < 768)
        setItemsToShow(3); // sm
      else if (width < 1024)
        setItemsToShow(4); // md
      else if (width < 1280)
        setItemsToShow(6); // lg
      else setItemsToShow(8); // xl
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const totalCategories = featuredCategories.length;
  const maxIndex = Math.max(0, totalCategories - itemsToShow);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const itemWidth = container.scrollWidth / totalCategories;
      const scrollLeft = index * itemWidth;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  // Auto-scroll functionality (optional)
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    if (isHovered) return; // Pause auto-scroll on hover

    const interval = setInterval(() => {
      if (currentIndex >= maxIndex) {
        scrollToIndex(0);
      } else {
        goToNext();
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isHovered]);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoNext) {
      goToNext();
    }
    if (isRightSwipe && canGoPrevious) {
      goToPrevious();
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collections across different categories
          </p>
        </div> */}

        {/* Carousel Content */}
        <div className="px-8 flex gap-2">
          {featuredCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="flex-shrink-0"
            >
              <div className="group text-center w-24 sm:w-28 lg:w-32">
                <div className="relative mb-4">
                  {/* Enhanced shadow container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-sm opacity-30 transform translate-x-1 translate-y-1"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-sm opacity-40 transform translate-x-0.5 translate-y-0.5"></div>

                    {/* Main image container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-blue-100 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/5 transition-all duration-300"></div>
                    </div>

                    {/* Item count badge with enhanced shadow */}
                    {/* <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg ring-2 ring-white transform group-hover:scale-110 transition-transform duration-200">
                      {category.itemCount}+
                    </div> */}
                  </div>
                </div>
                <h3 className="font-semibold text-sm lg:text-base text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCategories;
