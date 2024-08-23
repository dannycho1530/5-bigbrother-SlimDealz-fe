import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './styles';
import CategoryList from '../../components/list/categoryList';
import { ChickenChestWrapper } from '../main/styles';
import IconCategory from '../../components/icon/iconCategory';
import PageNameTag from '../../components/tag/pageNameTag';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/products', {
          params: { category: '닭가슴살' }
        });
        setProducts(response.data);
        setLoading(false); // 데이터 로딩 완료
      } catch (err: any) {
        setLoading(false); // 데이터 로딩 완료
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
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 스피너 추가 가능
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <ChickenChestWrapper>
        <IconCategory />
      </ChickenChestWrapper>
      <PageNameTag pageName="추천 페이지" />
      {products.map((product: any) => (
        <Link
          to={`/product/${encodeURIComponent(product.name)}`}
          key={product.id}
        >
          <CategoryList
            id={product.id}
            //  image={product.image}
            name={product.name}
            shipping={product.shippingFee}
            price={product.prices?.[0]?.setPrice || '가격 없음'} // 안전한 가격 접근
          />
        </Link>
      ))}
    </Container>
  );
};

export default CategoryPage;
