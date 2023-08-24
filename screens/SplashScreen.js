import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Lottie from 'lottie-react-native';

const SplashScreen = () => {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.replace('Home');
    }, 4000)

  return (
    <Lottie source={require('../assets/cosmos-planet.json')} autoPlay loop />
  )
}

export default SplashScreen