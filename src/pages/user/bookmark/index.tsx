import { ChickenChestWrapper } from '@/pages/main/styles';
import { Container } from './styles';
import IconCategory from '@/components/icon/iconCategory';
import PageNameTag from '@/components/tag/pageNameTag';
import CategoryList from '@/components/list/categoryList';

const UserBookmarkPage = () => {
  const mockData = [
    {
      id: 1,
      image: '/path/to/image1.jpg',
      name: '바르닭 수비드 닭가슴살 (5가지맛) 30종 허닭',
      brand: '바르닭',
      price: 999999,
      per100gPrice: '2,130',
      shipping: '무료 배송',
      rating: 4,
      bookmarkCount: 2145
    },
    {
      id: 2,
      image: '/path/to/image2.jpg',
      name: '바르닭 소금구이 닭가슴살',
      brand: '바르닭',
      price: 150000,
      per100gPrice: '2,500',
      shipping: '무료 배송',
      rating: 5,
      bookmarkCount: 500
    },
    {
      id: 3,
      image: '/path/to/image3.jpg',
      name: '허닭 닭가슴살 스테이크',
      brand: '허닭',
      price: 120000,
      per100gPrice: '1,800',
      shipping: '무료 배송',
      rating: 3,
      bookmarkCount: 350
    },
    {
      id: 4,
      image: '/path/to/image4.jpg',
      name: '맛있는 닭가슴살',
      brand: '맛닭',
      price: 100000,
      per100gPrice: '2,000',
      shipping: '유료 배송',
      rating: 4,
      bookmarkCount: 1200
    },
    {
      id: 5,
      image: '/path/to/image5.jpg',
      name: '다이어트용 닭가슴살',
      brand: '다이어트',
      price: 130000,
      per100gPrice: '2,100',
      shipping: '무료 배송',
      rating: 5,
      bookmarkCount: 800
    }
  ];

  return (
    <Container>
      <PageNameTag pageName="전체 0개" /> 
      {mockData.map((item, index) => (
        <CategoryList key={index} {...item} />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
