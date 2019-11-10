import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from './actions/postActions'
import postReducer from './reducers/postReducer'
import PropTypes from './actions/types'
 class Post extends React.Component{
     componentDidMount(){
         this.props.fetchPosts()
     }
   
    render(){
        const postItems=this.props.posts.map(post=>(
            <div key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>{post.body}</p>
            </div>
        ))
        return(
            <div>
<h1>
    Post
</h1>
{postItems}
            </div>
        )
    }
}
Posts.propTypes={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}
const mapStateToProps=state=>({
    posts:state.posts.items
})
export default  connect(mapStateToProps,{fetchPosts})(Post)