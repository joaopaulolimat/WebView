import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  WebViewContainer: undefined;
};

export type NavigateProps = StackNavigationProp<RootStackParamList>;
