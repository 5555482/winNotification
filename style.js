import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teams: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:350,
  },
  firstTeam: {
    backgroundColor: '#c21b2c',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  secondTeam: {
    backgroundColor: '#044fa1',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  testHome: {
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 5,
  },
  testAway: {
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 5,
  },
  messageBox: {
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    color: '#FFFFFF',
    fontSize: 54,
    backgroundColor:'#044fa1',
    width:350,
    height: 204,
    borderWidth: 15,
    borderColor: '#303038',
    textAlign:  'center',
    marginBottom: 240,
    zIndex: -1,
  },
});

export default styles;
