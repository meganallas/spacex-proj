import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Button, Confirm, Icon, Popup } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../util/graphql';

function DeleteButton({ postId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;
  
  const [deletePostOrMutation] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (!commentId) {
        const data = proxy.readQuery({
          query: FETCH_POSTS_QUERY
        });
        let newData = data.getPosts.filter((p) => p.id !== postId)
        proxy.evict({
            // Often cache.evict will take an options.id property, but that's not necessary
            // when evicting from the ROOT_QUERY object, as we're doing here.
            fieldName: "notifications",
            // No need to trigger a broadcast here, since writeQuery will take care of that.
            broadcast: false,
          });
        proxy.writeQuery({ 
            query: FETCH_POSTS_QUERY, 
            data: {
                ...data,
                getPosts: {
                    newData,
            }
        } });
      }
      if (callback) callback();
    },
    variables: {
      postId,
      commentId
    }
  });
  return (
    <>
    <Popup content={commentId ? 'Delete comment' : 'Delete post'} inverted trigger={
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={() => setConfirmOpen(true)}
        >
          <Icon name="trash alternate outline" style={{ margin: 0 }} />
        </Button>
    }/>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePostOrMutation}
      />
    </>
  );
}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;

export default DeleteButton;