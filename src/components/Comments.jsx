import { Comment, List, Tooltip } from 'antd'
import { useEffect, useState } from 'react'
import '../styles/components/Comments.scss'
import moment from 'moment'

const Comments = () => {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments/')
      const data = await res.json()
      setComments(data)
    } catch (err) {
      const error = err.res.status
      console.log(error)
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  const actions = [<span key='comment-list-reply-to-0'>Reply to</span>]
  const datetime = (
    <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
      <span>{moment().subtract(1, 'days').fromNow()}</span>
    </Tooltip>
  )

  return (
    <List
      className='comment-list'
      header={`${comments.length} replies`}
      itemLayout='horizontal'
      dataSource={comments}
      renderItem={(item) => (
        <li>
          <Comment
            actions={actions}
            author={item.name}
            avatar={
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            }
            content={item.body}
            datetime={datetime}
          />
        </li>
      )}
    />
  )
}

export default Comments
