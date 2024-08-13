import React, { useState } from 'react';
import { Container, ReviewContainer, PaginationContainer } from './styles';
import { Pagination } from '@mui/material';

const mockReviews = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `제목${i + 1}`,
  content: '내용 라인 1\n내용 라인 2',
  date: '2024.07.21',
  username: `사용자${i + 1}`,
  imgSrc: '/path/to/image.jpg'
}));

const ReviewList = () => {
  const [page, setPage] = useState(1);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(mockReviews.length / reviewsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedReviews = mockReviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  return (
    <Container>
      {paginatedReviews.map((review) => (
        <ReviewContainer key={review.id}>
          <img src={review.imgSrc} alt="Review" />
          <div>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <small>
              {review.date} | {review.username}
            </small>
          </div>
        </ReviewContainer>
      ))}
      <PaginationContainer>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          siblingCount={1}
          boundaryCount={1}
          shape="rounded"
          variant="outlined"
          color="primary"
        />
      </PaginationContainer>
    </Container>
  );
};

export default ReviewList;
