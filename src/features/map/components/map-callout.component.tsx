import React from "react";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";

import { RestaurantProps } from "../../../services/restaurants/types";

export const MapCallout = ({ restaurant }: { restaurant: RestaurantProps }) => (
  <CompactRestaurantInfo restaurant={restaurant} isMap={true} />
);
