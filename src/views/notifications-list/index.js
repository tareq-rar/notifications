import React, { useContext } from 'react';

import NotificationCard from '../../components/Card';

import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';


import moment from 'moment';

import {GlobalContext} from '../../components/HOC/withContext/context';


function Example() {
    const context = useContext(GlobalContext);
    return (
        <>
            <div
                style={{
                    padding: '3rem 0',
                    backgroundColor: context.theme
                }}
            >
                <h1 className="heading-primary u-margin-bottom-small">
                    Notifications List
                </h1>
                <div
                    className="u-margin-bottom-small"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar>L</Avatar>
                        <span style={{margin: '0 5px', fontSize: '1.5rem'}}>Live</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0 5px'
                        }}
                    >
                        <Avatar>T</Avatar>
                        <span style={{margin: '0 5px', fontSize: '1.5rem'}}>Test</span>
                    </div>
                </div>
            </div>
            <div>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((x, key) => {
                        return(
                            <NotificationCard
                                key={key}
                                avatar="T"
                                title={"Try Ranneh Premium"}
                                subHeader={moment().format('MMMM DD, YYYY')}
                                description={'Try ranneh premium and win a free trip to istanbul daslkdjla ksjdljasldjlasjd ljasldjlasjdlkasjdlkjaslkdj ljasldjlasjdlkasjdlkjaslkdj ljasldjlasjdlkasjdlkjaslkdj ljasldjlasjdlkasjdlkjaslkdj ljasldjlasjdlkasjdlkjaslkdj ljasldjlasjdlkasjdlkjaslkdj '}
                                actions={
                                    <>
                                        <IconButton aria-label="Edit">
                                            <Edit />
                                        </IconButton>
                                    </>
                                }
                            />
                        )
                    })
                }
            </div>
        </>
    );
}

export default Example;