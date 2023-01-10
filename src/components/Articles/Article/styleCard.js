import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
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
