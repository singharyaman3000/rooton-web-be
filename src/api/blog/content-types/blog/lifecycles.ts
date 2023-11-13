export default {
      async afterFindMany(result) {
        if(result?.params?.where?.id && Object.keys(result.params.where.id).includes('$eq')) {
          const id = parseInt(result.params.where.id['$eq']);
          const blog = await strapi.entityService.findOne('api::blog.blog', id)
  
          if (blog) {
            await strapi.entityService.update(
              'api::blog.blog',
              id,
              { data: { views: parseInt(blog.views) + 1 } }
            );
          }
        }
      }
  };