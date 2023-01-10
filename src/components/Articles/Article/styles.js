import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Form: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
    paddingBottom: 40,
    width: '100%',
    height: '90vh',
    borderRadius: 15, backgroundColor: "#FFF",
  },
  border: {
    border: 'solid',
  },
  image: {
    width: 760,
    height: 350,
    objectFit: "contain",
  },
  iconLove: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  iconCheck: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  iconAddress: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginBottom: 20,
  },
  titleAddress: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5B5757',
  },
  avatar: {
    width: 60,
    height: 60,
    objectFit: "cover",
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 15
  },
  iconPhone: {
    width: 25,
    height: 25,
    marginRight: 10,
  }
});
