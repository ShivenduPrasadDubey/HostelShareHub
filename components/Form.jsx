import { postcss } from "autoprefixer";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Request</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} Request for fellow hostellers and help someone in need by clicking the WhatsApp icon.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Request
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag of Request{" "}
            <span className='font-normal'>
              (#food, #drink, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Contact Number
          </span>
          <input
            value={post.number}
            onChange={(e) => setPost({ ...post, number: e.target.value })}
            type='text'
            placeholder='Contact Number'
            required
            className='form_input'
          />
        </label>

        {/* New Fields */}
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Room Number
          </span>
          <input
            value={post.roomNumber}
            onChange={(e) => setPost({ ...post, roomNumber: e.target.value })}
            type='text'
            placeholder='Room Number'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Hostel Name
          </span>
          <input
            value={post.hostelName}
            onChange={(e) => setPost({ ...post, hostelName: e.target.value })}
            type='text'
            placeholder='Hostel Name'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
