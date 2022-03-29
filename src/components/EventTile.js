import React from 'react';
const EventTile =() =>
{
return (

      <div className="col-lg-4 col-md-6">
            <div className="h_blog_post_item wow fadeInUp  p-2">
              <a href="blog.html" className="post_img rounded">
                <img className="rounde" src="assets/img/home-two/blog_1.jpg" alt="" /></a>
              <div className="post_content">
                {/* <a href="#" className="h_post_date">March 21th, 2017</a> */}
                <a href="blog.html">
                  <h3>
                    The long road to great success has many things will stop
                    you
                  </h3>
                </a>
                <div className="h_post_info">
                  {/* <a href="#"><i className="far fa-heart"></i>856 Likes</a>
                  <a href="#"><i className="far fa-comment"></i>29 Comments</a> */}
                </div>
              </div>
            </div>
      </div>)
}

export default EventTile;