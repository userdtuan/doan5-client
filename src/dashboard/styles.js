import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    ContentLeft: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 30,
        paddingLeft: 40,
        height: '80vh',
    },
    List: {
        listStyleType: 'none',
        padding: 0,
        paddingTop: 10,
    },
    li: {
        paddingTop: 20,
    },
    liTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    ContentRight: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 30,
        paddingLeft: 40,
        height: '80vh',
    },
    search: {
        marginLeft: 'auto',
    },
    Table: {
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #000',
    },
    th: {
        border: '1px solid #000',
    },
    td: {
        border: '1px solid #000',
    }
}));
