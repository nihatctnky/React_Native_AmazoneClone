import { StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
      {CarouselData.map((item,id) => (
        <Image source={item.image} key={id}style={styles.imgStyle} />
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 250,
  },
  wrapper: {
    height: 300,
  },
});