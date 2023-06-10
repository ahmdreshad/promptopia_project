import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>{' '}
      </h1>
      <p className='desc text-left max-w-md'>
        {type} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
        unde possimus culpa ducimus ratione! Inventore?
      </p>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-2xl flex gap-7 mt-10 flex-col glassmorphism'
      >
        <label>
          <span className='font-satoshi text-base text-gray-700 font-semibold'>
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt here...'
            className='form_textarea'
            required
          />
        </label>
        <label>
          <span className='font-satoshi text-base text-gray-700 font-semibold'>
            Tag{' '}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            className='form_input'
            required
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link
            href={'/'}
            className='text-white px-5 py-2 rounded-full text-sm bg-gray-600 text-center tracking-wide hover:opacity-80 transition-all '
          >
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-2 text-center tracking-wide rounded-full bg-orange-500 text-white hover:opacity-80 transition-all'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form
