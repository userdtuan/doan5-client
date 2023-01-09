import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: '#000000',
    textDecoration: 'none',
    fontFamily: 'JetBrains Mono',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'auto',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
    paddingLeft: 10,
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  search: {
    width: "40%",
    paddingLeft: 50
  },
  btnLogin: {
    backgroundColor: "#FBD07C",
    color: "#000",
    marginLeft: 10,
  },
  btnNav: {
    backgroundColor: "#FFF",
    width: 'auto',
  },
}));
