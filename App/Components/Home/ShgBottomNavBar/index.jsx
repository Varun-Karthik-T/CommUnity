import { BottomNavigation, Text } from 'react-native-paper';
import { useState } from 'react';
import SHGProfile from '@/Components/SHGProfile';

const SampleRoute = () => <Text>Sample</Text>;

const Sample2Route = () => <Text>Sample2</Text>;

const ProfileRoute = () => <SHGProfile />;

const ShgBottomNavBar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'invest', title: 'Invest', focusedIcon: 'cash-check', unfocusedIcon: 'cash' },
    { key: 'market', title: 'Marketplace', focusedIcon: 'cart-check', unfocusedIcon: 'cart-outline'},
    { key: 'profile', title: 'Profile', focusedIcon: 'people', unfocusedIcon: 'people-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    market: SampleRoute,
    invest: Sample2Route,
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