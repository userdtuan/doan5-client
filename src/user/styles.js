import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Form: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
    paddingBottom: 40,
    width: '100%',
    height: '100%',
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
    width: 80,
    height: 80,
    objectFit: "cover",
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15
  },
  iconPhone: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  iconSub: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  

  media: {
    width: '100%',
    height: '100%',
    paddingTop: '56.25%',
    backgroundBlendMode: 'darken',
    objectFit: 'contain',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  Price: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomForm: {
    display: 'flex',
  },
  address: {
    display: 'flex',
    paddingLeft: 10,
  },
  iconLove: {
    width: 30,
    height: 30,
  }
});
