import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import SingleReels from './SingleReels';
import { videoData } from './Data/videoData';

const ReelsComponent = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleChangeIndexValue = ({index}) => {
  //   setCurrentIndex(index);
  // };

  return (
    <SwiperFlatList
      vertical={true}
      // onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReels item={item} />
      )}
      keyExtractor={(item, index) => item.title}
    />
  );
};

export default ReelsComponent;