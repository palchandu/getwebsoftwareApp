/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

 import AboutScreen from './component/AboutScreen';
 import BlogScreen from './component/BlogScreen';
 import ContactScreen from './component/ContactScreen';
 import EducationScreen from './component/EducationScreen';
 import HomeScreen from './component/HomeScreen';
 import ServiceScreen from './component/ServiceScreen';
 import WorkScreen from './component/WorkScreen';


class  App extends React.Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

const Home_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'HomeScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const About_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'AboutScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Service_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: ServiceScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ServiceScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Education_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: EducationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'EducationScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Work_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fifth: {
    screen: WorkScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'WorkScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Blog_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Six: {
    screen: BlogScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'BlogScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Contact_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Seventh: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ContactScreen',
      headerLeft: ()=> <App navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home ',
    },
  },
  Screen2: {
    //Title
    screen: About_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About  ',
    },
  },
  Screen3: {
    //Title
    screen: Service_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Service  ',
    },
  },
  Screen4: {
    //Title
    screen: Education_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Education  ',
    },
  },
  Screen5: {
    //Title
    screen: Work_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Work ',
    },
  },
  Screen6: {
    //Title
    screen: Blog_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Blog ',
    },
  },
  Screen7: {
    //Title
    screen: Contact_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contact ',
    },
  }
});



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default createAppContainer(DrawerNavigatorExample);