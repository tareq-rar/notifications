import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

import Styles from './styles';

function CustomCard(props) {
    const {avatar, title, subHeader, description} = props;
    const classes = Styles();
    // const [expanded, setExpanded] = useState(false);

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={<Avatar aria-label="Recipe" className={classes.avatar}>{avatar}</Avatar>}
                title={title}
                subheader={subHeader}
                classes={{
                    root:classes.cardHeaderRoot,
                    title: classes.title,
                    subheader: classes.subheader,
                }}
            />
            <CardContent>
                <p className={classes.description}>{description}</p>
            </CardContent>
            <CardActions
                className={classes.actions}
                disableActionSpacing
                classes={{
                    root: classes.cardActionsFooter
                }}
            >
                {props.actions}
            </CardActions>
        </Card>
    );
}

export default CustomCard;




{/*<IconButton*/}
{/*className={classnames(classes.expand, {*/}
{/*[classes.expandOpen]: expanded,*/}
{/*})}*/}
{/*onClick={handleExpandClick}*/}
{/*aria-expanded={expanded}*/}
{/*aria-label="Show more"*/}
{/*>*/}
{/*<ExpandMoreIcon />*/}
{/*</IconButton>*/}

{/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
{/*<CardContent>*/}
{/*<Typography paragraph>Method:</Typography>*/}
{/*<Typography paragraph>*/}
{/*Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10*/}
{/*minutes.*/}
{/*</Typography>*/}
{/*<Typography paragraph>*/}
{/*Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
{/*heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
{/*browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken*/}
{/*and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and*/}
{/*pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add*/}
{/*saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
{/*</Typography>*/}
{/*<Typography paragraph>*/}
{/*Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook*/}
{/*without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to*/}
{/*medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook*/}
{/*again without stirring, until mussels have opened and rice is just tender, 5 to 7*/}
{/*minutes more. (Discard any mussels that don’t open.)*/}
{/*</Typography>*/}
{/*<Typography>*/}
{/*Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
{/*</Typography>*/}
{/*</CardContent>*/}
{/*</Collapse>*/}