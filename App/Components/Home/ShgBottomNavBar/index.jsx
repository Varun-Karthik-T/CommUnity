import { BottomNavigation, Text } from "react-native-paper";
import { useState } from "react";
import SHGProfile from "@/Components/Home/SHGProfile";
import ShgCommunity from "../Community/shgCommunity";
import ShgMarket from "../Marketplace/shgmarket";
import SHGBookkeeping from "../SHGBookkeeping";

const CommunityRoute = () => <ShgCommunity/>;

const MarketPlaceRoute = () => <ShgMarket/>;

const ProfileRoute = () => <SHGProfile />;

const BookKeepingRoute = () => <SHGBookkeeping />;

const ShgBottomNavBar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "community",
      title: "Community",
      focusedIcon: "account-group",
      unfocusedIcon: "account-group-outline",
    },
    {
      key: "marketplace",
      title: "Marketplace",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
    {
      key: "bookkeeping",
      title: "BookKeeping",
      focusedIcon: "book",
      unfocusedIcon: "book-outline",
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    community: CommunityRoute,
    marketplace: MarketPlaceRoute,
    bookkeeping: BookKeepingRoute,
    profile: ProfileRoute,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ShgBottomNavBar;
