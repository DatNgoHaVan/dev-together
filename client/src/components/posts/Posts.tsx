import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StoreRootState } from '../../reducers/root/root-reducer';
import { getPosts } from '../../actions/post';
import { Spinner } from '../layout/Spinner';
import PostItem from './PostItem';

const Posts = ({ getPosts, post: { posts, loading } }: any) => {
  useEffect(() => {
    getPosts();
  }, [getPosts])
  return (
    loading ? <Spinner /> :
      <Fragment>
        <h1 className="large text-primary">Posts</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome to the community
        </p>

        {/* PostForm */}
        <div className="posts">
          {posts.map((post: any) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </Fragment>
  )
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state: StoreRootState, ownProps: any) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
