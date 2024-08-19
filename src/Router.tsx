import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OutLetContainer from './pages';
import MainPage from './pages/main';
import CategoryPage from './pages/category';
import DetailPage from './pages/detail';
import SearchInitialPage from './pages/search/initial';
import SearchResultsPage from './pages/search/results';
import SignInPage from './pages/signIn';
import SignUpPage from './pages/signUp';
import UserAlarmPage from './pages/user/alarm';
import UserBookmarkPage from './pages/user/bookmark';
import UserInformationPage from './pages/user/information';
import UserRecentlyViewPage from './pages/user/recentlyView';
import MyMainPage from './pages/user/myMain';
import ScrollToTop from './components/utils/scrollToTop/scrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/" element={<OutLetContainer />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<DetailPage />} />
          <Route path="/searchInitial" element={<SearchInitialPage />} />
          <Route path="/searchResults/:query" element={<SearchResultsPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/myPage" element={<MyMainPage />} />
          <Route path="/alarm" element={<UserAlarmPage />} />
          <Route path="/bookmark" element={<UserBookmarkPage />} />
          <Route path="/information" element={<UserInformationPage />} />
          <Route path="/recentlyView" element={<UserRecentlyViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
