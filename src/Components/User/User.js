import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound/NotFound';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStats />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </section>
  );
};

export default User;
