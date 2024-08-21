import { BottomNavigation, Text } from "react-native-paper";
import { useState } from "react";
import SHGProfile from "@/Components/Home/SHGProfile";
import ShgCommunity from "../Community/shgCommunity";
import ShgMarket from "../Marketplace/shgmarket";
import SHGBookkeeping from "../../SHGBookkeeping";
import SHGManagement from "../SHGManagement";
import SHGDevelopment from "../SHGDevelopment";

const CommunityRoute = () => <ShgCommunity />;

const MarketPlaceRoute = () => <ShgMarket />;

const BookKeepingRoute = () => <SHGBookkeeping />;

const ManagementRoute = () => <SHGManagement />;

const DevelopmentRoute = () => <SHGDevelopment />;

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
      title: "Market",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
    {
      key: "bookkeeping",
      title: "Records",
      focusedIcon: "book",
      unfocusedIcon: "book-outline",
    },

    {
      key: "development",
      title: "Develop",
      focusedIcon: "chart-areaspline-variant",
      unfocusedIcon: "chart-line",
    },
    {
      key: "management",
      title: "Manage",
      focusedIcon: "account-tie",
      unfocusedIcon: "account-tie-outline",
    },
    // {
    //   key: "profile",
    //   title: "Profile",
    //   focusedIcon: "account",
    //   unfocusedIcon: "account-outline",
    // }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    community: CommunityRoute,
    marketplace: MarketPlaceRoute,
    bookkeeping: BookKeepingRoute,
    development: DevelopmentRoute,
    management: ManagementRoute,
    // profile: ProfileRoute,
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
