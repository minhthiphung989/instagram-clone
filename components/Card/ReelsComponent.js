import React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from './Data/videoData';
import SingleReels from './SingleReels';

const ReelsComponent = () => {
  return (
    <SwiperFlatList
      vertical={true}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReels item={item} />
      )}
      keyExtractor={(item, index) => item.title}
    />
  );
};

export default ReelsComponent;