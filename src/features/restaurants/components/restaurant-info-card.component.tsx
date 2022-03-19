import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Favourite } from "../../../components/favorites/favourite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantProps } from "../../../services/restaurants/types";
import {
  Address,
  Icon,
  Info,
  Open,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./restaurant-info-card.style";

export const RestaurantInfoCard: React.FC<{ restaurant: RestaurantProps }> = ({
  restaurant,
}) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating ?? 4)));

  return (
    <RestaurantCard elevation={2}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Favourite restaurant={restaurant} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="caption" style={styles.text}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon style={styles.icon} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  icon: { width: 15, height: 15 },
  text: { color: "red" },
});
