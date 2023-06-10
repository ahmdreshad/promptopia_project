'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('')
  const pathName = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(''), 3000)
  }
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex justify-start items-center flex-1 gap-3 cursor-pointer'>
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi text-gray-900 font-semibold'>
              {post.creator.username}
            </h3>
            <p className='text-gray-500 text-sm font-inter'>
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            width={17}
            height={17}
            alt='icon'
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p
        className='font-inter blue_gradient text-sm cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className='flex gap-4 items-center justify-center mt-5'>
          <p
            className='bg-blue-500 text-white rounded-md py-1 px-2 cursor-pointer hover:shadow-lg hover:shadow-gray-600 transition-all duration-400'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='bg-red-500 text-white rounded-md py-1 px-2 cursor-pointer hover:shadow-lg  hover:shadow-gray-600 transition-all duration-400'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
export default PromptCard
