/**
 * blog service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService(
    'api::blog.blog',
    ({ strapi }) => ({
      async findOne(entityId, params = {}) {
        const blogModel = strapi.query('api::blog.blog');
        try {
          const blog = await blogModel.findOne({ id: entityId }, params);
  
          if (blog) {
            // Increase the views value by 1
            blog.views = Number(blog.views) + 1;
  
            // Create the data object with the updated views value
            const updatedData = { views: blog.views };
  
            // Update the blog in the database
            const updatedBlog = await strapi.entityService.update(
              'api::blog.blog',
              entityId,
              { data: updatedData }
            );
  
            // Return the updated service to the frontend
            return updatedBlog;
          }
  
          // If the service doesn't exist, return null or handle accordingly
          return null;
        } catch (err) {
          console.error(err);
          // Handle error accordingly
          return null;
        }
      },
    })
  );
  