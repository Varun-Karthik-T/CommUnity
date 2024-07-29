import { Appbar } from "react-native-paper";
import { usePathname, router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AppBar = () => {
  const pathname = usePathname();
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Appbar.Header statusBarHeight={top}>
        {pathname != "/" && <Appbar.BackAction onPress={() => {router.back()}}/>}
        <Appbar.Content title="SHG-Helper" titleStyle={{fontWeight: "bold"}} />
        <Appbar.Action icon="bell" onPress={() => {}} />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

export default AppBar;