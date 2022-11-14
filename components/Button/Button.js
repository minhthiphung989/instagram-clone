import { Image, Pressable } from 'react-native';
export const ImgButton = ({width, height, style, img, pressFunc}) => {
  return (
    <Pressable onPress={pressFunc} >
      <Image source={img} style={[{width, height}, style]} />
    </Pressable>
  );
};
