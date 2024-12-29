import AnimatedSection from '../../../Constant/AnimatedSection';
import PropTypes from 'prop-types';
import { Portfolios } from '../../../Constant/index';
import { useState } from 'react';

const Mainprofile = () => {
  return (
    <div>
      <AnimatedSection animation="fadeIn" duration="2s">
        <div className='flex flex-col items-start ml-2 pb-10'>
          <h2 className='mb-1 font-bold text-xl'>My_Portfoilo</h2>
          <div className='mb-3 w-10 h-1.5 rounded-md bg-yellow-500'></div>
        </div>
        <div>
          <BlogSection blogs={Portfolios} />
        </div>
      </AnimatedSection>

    </div>
  );
}


export const BlogSection = ({ blogs }) => {
  const [likes, setLikes] = useState(
    blogs.map((blog) => blog.likes) // Initialize likes array
  );

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1; // Increment the likes for the clicked blog
    setLikes(updatedLikes);
  };

  return (
    <section className="blog pb-12" id="blog">
      <div className="blogs-content">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-box hover-effect-gradient">
            <div className="blog-image">
              <img src={blog.img} alt="projectImage" />
            </div>
            <div className="blog-box-details">
              <span className="category">{blog.category}</span>
              <span className="likes">
                <i
                  className="icon-heart"
                  onClick={() => handleLike(index)}
                  style={{ cursor: 'pointer', color: 'red' }} // Clickable heart
                >
                  ❤️
                </i>
                <span className="likes-count">{likes[index]}</span>
              </span>
            </div>
            <h2 className="blog-box-title">{blog.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

BlogSection.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default Mainprofile;
