import React, { useContext, useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootBottomParamList } from "../../../infrastructure/navigation/app.navigator";
import { RootStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";
import { SafeArea } from "../../../components/utility/safe-area.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

type MapScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomParamList, "Map">,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: MapScreenNavigationProp;
};

export const RestaurantMap = ({ navigation }: Props) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({ navigation }: Props) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <SafeArea>
        <Map
          region={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0.02,
          }}
        />
      </SafeArea>
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
