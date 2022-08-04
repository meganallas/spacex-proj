import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Loader, Segment, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Blog() {
    const { user } = useContext(AuthContext);

    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY);

    return (
    <div>
    <h1 className = "page-title">Recent Posts</h1>
        <Grid columns={3}>
            <Grid.Row>
                { user && (
                    <Grid.Column width={10} className="createPost">
                        <Segment>
                        <PostForm/>
                        </Segment>
                    </Grid.Column>
                )}
            </Grid.Row>
            <Grid.Row>
                
                {loading ? (
                    <Loader active />
                ) : (
                    <Transition.Group>
                        {posts && posts.map(post => (
                            <Grid.Column key = { post.id } style={{ marginBottom: 30 }}>
                                <PostCard post= { post }/>
                            </Grid.Column>
                        ))}
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
        </div>
    );
}

export default Blog;