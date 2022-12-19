import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react';

const currentLocalUser = window.localStorage.getItem("UserLogin")

function Comment() {

  const [data, setData] = useState(
    [
      {
        userId: '02b',
        comId: '02b',
        fullName: 'Lily',
        text: 'I think you have a point🤔',
        avatarUrl: 'https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg',
        replies: []
      },
      {
        userId: '02bgdfgd',
        comId: '02bgdfgd',
        fullName: 'gdfghrtyrthfg',
        text: 'I think you have a point🤔',
        avatarUrl: 'https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg',
        replies: []
      },

    ]
  )

  const handleSubmitComments = (data) => {
    console.log('check submit, ', data)
  }
  
  const handleReplyComment = (data) => {
    console.log("reply ", data)
  }

  const handleEditComment = (data) => {
    console.log("edit ", data)
  }

  const handleDeleteComment = (data) => {
    console.log("delete ",data)
  }

  return (
    <CommentSection
      currentUser={{
        currentUserId: currentLocalUser,
        currentCommentId: currentLocalUser,
        currentUserImg:
          'https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg',
        currentUserFullName: currentLocalUser
      }}
      logIn={{
        loginLink: 'http://localhost:3001/',
        signupLink: 'http://localhost:3001/'
      }}
      commentData={data}
      onSubmitAction={handleSubmitComments}
      onDeleteAction={handleDeleteComment}
      onEditAction={handleEditComment}
      onReplyAction={handleReplyComment}
      currentData={(data) => {
        console.log('curent user', data)
      }}
    />
  )
}

export default Comment