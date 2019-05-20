import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action'

class postList extends Component {
	constructor(props) {
		super(props)
		console.log(this.props)
	}

	componentDidMount() {
		this.props.dispatch(loadPostsAction) // 加载远程数据
	}
	render() {
		const { list } = this.props.post
		const Posts = list.map((v, i) => {
			return (<li key={i}>{v.title}</li>)
		})
		console.log(Posts, 'Posts')
		return (
			<div>
				<ul>
					{Posts}
				</ul>
			</div>
		)
	}
}
// 把 redux 的状态关联过来
const mapStateToProps = (state) => {
	return {
		post: state.post
	}
}

const mapDispatchToProps = {

}

// 把组件和redux进行连接， 通过connent连接组件和redux数据，传递state数据和dispatch方法，props里会多出一个dispatch
// 通过connent连接后会把store里的dispatch方法关联在组件上
export default connect(mapStateToProps)(postList)
