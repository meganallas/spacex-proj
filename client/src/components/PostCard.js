import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReadMoreReact from 'read-more-react';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton.js';
import DeleteButton from './DeleteButton';

function PostCard({post: { body, createdAt, id, username, likeCount, commentCount, likes }}){

    const { user } = useContext(AuthContext);

    
    return(
        <Card fluid> 
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://se-571-spacex.s3.amazonaws.com/user.png'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as = {Link} to ={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    <ReadMoreReact text={body} />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} post={{ id, likes, likeCount }} />

                <Popup content="Comment on post" inverted trigger={
                    <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                    <Button color='grey' basic>
                        <Icon name='comment' />
                    </Button>
                    <Label basic color='grey' pointing='left'>
                        {commentCount}
                    </Label>
                    </Button>
                } />
                { user && user.username === username && <DeleteButton postId={id} />}
            </Card.Content>
        </Card>
    );
}

export default PostCard