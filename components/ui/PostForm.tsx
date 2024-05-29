'use client'

import { useUser } from '@clerk/nextjs'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'
function PostForm() {
  const user = useUser()
  return (
    <div>
      <form action="">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <input
          type="text"
          name="postInput"
          placeholder="Start writing a post..."
          className="flex-1 outline-none rounded-full py-3 px-4 border"
        />
      </form>
    </div>
  )
}

export default PostForm
