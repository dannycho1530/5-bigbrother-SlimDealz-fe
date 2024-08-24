import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container } from './styles';
import CategoryList from '../../components/list/categoryList';
import { ChickenChestWrapper } from '../main/styles';
import IconCategory from '../../components/icon/iconCategory';
import PageNameTag from '../../components/tag/pageNameTag';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import LoadingSpinner from '@/components/utils/scrollToTop/loadingSpinner';

type Product = {
  id: number;
  name: string;
  image: string;
  shippingFee: string;
  prices: { setPrice: number }[];
};

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('/api/v1/products', {
        params: { category: '닭가슴살', page, limit: 10 }
      });
      const newProducts = response.data;
      if (Array.isArray(newProducts) && newProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        if (err.response.status === 404) {
          setError('Products not found');
        } else {
          setError('Server error');
        }
      } else {
        setError('Network error');
      }
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading ||
        !hasMore
      )
        return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <Container>
      <ChickenChestWrapper>
        <IconCategory />
      </ChickenChestWrapper>
      <PageNameTag pageName="추천 페이지" />
      {loading && page === 1 ? (
        <LoadingSpinner />
      ) : (
        <>
          {products.map((product: any, index: number) => (
            <Link
              to={`/product/${encodeURIComponent(product.name)}`}
              key={`${product.id}-${index}`}
            >
              <CategoryList
                id={product.id}
                //image={product.image}
                name={product.name}
                shipping={product.shippingFee}
                price={product.prices?.[0]?.setPrice || '가격 없음'}
              />
            </Link>
          ))}
          {loading && <LoadingSpinner />} {/* 추가 로딩 시 로딩 스피너 표시 */}
        </>
      )}
    </Container>
  );
};

export default CategoryPage;
