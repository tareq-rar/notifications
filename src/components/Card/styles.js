import red from "@material-ui/core/colors/red";
import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    card: {
        maxWidth: 400,
    },
    cardHeaderRoot:{
        boxShadow: '0rem 0rem 0.5rem'
    },
    cardActionsFooter:{
        boxShadow: '0rem 0rem 0.5rem'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    title:{
        fontSize: '2rem',
    },
    subheader:{
        fontSize: '1.5rem',
    },
    description:{
        fontSize: '1.5rem',
    }
}))