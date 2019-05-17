import { get } from 'axios'

export const getPosts = () => {
	return get('http://jsonplaceholder.typicode.com/posts')
}
